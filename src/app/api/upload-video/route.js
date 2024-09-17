import { uploadImageOnCloudinary, uploadVideoOnCloudinary } from "@/lib/cloudinary/UploadFileOnCloudinary";
import { Video } from "@/lib/database/models/video.model";
import { connectDB } from "@/lib/database/mongoose";
import { isValidObjectId } from "mongoose";
import { NextResponse } from "next/server"

/* 
# video upload process:
- get all data form the request
- validate data
- upload the video then upload the thumbnail

*/

export async function POST(request) {
    try {
        // connect to database
        await connectDB()
        // extract all data from the request
        const formData = await request.formData();
        const videoFile = await formData.get('video');
        const thumbnailFile = await formData.get('thumbnail');
        const title = await formData.get('title');
        const description = await formData.get('description');
        const ownerId = await formData.get('ownerId');
        // console.log({ videoFile, thumbnailFile, title, description });
        // check if the ownerId is exists and it is valid.
        if (!isValidObjectId(ownerId)) {
            return NextResponse.json({ error: "Request not allowed." }, { status: 401 })
        }
        // check the video and thumbnail have acceptable size.
        if (videoFile.size > (15 * 1000000)) {
            return NextResponse.json({ error: "Max video size 15 MB allowed" }, { status: 400 })
        }
        if (thumbnailFile.size > (0.5 * 1000000)) {
            return NextResponse.json({ error: "Max thumbnail image size 500 KB" }, { status: 400 })
        }

        // upload thumbnail to cloudinary.
        const thumbnailUrl = await uploadImageOnCloudinary(thumbnailFile)
        // upload video to cloudinary.
        const videoObj = await uploadVideoOnCloudinary(videoFile)
        // make ready for uploading on database
        const videoData = {
            title,
            description,
            video: videoObj,
            thumbnail: thumbnailUrl,
            owner: ownerId,
        }

        const result = await Video.create(videoData)

        if (!result) {
            return NextResponse.json({ error: 'Error creating video' }, { status: 400 })
        }

        return NextResponse.json(result, { status: 200 })
    } catch (error) {
        console.error("video upload error", error);
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}
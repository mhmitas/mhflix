import { v2 as cloudinary } from "cloudinary";

// By chatGPT
// https://chatgpt.com/share/b657ecfb-bdd4-4d67-b3f9-bc6a61c984de
// By Cloudinary Documentation
// https://cloudinary.com/documentation/upload_assets_with_server_actions_nextjs_tutorial

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImageOnCloudinary(imageFile) {
    const arrayBuffer = await imageFile.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer);

    // Return the uploaded result as a Promise
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { public_id: `${imageFile.name?.split(".")?.[0]}-${Date.now()}` },
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result.secure_url)
                }
            }
        );
        stream.end(buffer)
    })
}

export async function uploadVideoOnCloudinary(file) {
    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer);

    // Return the uploaded result as a Promise
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { resource_type: "video", public_id: `${file.name?.split(".")?.[0]}-${Date.now()}` },
            (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            }
        );
        stream.end(buffer)
    })
}

// delete
// const res = await cloudinary.uploader.destroy('small-image-1726552691198')
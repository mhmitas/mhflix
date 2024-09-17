import { NextResponse } from "next/server"

export async function POST(request) {
    try {
        const formData = await request.formData();
        const video = await formData.get('video');
        const thumbnail = await formData.get('thumbnail');
        const title = await formData.get('title');
        const description = await formData.get('description');
        console.log({ video, thumbnail, title, description });

        if (video.size > (15 * 1000000)) {
            return NextResponse.json({ error: "Max video size 15 MB allowed" }, { status: 400 })
        }
        if (thumbnail.size > (0.5 * 1000000)) {
            return NextResponse.json({ error: "Max thumbnail image size 500 KB" }, { status: 400 })
        }

        return NextResponse.json({ message: "ok" })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}
"use server"

import mongoose from "mongoose";
import { Video } from "../database/models/video.model";
import { connectDB } from "../database/mongoose";


export async function fetchVideos() {
    await connectDB()
    try {
        const res = await fetch('/api/test');
        console.log(res);

        const videos = await res.json();
        console.log(videos.length);
        return videos
    } catch (error) {
        console.log(error);
        return { error: error.message || "Something went wrong" };
    }
}

export async function getUserVideos(userId) {
    try {
        await connectDB()
        const _id = new mongoose.Types.ObjectId(`${userId}`)
        const videos = await Video.find({ owner: _id });
        return { videos: JSON.parse(JSON.stringify(videos)) }
    } catch (error) {
        console.error("User video fetching error", error);
        throw new Error(`User video fetching error: ` + error)
    }
}
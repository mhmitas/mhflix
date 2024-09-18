"use server"

import mongoose from "mongoose";
import { Video } from "../database/models/video.model";
import { connectDB } from "../database/mongoose";
import { uploadImageOnCloudinary, uploadVideoOnCloudinary } from "../cloudinary/UploadFileOnCloudinary";


export async function fetchVideos() {
    await connectDB()
    try {
        const videos = await Video.find()
        return { videos: JSON.parse(JSON.stringify(videos)) }
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

export async function uploadVideo(formData) {
    try {
        await connectDB()

        const video = await formData.get('video')
        const thumbnail = await formData.get('thumbnail')
        const title = await formData.get('title')
        const description = await formData.get('description')

        const thumbnailUploadedRes = await uploadImageOnCloudinary(thumbnail)
        const videoUploadedRes = await uploadVideoOnCloudinary(video)

        console.log({ video: videoUploadedRes, thumbnail: thumbnailUploadedRes })

        const videoData = {
            title,
            description,
            video: videoUploadedRes,
            thumbnail: thumbnailUploadedRes,
            owner: '66e99bdbc86067b798d36564',
        }

        const result = await Video.create(videoData)

        return JSON.parse(JSON.stringify(result))
    } catch (error) {
        console.error("Video upload error", error);
        throw error
    }
}
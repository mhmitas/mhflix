'use client'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { uploadVideo } from '@/lib/actions/video.actions'

const VideoUploadTestForm = () => {

    async function handleSubmit(e) {
        e.preventDefault()
        // const form = e.target
        // const video = form.video.files[0]
        // const thumbnail = form.thumbnail.files[0]
        // const title = form.title.value
        // const description = form.description.value
        // console.log({ video, thumbnail, title, description })
        const formData = new FormData(e.currentTarget)
        try {
            const res = await uploadVideo(formData)
            console.log(res);

        } catch (error) {
            console.error("Video Upload Form Error", error)
        }
    }

    return (
        <div className='my-12'>
            <form onSubmit={handleSubmit} className='p-6 max-w-xl mx-auto border shadow rounded-lg space-y-4'>
                <div>
                    <Label>Select Video</Label>
                    <Input type="file" name="video" className="bg-muted" accept="video/*" />
                </div>
                <div>
                    <Label>Select Thumbnail</Label>
                    <Input type="file" name="thumbnail" className="bg-muted" accept="image/*" />
                </div>
                <div>
                    <Label>Title</Label>
                    <Input type="text" name="title" className="bg-muted" />
                </div>
                <div>
                    <Label>Description</Label>
                    <Input type="text" name="description" className="bg-muted" />
                </div>
                <div className='flex justify-center'>
                    <Button type="submit">Upload</Button>
                </div>
            </form>
        </div>
    )
}

export default VideoUploadTestForm
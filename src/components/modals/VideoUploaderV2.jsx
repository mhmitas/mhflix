'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ImageIcon, Upload, X } from 'lucide-react'
import { useDropzone } from 'react-dropzone'
import { Textarea } from '../ui/textarea'
import axios from 'axios'
import toast from 'react-hot-toast'

const VideoUploaderV2 = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [videoUrl, setVideoUrl] = useState(null)
    const [videoFile, setVideoFile] = useState(null)
    const [thumbnailFile, setThumbnailFile] = useState(null)
    const [thumbnailUrl, setThumbnailUrl] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } = useDropzone({
        accept: { 'video/*': [] },
        onDrop: acceptedFiles => {
            setVideoFile(acceptedFiles[0]);
            setVideoUrl(URL.createObjectURL(acceptedFiles[0]))
        }
    });
    const { getRootProps: getThumbnailRootProps, getInputProps: getThumbnailInputProps } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: acceptedFiles => {
            setThumbnailFile(acceptedFiles[0]);
            setThumbnailUrl(URL.createObjectURL(acceptedFiles[0]))
        }
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const thumbnail = thumbnailFile;
        const video = videoFile;

        if (!thumbnail || !video) {
            return toast.error("Video and Thumbnail is required")
        }
        if (video.size > (15 * 1000000)) {
            return toast.error("Max video size 15 MB allowed")
        }
        if (thumbnail.size > (0.5 * 1000000)) {
            return toast.error("Max thumbnail size 0.5 MB allowed")
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', thumbnail);
        formData.append('video', video);
        try {
            const res = await axios.post("/api/test", formData)
            console.log({ res });
            setErrorMessage("")
        } catch (error) {
            setErrorMessage(error?.response?.data?.error)
            console.error("video uploading error", error)
        }
    }

    return (
        <>
            <Button size="lg" onClick={() => setIsOpen(true)}>Upload Video</Button>
            {isOpen &&
                <section className='fixed inset-0 bg-black/70 transition-opacity flex items-center justify-center z-50'>
                    <div className='max-w-xl md:max-w-4xl w-[95%] max-h-[90vh] sm: overflow-y-auto rounded-lg bg-background text-foreground sm:p-4 p-2'>
                        <div className='flex justify-between items-center '>
                            <h3 className='text-xl font-semibold p-2'>Upload Video</h3>
                            <button onClick={() => setIsOpen(false)}>
                                <X className='w-6' />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 p-2">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div {...getVideoRootProps({ className: 'dropzone' })}>
                                    <input {...getVideoInputProps()} name="video" type='file' />
                                    {videoUrl ?
                                        <><div className='rounded-lg overflow-hidden *:w-full border'>
                                            <video width={300} height={200} controls src={videoUrl} />
                                        </div>
                                            <p className='line-clamp-2 text-sm mt-1'>{videoFile?.name}</p></>
                                        :
                                        <div className="flex flex-col items-center justify-center aspect-video border-2 border-dashed cursor-pointer hover:bg-muted/50 rounded-lg">
                                            <Upload className="w-12 h-12 text-muted-foreground" />
                                            <p className="mt-2 text-sm text-muted-foreground">Click or drag video to upload</p>
                                        </div>
                                    }
                                </div>

                                <div {...getThumbnailRootProps({ className: 'dropzone' })} className='h-max'>
                                    <input {...getThumbnailInputProps()} type="file" name="thumbnail" />
                                    {thumbnailUrl ?
                                        <div className='rounded-lg overflow-hidden *:w-full aspect-video flex items-center justify-center'>
                                            <img src={thumbnailUrl} alt="thumbnail" />
                                        </div>
                                        :
                                        <div className="flex flex-col items-center justify-center aspect-video border-2 border-dashed cursor-pointer hover:bg-muted/50 rounded-lg">
                                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                                            <p className="mt-2 text-sm text-muted-foreground">Upload thumbnail</p>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium  py-1">Title</label>
                                <Textarea name="title" required className="font-normal text-base focus-visible:ring-primary/50 bg-muted" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium  py-1">Description</label>
                                <Textarea name="description" required className="text-base min-h-32 focus-visible:ring-primary/50 bg-muted" />
                            </div>
                            {errorMessage && <p className='text-destructive'>{errorMessage}</p>}
                            <div className="text-center mt-4">
                                <Button type="submit">Upload</Button>
                            </div>
                        </form>
                    </div>
                </section>
            }
        </>
    )
}

export default VideoUploaderV2
'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ImageIcon, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import toast from 'react-hot-toast';

const VideoUploader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoFile, setVideoFile] = useState(null)
    const [thumbnailFile, setThumbnailFile] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')

    const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } = useDropzone({
        accept: { 'video/*': [] },
        onDrop: acceptedFiles => {
            setVideoFile(acceptedFiles[0]);
        }
    });
    const { getRootProps: getThumbnailRootProps, getInputProps: getThumbnailInputProps } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: acceptedFiles => {
            setThumbnailFile(acceptedFiles[0]);
        }
    });

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const thumbnail = thumbnailFile;
        const video = videoFile;
        // console.log({ title, description, thumbnail, video });
        if (!thumbnail || !video) {
            return toast.error("Video and Thumbnail is required")
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
            setErrorMessage(error.response.data.error)
            console.error("video uploading error", error)
        }
    }

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="lg">Upload Video</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent onInteractOutside={(event) => event.preventDefault()} className="max-w-xl w-[95%] max-h-[90vh] sm: overflow-y-auto rounded-lg" >
                    <DialogHeader>
                        <DialogTitle>Upload Video</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div {...getVideoRootProps({ className: 'dropzone' })}>
                            <input {...getVideoInputProps()} name="video" type='file' />
                            {videoFile ?
                                <><div className='rounded-lg overflow-hidden *:w-full'>
                                    <video controls src={URL.createObjectURL(videoFile)} />
                                </div>
                                    <p className='line-clamp-2 text-sm'>{videoFile?.name}</p></>
                                :
                                <div className="flex flex-col items-center justify-center aspect-video border-2 border-dashed cursor-pointer hover:bg-muted/50 rounded-lg">
                                    <Upload className="w-12 h-12 text-muted-foreground" />
                                    <p className="mt-2 text-sm text-muted-foreground">Click or drag video to upload</p>
                                </div>
                            }
                        </div>

                        <div {...getThumbnailRootProps({ className: 'dropzone' })}>
                            <input {...getThumbnailInputProps()} type="file" name="thumbnail" />
                            {thumbnailFile ?
                                <div className='rounded-lg overflow-hidden *:w-full aspect-video flex items-center justify-center'>
                                    <img src={URL.createObjectURL(thumbnailFile)} alt="thumbnail" />
                                </div>
                                :
                                <div className="flex flex-col items-center justify-center aspect-video border-2 border-dashed cursor-pointer hover:bg-muted/50 rounded-lg">
                                    <ImageIcon className="w-8 h-8 text-muted-foreground" />
                                    <p className="mt-2 text-sm text-muted-foreground">Upload thumbnail</p>
                                </div>
                            }
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
                </DialogContent>
            </Dialog>
        </>
    )
}

export default VideoUploader
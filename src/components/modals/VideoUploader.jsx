'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ImageIcon, Upload } from 'lucide-react';
import Dropzone, { useDropzone } from 'react-dropzone';

const VideoUploader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoFileUrl, setVideoFileUrl] = useState("")
    // const [thumbnailUrl, setThumbnailUrl] = useState("")

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'video/*': [] },
        onDrop: acceptedFiles => {
            setVideoFileUrl(URL.createObjectURL(acceptedFiles[0]));
        }
    });

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="lg">Upload Video</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent onInteractOutside={(event) => event.preventDefault()} className="max-w-xl w-[95%] max-h-[90vh] sm: overflow-y-auto rounded-lg" >
                    <DialogHeader>
                        <DialogTitle>Upload Video</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} name="video" />
                            {videoFileUrl ?
                                <div className='rounded-lg overflow-hidden *:w-full'>
                                    <video controls src={videoFileUrl} />
                                </div>
                                :
                                <div className="flex flex-col items-center justify-center aspect-video border-2 border-dashed cursor-pointer hover:bg-muted/50 rounded-lg">
                                    <Upload className="w-12 h-12 text-muted-foreground" />
                                    <p className="mt-2 text-sm text-muted-foreground">Click or drag video to upload</p>
                                </div>}
                        </div>

                        <div className="border-2 border-dashed rounded-lg p-4 aspect-video flex items-center justify-center hover:bg-muted/50 transition-colors">
                            <div className="flex flex-col items-center justify-center h-32">
                                <ImageIcon className="w-8 h-8 text-muted-foreground" />
                                <p className="mt-2 text-sm text-muted-foreground">Upload thumbnail</p>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium  py-1">Title</label>
                            <Textarea name="title" className="font-normal text-base focus-visible:ring-primary/50 bg-muted" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium  py-1">Description</label>
                            <Textarea name="description" className="text-base min-h-32 focus-visible:ring-primary/50 bg-muted" />
                        </div>
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
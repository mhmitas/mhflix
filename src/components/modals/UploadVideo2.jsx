"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Image as ImageIcon } from "lucide-react"

export default function VideoUploader() {
    const [isOpen, setIsOpen] = useState(false)
    const [videoFile, setVideoFile] = useState(null)
    const [thumbnailUrl, setThumbnailUrl] = useState(null)

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="lg">
                Upload Video
            </Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent
                    onInteractOutside={(event) => event.preventDefault()}
                    className="w-[95%] max-w-4xl max-h-[90vh] rounded-lg overflow-y-auto"
                >
                    <DialogHeader>
                        <DialogTitle>Upload Video</DialogTitle>
                        <DialogDescription>Share your amazing video with the world.</DialogDescription>
                    </DialogHeader>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="video">Video</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                {videoFile ? (
                                    <video src={videoFile} controls className="w-full aspect-video rounded-md" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-48">
                                        <Upload className="w-12 h-12 text-gray-400" />
                                        <p className="mt-2 text-sm text-gray-500">Click or drag video to upload</p>
                                    </div>
                                )}
                                <Input
                                    id="video"
                                    type="file"
                                    accept="video/*"
                                    className="hidden"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0]
                                        if (file) setVideoFile(URL.createObjectURL(file))
                                    }}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="thumbnail">Thumbnail</Label>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                                    {thumbnailUrl ? (
                                        <img src={thumbnailUrl} alt="Thumbnail" className="w-full aspect-video object-cover rounded-md" />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center h-32">
                                            <ImageIcon className="w-8 h-8 text-gray-400" />
                                            <p className="mt-2 text-sm text-gray-500">Upload thumbnail</p>
                                        </div>
                                    )}
                                    <Input
                                        id="thumbnail"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]
                                            if (file) setThumbnailUrl(URL.createObjectURL(file))
                                        }}
                                    />
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
                                    {thumbnailUrl ? (
                                        <img src={thumbnailUrl} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-white">
                                            Thumbnail Preview
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" placeholder="Enter video title" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" placeholder="Enter video description" rows={4} />
                        </div>
                        <div className="flex justify-end">
                            <Button type="submit">Upload</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
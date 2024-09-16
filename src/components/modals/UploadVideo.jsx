"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ClientDialog() {
    const [isOpen, setIsOpen] = useState(false);
    const [videoFile, setVideoFile] = useState("")
    const [thumbnailUrl, setThumbnailUrl] = useState("")

    console.log(videoFile);

    return (
        <>
            <Button onClick={() => setIsOpen(true)} size="lg">Upload Video</Button>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent onInteractOutside={(event) => event.preventDefault()} className="max-w-5xl w-[95%] max-h-[95vh] overflow-y-auto rounded-lg" >
                    <DialogHeader>
                        <DialogTitle>Upload Video</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <form className="space-y-4">
                        <div>
                            <div className="w-full bg-muted border rounded-lg overflow-hidden mb-2">
                                <video src={videoFile} className="w-full" controls></video>
                            </div>
                            <label className="block text-sm font-medium  py-1">Choose video file</label>
                            <Input onChange={(e) => {
                                setVideoFile(URL.createObjectURL(e.target.files[0]));
                            }} accept="video/*" type="file" name="title" className="font-normal text-base focus-visible:ring-primary/50 bg-muted" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="">
                                <label className="block text-sm font-medium  py-1">Choose Thumbnail</label>
                                <Input onChange={(e) => {
                                    setThumbnailUrl(URL.createObjectURL(e.target.files[0]));
                                }} accept="image/*" type="file" name="title" className="font-normal text-base focus-visible:ring-primary/50 bg-muted" />
                            </div>
                            <div className="w-full aspect-video bg-gradient-to-l from-blue-700 to-rose-600 border rounded-lg overflow-hidden mb-2">
                                {thumbnailUrl && <img src={thumbnailUrl} alt="thumbnail" className="" />}
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
    );
}

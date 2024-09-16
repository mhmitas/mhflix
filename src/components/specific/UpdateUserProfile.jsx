import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Edit } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'

const UpdateUserProfile = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="icon" variant="outline" className="flex items-center space-x-2">
                    <Edit className="h-4 w-4" />
                    <span className='sr-only'>Subscribe</span>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Your Channel</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium  py-1">Channel Name</label>
                        <Input defaultValue="Your Channel Name" className="font-normal text-base focus-visible:ring-primary/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium  py-1">Channel Description</label>
                        <Textarea className="text-base min-h-24 focus-visible:ring-primary/50" defaultValue="Your channel description goes here..." />
                    </div>
                    <div className='text-center'>
                        <Button>Save Changes</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default UpdateUserProfile
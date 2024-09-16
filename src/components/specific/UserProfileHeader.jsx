import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'
import React from 'react'
import UpdateUserProfile from './UpdateUserProfile'

const UserProfileHeader = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="https://res.cloudinary.com/dquqygs9h/image/upload/v1722091061/clllrvmvss15ireje1q3.webp"
                    alt="Channel Banner"
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent h-24" />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 mb-8 relative z-10">
                <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Channel Avatar"
                    className="size-32 md:size-40 rounded-full border-4 border-background"
                />
                <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                    <h1 className="text-2xl lg:text-4xl font-bold">Channel Name</h1>
                    <p className="text-muted-foreground text-sm lg:text-base">@channelhandle • 1.2M subscribers</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2 md:px-4">
                    <UpdateUserProfile />
                </div>
            </div>
        </div>
    )
}

export default UserProfileHeader
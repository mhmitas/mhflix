import React from 'react'
import { Button } from '../ui/button'
import VideoUploaderV2 from '../modals/VideoUploaderV2'
import { auth } from '@/auth'
import VideoUploadTestForm from '../forms/VideoUploadTestForm'

const UserProfileUploadSection = async () => {
    const session = await auth()

    return (
        <section>
            <div className='w-full flex flex-wrap gap-4'>
                <VideoUploaderV2 session={session} />
                <Button size="lg">Create Post</Button>
            </div>
            <VideoUploadTestForm session={session} />
        </section>
    )
}

export default UserProfileUploadSection
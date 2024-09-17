import React from 'react'
import { Button } from '../ui/button'
import VideoUploader from '../modals/VideoUploader'

const UserProfileUploadSection = () => {
    return (
        <section>
            <div className='space-x-4'>
                <VideoUploader />
                <Button size="lg">Create Post</Button>
            </div>
        </section>
    )
}

export default UserProfileUploadSection
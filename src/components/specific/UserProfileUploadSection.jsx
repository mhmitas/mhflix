import React from 'react'
import { Button } from '../ui/button'
import VideoUploaderV2 from '../modals/VideoUploaderV2'

const UserProfileUploadSection = () => {
    return (
        <section>
            <div className='w-full flex flex-wrap gap-4'>
                <VideoUploaderV2 />
                <Button size="lg">Create Post</Button>
            </div>
        </section>
    )
}

export default UserProfileUploadSection
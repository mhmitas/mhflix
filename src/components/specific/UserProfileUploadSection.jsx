import React from 'react'
import { Button } from '../ui/button'

const UserProfileUploadSection = () => {
    return (
        <section>
            <div className='space-x-4'>
                <Button size="lg">Upload Video</Button>
                <Button size="lg">Create Post</Button>
            </div>
        </section>
    )
}

export default UserProfileUploadSection
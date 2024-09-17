import UserProfileHeader from '@/components/specific/UserProfileHeader'
import UserProfileUploadSection from '@/components/specific/UserProfileUploadSection'
import UserProfileVideos from '@/components/specific/UserProfileVideos'
import React from 'react'

const Page = () => {
    return (
        <section className='root-padding'>
            <UserProfileHeader />
            <UserProfileUploadSection />
            <div className="border-b border-primary/10 mt-10">
                <nav className="-mb-px flex gap-4" aria-label="Tabs">
                    <button className={`pb-2 px-1 mb-[2px] text-center border-b-2 border-primary font-medium text-lg text-primary`}>Videos</button>
                    <button className={`pb-2 px-1 mb-[2px] text-center border-b-2 font-medium text-lg border-transparent text-primary`}>Posts</button>
                </nav>
            </div>
            <UserProfileVideos />
        </section>
    )
}

export default Page
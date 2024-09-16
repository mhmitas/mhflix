import UserProfileHeader from '@/components/specific/UserProfileHeader'
import UserProfileUploadSection from '@/components/specific/UserProfileUploadSection'
import React from 'react'

const Page = () => {
    return (
        <section className='root-padding'>
            <UserProfileHeader />
            <UserProfileUploadSection />
        </section>
    )
}

export default Page
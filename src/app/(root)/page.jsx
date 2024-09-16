import { auth } from '@/auth'
import HomeVideosSection from '@/components/sections/HomeVideosSection'
import React from 'react'

const Home = async () => {

    const session = await auth()
    console.log('user data:', session?.user || session);


    return (
        <div className=''>
            <HomeVideosSection />
        </div>
    )
}

export default Home
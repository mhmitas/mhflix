'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../cards/VideoCard'

const HomeVideosSection = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            try {
                const res = await axios.get("/api/test")
                // console.log(res.data.data);
                setVideos(res?.data?.data)
            } catch (error) {
                console.error("video fetch error", error)
            }
        }
        fetchVideos()
    }, [])


    return (
        <section className='max-w-screen-2xl mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1 root-padding'>
            {videos.map((video, index) => <VideoCard video={video} key={index} />)}
        </section>
    )
}

export default HomeVideosSection
import { auth } from '@/auth'
import { getUserVideos } from '@/lib/actions/video.actions'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const UserProfileVideos = async () => {
  const session = await auth()
  const { videos } = await getUserVideos(session?.user?.id) || []

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4'>
      {videos.map((video) => <VideoCard video={video} key={video._id} />)}
    </section>
  )
}

export default UserProfileVideos;

function VideoCard({ video }) {
  const { _id, thumbnail, title } = video;

  return (
    <Link href={`/watch/${_id}`}>
      <div className="max-w-lg rounded-lg overflow-hidden group mb-1">
        <div className="relative">
          <figure className='aspect-video object-center rounded-lg overflow-hidden'>
            <Image className='w-full group-hover:scale-105 duration-300' src={thumbnail} alt={title} width={300} height={200} />
          </figure>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded">
            4:28:45
          </div>
        </div>
        <div className="px-1">
          <div className="font-semibold text-lg leading-6">Build & Deploy an Amazing 3D Portfolio with React.js & Three.js</div>
          <p className="text-muted-foreground text-base">
            115K views • 10 days ago
          </p>
        </div>
      </div>
    </Link>
  )
}
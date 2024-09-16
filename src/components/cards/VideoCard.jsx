import React from 'react';
// import { viewsFormat } from '../../utils/viewsFormat';
import moment from 'moment';
import { formatNumber } from '@/lib/utils';
import Link from 'next/link';
import { ThumbsUp } from 'lucide-react';

const VideoCard = ({ video }) => {
    const { duration, thumbnail, title, likes, channel } = video;

    const uploaded = moment(new Date(video.createdAt), "YYYYMMDD").fromNow();

    return (
        <div className='h-full w-full max-w-xl mx-auto rounded-lg sm:rounded-xl group hover:cursor-pointer duration-500 mb-2'>

            {/* thumbnail */}
            <Link href={`/play-video/${video?._id}`}>
                <figure className='mb-2 relative w-full overflow-hidden aspect-video flex items-center rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500 dark:bg-slate-950 bg-slate-300'>
                    <img className='rounded-lg sm:rounded-xl group-hover:rounded-sm duration-500 group-hover:scale-[1.01] w-full' src={thumbnail} alt="" />
                    {/* duration */}
                    <span className='absolute right-2 bottom-2 bg-black/50 text-white p-1 rounded-md text-sm group-hover:hidden'>{duration}</span>
                </figure>
            </Link>
            <div className='flex gap-3 font-semibold'>

                {/* channel logo */}
                <figure><img className='rounded-full size-10 mt-1' src={channel?.avatar || "/default-avatar.jpg"} alt="" /></figure>
                <div className='flex-1'>

                    {/* video title */}
                    <Link href={`/play-video/${video?._id}`}><h1 title={title} className='text-lg line-clamp-2 leading-6'>{title}</h1></Link>

                    {/* channel name */}
                    <Link href={`/profile/@${channel?.username}`}><h1 className={`hover:underline leading-6`}>{channel?.fullName}</h1></Link>

                    {/* like time and video */}
                    <div className='flex items-center gap-1 text-color-gray leading-4 text-sm'>
                        <h3 className='flex items-center gap-1'>
                            <ThumbsUp className='size-4' />
                            {/* need some improvement */}
                            {formatNumber(likes)}
                        </h3>
                        ▪
                        <h3>{uploaded}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
import { Navbar } from '@/components/layout/navbar/Navbar'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className=''>
            <Navbar />
            <div className='flex'>
                <div className='hidden lg:block'><Sidebar /></div>
                <div className='flex-1 w-full lg:ml-64'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout
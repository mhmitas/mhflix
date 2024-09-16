import React from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'
import Sidebar from '../sidebar/Sidebar'
import { NavbarRightSide } from './NavbarRightSide'

export const Navbar = () => {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-16 items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center">
                        <div className='md:hidden block'><Sidebar /></div>
                        <Link href="/" className="flex items-center">
                            <img className='w-8' src="/logo.svg" alt='img' />
                            <span className="ml-2 text-2xl font-semibold">MhFlix</span>
                        </Link>
                    </div>

                    {/* Search bar */}
                    <SearchBar />
                    {/* Right section */}
                    <div className="flex items-center gap-1">
                        <NavbarRightSide />
                    </div>
                </div>
            </div>
        </header>
    )
}

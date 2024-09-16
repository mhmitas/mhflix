import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { Bell, Menu, User, Video } from 'lucide-react'
import SearchBar from './SearchBar'
import Sidebar from '../sidebar/Sidebar'

export const Navbar = () => {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-16 items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center">
                        <div className='md:hidden block'><Sidebar /></div>
                        <Link href="/" className="flex items-center">
                            <img className='w-9' src="/logo.svg" alt='img' />
                            <span className="ml-2 text-2xl font-semibold">MhFlix</span>
                        </Link>
                    </div>

                    {/* Search bar */}
                    <SearchBar />
                    {/* Right section */}
                    <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                            <Video className="h-5 w-5" />
                            <span className="sr-only">Create</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Bell className="h-5 w-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                            <span className="sr-only">Profile</span>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

import React from 'react'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { Bell, Menu, User, Video } from 'lucide-react'
import SearchBar from './SearchBar'

export const Navbar = () => {

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-16 items-center justify-between">
                    {/* Left section */}
                    <div className="flex items-center">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                        <Link href="/" className="flex items-center">
                            <svg className="h-8 w-auto text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                            <span className="ml-2 text-xl font-semibold">YouTube</span>
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

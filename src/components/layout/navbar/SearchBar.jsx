"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { ArrowLeft, Search } from 'lucide-react'
import React, { useState } from 'react'

const SearchBar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <>
            <div className={cn("flex-grow max-w-md mx-4 hidden md:flex items-center")}>
                <div className="w-full">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-full rounded-r-none"
                    />
                </div>
                <Button variant="outline" className="inline-flex border-l-0 rounded-l-none rounded-r-full">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
            </div>
            <div className='flex md:hidden flex-1 mr-1 justify-end w-full'>
                <Button size="icon" variant="ghost" className="" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>
                {isSearchOpen && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background">
                        <div className='w-full flex items-center px-4'>
                            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="">
                                <ArrowLeft />
                            </Button>
                            <div className={cn("flex-grow mx-4 flex items-center")}>
                                <div className="w-full">
                                    <Input
                                        type="search"
                                        placeholder="Search"
                                        className="w-full rounded-full rounded-r-none"
                                    />
                                </div>
                                <Button variant="outline" className="inline-flex border-l-0 rounded-l-none rounded-r-full">
                                    <Search className="h-5 w-5" />
                                    <span className="sr-only">Search</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SearchBar
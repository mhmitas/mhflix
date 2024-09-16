'use client'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Home,
    Compass,
    PlaySquare,
    Clock,
    ThumbsUp,
    Menu,
} from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"


export default function Sidebar() {
    return (
        <>
            <div className="w-64 lg:block hidden overflow-y-auto fixed bg-background">
                <SidebarContent />
            </div>
            <div className="block lg:hidden z-50">
                <Sheet key={'left'}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="mr-2"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={'left'} className="w-64 p-0">
                        <SheetHeader>
                            <SheetTitle>
                                <Link href="/" className="flex items-center py-4 px-6 pb-2">
                                    <img className='w-8' src="/logo.svg" alt='img' />
                                    <span className="ml-2 text-2xl font-semibold">MhFlix</span>
                                </Link>
                            </SheetTitle>
                        </SheetHeader>
                        <div className="overflow-y-auto">
                            <SidebarContent />
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}


function SidebarContent() {
    return (
        <div className="space-y-2 h-[calc(100vh-64px)] py-2 lg:p-0 w-full">
            <div className="p-2">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
                <div className="space-y-1">
                    {navigationItems[0]?.items.map((item) => (
                        <Button key={item.label} variant="ghost" className="w-full text-base justify-start gap-2">
                            <span className="w-5 *:w-full">{item.icon}</span>
                            <span className="font-normal">{item.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
            <Separator className="" />
            <div className="p-2 pb-16">
                <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
                <div className="space-y-1">

                    {navigationItems[1]?.items.map((item) => (
                        <Button key={item.label} variant="ghost" className="w-full text-base justify-start gap-3">
                            <span className="w-6 *:w-full">{item.icon}</span>
                            <span className="font-normal">{item.label}</span>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    )
}


const navigationItems = [
    {
        title: 'Discover',
        items: [
            { icon: <Home />, label: 'Home' },
            { icon: <Compass />, label: 'Explore' },
            { icon: <PlaySquare />, label: 'Subscriptions' },
        ],
    },
    {
        title: 'Library',
        items: [
            { icon: <Clock />, label: 'History' },
            { icon: <PlaySquare />, label: 'Your videos' },
            { icon: <ThumbsUp />, label: 'Liked videos' },
        ],
    },
]
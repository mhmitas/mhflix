import { signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import { Bell, User, Video } from 'lucide-react'
import React from 'react'

export const NavbarRightSide = () => {
    return (
        <>
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
            <form
                action={async () => {
                    "use server"
                    await signIn("google", { redirectTo: "/" })
                }}
            >
                <Button type="submit" variant="default" className="space-x-2">
                    <User className="h-5 w-5" />
                    <span className="">Sign In</span>
                </Button>
            </form>
        </>
    )
}

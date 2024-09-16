import { auth, signIn, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import { Bell, LogOut, User, Video } from 'lucide-react'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoonIcon } from '@radix-ui/react-icons'


export const NavbarRightSide = async () => {

    const session = await auth()

    return (
        <>
            {session ?
                <>
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                        <Video className="h-5 w-5" />
                        <span className="sr-only">Create</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <ProfileDropdownMenu user={session?.user} />
                </> :
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
            }
        </>
    )
}


function ProfileDropdownMenu({ user }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <img className='w-full rounded-full' src={user?.image} alt="" />
                    <span className="sr-only">Profile</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <MoonIcon className="mr-2 h-4 w-4" />
                    <span>Appearance: Device theme</span>
                </DropdownMenuItem>
                <form
                    action={async () => {
                        "use server"
                        await signOut()
                    }}
                >
                    <button type='submit' className="w-full">
                        <DropdownMenuItem className="w-full">
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </button>
                </form>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Play, ThumbsUp, Users } from "lucide-react"

export default function Page() {
    return (
        <div className="max-w-screen-2xl mx-auto w-full h-full my-container root-padding">
            <div className="relative">
                <img
                    src="https://res.cloudinary.com/dquqygs9h/image/upload/v1722091061/clllrvmvss15ireje1q3.webp"
                    alt="Channel Banner"
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent h-24" />
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 md:-mt-20 mb-8 relative z-10">
                <img
                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="Channel Avatar"
                    className="size-32 md:size-40 rounded-full border-4 border-background"
                />
                <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                    <h1 className="text-2xl lg:text-4xl font-bold">Channel Name</h1>
                    <p className="text-muted-foreground text-sm lg:text-base">@channelhandle • 1.2M subscribers</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2 md:px-4">
                    <Button variant="secondary" className="flex items-center space-x-2">
                        <Bell className="h-4 w-4" />
                        <span>Subscribe</span>
                    </Button>
                </div>
            </div>
            {/* <Tabs defaultValue="videos" className="mb-8">
                <TabsList>
                    <TabsTrigger value="videos">Videos</TabsTrigger>
                    <TabsTrigger value="playlists">Playlists</TabsTrigger>
                    <TabsTrigger value="community">Community</TabsTrigger>
                    <TabsTrigger value="channels">Channels</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                <TabsContent value="videos" className="mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <Card key={i} className="h-full w-full max-w-xl mx-auto">
                                <CardContent className="p-0 overflow-hidden rounded-lg">
                                    <img
                                        src={`https://res.cloudinary.com/dquqygs9h/image/upload/v1722091061/clllrvmvss15ireje1q3.webp`}
                                        className="w-full aspect-video object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold mb-1 line-clamp-2">Video Title {i + 1}</h3>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Play className="h-4 w-4 mr-1" />
                                            <span>{Math.floor(Math.random() * 1000)}K views</span>
                                            <span className="mx-1">•</span>
                                            <span>{Math.floor(Math.random() * 12) + 1} months ago</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs> */}
        </div>
    )
}
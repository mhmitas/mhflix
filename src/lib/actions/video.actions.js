export async function fetchVideos() {
    try {
        const res = await fetch('/api/test');
        console.log(res);

        const videos = await res.json();
        console.log(videos.length);
        return videos
    } catch (error) {
        console.log(error);
        return { error: error.message || "Something went wrong" };
    }
}
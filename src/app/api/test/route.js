import { NextResponse } from "next/server"

export async function GET() {
    try {
        const res = await fetch(`http://localhost:5000/api/v1/videos/get-videos`)
        const data = await res.json()
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}
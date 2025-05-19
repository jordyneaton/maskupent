import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const artists = await prisma.artist.findMany({
      include: {
        releases: true,
      },
    })
    return NextResponse.json(artists)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch artists' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const artist = await prisma.artist.create({
      data: {
        name: body.name,
        bio: body.bio,
        imageUrl: body.imageUrl,
      },
    })
    return NextResponse.json(artist)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create artist' },
      { status: 500 }
    )
  }
} 
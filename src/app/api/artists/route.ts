import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const artists = await prisma.artist.findMany({
      include: {
        releases: true
      },
      orderBy: {
        name: 'asc'
      }
    })

    return NextResponse.json(artists, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch artists' },
      { status: 500 }
    )
  }
} 
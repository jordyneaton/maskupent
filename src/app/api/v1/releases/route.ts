import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const releases = await prisma.release.findMany({
      include: {
        artist: true,
      },
      orderBy: {
        releaseDate: 'desc',
      },
    })

    return NextResponse.json(releases, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch releases' },
      { status: 500 }
    )
  }
} 
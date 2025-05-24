import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const release = await prisma.release.findUnique({
      where: { id: params.id },
      include: { artist: true }
    })

    if (!release) {
      return NextResponse.json(
        { error: 'Release not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(release, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch release' },
      { status: 500 }
    )
  }
} 
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import ReleaseCard from '@/components/ReleaseCard'

interface ArtistPageProps {
  params: {
    id: string
  }
}

export default async function ArtistPage({ params }: ArtistPageProps) {
  const artist = await prisma.artist.findUnique({
    where: { id: params.id },
    include: {
      releases: true,
    },
  })

  if (!artist) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="relative mb-4 h-48 w-48 overflow-hidden rounded-full">
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="mb-2 text-4xl font-bold">{artist.name}</h1>
        <p className="max-w-2xl text-gray-600">{artist.bio}</p>
      </div>

      <h2 className="mb-6 text-2xl font-semibold">Releases</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artist.releases.map((release) => (
          <ReleaseCard key={release.id} release={release} />
        ))}
      </div>
    </main>
  )
} 
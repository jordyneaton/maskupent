import { prisma } from '@/lib/prisma'
import ArtistCard from '@/components/ArtistCard'

export default async function Home() {
  const artists = await prisma.artist.findMany({
    include: {
      releases: true,
    },
  })

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Featured Artists</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </main>
  )
} 
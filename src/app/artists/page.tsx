import { prisma } from '@/lib/prisma'
import ArtistCard from '@/components/ArtistCard'
import { Artist } from '@/types/artist'

export default async function ArtistsPage() {
  const artists = await prisma.artist.findMany({
    include: {
      releases: true,
    },
  })

  // Transform the data to match the expected types
  const transformedArtists: Artist[] = artists.map(artist => ({
    ...artist,
    releases: artist.releases.map(release => ({
      ...release,
      releaseDate: release.releaseDate.toISOString(),
    })),
  }))

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Artists</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Discover the talented artists that make up the MASKUPENT family. Each bringing their unique style and vision to the world of rap music.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {transformedArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Want to Join MASKUPENT?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We're always looking for fresh talent and innovative voices. If you think you have what it takes to be part of our family, get in touch.
          </p>
          <a
            href="mailto:contact@maskupent.com"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
} 
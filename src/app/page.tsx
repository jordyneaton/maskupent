import { prisma } from '@/lib/prisma'
import ArtistCard from '@/components/ArtistCard'
import ReleaseCard from '@/components/ReleaseCard'
import Link from 'next/link'
import { Artist } from '@/types/artist'

export default async function Home() {
  const [featuredArtists, latestReleases] = await Promise.all([
    prisma.artist.findMany({
      take: 5,
      include: {
        releases: true,
      },
    }),
    prisma.release.findMany({
      take: 5,
      include: {
        artist: true,
      },
      orderBy: {
        releaseDate: 'desc',
      },
    }),
  ])

  // Transform the data to match the expected types
  const transformedArtists: Artist[] = featuredArtists.map(artist => ({
    ...artist,
    releases: artist.releases.map(release => ({
      ...release,
      releaseDate: release.releaseDate.toISOString(),
    })),
  }))

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
            filter: 'blur(8px)',
          }}
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            MASKUPENT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Shaping the future of rap music with innovative artists and groundbreaking releases
          </p>
          <Link
            href="/artists"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Discover Our Artists
          </Link>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Featured Artists</h2>
            <Link
              href="/artists"
              className="text-gray-400 hover:text-white font-medium transition-colors"
            >
              View all artists →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {transformedArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Latest Releases</h2>
            <Link
              href="/releases"
              className="text-gray-400 hover:text-white font-medium transition-colors"
            >
              View all releases →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {latestReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">About MASKUPENT</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're a forward-thinking record label dedicated to discovering and nurturing the most innovative voices in rap music. Our mission is to push boundaries and create lasting impact in the industry.
            </p>
            <Link
              href="/about"
              className="inline-block border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 
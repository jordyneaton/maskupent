import Image from 'next/image'
import Link from 'next/link'
import { Artist } from '@/types/artist'

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all duration-300 group-hover:shadow-lg">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-gray-300">
          {artist.name}
        </h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{artist.bio}</p>
        {artist.releases && artist.releases.length > 0 && (
          <p className="mt-2 text-sm text-gray-500">
            {artist.releases.length} {artist.releases.length === 1 ? 'release' : 'releases'}
          </p>
        )}
      </div>
    </Link>
  )
} 
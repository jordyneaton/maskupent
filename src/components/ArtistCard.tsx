import Image from 'next/image'
import Link from 'next/link'
import { Artist } from '@/types/artist'

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-800 shadow-md transition-all duration-300 hover:shadow-lg">
      {/* Image Container */}
      <div className="absolute inset-0 bg-gray-700">
        {/* Temporarily commented out the Image component
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        */}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-semibold text-white">
          {artist.name}
        </h3>
        <p className="mt-1 text-sm text-gray-300 line-clamp-2">{artist.bio}</p>
        {artist.releases && artist.releases.length > 0 && (
          <p className="mt-2 text-sm text-gray-400">
            {artist.releases.length} {artist.releases.length === 1 ? 'release' : 'releases'}
          </p>
        )}
      </div>

      {/* Link wrapper */}
      <Link
        href={`/artists/${artist.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${artist.name}'s profile`}
      />
    </div>
  )
} 
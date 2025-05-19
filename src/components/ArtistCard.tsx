import Image from 'next/image'
import Link from 'next/link'
import { Artist } from '@/types/artist'

interface ArtistCardProps {
  artist: Artist
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <Link href={`/artists/${artist.id}`} className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={artist.imageUrl}
          alt={artist.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{artist.name}</h3>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{artist.bio}</p>
    </Link>
  )
} 
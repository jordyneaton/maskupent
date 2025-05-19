import Image from 'next/image'
import { Release } from '@/types/artist'

interface ReleaseCardProps {
  release: Release
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={release.coverImageUrl}
          alt={release.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold text-gray-900">{release.title}</h3>
      <p className="mt-1 text-sm text-gray-500">
        {new Date(release.releaseDate).toLocaleDateString()}
      </p>
    </div>
  )
} 
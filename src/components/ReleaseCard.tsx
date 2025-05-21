import Image from 'next/image'
import Link from 'next/link'
import { Release } from '@/types/release'

interface ReleaseCardProps {
  release: Release
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <Link href={`/releases/${release.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all duration-300 group-hover:shadow-lg">
        <Image
          src={release.coverImageUrl}
          alt={release.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-gray-300">
          {release.title}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          {release.artist.name}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          {new Date(release.releaseDate).toLocaleDateString()}
        </p>
      </div>
    </Link>
  )
} 
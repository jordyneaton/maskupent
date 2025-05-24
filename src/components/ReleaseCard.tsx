import Image from 'next/image'
import Link from 'next/link'
import { Release } from '@/types/release'

interface ReleaseCardProps {
  release: Release
}

export default function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <Link href={`/releases/${release.id}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/10">
        {/* Image Container */}
        <div className="absolute inset-0 bg-white">
          {/* Temporarily commented out the Image component
          <Image
            src={release.coverImageUrl}
            alt={release.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          */}
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-xl font-semibold text-white">
            {release.title}
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            {release.artist.name}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {new Date(release.releaseDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  )
} 
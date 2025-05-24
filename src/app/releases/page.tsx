import ReleaseCard from '@/components/ReleaseCard'
import Image from 'next/image'
import { useState } from 'react'
import { Release } from '@/types/release'
import { Artist } from '@/types/artist'

export default async function ReleasesPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/releases`, {
    cache: 'no-store'
  })
  const releases: Release[] = await response.json()

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">Latest Releases</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our catalog of groundbreaking releases, from debut singles to full-length albums. Each release represents our commitment to pushing the boundaries of rap music.
          </p>
        </div>
      </section>

      {/* Releases Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {releases.map((release) => (
              <ReleaseCard
                key={release.id}
                release={release}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to be the first to know about new releases, exclusive content, and upcoming events.
          </p>
          <form
            action="/api/newsletter"
            method="POST"
            className="max-w-md mx-auto flex gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
} 
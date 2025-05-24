import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.release.deleteMany()
  await prisma.artist.deleteMany()

  // Create test artists
  const artist1 = await prisma.artist.create({
    data: {
      name: 'Test Artist 1',
      bio: 'A groundbreaking artist pushing the boundaries of rap music.',
      imageUrl: 'https://example.com/artist1.jpg',
    },
  })

  const artist2 = await prisma.artist.create({
    data: {
      name: 'Test Artist 2',
      bio: 'An innovative voice in the rap scene.',
      imageUrl: 'https://example.com/artist2.jpg',
    },
  })

  // Create test releases
  await prisma.release.create({
    data: {
      title: 'Test Release 1',
      releaseDate: new Date(),
      coverImageUrl: 'https://example.com/release1.jpg',
      artistId: artist1.id,
    },
  })

  await prisma.release.create({
    data: {
      title: 'Test Release 2',
      releaseDate: new Date(),
      coverImageUrl: 'https://example.com/release2.jpg',
      artistId: artist2.id,
    },
  })

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 
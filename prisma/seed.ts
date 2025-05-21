const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.release.deleteMany();
  await prisma.artist.deleteMany();

  // Create artists
  const artists = await Promise.all([
    prisma.artist.create({
      data: {
        name: 'Luna Nova',
        bio: 'A rising star in the underground rap scene, Luna Nova brings a unique blend of ethereal beats and sharp lyricism.',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
        releases: {
          create: [
            {
              title: 'Cosmic Dreams',
              releaseDate: new Date('2024-01-15'),
              coverImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop',
            },
            {
              title: 'Midnight Echoes',
              releaseDate: new Date('2023-11-20'),
              coverImageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
            },
          ],
        },
      },
    }),
    prisma.artist.create({
      data: {
        name: 'Kai Storm',
        bio: 'Known for his dynamic flow and powerful storytelling, Kai Storm is redefining the boundaries of conscious rap.',
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        releases: {
          create: [
            {
              title: 'Thunder & Lightning',
              releaseDate: new Date('2024-02-01'),
              coverImageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
            },
          ],
        },
      },
    }),
    prisma.artist.create({
      data: {
        name: 'Maya Rhythm',
        bio: 'Blending traditional sounds with modern hip-hop, Maya Rhythm creates a unique fusion that captivates audiences worldwide.',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop',
        releases: {
          create: [
            {
              title: 'Urban Tales',
              releaseDate: new Date('2024-01-30'),
              coverImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop',
            },
            {
              title: 'City Lights',
              releaseDate: new Date('2023-12-15'),
              coverImageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
            },
          ],
        },
      },
    }),
    prisma.artist.create({
      data: {
        name: 'Zion Flow',
        bio: 'A master of wordplay and complex rhyme schemes, Zion Flow brings intellectual depth to modern rap.',
        imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
        releases: {
          create: [
            {
              title: 'Mind Games',
              releaseDate: new Date('2024-02-15'),
              coverImageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=500&fit=crop',
            },
          ],
        },
      },
    }),
    prisma.artist.create({
      data: {
        name: 'Nova Beats',
        bio: 'Pushing the boundaries of experimental rap, Nova Beats combines innovative production with raw lyrical talent.',
        imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&h=500&fit=crop',
        releases: {
          create: [
            {
              title: 'Digital Dreams',
              releaseDate: new Date('2024-02-10'),
              coverImageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&h=500&fit=crop',
            },
            {
              title: 'Future Sound',
              releaseDate: new Date('2023-12-01'),
              coverImageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&h=500&fit=crop',
            },
          ],
        },
      },
    }),
  ]);

  console.log('Created artists:', artists);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 
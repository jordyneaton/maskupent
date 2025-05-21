const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // Try to connect to the database
    await prisma.$connect()
    console.log('Successfully connected to the database!')

    // Try a simple query
    const result = await prisma.$queryRaw`SELECT 1`
    console.log('Query result:', result)
  } catch (error) {
    console.error('Error connecting to the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 
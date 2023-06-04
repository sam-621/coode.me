const { PrismaClient } = require('@prisma/client');

async function isDbUp() {
  const prisma = new PrismaClient({ errorFormat: 'pretty' });

  try {
    await prisma.$connect();
    console.log('✨ Test DB is connected!');
  } catch (error) {
    setTimeout(async () => {
      await prisma.$connect();
      console.log('✨ Test DB is connected!');
    }, 3000);
  }
}

isDbUp();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    await prisma.user.createMany({
        data: [
            {
                name: 'Iván E. Villanueva',
                email: 'svei00@gmail.com',
                password: '12345678'
            }
        ]
    })
}
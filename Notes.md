1. Create the app:
   - npx create-next-app my-app
2. Go to your folder:
   - cd my-app
3. Install Prisma, prisma is for data access with ORM(Objet-relational Mapper)
   - yarn add prisma @prisma/client dotenv or
   - npm i prisma @prisma/lient dontenv
4. Create the '.env' file in the root of the projet:
   - DATABASE_URL=postgres://username:password@localhost:5432/mydatabase
     The file should contain the connetion URL for your PostgreeSQL Database
5. Initialize prisma:

   - npx prisma init
   - Open your Prisma Schema (schema.prisma) to define your database schema:
     datasource db {
     provider = "postgresql"
     url = env("DATABASE_URL")
     }

   model User {
   id Int @id @default(autoincrement())
   name String
   email String @unique
   createAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   }

6. Generate Prisma Client code:
   - npx prisma generate
     This will generate the module "@prisma/client" in "node_modules"

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

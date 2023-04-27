import prisma from '../../lib/prisma';
import handler from './hello';

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const {name, email} =  req.body;

        const user = await prisma.user.create({
            data: {
                name,
                email,
            },
        });

        res.json(user);

    } else if (req.method === GET) {
        const users = await prisma.user.findMany();

        res.json(users);
    } else {
        res.status(405).json({ messege: 'Method not Allowed'});
    }
}
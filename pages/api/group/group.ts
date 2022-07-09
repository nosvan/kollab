import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { GroupRegister} from 'lib/types/group';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'GET'){
    try {
      const result = await prisma.group.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          owner_id: true,
          created_at: true
        },
        where: {
          owner_id: req.session.userSession.id
        }})
        res.json(result)
    } catch (error) {
      res.json(error)
    }
  } 
}
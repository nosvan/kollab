import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'GET'){
    try {
      const result = await prisma.user.findMany({
        where: {
          OR: [
            {
              list_permissions: {
                some: {
                  user_id: {
                    equals: req.session.userSession.id
                  }
                }
              }
            }
          ]
        }
      })
      console.log(result)
      return res.json(result)
    } catch (error) {
      return res.json(error)
    }
  } 
}
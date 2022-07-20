import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { ListRegister } from 'lib/types/list';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    const newListData: ListRegister = req.body;
    try {
      const result = await prisma.list.create({
        select: {
          id: true,
          name: true,
          description: true,
          owner_id: true,
          passcode: true,
          created_at: true,
        },
        data: {
          name: newListData.name,
          description: newListData.description,
          owner_id: req.session.userSession.id,
          passcode: newListData.passcode
      }})
      const safeResult = {
        id: result.id,
        name: result.name,
        description: result.description,
        owner_id: result.owner_id,
        created_at: result.created_at
      }
      res.json(safeResult)
    } catch (error) {
      res.json(error)
    }
  } 
}
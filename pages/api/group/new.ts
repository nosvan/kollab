import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { GroupRegister, GroupSafe } from 'lib/types/group';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    const newGroupData: GroupRegister = req.body;
    try {
      const result = await prisma.group.create({
        select: {
          id: true,
          name: true,
          description: true,
          owner_id: true,
          passcode: true,
          created_at: true,
        },
        data: {
          name: newGroupData.name,
          description: newGroupData.description,
          owner_id: req.session.user.id,
          passcode: newGroupData.passcode
      }})
      const safeResult: GroupSafe = {
        id: result.id,
        name: result.name,
        description: result.description,
        owner_id: result.owner_id,
        created_at: result.created_at
      }
      console.log(safeResult)
      res.json(safeResult)
    } catch (error) {
      res.json(error)
    }
  } 
}

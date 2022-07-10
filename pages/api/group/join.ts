import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { GroupJoin, GroupSafe } from 'lib/types/group';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    const newGroupData: GroupJoin = req.body;
    try {
      const groupResult = await prisma.group.findFirst({
        where: {
          id: {
            equals: newGroupData.group_id,
          },
          passcode: newGroupData.passcode,
        }})
      if(groupResult){
        const groupSafeResult: GroupSafe = {
          id: groupResult.id,
          name: groupResult.name,
          description: groupResult.description,
          owner_id: groupResult.owner_id,
          created_at: groupResult.created_at.toString(),
        }
        return res.json(groupResult);
      }
      console.log(groupResult)
      res.json(groupResult);
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  } 
}
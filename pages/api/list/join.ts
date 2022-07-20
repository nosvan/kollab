import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { ListJoin, ListSafe } from 'lib/types/list';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    const newListData: ListJoin = req.body;
    try {
      const listResult = await prisma.list.findFirst({
        where: {
          id: {
            equals: newListData.list_id,
          },
          passcode: newListData.passcode,
        }})
      res.json(listResult);
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  } 
}
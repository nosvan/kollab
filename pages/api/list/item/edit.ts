import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { Category, ItemSafe, ItemType, VisibilityLevel } from 'lib/types/item';
import { Category as PrismaCategory, VisibilityLevel as PrismaVisibilityLevel} from '@prisma/client';

export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'PUT'){
    try {

    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }
}
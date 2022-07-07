import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { Category as PrismaCategory} from '@prisma/client';
import { Category, ItemSafe, ItemType } from 'lib/types/item';

export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'GET'){
    console.log(req.query)
    try {
      const result = await prisma.item.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          category: true,
          category_id: true,
          item_type: true,
          due_date: true,
          date: true,
        },
        where: {
          category: PrismaCategory.personal,
          created_by_id: req.session.userSession.id,
        },
        orderBy: {
          item_type: 'asc',
        }
      })
      const resultSafe: ItemSafe[] = []
      result.forEach(row=> {
        const itemRow: ItemSafe = {
          id: row.id,
          name: row.name,
          description: row.description,
          category: Category[row.category.toUpperCase() as keyof typeof Category],
          category_id: row.category_id,
          item_type: ItemType[row.item_type.toUpperCase() as keyof typeof ItemType],
          due_date: row.due_date.toString(),
          date: row.date.toString()
        }
        resultSafe.push(itemRow)
      })
      res.json(resultSafe)
    } catch (error) {
      res.json(error)
    }
  } 
}
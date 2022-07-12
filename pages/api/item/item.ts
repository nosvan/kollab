import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { Category, CreateItem, ItemSafe, ItemType } from 'lib/types/item';
import { Category as PrismaCategory} from '@prisma/client';

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
          category: PrismaCategory[req.query.category.toString().toLowerCase() as keyof typeof PrismaCategory],
          category_id: parseInt(req.query.category_id.toString()),
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
          description: row.description ? row.description : undefined,
          category: row.category ? Category[row.category.toUpperCase() as keyof typeof Category] : undefined,
          category_id: row.category_id ? row.category_id : undefined,
          item_type: ItemType[row.item_type.toUpperCase() as keyof typeof ItemType],
          due_date: row.due_date ? row.due_date : undefined,
          date: row.date
        }
        resultSafe.push(itemRow)
      })
      res.json(resultSafe)
    } catch (error) {
      res.json(error)
    }
  } 
}
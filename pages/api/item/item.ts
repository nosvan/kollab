import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { Category, CreateItem, ItemSafe, ItemType, VisibilityLevel } from 'lib/types/item';
import { Category as PrismaCategory} from '@prisma/client';

export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'GET'){
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
          start_time: true,
          end_time: true,
          permission_level: true,
          last_modified_by_id: true,
          created_by_id: true,
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
          start_time: row.start_time ? row.start_time : undefined,
          end_time: row.end_time ? row.end_time : undefined,
          permission_level: VisibilityLevel[row.permission_level.toUpperCase() as keyof typeof VisibilityLevel],
          last_modified_by_id: row.last_modified_by_id,
          created_by_id: row.created_by_id,
          date: row.date ? row.date : undefined,
        }
        resultSafe.push(itemRow)
      })
      res.json(resultSafe)
    } catch (error) {
      res.json(error)
    }
  } 
}
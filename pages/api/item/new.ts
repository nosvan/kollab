import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { Category, CreateItem, ItemSafe, ItemType, VisibilityLevel } from 'lib/types/item';
import { Category as PrismaCategory, ItemType as PrismaItemType, VisibilityLevel as PrismaVisibilityLevel } from '@prisma/client';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    try {
      const reqBody: CreateItem = req.body;
      const result = await prisma.item.create({
        data: {
          name: reqBody.name,
          description: reqBody.description,
          category: reqBody.category ? PrismaCategory[reqBody.category.toLowerCase() as keyof typeof PrismaCategory] : null,
          category_id: reqBody.category_id,
          item_type: PrismaItemType[reqBody.item_type.toLowerCase() as keyof typeof PrismaItemType],
          due_date: reqBody.due_date ? reqBody.due_date : null,
          start_time: reqBody.start_time ? reqBody.start_time : null,
          end_time: reqBody.end_time ? reqBody.end_time : null,
          permission_level: reqBody.permission_level ? PrismaVisibilityLevel[reqBody.permission_level.toLocaleLowerCase() as keyof typeof PrismaVisibilityLevel] : PrismaVisibilityLevel.public,
          created_by_id: req.session.userSession.id,
          last_modified_by_id: req.session.userSession.id,
          date: reqBody.date ? reqBody.date : null,
        }})
      const resultSafe: ItemSafe[] = [{
        id: result.id,
        name: result.name,
        description: result.description ? result.description : undefined,
        category: result.category ? Category[result.category.toUpperCase() as keyof typeof Category] : undefined,
        category_id: result.category_id ? result.category_id : undefined,
        item_type: ItemType[result.item_type.toUpperCase() as keyof typeof ItemType],
        due_date: result.due_date ? result.due_date : undefined,
        start_time: result.start_time ? result.start_time : undefined,
        end_time: result.end_time ? result.end_time : undefined,
        permission_level: VisibilityLevel[result.permission_level.toUpperCase() as keyof typeof VisibilityLevel],
        last_modified_by_id: result.last_modified_by_id,
        created_by_id: result.created_by_id,
        date: result.date ? result.date : undefined,
      }]
      res.json(resultSafe)
    } catch (error) {
      console.log('error')
      res.json(error)
    }
  } 
}

// id: number
// name: string
// description: string
// category: Category
// category_id: number
// item_type: ItemType
// due_date: string
// created_by_id: number
// last_modified_by_id: number
// date: string
// created_at: string

// {
//   name: 'TEST GROUP ASSIGNMENT #2',
//   description: '#2 description',
//   category: 'GROUP',
//   category_id: 1,
//   item_type: 'ASSIGNMENT',
//   due_date: 'Wed Jul 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)',
//   date: 'Sat Jul 02 2022 17:42:23 GMT-0400 (Eastern Daylight Time)'
// }

// {
//   name: 'TEST CLASS ASSIGNMENT #1',
//   description: 'TEST CLASS ASSIGNMENT #1 description',
//   category: 'CLASSROOM',
//   category_id: 1,
//   item_type: 'ASSIGNMENT',
//   due_date: 'Wed Jul 20 2022 00:00:00 GMT-0400 (Eastern Daylight Time)',
//   date: 'Sat Jul 02 2022 17:38:49 GMT-0400 (Eastern Daylight Time)'
// }
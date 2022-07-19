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
      cleanReqBody(reqBody)
      const result = await prisma.item.create({
        data: {
          name: reqBody.name,
          description: reqBody.description,
          category: reqBody.category ? PrismaCategory[reqBody.category.toLowerCase() as keyof typeof PrismaCategory] : null,
          category_id: reqBody.category_id,
          item_type: PrismaItemType[reqBody.item_type.toLowerCase() as keyof typeof PrismaItemType],
          date_tz_sensitive: reqBody.date_tz_sensitive,
          date_tz_sensitive_end: reqBody.date_tz_sensitive_end,
          time_sensitive_flag: reqBody.time_sensitive_flag,
          date_range_flag: reqBody.date_range_flag,
          date_tz_insensitive: reqBody.date_tz_insensitive,
          date_tz_insensitive_end: reqBody.date_tz_insensitive_end,
          permission_level: reqBody.permission_level ? PrismaVisibilityLevel[reqBody.permission_level.toLocaleLowerCase() as keyof typeof PrismaVisibilityLevel] : PrismaVisibilityLevel.public,
          created_by_id: req.session.userSession.id,
          last_modified_by_id: req.session.userSession.id,
        }})
      const resultSafe: ItemSafe[] = [{
        id: result.id,
        name: result.name,
        description: result.description ?? undefined,
        category: result.category ? Category[result.category.toUpperCase() as keyof typeof Category] : undefined,
        category_id: result.category_id ?? undefined,
        item_type: ItemType[result.item_type.toUpperCase() as keyof typeof ItemType],
        date_tz_sensitive: result.date_tz_sensitive ?? undefined,
        date_tz_sensitive_end: result.date_tz_sensitive_end ?? undefined,
        time_sensitive_flag: result.time_sensitive_flag,
        date_range_flag: result.date_range_flag,
        date_tz_insensitive: result.date_tz_insensitive ?? undefined,
        date_tz_insensitive_end: result.date_tz_insensitive_end ?? undefined,
        permission_level: VisibilityLevel[result.permission_level.toUpperCase() as keyof typeof VisibilityLevel],
        last_modified_by_id: result.last_modified_by_id,
        created_by_id: result.created_by_id,
      }]
      res.json(resultSafe)
    } catch (error) {
      console.log('error')
      console.log(error)
      res.json(error)
    }
  } 
}

function cleanReqBody(reqBody: CreateItem){
  if(reqBody.time_sensitive_flag){
    reqBody.date_tz_insensitive = undefined
    reqBody.date_tz_insensitive_end = undefined
  } else {
    reqBody.date_tz_sensitive = undefined
    reqBody.date_tz_sensitive_end = undefined
  }
  if(!reqBody.date_range_flag){
    reqBody.date_tz_sensitive_end = undefined
    reqBody.date_tz_insensitive_end = undefined
  }
}
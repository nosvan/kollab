import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { ClassSafe, Semester } from 'lib/types/class';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'GET'){
    try {
      const result = await prisma.classroom.findMany({
        select: {
          id: true,
          name: true,
          school_name: true,
          semester: true,
          description: true,
          owner_id: true,
          created_at: true
        },
        where: {
          owner_id: req.session.userSession.id
        }
      })
      const safeResult: ClassSafe[] = []
      result.forEach(row=> {
        const classRow: ClassSafe = {
          id: row.id,
          name: row.name,
          school_name: row.school_name,
          semester: Semester[row.semester as keyof typeof Semester],
          description: row.description,
          owner_id: row.owner_id,
          created_at: row.created_at
        }
        safeResult.push(classRow)
      })
      res.json(safeResult)
    } catch (error) {
      res.json(error)
    }
  } 
}
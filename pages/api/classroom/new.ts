import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiRequest, NextApiResponse } from 'next';
import { sessionOptions } from 'lib/iron_session';
import prisma from 'lib/prisma';
import { ClassRegister, ClassSafe, Semester } from 'lib/types/class';


export default withIronSessionApiRoute(handle, sessionOptions)

async function handle(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    const newClassData: ClassRegister = req.body;
    try {
      const result = await prisma.classroom.create({
        select: {
          id: true,
          name: true,
          school_name: true,
          semester: true,
          description: true,
          owner_id: true,
          passcode: true,
          created_at: true,
        },
        data: {
          name: newClassData.name,
          school_name: newClassData.school_name,
          semester: newClassData.semester,
          description: newClassData.description,
          owner_id: req.session.userSession.id,
          passcode: newClassData.passcode
      }})
      console.log(result)
      const safeResult: ClassSafe = {
        id: result.id,
        name: result.name,
        school_name: result.school_name,
        semester: Semester[result.semester as keyof typeof Semester],
        description: result.description,
        owner_id: result.owner_id,
        created_at: result.created_at
      }
      res.json(safeResult)
    } catch (error) {
      res.json(error)
    }
  } 
}
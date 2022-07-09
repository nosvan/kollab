import prisma from 'lib/prisma'
import { withIronSessionApiRoute } from 'iron-session/next'
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer'
import { sealData } from 'iron-session';
import { sessionOptionsMagicLink } from 'lib/iron_session';

export default withIronSessionApiRoute(handle, sessionOptionsMagicLink)

async function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body)
    const { email } = req.body;
    try {
      const result = await prisma.user.findUnique({
        where: {
          email: email,
        }
      })
      if (result) {
        const seal = await sealData(
          {
            id: result.id,
            email: result.email,
          },
          {
            password: process.env.JWT_SECRET as string
          },
        )
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'kollabservice@gmail.com',
            pass: 'bofuzndcovbyyxld'
          }
        });

        const linkConfig = () => {
          switch (process.env.NODE_ENV) {
            case 'production': // prod
              return 'https://kollabs.vercel.app'
            case 'test': // stage
              return 'https://kollabs-staging.vercel.app'
            case 'development': // dev
              return 'https://kollabs-dev.vercel.app'
            default:
              return 'http://localhost:3000'
          }
        }

        const emailBody = `Hi there!
        Please use the following link to reset your password: (link will expire in 15 minutes)
        <a href="${linkConfig()}/api/account/magiclink?seal=${seal}">Click here to reset password</a>`
        
        const mailOptions = {
          from: 'kollabservice@gmail.com',
          to: result.email,
          subject: 'Reset Kollab Account password request',
          html: emailBody
        };        
        await transporter.sendMail(mailOptions, (error, info) =>{
          if (error) {
            console.log(error);
            res.status(500).json({ message: (error as Error).message });
          } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'Email sent' });
          }
        });
      } 
      res.json({ message: 'email not found' })
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

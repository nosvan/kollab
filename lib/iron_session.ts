import { IronSessionOptions } from "iron-session";
import { UserSession } from './types/user';

export const sessionOptions: IronSessionOptions = {
  password: process.env.JWT_SECRET as string,
  cookieName: "iron-session-token",
  cookieOptions: {
    maxAge: 60*60,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user: UserSession;
  }
}
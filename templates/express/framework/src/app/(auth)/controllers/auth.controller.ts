import type { RequestHandler } from "express";
import AuthService from "../services/auth.service";

export default class AuthController {
   constructor(private _auth: AuthService) {}

   login: RequestHandler = async (req, res, next) => {
      try {
         const body = req.body;
         console.log({ body });
         const result = await this._auth.login(body);
         res.status(200).json({
            data: result,
         });
      } catch (error) {
         next(error);
      }
   };
}

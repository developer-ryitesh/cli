import type { RequestHandler } from "express";
import AuthAervice from "../services/auth.service";
import AuthRepository from "../repositories/auth.repository";

class AuthController {
   constructor(private _auth: AuthAervice) {}
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

const authController = new AuthController(
   new AuthAervice(
      new AuthRepository() //
   )
);
export default authController;

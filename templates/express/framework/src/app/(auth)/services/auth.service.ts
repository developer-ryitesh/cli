import { LoginDTO, loginSchema } from "../dtos/auth.dtos";
import createHttpError from "http-errors";
import AuthRepository from "../repositories/auth.repository";
import bcrypt from "bcrypt";

export default class AuthAervice {
   constructor(private _repo: AuthRepository) {}

   login = async (body: LoginDTO) => {
      if (!body || !body.email || !body.password) {
         throw new createHttpError.BadRequest();
      }
      const result = await this._repo.findUserByEmail(body.email);
      if (!result) {
         throw createHttpError.NotFound("User not found");
      }
      const match = await bcrypt.compare(body.password, result.password);
      if (!match) {
         throw createHttpError.Unauthorized();
      }
      return result;
   };
}

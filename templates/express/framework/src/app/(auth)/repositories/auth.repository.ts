import createHttpError from "http-errors";

export default class AuthRepository {
   findUserByEmail = async (email: string) => {
      try {
         return { name: "test", password: "password" };
      } catch (error) {
         throw new createHttpError.InternalServerError("InternalServerError");
      }
   };
}

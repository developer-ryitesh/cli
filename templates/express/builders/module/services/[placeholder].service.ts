import { MethodDTO } from "../dtos/placeholder.dtos";
import createHttpError from "http-errors";
import PlaceHolderRepository from "../repositories/placeholder.repository";

export default class PlaceHolderService {
   constructor(private _placeHolderRepository: PlaceHolderRepository) {}

   method = async (body: MethodDTO) => {
      if (!body || !body.email || !body.password) {
         throw new createHttpError.BadRequest();
      }
      return body;
   };
}

import type { RequestHandler } from "express";
import PlaceHolderService from "../services/placeholder.service";
import { methodSchema } from "../dtos/placeholder.dtos";
import { validate } from "@/libs/zod";

export default class PlaceHolderController {
   constructor(private _placeHolderService: PlaceHolderService) {}

   method: RequestHandler = async (req, res, next) => {
      try {
         const body = validate(methodSchema, req.body);
         res.status(200).json({
            data: body,
         });
      } catch (error) {
         next(error);
      }
   };
}

import { Router } from "express";
import PlaceHolderController from "./controllers/placeholder.controller";
import PlaceHolderService from "./services/placeholder.service";
import PlaceHolderRepository from "./repositories/placeholder.repository";

export default function PlaceHolderModule() {
   const routes = Router();
   const container = new PlaceHolderController(new PlaceHolderService(new PlaceHolderRepository()));
   routes.post("/module", container.method);
   return routes;
}

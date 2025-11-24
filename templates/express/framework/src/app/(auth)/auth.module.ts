import { Router } from "express";
import authController from "./controllers/auth.controller";

export default function AuthModule() {
   const routes = Router();
   routes.post("/login", authController.login);
   return routes;
}

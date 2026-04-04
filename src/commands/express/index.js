import { Command } from "commander";
import CreateExpress from "./create-express.js";
import ModuleExpress from "./module-express.js";

const express = new Command("express") //
   .description("Generate new React-related files like components, pages, and utilities etc.");

express
   .command("create-app <name>")
   .description("Generate a new Express component") //
   .alias("app")
   .action(CreateExpress);

express
   .command("module <name>")
   .alias("m")
   .description("Generate a new react page controller") //
   .action(ModuleExpress);
export default express;

import { Command } from "commander";
import CreateApp from "./create-app.command.js";
import Component from "./component.command.js";
import Page from "./page.command.js";
import Service from "./service.command.js";
import Module from "./module.command.js";
import Interceptor from "./interceptor.command.js";
import Guard from "./guard.command.js";

const cmd = new Command("g") //
   .description("Generate new React-related files like components, pages, and utilities etc.");

cmd.command("create-app <name>")
   .description("Generate a new React component") //
   .alias("app")
   .action(CreateApp);

cmd.command("component <name>")
   .alias("c")
   .description("Generate a new React component") //
   .action(Component)
   .option("--nf");

cmd.command("page <name>")
   .alias("p")
   .description("Generate a new react page") //
   .action(Page);

cmd.command("service <name>")
   .alias("s")
   .description("Generate a new react page controller") //
   .action(Service);

cmd.command("module <name>")
   .alias("m")
   .description("Generate a new react page controller") //
   .action(Module);

cmd.command("interceptor <name>")
   .alias("i")
   .description("Generate a new react page controller") //
   .action(Interceptor);

cmd.command("guard <name>")
   .alias("g")
   .description("Generate a new react page controller") //
   .action(Guard);

export default cmd;

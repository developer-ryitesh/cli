import { Command } from "commander";
import CreateApp from "./create-app.command.js";
import Component from "./component.command.js";
import Page from "./page.command.js";
import Service from "./service.command.js";
import Module from "./module.command.js";
import Interceptor from "./interceptor.command.js";
import Guard from "./guard.command.js";

const react = new Command("react") //
   .description("Generate new React-related files like components, pages, and utilities etc.");

react.command("create-app <name>")
   .description("Generate a new React component") //
   .alias("app")
   .action(CreateApp);

react.command("component <name>")
   .alias("c")
   .description("Generate a new React component") //
   .action(Component)
   .option("--nf");

react.command("page <name>")
   .alias("p")
   .description("Generate a new react page") //
   .action(Page);

react.command("service <name>")
   .alias("s")
   .description("Generate a new react page controller") //
   .action(Service);

react.command("module <name>")
   .alias("m")
   .description("Generate a new react page controller") //
   .action(Module);

react.command("interceptor <name>")
   .alias("i")
   .description("Generate a new react page controller") //
   .action(Interceptor);

react.command("guard <name>")
   .alias("g")
   .description("Generate a new react page controller") //
   .action(Guard);

export default react;

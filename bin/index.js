#! /usr/bin/env node
import { Command } from "commander";
import cmd from "../src/commands/index.js";

const bootstrap = async () => {
   const program = new Command();
   program.name("cli").description("Custom React CLI").version("1.0.0");
   program.addCommand(cmd);
   program.parse(process.argv);
};
bootstrap();

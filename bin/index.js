#! /usr/bin/env node
import { Command } from "commander";
import cmd from "../src/commands/index.js";
import { createRequire } from "module";
import os from "os";
import LOGO from "../src/assets/logo.js";
import Help from "../src/assets/help.js";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const bootstrap = async () => {
   const program = new Command();
   program
      .name("retork")
      .description("Custom React CLI")
      .option("-v, --version", "Show CLI info", () => {
         console.log(LOGO);
         console.log("📦 Retork Version :", pkg.version);
         console.log("🟢 Node Version   :", process.version);
         console.log("💻 OS             :", os.platform(), os.arch());
         console.log("📁 Project Path   :", process.cwd());
         process.exit(0);
      })
      .option("-h, --help", "Show CLI help", () => {
         console.log(Help);
         process.exit(0);
      });

   program.addCommand(cmd);
   program.parse(process.argv);
};
bootstrap();

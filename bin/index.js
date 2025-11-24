#! /usr/bin/env node
import { Command } from "commander";
import { createRequire } from "module";
import os from "os";
import LOGO from "../src/assets/logo.js";
import Help from "../src/assets/help.js";
import react from "../src/commands/react/index.js";
import express from "../src/commands/express/index.js";

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

   program.addCommand(react);
   program.addCommand(express);
   program.parse(process.argv);
};
bootstrap();

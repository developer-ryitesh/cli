import chalk from "chalk";

export const logger = {
   info: (msg) => console.log(chalk.cyan(msg)),
   success: (msg) => console.log(chalk.green(msg)),
   error: (msg) => console.log(chalk.red(msg)),
   warn: (msg) => console.log(chalk.yellow(msg)),
};

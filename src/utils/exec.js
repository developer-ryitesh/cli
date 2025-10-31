import { execSync } from "child_process";
import chalk from "chalk";

export async function execCommand(command) {
   console.log(chalk.yellow(`▶ ${command}`));
   execSync(command, { stdio: "inherit", shell: true });
}

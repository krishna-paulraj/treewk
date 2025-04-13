import { Command } from "commander";
import { explore } from "./lib/explore";

const program = new Command();

export function main() {
  program.name("treewk").description("Explore the project in seconds.");

  program
    .command("greet")
    .description("Greets you.")
    .argument("<string>", "your name")
    .action((str) => {
      console.log("🌳 Hello", str);
    });

  program
    .command("explore")
    .description("Explore the directory.")
    .option("-d,--depth <number>", "depth count", "10")
    .action((options) => {
      explore(options.depth);
    });

  program.parse();
}

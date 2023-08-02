#!/usr/bin/env node

import { program } from "commander";

program.name("telegram").command("prepare", "Prepare the JSON file", { isDefault: true, executableFile: "prepare" }).version("1.0.0");

program.parse();

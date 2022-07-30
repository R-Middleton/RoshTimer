#!/usr/bin/env node

import chalk from 'chalk';
import clipboard from 'clipboardy';

const sleep = (ms = 100) => new Promise((r) => setTimeout(r, ms));

async function timer() {
  const timerTitle = chalk.blueBright(
    'Rosh Timer - waiting for you to copy the time (mmss)'
  );

  console.log(timerTitle);
  let clipboardMessage;
  const regex = /^\d{4}$/;

  while (true) {
    await sleep();
    clipboard.read().then((input) => {
      if (clipboardMessage !== input && input.match(regex)) {
        clipboardMessage = input;

        const minutes = parseInt(input.slice(0, 2));
        const seconds = input.slice(2, 4);
        const output = `rosh(${minutes}:${seconds}) aegis(${
          minutes + 5
        }:${seconds}) respawn(${minutes + 8}:${seconds}-${
          minutes + 11
        }:${seconds})`;

        clipboard.write(output);
        console.log(chalk.redBright(output) + ' - copied to clipboard');
      }
    });
  }
}

await timer();

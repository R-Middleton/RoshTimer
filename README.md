# Rosh Timer

## What is this?
Rosh Timer is a small CLI app that watches the clipboard for a timestamp (formatted: mmss) and writes a rosh timer string to the clipboard.

The intended use is for the timer to be used in a Dota2 game when Roshan dies.

1. Open the in game chat and enter the current time (example: 2030)
1. Copy timestamp and then paste the generated timer into the chat to keep track of the Aegis and Roshan respawn.

## Usage
run by using
`npx roshtimer`

## Output format:

`rosh(20:30) aegis(25:30) respawn(28:30-31:30)`

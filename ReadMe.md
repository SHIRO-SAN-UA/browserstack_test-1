# Repo with training assignment for browserstack

## Usage
1. Clone repo and install all dependencies.
2. Fill in your actual credentials in .env file as shown in the example to run locally.
3. Run with npm scripts. This project is set up to run Pixel 3 as a default and Galaxy S10 as an additional testing device. Change, or add more devices in wdio.conf.js.
4. CI is set up to run on default device. Edit .yml to chanhe.

## Structure
1. This project uses POM model
1. Objects are located at ./test/screenObjects
1. Tests are located at ./test/specs


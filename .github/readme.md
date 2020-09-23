<div align="center">

## greenstar cleaners

![CI](https://github.com/almond-hydroponics/almond-re/workflows/CI/badge.svg)
[![CircleCI](https://circleci.com/gh/almond-hydroponics/almond-re.svg?style=svg)](https://circleci.com/gh/almond-hydroponics/almond-re)
[![Maintainability](https://api.codeclimate.com/v1/badges/1787ab6745c18d366de9/maintainability)](https://codeclimate.com/github/almond-hydroponics/almond-re/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1787ab6745c18d366de9/test_coverage)](https://codeclimate.com/github/almond-hydroponics/almond-re/test_coverage)

</div>

<div align="center">

    Almond frontend application for the hydroponics farm

[![Almond](../public/images/readme.svg)](https://almond-re-staging.herokuapp.com/)

#### Simple but complicated almond

</div>

## Description

This application will be used in a hydroponics farm control system to be used at home with limited space, in greenhouses and indoors as well.

### Development set up

1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/mashafrancis/almond-re`.
3. `cd` into the root of the **project directory**.
4. Install [`yarn`](https://yarnpkg.com/en/docs/install#mac-stable).
5. Run `yarn install` on the terminal to install dependencies.

### Development server

Run `yarn start:dev` for a dev server. Navigate to `http://froyo.almond.com:3000/`. The app will automatically reload if you change any of the source files.

### Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests. This is achieved through the use of jest package which is used to test javascript code .

## Running end-to-end tests

Run `yarn cypress:open` to execute the end-to-end tests via Cypress.

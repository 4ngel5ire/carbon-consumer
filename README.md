<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

Application for consuming website carbon data via kafka queue, persisting to db.

Require .env with following connection details:

```bash
WEB_CARBON=https://api.websitecarbon.com/site?url=

POSTGRES_HOST=SOME_HOST
POSTGRES_PORT=SOME_PORT
POSTGRES_USER=SOME_USER
POSTGRES_PASSWORD=SOME_PASS
POSTGRES_DATABASE=SOME_DB_NAME
PORT=SOME_PORT
MODE=DEV
RUN_MIGRATIONS=false
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

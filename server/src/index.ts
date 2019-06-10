import http from "http";
import express from 'express';
// import { Pool } from 'pg';

import { applyMiddleware, applyRoutes } from "./utils";
import middleware from "./middleware";
import routes from './services'
import errorHandlers from "./middleware/errorHandlers";
import keys from './keys';

// things to go back and pay attention to:
// 1) process.on
// 2) error handling
// 3 read node best practices in https://github.com/i0natan/nodebestpractices

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
  });
  process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
  });

const router: express.Application = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router)

const { PORT = 5000 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);

// Postgres Client Setup
// const pgClient = new Pool({
//   user: keys.pgUser,
//   host: keys.pgHost,
//   database: keys.pgDatabase,
//   password: keys.pgPassword,
//   port: keys.pgPort
// });
// pgClient.on('error', () => console.log('Lost PG connection'));

// pgClient
//   .query('CREATE TABLE IF NOT EXISTS values (number INT)')
//   .catch(err => console.log(err));

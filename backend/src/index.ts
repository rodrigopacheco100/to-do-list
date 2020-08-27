import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import "./database/connection";

import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

// logRequests
app.use((request: Request, response: Response, next: NextFunction) => {
   const { method, url } = request;
   const logLabel = `[${method.toUpperCase()}] - ${url}`;
   console.log(logLabel);

   return next();
});

app.use(routes);

app.listen(3333, () => {
   console.log("Server is running!");
});

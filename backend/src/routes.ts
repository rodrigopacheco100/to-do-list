import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/user", (request, response) =>
   UserController.findOne(request, response)
);

export default routes;

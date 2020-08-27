import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/user", (request, response) =>
   UserController.find(request, response)
);

export default routes;

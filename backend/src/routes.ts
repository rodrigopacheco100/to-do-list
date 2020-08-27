import { Router } from "express";
import TodoController from "./controllers/TodoController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/user", (request, response) =>
   UserController.find(request, response)
);
routes.post("/user", (request, response) =>
   UserController.create(request, response)
);

routes.get("/todo", (request, response) =>
   TodoController.findAll(request, response)
);
routes.post("/todo", (request, response) =>
   TodoController.create(request, response)
);

export default routes;

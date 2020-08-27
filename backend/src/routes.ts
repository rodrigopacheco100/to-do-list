import { Router } from "express";
import UserController from "./controllers/UserController";
import TodoController from "./controllers/TodoController";

const routes = Router();

routes.get("/user", UserController.find);
routes.post("/user", UserController.create);

routes.get("/todo", TodoController.findAll);
routes.post("/todo", TodoController.create);
routes.put("/todo", TodoController.update);
routes.delete("/todo", TodoController.delete);

export default routes;

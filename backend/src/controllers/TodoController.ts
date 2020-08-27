import { Request, Response } from "express";
import { getConnection } from "typeorm";
import Todo from "../entities/Todo";

class TodoController {
   findAll = async (request: Request, response: Response) => {
      const { userId } = request.body;

      const todos = await getConnection()
         .createQueryBuilder(Todo, "todo")
         .where("todo.userId = :userId", { userId })
         .getMany();

      return response.status(200).json(todos);
   };

   create = async (request: Request, response: Response) => {
      const { userId, content } = request.body;

      const todo = await getConnection()
         .createQueryBuilder()
         .insert()
         .into("todo")
         .values({ content, user: userId })
         .execute()
         .catch(() => {
            return response
               .status(500)
               .json({ error: "Todo creation failed!" });
         });

      return response.status(201).json(todo);
   };

   update = async (request: Request, response: Response) => {
      const { id, content, isFinished } = request.body;

      const todo = await getConnection()
         .createQueryBuilder()
         .update(Todo)
         .set({ isFinished, content })
         .where("todo.id = :id", { id })
         .execute()
         .catch(() => {
            return response.status(500).json({ error: "Todo update failed!" });
         });

      return response.status(200).json(todo);
   };

   delete = async (request: Request, response: Response) => {
      const { id } = request.body;

      await getConnection()
         .createQueryBuilder()
         .delete()
         .from(Todo)
         .where("id = :id", { id })
         .execute()
         .then(() => {
            return response.status(204).send();
         })
         .catch(() => {
            return response.status(500).json({ error: "Todo delete failed!" });
         });
   };
}

export default new TodoController();

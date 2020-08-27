import { Request, Response } from "express";
import { getConnection } from "typeorm";
import User from "../entities/User";

class UserController {
   find = async (request: Request, response: Response) => {
      const { username, password } = request.body;

      if (!username || !password)
         return response.status(400).json({ error: "user not found" });

      const user = await getConnection()
         .createQueryBuilder(User, "user")
         .where("user.username = :username", { username })
         .andWhere("user.password = :password", { password })
         .getOne();

      console.log(user);

      if (!user) return response.status(204);

      return response.status(200).json(user);
   };

   create = async (request: Request, response: Response) => {
      const { username, password } = request.body;

      if (!username || !password)
         return response.status(400).json({ error: "user not found" });

      const checkUserAlreadyExists = await getConnection()
         .createQueryBuilder(User, "user")
         .where("user.username = :username", { username })
         .getOne();

      if (checkUserAlreadyExists)
         return response.status(409).json({ error: "User already exists!" });

      const user = await getConnection()
         .createQueryBuilder()
         .insert()
         .into("user")
         .values({ username, password })
         .execute()
         .catch(() => {
            return response
               .status(500)
               .json({ error: "User creation failed!" });
         });

      console.log(user);

      if (!user)
         return response.status(400).json({ error: "Could not create user!" });

      return response.status(201).json(user);
   };
}

export default new UserController();

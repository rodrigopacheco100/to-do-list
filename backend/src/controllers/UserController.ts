import { Request, Response } from "express";
import { getConnection } from "typeorm";
import User from "../entities/User";

class UserController {
   find = async (request: Request, response: Response) => {
      const { username, password } = request.body;

      const user = await getConnection()
         .createQueryBuilder(User, "user")
         .where("user.username = :username", { username })
         .andWhere("user.password = :password", { password })
         .getOne();

      console.log(user);
      if (!user) return response.json({ error: "user not found" }).status(204);

      return response.status(200).json(user);
   };
}

export default new UserController();

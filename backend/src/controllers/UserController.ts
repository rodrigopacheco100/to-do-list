import { Request, Response, NextFunction } from "express";
import { QueryBuilder, getConnection } from "typeorm";
import User from "../entities/User";

class UserController {
   findOne = async (request: Request, response: Response) => {
      const user = await getConnection()
         .createQueryBuilder(User, "user")
         .where("user.id = :id", { id: 1 })
         .getOne();

      return console.log(user);
   };
}

export default new UserController();

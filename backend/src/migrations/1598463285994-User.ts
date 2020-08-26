/* eslint-disable class-methods-use-this */
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class User1598463285994 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: "user",
            columns: [
               {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
               },
               {
                  name: "username",
                  type: "varchar",
               },
               {
                  name: "password",
                  type: "varchar",
               },
            ],
         })
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable("user");
   }
}

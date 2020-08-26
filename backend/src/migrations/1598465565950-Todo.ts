/* eslint-disable class-methods-use-this */
import {
   MigrationInterface,
   QueryRunner,
   Table,
   TableForeignKey,
} from "typeorm";

export default class Todo1598465565950 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
         new Table({
            name: "todo",
            columns: [
               {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
               },
               {
                  name: "content",
                  type: "varchar",
               },
               {
                  name: "userId",
                  type: "int",
               },
            ],
         })
      );

      await queryRunner.createForeignKey(
         "todo",
         new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
         })
      );
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropTable("todo");
   }
}

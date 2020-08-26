import {
   Column,
   Entity,
   JoinColumn,
   OneToOne,
   PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User";

@Entity()
export default class Todo {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   content!: string;

   @Column()
   isFinished!: boolean;

   @OneToOne((type) => User)
   @JoinColumn()
   userId!: User;
}

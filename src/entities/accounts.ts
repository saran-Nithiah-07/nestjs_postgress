import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";


@Entity({ name: 'user_accounts'})
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_name: string;

    @Column()
    account_status: string;

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./accounts";

@Entity( {name: 'users'})
export class User {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column()
    name: string;

    @Column()
    email_id: string;

    @Column()
    mobile_number: number;

    @OneToMany(() => Account, (account) => account.user)
    accounts: Account[];
}

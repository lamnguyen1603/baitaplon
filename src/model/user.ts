import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;
    @Column({type :"varchar",length: 255})
    username : string;
    @Column({type :"varchar",length: 255})
    password : string;
    @Column({default: "member"})
    role : string;

}
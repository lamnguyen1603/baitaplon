import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: "varchar", length: 255})
    time: string;
    @Column({type: "int"})
    status: number;
    @Column()
    user: number;

}
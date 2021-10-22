import { IsNotEmpty, isNumber, IsNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Conta{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    @IsNotEmpty({message : 'O numero da conta é obrigatório'})
    @IsNumber()
    numeroConta: number;

    @Column()
    @IsNotEmpty({message : 'A agência é obrigatório'})
    agencia: string;

    @Column()
    @IsNotEmpty({message : 'O nome do cliente é obrigatório'})
    @IsString({message : 'O nome do cliente deve ser uma string'})
    nomeCliente: string;

    @Column()
    @IsNotEmpty({message : 'O saldo é obrigatório'})
    @IsNumber()
    saldo: number;
}
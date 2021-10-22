import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ContaController } from "./conta.controller";
import { Conta } from "./conta.model";
import { ContaService } from "./conta.service";

@Module({
    imports : [TypeOrmModule.forFeature([Conta])],
    controllers : [ContaController],
    providers : [ContaService]
})
export class ContaModule{

}
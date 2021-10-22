import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Conta } from "./conta.model";
import { ContaService } from "./conta.service";

@Controller('contas')
export class ContaController{

    constructor (private contaService : ContaService){
    }

    @Get()
    listarContas(): Promise<Conta[]> {
        return this.contaService.listarContas();
    }

    @Get(':id')
    buscarConta(@Param() params): Promise<Conta> {
        return this.contaService.buscarConta(params);
    }

    @Post()
    criarConta(@Body() conta : Conta){
        this.contaService.criarConta(conta);
    }

    @Put()
    atualizarConta(@Body() conta : Conta)  {
        this.contaService.criarConta(conta);
    }

    @Delete(':id')
    apagarConta(@Param() params) : string {
        return this.contaService.apagarConta(params);
    }

}
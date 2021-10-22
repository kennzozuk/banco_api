import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Conta } from "./conta.model";

@Injectable()
export class ContaService{

    constructor(
        @InjectRepository(Conta)
        private contaRepository: Repository<Conta>,
      ) {}


    public listarContas(): Promise<Conta[]> {
        return this.contaRepository.find();
    }


    public buscarConta(id : string): Promise<Conta> {
        return this.contaRepository.findOne(id);
    }


    public criarConta(conta : Conta) {
       this.contaRepository.save(conta);
    }

    public async atualizarConta(conta : Conta) {
        this.contaRepository.update({id: conta.id}, conta);
    }

    apagarConta(id : string) : string {
        this.contaRepository.delete(id);
        return 'Deletado com sucesso!';
    }

}
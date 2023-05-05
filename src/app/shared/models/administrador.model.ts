import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Administrador { // corrigir estes atributos

    constructor(
        public id?: number,
        public conta?: string, //criar clase Conta? modulo para Conta?
        // public conta: Conta,
        public cliente?: Cliente,
        public gerente?: Gerente,
        // public movimentacao: Conta.movimentacao(),
        ){}
}

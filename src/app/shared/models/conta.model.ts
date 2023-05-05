import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

// export class Conta {
//     constructor(
//         public cliente?: Cliente,
//         public gerente?: Gerente,
//         public numeroConta?: String,
//         public dataCriacao?: String,
//         ){}

//     public calculaSaldo(){}
//     public calculaLimite(){}
//     public fazDeposito(){}
//     public fazSaque(){}
//     public fazTransferencia(){}
    
// }

export class Conta {
    constructor(
        public nomeCliente?: string,
        public cpfCliente?: string,
        public limiteCliente?: number,
        public nomeGerente?: string,
        public saldoCliente?: number,
        ){}
}

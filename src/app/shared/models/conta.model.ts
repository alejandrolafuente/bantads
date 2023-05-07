import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

// export class Conta {
//     constructor(
//         public id?: number,
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
        public id?: number,
        public numero?: number,
        public dataCriacao?: Date,
        public nomeCliente?: string, // Cliente
        public cpfCliente?: string, // Cliente
        public limiteCliente?: number,
        public nomeGerente?: string,
        public cpfGerente?: string, // Cliente
        public saldoCliente?: number,
        public salario?: number, // mais tarde importar a classe Cliente 
        public cidade?: string,
        public estado?: string
        ){}
}












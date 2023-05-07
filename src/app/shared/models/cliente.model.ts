import { Conta } from "./conta.model";
export class Cliente {
    constructor(
        public id?: number, // 
        public nome?: string,
        public email?: string,
        public cpf?: string, // vinculo com a conta?
        //public endereco?: string, // endereço eh uma classe separada?
        public cep?: string,
        public rua?: string,
        public bairro?: string,
        public numero?: number,
        public telefone?: string,
        public salario?: number,
       //public conta?: Conta // ==> Este atributo precisa se o cpf vincula com conta? 
        ){}
}

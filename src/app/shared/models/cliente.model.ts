export class Cliente {
    constructor(
        public id?: number, // 
        public nome?: string,
        public email?: string,
        public cpf?: string,
        public endereco?: string, // endereço eh uma classe separada?
        public telefone?: string,
        public salario?: number,
        ){}
}

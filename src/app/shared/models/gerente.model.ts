export class Gerente {
    constructor(
        public id?: number, // precisa de id para gerente?
        public nome?: string,
        public email?: string,
        public cpf?: string,
        public telefone?: string,
        public numeroClientes?: number,
        public totalSaldosPositivos?: number,
        public totalSaldosNegativos?: number,
        ){}
}

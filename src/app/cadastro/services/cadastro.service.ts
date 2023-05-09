import { Injectable } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';


const CHAVE_CLIENTE: string = "clientes";
const CHAVE_CONTA: string = "contas";

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor() { }

  listagemClientes(): Cliente[] {
    const clientes = localStorage[CHAVE_CLIENTE];
    return clientes ? JSON.parse(clientes) : [];
  }

  listagemContas(): Conta[] {
    const contas = localStorage[CHAVE_CONTA];
    return contas ? JSON.parse(contas) : [];
  }
  
  inserirSolicitacao(cliente: Cliente): void{
    const clientes = this.listagemClientes();
    cliente.id = new Date().getTime();
    clientes.push(cliente);
    localStorage[CHAVE_CLIENTE] = JSON.stringify(clientes);

    let conta = new Conta(new Date().getTime(), Math.floor(Math.random() * (100 - 1 + 1)) + 1, new Date, 
      cliente.nome, cliente.cpf, 0, "", "",cliente.salario,cliente.salario, cliente.cidade, cliente.estado);

    if (cliente.salario !== undefined &&  cliente.salario >= 2000) {
      conta.limiteCliente = cliente.salario / 2;
    }

    const contas = this.listagemContas();
    contas.push(conta);
    localStorage[CHAVE_CONTA] = JSON.stringify(contas);
  }

  buscarClientePorCPF(cpf: string): Cliente | undefined {
    const clientes: Cliente[] = this.listagemClientes();
    return clientes.find(cliente => cliente.cpf === cpf);
  }

  buscarContaPorCPF(cpf: string): Conta | undefined {
    const contas: Conta[] = this.listagemContas();
    return contas.find(conta => conta.cpfCliente === cpf);
  }

  removerConta(cpf: string): void { // remove a solicitação da tela do gerente
    let contas: Conta[] = this.listagemContas();

    contas = contas.filter(conta => conta.cpfCliente !== cpf);
    localStorage[CHAVE_CONTA] = JSON.stringify(contas);
  }

  removerCliente(cpf: string): void { // remove a solicitação da tela do gerente
    let clientes: Cliente[] = this.listagemClientes();

    clientes = clientes.filter(cliente => cliente.cpf !== cpf);
    localStorage[CHAVE_CLIENTE] = JSON.stringify(clientes);
  }
}

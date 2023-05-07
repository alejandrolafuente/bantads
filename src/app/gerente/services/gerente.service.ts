import { Injectable } from '@angular/core';
import { Conta, Cliente } from 'src/app/shared';

const CLIENTE: string = "clientesCriados";
const CONTA: string = "contasCriadas";

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  listagemClientes(): Cliente[] {
    const clientes = localStorage[CLIENTE];
    return clientes ? JSON.parse(clientes) : [];
  }

  // listagemContas(): Conta[] { // deve retornar um vetor ordenado
  //   const contas = localStorage[CONTA];
  //   return contas ? JSON.parse(contas) : [];
  // }

  listagemContas(): Conta[] { // deve retornar o vetor contas ordenado
    const contas = localStorage[CONTA];
    let nomes: string[] = [];
    let i: number = 0;
    for (const conta of contas) {
      nomes[i] = conta.nomeCliente;
      i++;
    }
    return contas ? JSON.parse(contas) : [];
  }

  inserirCliente(cliente: Cliente): void{
    const clientes = this.listagemClientes();
    clientes.push(cliente);
    localStorage[CLIENTE] = JSON.stringify(clientes);
  }

  inserirConta(conta: Conta): void{
    const contas = this.listagemContas();
    contas.push(conta);
    localStorage[CONTA] = JSON.stringify(contas);
  }
  
  removerCliente(cpf: string): void {
    let clientes: Cliente[] = this.listagemClientes();

    clientes = clientes.filter(cliente => cliente.cpf !== cpf);
    localStorage[CLIENTE] = JSON.stringify(clientes);
  }

  removerConta(cpf: string): void {
    let contas: Conta[] = this.listagemContas();

    contas = contas.filter(conta => conta.cpfCliente !== cpf);
    localStorage[CONTA] = JSON.stringify(contas);
  }
}

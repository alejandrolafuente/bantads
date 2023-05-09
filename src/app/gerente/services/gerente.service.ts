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

  listagemContas(): Conta[] {
    const contasString = localStorage[CONTA];
    let contas: Conta[] = [];
  
    if (contasString) {
      contas = JSON.parse(contasString);
  
      contas.sort((a, b) => {
        const nomeClienteA = a.nomeCliente || '';
        const nomeClienteB = b.nomeCliente || '';
  
        return nomeClienteA.localeCompare(nomeClienteB);
      });
    }
  
    return contas;
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

  buscarClientePorCPF(cpf: string): Cliente | undefined {
    const clientes: Cliente[] = this.listagemClientes();
    return clientes.find(cliente => cliente.cpf === cpf);
  }

  buscarContaPorCPF(cpf: string): Conta | undefined {
    const contas: Conta[] = this.listagemContas();
    return contas.find(conta => conta.cpfCliente === cpf);
  }

  listaTop3(): Conta[] {
    const contasString = localStorage[CONTA];
    let contas: Conta[] = [];
  
    if (contasString) {
      contas = JSON.parse(contasString);
  
      contas.sort((a, b) => {
        const saldoClienteA = a.saldoCliente?.toString();
        const saldoClienteB = b.saldoCliente?.toString();
  
        if (saldoClienteA === undefined && saldoClienteB === undefined) {
          return 0; // Se ambos forem undefined, consideramos como iguais
        } else if (saldoClienteA === undefined) {
          return -1; // Inverte a ordem para retornar em ordem decrescente
        } else if (saldoClienteB === undefined) {
          return 1; // Inverte a ordem para retornar em ordem decrescente
        } else {
          return saldoClienteB.localeCompare(saldoClienteA); // Inverte a ordem para retornar em ordem decrescente
        }
      });
    }
    return contas.slice(0, 3);;
  }
  
}

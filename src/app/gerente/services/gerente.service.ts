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

  listagemContas(): Conta[] {
    const contas = localStorage[CONTA];
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
  

  aprovaCliente(){}
  rejeitaCliente(){}
  consultaTodosClientes(){}
  consultaCliente(){}
  consultaTresMelhores(){}
}

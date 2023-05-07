import { Component, OnInit } from '@angular/core';
import { Conta, Cliente } from 'src/app/shared'; // no momento usaremos somente as contas
import { GerenteService } from '../services';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{

  contas: Conta[] = [];

  constructor(private gerenteService: GerenteService) {}

  ngOnInit(): void {
      this.contas = this.listarTodos();
  }

  listarTodos(): Conta[]{
    return this.gerenteService.listagemContas();
  }

  // o seguinte método remove a Conta e o Cliente do serviço do GERENTE
  // lembrando que esta conta removida é de um cliente que já havia sido aprovado no cadastro
  remover($event: any, conta: Conta): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o cliente ${conta.nomeCliente}?`)) {
      this.gerenteService.removerCliente(conta.cpfCliente!);
      this.gerenteService.removerConta(conta.cpfCliente!);
      this.contas = this.listarTodos();
    }
  }

}

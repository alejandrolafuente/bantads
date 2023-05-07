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

}

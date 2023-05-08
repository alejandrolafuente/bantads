import { Component, OnInit, ViewChild } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Conta, Cliente } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-ver-cliente',
  templateUrl: './ver-cliente.component.html',
  styleUrls: ['./ver-cliente.component.css']
})
export class VerClienteComponent implements OnInit {

  //@ViewChild ('dadosCliente') dadosCliente!: NgForm;
  contas: Conta[] = [];
  clientes: Cliente[] = [];
  conta!: Conta;
  cliente!: Cliente;

  constructor(
    private gerenteService: GerenteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contas = this.listarContas();
    this.clientes = this.listarClientes();
    let cpf = this.route.snapshot.params['cpf'];
    const res1 = this.gerenteService.buscarClientePorCPF(cpf);
    const res2 = this.gerenteService.buscarContaPorCPF(cpf);
    if (res1 !== undefined && res2 !== undefined ) {
      this.cliente = res1;
      this.conta = res2;
    }
    else {
      throw new Error ("Cliente  não encontrado: cpf = " + cpf);
    }
  }

  listarContas(): Conta[] {
    return this.gerenteService.listagemContas();
  }

  listarClientes(): Cliente[] {
    return this.gerenteService.listagemClientes();
  }
}

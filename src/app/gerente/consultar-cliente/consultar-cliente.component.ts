import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent{

  cpf: string = '';

  constructor(
    private router: Router
  ) { }


  public pesquisar() {
    this.router.navigate(["/gerente/ver-cliente/", this.cpf]);
  }

}

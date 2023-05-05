import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-listar-gerente',
  templateUrl: './listar-gerente.component.html',
  styleUrls: ['./listar-gerente.component.css']
})
export class ListarGerenteComponent implements OnInit{

  gerentes: Gerente [] = [];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
      this.gerentes = this.listar();
  }

  listar(): Gerente[]{ // precisa ser em ordem alfabética?
    return this.administradorService.listagemInicial();
  }

  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o gerente ${gerente.nome}?`)) {
      this.administradorService.removerGerente(gerente.id!);
      this.gerentes = this.listar();
    }
  }
}

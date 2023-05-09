import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-melhores-clientes',
  templateUrl: './melhores-clientes.component.html',
  styleUrls: ['./melhores-clientes.component.css']
})
export class MelhoresClientesComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.contas = this.listarMelhores();
  }


  listarMelhores(): Conta[] {
    return this.gerenteService.listaTop3();
  }
}

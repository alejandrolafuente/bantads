import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-emitir-relatorio',
  templateUrl: './emitir-relatorio.component.html',
  styleUrls: ['./emitir-relatorio.component.css']
})
export class EmitirRelatorioComponent implements OnInit{

  contas: Conta[] = [];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
      this.contas = this.listarTodos();
  }

//   export class Conta {
//     constructor(
//         public nomeCliente?: string,
//         public cpfCliente?: string,
//         public limiteCliente?: number,
//         public nomeGerente?: string,
//         public saldoCliente?: number,
//         ){}
// }

  listarTodos(): Conta[]{
    //return this.administradorService.emitirRelatorioClientes();
    return [
      new Conta("Razer", "52645874159", 2000, "Givanildo", -9000),
      new Conta("Bruna","05214589654", 4000, "Irandir", 489),
      new Conta("Guilherme", "06214754213", 750, "Janaína", 459),
      new Conta("Juan", "11457893258", 1000, "Jurema", -325)
    ]
  }
}

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
    return this.administradorService.emitirRelatorioClientes();
    // return [
    //   new Conta(1, 2, "02/02/2000", "Razer", "52645874159", 2000, "Givanildo", "12586245874", -9000),
    //   new Conta(2, "588.968-2", "12/12/1998", "Bruna","05214589654", 4000, "Irandir", "36526954781", 489),
    //   new Conta(3, "366.589-9", "15/01/2005", "Guilherme", "06214754213", 750, "Janaína", "03214260215", 459),
    //   new Conta(4, "355.664-7", "04/05/2001", "Juan", "11457893258", 1000, "Jurema", "63214005214", -325)
    // ]
  }
}

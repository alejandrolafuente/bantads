import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteService } from './services';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FazerDepositoComponent } from './fazer-deposito/fazer-deposito.component';
import { FazerSaqueComponent } from './fazer-saque/fazer-saque.component';
import { FazerTransferenciaComponent } from './fazer-transferencia/fazer-transferencia.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';
import { AlterarDadosComponent } from './alterar-dados/alterar-dados.component';

@NgModule({
  declarations: [
    HomeClienteComponent,
    FazerDepositoComponent,
    FazerSaqueComponent,
    FazerTransferenciaComponent,
    ConsultarExtratoComponent,
    AlterarDadosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }

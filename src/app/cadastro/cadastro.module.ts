import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirSolicitacaoComponent } from './inserir-solicitacao/inserir-solicitacao.component';
import { CadastroService } from './services/cadastro.service';



@NgModule({
  declarations: [
    InserirSolicitacaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CadastroService
  ]
})
export class CadastroModule { }

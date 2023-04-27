import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorService } from './services';
import { HomeAdministradorComponent } from './home-administrador';
import { ListarGerenteComponent } from './listar-gerente';
import { InserirGerenteComponent } from './inserir-gerente';
import { EditarGerenteComponent } from './editar-gerente';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmitirRelatorioComponent } from './emitir-relatorio';


@NgModule({
  declarations: [
    HomeAdministradorComponent,
    ListarGerenteComponent,
    InserirGerenteComponent,
    EditarGerenteComponent,
    EmitirRelatorioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AdministradorService
  ]
})
export class AdministradorModule { }

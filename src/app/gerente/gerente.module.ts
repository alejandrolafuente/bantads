import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsultarTodosClientesComponent } from './consultar-todos-clientes/consultar-todos-clientes.component';

@NgModule({
  declarations: [
    HomeGerenteComponent,
    ConsultarTodosClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }

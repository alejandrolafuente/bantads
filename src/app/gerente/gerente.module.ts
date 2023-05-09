import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { VerClienteComponent } from './ver-cliente/ver-cliente.component';
import { MelhoresClientesComponent } from './melhores-clientes/melhores-clientes.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';

@NgModule({
  declarations: [
    HomeGerenteComponent,
    ListarClientesComponent,
    VerClienteComponent,
    MelhoresClientesComponent,
    ConsultarClienteComponent
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

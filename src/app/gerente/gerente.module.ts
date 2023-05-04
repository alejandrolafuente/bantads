import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeGerenteComponent
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

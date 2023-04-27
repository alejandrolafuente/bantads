import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit{

  gerentes: Gerente [] = [];

  constructor(private administradorService: AdministradorService) {}

  ngOnInit(): void {
      this.gerentes = this.listagemInicial();
  }

  listagemInicial(): Gerente[]{
    //return this.administradorService.listagemInicial();
    return [
      new Gerente(1, "Razer", "razer@email.com", "", "9568", 60, 50, 10),
      new Gerente(2, "Bruna", "bruna@email.com", "", "9523", 58, 40, 18),
      new Gerente(3, "Guilherme", "gui@email.com", "", "9584", 96, 50, 46),
      new Gerente(4, "Juan", "juan@email.com", "", "9596", 115, 50, 75)
    ]
  }
}

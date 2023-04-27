import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';
import { Gerente } from 'src/app/shared';
import { AdministradorService } from '../services';

@Component({
  selector: 'app-editar-gerente',
  templateUrl: './editar-gerente.component.html',
  styleUrls: ['./editar-gerente.component.css']
})
export class EditarGerenteComponent implements OnInit{

  @ViewChild('formGerente') formGerente!: NgForm;
  gerente!: Gerente;

  constructor(
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.administradorService.buscarPorId(id);
    if (res !== undefined) {
      this.gerente = res;
    }
    else {
      throw new Error ("Gerente não encontrado: id = " + id);
    }
  }

  atualizar(): void {
    if (this.formGerente.form.valid){    
      this.administradorService.atualizarGerente(this.gerente);
      this.router.navigate(["/administrador/listar"]);
    }
    
  }
}

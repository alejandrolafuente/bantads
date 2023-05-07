import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { CadastroService } from '../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-solicitacao',
  templateUrl: './inserir-solicitacao.component.html',
  styleUrls: ['./inserir-solicitacao.component.css']
})
export class InserirSolicitacaoComponent implements OnInit {

  @ViewChild ('formCliente') formCliente!: NgForm;

  cliente! : Cliente;

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.cliente = new Cliente();
  }

  inserir(): void {
    if (this.formCliente.form.valid){
      this.cadastroService.inserirSolicitacao(this.cliente);
      this.router.navigate(["/login"]); // direcionar para pagina de mensagem + saida
    }
  }

}

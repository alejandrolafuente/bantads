import { Component, OnInit } from '@angular/core';
import { Cliente, Conta } from 'src/app/shared';
import { CadastroService } from 'src/app/cadastro/services/cadastro.service';
import { GerenteService } from '../services';

@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrls: ['./home-gerente.component.css']
})
export class HomeGerenteComponent implements OnInit {

  // constructor(private gerenteService: GerenteService) { }

  // ngOnInit(): void {
  //   this.contas = this.listarSolicitacoes();
  // }

  // listarSolicitacoes(): Conta[] {
  //   return this.gerenteService.listarPedidos();
  // return [
  //   new Conta(1, "366.790-1", "02/02/2000", "Razer", "52645874159",
  //     2000, "Givanildo", "12586245874", -9000, 1500),
  //   new Conta(2, "588.968-2", "12/12/1998", "Bruna", "05214589654",
  //     4000, "Irandir", "36526954781", 489, 4500),
  //   new Conta(3, "366.589-9", "15/01/2005", "Guilherme", "06214754213",
  //     750, "Janaína", "03214260215", 459, 15000),
  //   new Conta(4, "355.664-7", "04/05/2001", "Juan", "11457893258",
  //     1000, "Jurema", "63214005214", -325, 6000)
  // ]
  //}

  contas: Conta[] = [];


  constructor(private cadastroService: CadastroService,
    private gerenteService: GerenteService
  ) { }

  ngOnInit(): void {
    this.contas = this.listarSolicitacoes();

  }
  // lista as solicitações de abertura de conta, busca o vetor no serviço de cadastro
  listarSolicitacoes(): Conta[] {
    return this.cadastroService.listagemContas();
  }

  //insere num vetor provisório os clientes aprovados, este vetor fica no serviço do gerente,
  //são os clientes do gerente. Ao aprovar o novo cliente, retiramos o mesmo, no serviço do cadastro,  do vetor
  // contas (que sao as soli
  //citações) e do vetor clientes, ou seja duas exclusões. Ao mesmo tempo, devemos ter no serviço do gerente um
  //vetor contas e outro vetor clientes, onde adicionaremos cliente e conta. Já para o caso do cadastro ser recu-
  //sado, apenas o deletamos dos vetores clientes e contas no serviço de cadastro. No momento tentaremos usar o 
  //CPF como elemento chave de pesquisa nos vetores, e não o id 

  aprovar(cpf: string) {
    const cliente = this.cadastroService.buscarClientePorCPF(cpf);
    const conta = this.cadastroService.buscarContaPorCPF(cpf);

    if (cliente && conta) {
      this.gerenteService.inserirCliente(cliente);
      this.gerenteService.inserirConta(conta);
      this.cadastroService.removerConta(cpf); // Remove apenas no serviço de cadastro
      this.cadastroService.removerCliente(cpf); // Remove apenas no serviço de cadastro
      window.location.reload();
    }

  }

  recusar(cpf: string) {
      this.cadastroService.removerConta(cpf); // Remove do cadastro
      this.cadastroService.removerCliente(cpf); // Remove do cadastro
      window.location.reload();
  
  }

}

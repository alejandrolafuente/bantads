import { Injectable } from '@angular/core';
import { Gerente, Conta } from 'src/app/shared';


const LS_CHAVE: string = "gerentes"; // precisa desta chave?
const CHAVE_CONTA: string = "contas";

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor() { }

  listagemInicial(): Gerente[] {
    const gerentes = localStorage[LS_CHAVE];
    return gerentes ? JSON.parse(gerentes) : [];
  }
  inserirGerente(gerente: Gerente): void{
    const gerentes = this.listagemInicial();
    gerente.id = new Date().getTime();
    gerentes.push(gerente);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  buscarPorId(id: number): Gerente | undefined {
    const gerentes: Gerente[] = this.listagemInicial();
    return gerentes.find(gerente => gerente.id === id);
  }

  atualizarGerente(gerente: Gerente): void {
    const gerentes: Gerente[] = this.listagemInicial();

    gerentes.forEach(
      (obj, index, objs) => {
        if (gerente.id === obj.id) {
          objs[index] = gerente;
        }
      }
    );
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }


  removerGerente(id: number): void {
    let gerentes: Gerente[] = this.listagemInicial();

    gerentes = gerentes.filter(gerente => gerente.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  
  emitirRelatorioClientes(): Conta[] {
    const contas = localStorage[CHAVE_CONTA];
    return contas ? JSON.parse(contas) : [];
  }
  
}

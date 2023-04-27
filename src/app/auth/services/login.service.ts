import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario | null> {

    let usu = new Usuario(1, "Cliente", login.email, login.senha, "CLIENTE");

    if (login.email == login.senha) {

      if (login.email == "admin@email") {
        usu = new Usuario(1, "Administrador", login.email, login.senha, "ADMINISTRADOR");
      }
      else if (login.email == "ger@email") {
        usu = new Usuario(1, "Gerente", login.email, login.senha, "GERENTE");
      }
      return of(usu);
      
    }
    else {
      return of(null);
    }
  }
}

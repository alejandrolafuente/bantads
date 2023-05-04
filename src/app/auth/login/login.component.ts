import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Login } from 'src/app/shared';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  @ViewChild('formLogin') formLogin! : NgForm;
  
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) {
      if (this.loginService.usuarioLogado) {
        this.router.navigate( ["/home"] );
      }
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.message = params['error'];
    });
  }

  logar(): void {
      this.loading = true;
      if (this.formLogin.form.valid) {
        this.loginService.login(this.login).subscribe((usu) => {
          if (usu != null) {
            this.loginService.usuarioLogado = usu;
            this.loading = false;
            if (this.login.email == 'admin@email') {
              this.router.navigate( ["/administrador"] );
            } else if (this.login.email == 'cliente@email') {
              this.router.navigate( ["/cliente"] );
            } else if (this.login.email == 'gerente@email') 
              this.router.navigate( ["/gerente"] );
          }
          else {
            this.loading = false;
            this.message = "Usuário/Senha inválidos.";
          }
        });
      }
      
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './administrador';
import { ListarGerenteComponent } from './administrador';
import { InserirGerenteComponent } from './administrador';
import { EditarGerenteComponent } from './administrador';
import { LoginRoutes } from './auth/auth-routing.module';
import { EmitirRelatorioComponent } from './administrador';
import { AuthGuard } from './auth/auth.guard';
import { HomeClienteComponent } from './cliente/home-cliente/home-cliente.component';
import { HomeGerenteComponent } from './gerente/home-gerente/home-gerente.component';
import { FazerDepositoComponent } from './cliente/fazer-deposito/fazer-deposito.component';
import { FazerSaqueComponent } from './cliente/fazer-saque/fazer-saque.component';
import { FazerTransferenciaComponent } from './cliente/fazer-transferencia/fazer-transferencia.component';
import { ConsultarExtratoComponent } from './cliente/consultar-extrato/consultar-extrato.component';
import { AlterarDadosComponent } from './cliente/alterar-dados/alterar-dados.component';
import {ConsultarTodosClientesComponent} from "./gerente/consultar-todos-clientes/consultar-todos-clientes.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'administrador',
    redirectTo: 'administrador/home'
  },
  { path: 'administrador/home',
    component: HomeAdministradorComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMINISTRADOR'
    }
  },
  { path: 'administrador/listar',
    component: ListarGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMINISTRADOR'
    }
  },
  { path: 'administrador/novo',
    component: InserirGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMINISTRADOR'
    }
  },
  {
    path: 'administrador/editar/:id',
    component: EditarGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMINISTRADOR, GERENTE'
    }
  },
  { path: 'administrador/relatorio',
    component: EmitirRelatorioComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMINISTRADOR'
    }
  },
  // Rotas para o Cliente:
  { path: 'cliente',
    redirectTo: 'cliente/home'
  },
  { path: 'cliente/home',
    component: HomeClienteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/deposito',
    component: FazerDepositoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/saque',
    component: FazerSaqueComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/transferencia',
    component: FazerTransferenciaComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/extrato',
    component: ConsultarExtratoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  { path: 'cliente/alterar-dados',
    component: AlterarDadosComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  // Rotas para o Gerente:
  { path: 'gerente',
    redirectTo: 'gerente/home'
  },
  { path: 'gerente/home',
    component: HomeGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    }
  },
  { path: 'gerente/consultar-todos-clientes',
    component: ConsultarTodosClientesComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'GERENTE'
    }
  },


  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministradorComponent } from './administrador';
import { ListarGerenteComponent } from './administrador';
import { InserirGerenteComponent } from './administrador';  
import { EditarGerenteComponent } from './administrador';
import { LoginRoutes } from './auth/auth-routing.module';
import { EmitirRelatorioComponent } from './administrador';
import { AuthGuard } from './auth/auth.guard';

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
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

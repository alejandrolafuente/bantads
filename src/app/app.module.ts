import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { GerenteModule } from './gerente';
import { AdministradorModule } from './administrador';
import { AuthModule } from './auth';
import { SharedModule } from './shared';
import { HomeComponent } from './home';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    GerenteModule,
    AdministradorModule,
    AuthModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

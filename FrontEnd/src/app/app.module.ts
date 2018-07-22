import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormularioLoginComponent } from './formulario-login/formulario-login.component';
import { PerfilComponent } from './perfil/perfil.component';
import {FormsModule} from "@angular/forms";
import { PrincipalComponent } from './principal/principal.component';
import {RouterModule, Routes} from '@angular/router';
import { BotonComponent } from './boton/boton.component';
import { ModelpapaComponent } from './modelpapa/modelpapa.component';
import { ModelhijoComponent } from './modelhijo/modelhijo.component';
const appRoutes: Routes=[
  {
    path:'login',component:FormularioLoginComponent
  },
  {
    path:'principal',component: PrincipalComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }

]
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FormularioLoginComponent,
    PerfilComponent,
    PrincipalComponent,
    BotonComponent,
    ModelpapaComponent,
    ModelhijoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    ClientesComponent,
    ReservacionesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
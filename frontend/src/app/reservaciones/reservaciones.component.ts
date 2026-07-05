import { Component } from '@angular/core';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent {

  eventos = [
    {
      nombre: 'Concierto',
      ubicacion: 'Quito',
      descripcion: 'Música en vivo'
    },
    {
      nombre: 'Festival',
      ubicacion: 'Guayaquil',
      descripcion: 'Evento cultural'
    }
  ];

}
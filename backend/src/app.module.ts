import { Module } from '@nestjs/common';
import { EventosModule } from './eventos/eventos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ReservacionesModule } from './reservaciones/reservaciones.module';

@Module({
  imports: [
    EventosModule,
    ClientesModule,
    ReservacionesModule,
  ],
})
export class AppModule {}
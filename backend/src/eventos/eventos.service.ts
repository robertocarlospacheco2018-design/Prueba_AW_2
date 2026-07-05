import { Injectable } from '@nestjs/common';

@Injectable()
export class EventosService {
  private eventos = [];

  findAll() {
    return this.eventos;
  }

  create(evento: any) {
    this.eventos.push(evento);
    return evento;
  }
}

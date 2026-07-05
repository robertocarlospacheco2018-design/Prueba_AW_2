import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EventosService } from './eventos.service';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  // GET -> listar eventos
  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  // POST -> crear evento
  @Post()
  create(@Body() body: any) {
    return this.eventosService.create(body.nombre, body.descripcion, body.fecha, body.ubicacion);
  }

  // PUT -> actualizar evento
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.eventosService.update(id, body.nombre, body.descripcion, body.fecha, body.ubicacion);
  }

  // DELETE -> eliminar evento
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.eventosService.delete(id);
  }
}

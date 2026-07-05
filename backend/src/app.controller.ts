import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { ReservacionesService } from './reservaciones.service';

@Controller('reservaciones')
export class ReservacionesController {
  constructor(private readonly reservacionesService: ReservacionesService) {}

  @Get()
  async findAll() {
    return await this.reservacionesService.findAll();
  }

  @Post()
  async create(@Body() body: any) {
    const { evento_id, cliente_id } = body;
    return await this.reservacionesService.create(evento_id, cliente_id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.reservacionesService.delete(id);
  }
}
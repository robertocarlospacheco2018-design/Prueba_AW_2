import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ReservacionesService {
  constructor(private dataSource: DataSource) {}

  // Obtiene las reservaciones mostrando el nombre del cliente y del evento
  async findAll() {
    return this.dataSource.query(`
      SELECT r.reserva_id, r.fecha_reserva, 
             c.nombre AS cliente_nombre, c.apellido AS cliente_apellido, 
             e.nombre AS evento_nombre
      FROM reservaciones r
      INNER JOIN clientes c ON r.cliente_id = c.cliente_id
      INNER JOIN eventos e ON r.evento_id = e.evento_id
    `);
  }

  async create(evento_id: number, cliente_id: number) {
    return this.dataSource.query(
      'INSERT INTO reservaciones (evento_id, cliente_id, fecha_reserva) VALUES (?, ?, NOW())',
      [evento_id, cliente_id],
    );
  }

  async delete(id: number) {
    return this.dataSource.query('DELETE FROM reservaciones WHERE reserva_id = ?', [id]);
  }
}
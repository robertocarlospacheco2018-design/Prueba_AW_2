import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return this.dataSource.query('SELECT * FROM clientes');
  }

  async create(nombre: string, apellido: string, email: string, telefono: string) {
    return this.dataSource.query(
      'INSERT INTO clientes (nombre, apellido, email, telefono) VALUES (?, ?, ?, ?)',
      [nombre, apellido, email, telefono],
    );
  }

  async update(id: number, nombre: string, apellido: string, email: string, telefono: string) {
    return this.dataSource.query(
      'UPDATE clientes SET nombre=?, apellido=?, email=?, telefono=? WHERE cliente_id=?',
      [nombre, apellido, email, telefono, id],
    );
  }

  async delete(id: number) {
    return this.dataSource.query('DELETE FROM clientes WHERE cliente_id=?', [id]);
  }
}
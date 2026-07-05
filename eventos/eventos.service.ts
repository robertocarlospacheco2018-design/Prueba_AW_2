import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class EventosService {
	constructor(private dataSource: DataSource) {}

	async findAll() {
		return this.dataSource.query('SELECT * FROM eventos');
	}

	async create(nombre: string, descripcion: string, fecha: string, ubicacion: string) {
		return this.dataSource.query(
			'INSERT INTO eventos (nombre, descripcion, fecha, ubicacion) VALUES (?, ?, ?, ?)',
			[nombre, descripcion, fecha, ubicacion],
		);
	}

	async update(id: number, nombre: string, descripcion: string, fecha: string, ubicacion: string) {
		return this.dataSource.query(
			'UPDATE eventos SET nombre=?, descripcion=?, fecha=?, ubicacion=? WHERE evento_id=?',
			[nombre, descripcion, fecha, ubicacion, id],
		);
	}

	async delete(id: number) {
		return this.dataSource.query('DELETE FROM eventos WHERE evento_id=?', [id]);
	}
}

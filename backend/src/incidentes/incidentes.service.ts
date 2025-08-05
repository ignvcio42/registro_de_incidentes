import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Equal } from 'typeorm';
import { Incidente } from './incidente.entity';
import { CreateIncidenteDto } from './dto/create-incidente.dto';
import { ILike } from 'typeorm';

@Injectable()
export class IncidentesService {
  constructor(
    @InjectRepository(Incidente)
    private repo: Repository<Incidente>,
  ) {}

  create(dto: CreateIncidenteDto) {
    const incidente = this.repo.create(dto);
    return this.repo.save(incidente);
  }

  findAll() {
    return this.repo.find();
  }

  findByEstado(estado: string) {
    return this.repo.find({
      where: {
        estado: estado as 'abierto' | 'en_progreso' | 'cerrado',
      },
    });
  }

  findByEquipo(equipo_id: string) {
    return this.repo.find({
      where: {
        equipo_id: Equal(equipo_id),
      },
    });
  }

  findWithFilters(filters: { estado?: string; equipo_id?: string }) {
    const where: any = {};

    if (filters.estado) {
      where.estado = filters.estado.trim().toLowerCase() as
        | 'abierto'
        | 'en_progreso'
        | 'cerrado';
    }

    if (filters.equipo_id) {
      // Búsqueda insensible a mayúsculas y que permite subcadenas
      where.equipo_id = ILike(`%${filters.equipo_id.trim()}%`);
    }

    return this.repo.find({ where });
  }
}

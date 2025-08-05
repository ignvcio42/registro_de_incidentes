import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Incidente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fecha: string;

  @Column()
  descripcion: string;

  @Column()
  equipo_id: string;

  @Column()
  estado: 'abierto' | 'en_progreso' | 'cerrado';
}

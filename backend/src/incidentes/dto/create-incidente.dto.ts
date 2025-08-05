import { IsDateString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateIncidenteDto {
  @IsDateString()
  fecha: string;

  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  equipo_id: string;

  @IsIn(['abierto', 'en_progreso', 'cerrado'])
  estado: 'abierto' | 'en_progreso' | 'cerrado';
}

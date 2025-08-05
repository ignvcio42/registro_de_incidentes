import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { IncidentesService } from './incidentes.service';
import { CreateIncidenteDto } from './dto/create-incidente.dto';

@Controller('incidentes')
export class IncidentesController {
  constructor(private readonly service: IncidentesService) {}

  @Post()
  create(@Body() dto: CreateIncidenteDto) {
    return this.service.create(dto);
  }

  @Get()
  find(
    @Query('estado') estado?: string,
    @Query('equipo_id') equipo_id?: string,
  ) {
    return this.service.findWithFilters({ estado, equipo_id });
  }
}

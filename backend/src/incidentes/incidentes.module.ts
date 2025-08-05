import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidente } from './incidente.entity';
import { IncidentesService } from './incidentes.service';
import { IncidentesController } from './incidentes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Incidente])],
  controllers: [IncidentesController],
  providers: [IncidentesService],
})
export class IncidentesModule {}

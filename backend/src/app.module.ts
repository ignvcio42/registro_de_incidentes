import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidente } from './incidentes/incidente.entity';
import { IncidentesModule } from './incidentes/incidentes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Incidente],
      synchronize: true,
    }),
    IncidentesModule,
  ],
})
export class AppModule {}

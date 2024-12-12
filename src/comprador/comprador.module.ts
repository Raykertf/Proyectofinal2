import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorController } from './comprador.controller';
import { CompradorService } from './comprador.service';
import { Comprador } from './comprador.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Comprador])], // Importa el repositorio
  controllers: [CompradorController],
  providers: [CompradorService],
  exports: [CompradorService], // Exporta el servicio si se necesita en otros módulos
})
export class CompradorModule {}

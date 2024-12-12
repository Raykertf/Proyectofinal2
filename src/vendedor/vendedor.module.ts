import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorController } from './vendedor.controller';
import { VendedorService } from './vendedor.service';
import { Vendedor } from './vendedor.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])], // Importa el repositorio de Vendedor
  controllers: [VendedorController],
  providers: [VendedorService],
  exports: [VendedorService], // Exporta el servicio si es necesario en otros módulos
})
export class VendedorModule {}

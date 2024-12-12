import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Producto])], // Registra el repositorio de Producto
  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [ProductoService], // Exporta el servicio si se necesita en otros módulos
})
export class ProductoModule {}

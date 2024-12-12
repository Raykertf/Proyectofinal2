import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoHasProductoController } from './pedido-has-producto.controller';
import { PedidoHasProductoService } from './pedido-has-producto.service';
import { PedidoHasProducto } from './pedido-has-producto.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([PedidoHasProducto])], // Importa el repositorio de PedidoHasProducto
  controllers: [PedidoHasProductoController],
  providers: [PedidoHasProductoService],
  exports: [PedidoHasProductoService], // Exporta el servicio si es necesario en otros módulos
})
export class PedidoHasProductoModule {}

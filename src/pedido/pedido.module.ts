import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])], // Asegúrate de importar el repositorio aquí
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}

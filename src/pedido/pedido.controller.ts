import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Pedido> {
    return this.pedidoService.findOne(+id);
  }

  @Post()
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.create(pedido);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.update(+id, pedido);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.pedidoService.remove(+id);
  }
}

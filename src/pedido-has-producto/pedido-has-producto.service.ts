import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PedidoHasProducto } from './pedido-has-producto.entity';

@Injectable()
export class PedidoHasProductoService {
  constructor(
    @InjectRepository(PedidoHasProducto)
    private readonly pedidoHasProductoRepository: Repository<PedidoHasProducto>,
  ) {}

  findAll(): Promise<PedidoHasProducto[]> {
    return this.pedidoHasProductoRepository.find();
  }

  findOne(pedidoId: number, productoId: number): Promise<PedidoHasProducto> {
    return this.pedidoHasProductoRepository.findOneBy({
      pedido_idPedido: pedidoId,
      producto_idProducto: productoId,
    });
  }

  async create(pedidoHasProducto: PedidoHasProducto): Promise<PedidoHasProducto> {
    return this.pedidoHasProductoRepository.save(pedidoHasProducto);
  }

  async remove(pedidoId: number, productoId: number): Promise<void> {
    await this.pedidoHasProductoRepository.delete({ pedido_idPedido: pedidoId, producto_idProducto: productoId });
  }
}

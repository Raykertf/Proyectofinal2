import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  findOne(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOneBy({ idPedido: id });
  }

  create(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }

  async update(id: number, pedido: Pedido): Promise<Pedido> {
    await this.pedidoRepository.update(id, pedido);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}

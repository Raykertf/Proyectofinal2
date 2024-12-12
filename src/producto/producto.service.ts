import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOneBy({ idProducto: id });
  }

  create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async update(id: number, producto: Producto): Promise<Producto> {
    await this.productoRepository.update(id, producto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }

  async findByVendedorId(vendedorId: number): Promise<Producto[]> {
    // Se debe usar el campo correcto para buscar el vendedor
    return this.productoRepository.find({
        where: { vendedor: { idVendedor: vendedorId } }, // Asegúrate de que 'idVendedor' sea el campo correcto en tu entidad
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  findOne(id: number): Promise<Categoria> {
    return this.categoriaRepository.findOneBy({ idCategoria: id });
  }

  create(categoria: Categoria): Promise<Categoria> {
    return this.categoriaRepository.save(categoria);
  }

  async update(id: number, categoria: Categoria): Promise<Categoria> {
    await this.categoriaRepository.update(id, categoria);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.categoriaRepository.delete(id);
  }
}

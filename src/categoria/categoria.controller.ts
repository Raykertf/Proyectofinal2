import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll(): Promise<Categoria[]> {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Categoria> {
    return this.categoriaService.findOne(+id);
  }

  @Post()
  create(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.create(categoria);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(+id, categoria);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.categoriaService.remove(+id);
  }
}

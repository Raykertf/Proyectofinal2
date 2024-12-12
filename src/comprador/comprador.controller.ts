import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { Comprador } from './comprador.entity';

@Controller('compradores')
export class CompradorController {
  constructor(private readonly compradorService: CompradorService) {}

  @Get()
  findAll(): Promise<Comprador[]> {
    return this.compradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Comprador> {
    return this.compradorService.findOne(+id);
  }

  @Post()
  create(@Body() comprador: Comprador): Promise<Comprador> {
    return this.compradorService.create(comprador);
  }

  @Post()
  async createComprador(@Body() compradorDto: Partial<Comprador>): Promise<Comprador> {
    return await this.compradorService.create(compradorDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() comprador: Comprador): Promise<Comprador> {
    return this.compradorService.update(+id, comprador);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.compradorService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { Vendedor } from './vendedor.entity';

@Controller('vendedores')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Get()
  findAll(): Promise<Vendedor[]> {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Vendedor> {
    return this.vendedorService.findOne(+id);
  }

  @Post()
  async createVendedor(@Body() vendedorDto: Partial<Vendedor>): Promise<Vendedor> {
    return await this.vendedorService.create(vendedorDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() vendedor: Vendedor): Promise<Vendedor> {
    return this.vendedorService.update(+id, vendedor);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.vendedorService.remove(+id);
  }
}

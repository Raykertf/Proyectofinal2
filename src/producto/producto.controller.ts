import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto> {
    const producto = await this.productoService.findOne(+id);
    if (!producto) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }
    return producto;
  }

  @Post()
  async create(@Body() producto: Producto): Promise<Producto> {
    // Validar la existencia de vendedor y categoria aquí, si es necesario
    return this.productoService.create(producto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() producto: Producto): Promise<Producto> {
    const updatedProducto = await this.productoService.update(+id, producto);
    if (!updatedProducto) {
      throw new HttpException('Producto no encontrado para actualizar', HttpStatus.NOT_FOUND);
    }
    return updatedProducto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const result = await this.productoService.remove(+id);
    if (result === undefined) {
      throw new HttpException('Producto no encontrado para eliminar', HttpStatus.NOT_FOUND);
    }
  }

  @Get('vendedor/:id')
    async findByVendedorId(@Param('id') id: string): Promise<Producto[]> {
        const productos = await this.productoService.findByVendedorId(+id);
        if (!productos.length) {
            throw new HttpException('No se encontraron productos para este vendedor', HttpStatus.NOT_FOUND);
        }
      return productos;
  }
}

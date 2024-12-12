import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaController } from './categoria.controller';
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])], // Importa el repositorio de Categoria
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [CategoriaService], // Exporta el servicio si es necesario en otros módulos
})
export class CategoriaModule {}

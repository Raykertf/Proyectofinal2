import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompradorModule } from './comprador/comprador.module';
import { ProductoModule } from './producto/producto.module';
import { PedidoModule } from './pedido/pedido.module';
import { CategoriaModule } from './categoria/categoria.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { PedidoHasProductoModule } from './pedido-has-producto/pedido-has-producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: '127.0.0.1', // Cambia si usas un host diferente
      port: 3307, // Puerto por defecto de MySQL
      username: 'root', // Cambia esto por tu nombre de usuario
      password: 'rayker89', // Cambia esto por tu contraseña
      database: 'snackfast', // Nombre de tu base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ubicación de las entidades
      synchronize: false, // Solo para desarrollo; evita en producción
    }),
    AuthModule,
    CompradorModule,
    ProductoModule,
    PedidoModule,
    CategoriaModule,
    VendedorModule,
    PedidoHasProductoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

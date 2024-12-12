import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { VendedorModule } from '../vendedor/vendedor.module';
import { CompradorModule } from '../comprador/comprador.module';
import { VendedorService } from 'src/vendedor/vendedor.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET_KEY', // Usa una clave secreta segura
      signOptions: { expiresIn: '1h' },
    }),
    VendedorModule,
    CompradorModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

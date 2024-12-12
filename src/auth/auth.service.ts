import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { VendedorService } from '../vendedor/vendedor.service';
import { CompradorService } from '../comprador/comprador.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly vendedoresService: VendedorService,
    private readonly compradoresService: CompradorService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const vendedor = await this.vendedoresService.findByUsername(username);
    if (vendedor) {
      const isPasswordValid = await bcrypt.compare(password, vendedor.contrasena);
      if (!isPasswordValid) throw new UnauthorizedException('Credenciales incorrectas');
      return { ...vendedor, role: 'vendedor' };
    }
  
    const comprador = await this.compradoresService.findByUsername(username);
    if (comprador) {
      const isPasswordValid = await bcrypt.compare(password, comprador.contrasena);
      if (!isPasswordValid) throw new UnauthorizedException('Credenciales incorrectas');
      return { ...comprador, role: 'comprador' };
    }
  
    throw new UnauthorizedException('Usuario no encontrado');
  }
  

  generateJwt(payload: any): string {
    return this.jwtService.sign(payload);
  }
}

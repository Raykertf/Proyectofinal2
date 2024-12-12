import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { VendedorService } from '../vendedor/vendedor.service';
import { CompradorService } from 'src/comprador/comprador.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
    private readonly vendedorService: VendedorService,
    private readonly compradorService: CompradorService) {}

  @Post('login')
  async login(@Body() { username, password }: { username: string; password: string }) {
    const user = await this.authService.validateUser(username, password);
    const payload = { username: user.usuario, role: user.role };
    const token = this.authService.generateJwt(payload);
    return { token, role: user.role };
  }
  
  @Post('register-vendedor')
  async registerVendedor(@Body() vendedorDto: { nombre_usuario: string; contrasena: string; correo: string; telefono: string }) {
    console.log('Contraseña recibida en el controlador:', vendedorDto.contrasena);  // Verificar la contraseña que se recibe
    const newVendedor = await this.vendedorService.create(vendedorDto);
    return { message: 'Vendedor registrado exitosamente', vendedor: newVendedor };
  }

  @Post('register-comprador')
  async registerComprador(@Body() compradorDto: { nombre_usuario: string; contrasena: string; correo: string; direccion: string; telefono: string; referencia_direccion:string }) {
    console.log('Contraseña recibida en el controlador:', compradorDto.contrasena);  // Verificar la contraseña que se recibe
    const newComprador = await this.compradorService.create(compradorDto);
    return { message: 'Vendedor registrado exitosamente', comprador: newComprador };
  }


}


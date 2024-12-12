import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from './vendedor.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  findAll(): Promise<Vendedor[]> {
    return this.vendedorRepository.find();
  }

  findOne(id: number): Promise<Vendedor> {
    return this.vendedorRepository.findOneBy({ idVendedor: id });
  }

  async create(vendedorDto: Partial<Vendedor>): Promise<Vendedor> {
    // Verificamos que la contraseña esté presente
    if (!vendedorDto.contrasena) {
      throw new Error('La contraseña es requerida');
    }

    // Generar un salt
    const salt = await bcrypt.genSalt(10);
    console.log('Salt generado:', salt);  // Verificar que el salt se genera correctamente

    // Verificar que el vendedorDto contiene una contraseña válida
    console.log('Contraseña antes de hash:', vendedorDto.contrasena);

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(vendedorDto.contrasena, salt);
    console.log('Contraseña cifrada:', hashedPassword);  // Verificar que la contraseña se cifra correctamente

    // Crear el nuevo vendedor con la contraseña cifrada
    const newVendedor = this.vendedorRepository.create({
      ...vendedorDto,
      contrasena: hashedPassword,  // Asignar la contraseña cifrada
    });

    // Guardar el vendedor en la base de datos
    return await this.vendedorRepository.save(newVendedor);
  }
  

  async update(id: number, vendedor: Vendedor): Promise<Vendedor> {
    await this.vendedorRepository.update(id, vendedor);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.vendedorRepository.delete(id);
  }

  async findByUsername(username: string): Promise<Vendedor | null> {
    return await this.vendedorRepository.findOne({
      where: { usuario: username },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprador } from './comprador.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompradorService {
  constructor(
    @InjectRepository(Comprador)
    private readonly compradorRepository: Repository<Comprador>,
  ) {}

  findAll(): Promise<Comprador[]> {
    return this.compradorRepository.find();
  }

  findOne(id: number): Promise<Comprador> {
    return this.compradorRepository.findOneBy({ idComprador: id });
  }


  async create(compradorDto: Partial<Comprador>): Promise<Comprador> {
    // Verificamos que la contraseña esté presente
    if (!compradorDto.contrasena) {
      throw new Error('La contraseña es requerida');
    }

    // Generar un salt
    const salt = await bcrypt.genSalt(10);
    console.log('Salt generado:', salt);  // Verificar que el salt se genera correctamente

    // Verificar que el vendedorDto contiene una contraseña válida
    console.log('Contraseña antes de hash:', compradorDto.contrasena);

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(compradorDto.contrasena, salt);
    console.log('Contraseña cifrada:', hashedPassword);  // Verificar que la contraseña se cifra correctamente

    // Crear el nuevo vendedor con la contraseña cifrada
    const newVendedor = this.compradorRepository.create({
      ...compradorDto,
      contrasena: hashedPassword,  // Asignar la contraseña cifrada
    });

    // Guardar el vendedor en la base de datos
    return await this.compradorRepository.save(newVendedor);
  }

  async update(id: number, comprador: Comprador): Promise<Comprador> {
    await this.compradorRepository.update(id, comprador);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.compradorRepository.delete(id);
  }

  async findByUsername(username: string): Promise<Comprador | null> {
    return await this.compradorRepository.findOne({
      where: { usuario: username },
    });
  }
}

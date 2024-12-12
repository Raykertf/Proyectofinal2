import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity'; // Asegúrate de que la ruta sea correcta

@Entity('Comprador')
export class Comprador {
  @PrimaryGeneratedColumn()
  idComprador: number;

  @Column({ length: 45 })
  usuario: string;

  @Column({ length: 45 })
  contrasena: string;

  @Column({ nullable: true, length: 45 })
  correo: string;

  @Column({ nullable: true, length: 45 })
  direccion: string;

  @Column({ nullable: true, length: 45 })
  telefono: string;

  @Column({ nullable: true, length: 45 })
  referencia_direccion: string;

  @OneToMany(() => Pedido, (pedido) => pedido.comprador)
  pedidos: Pedido[]; // Asegúrate de que esta propiedad esté bien definida
  
}

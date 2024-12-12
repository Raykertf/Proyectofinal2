import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../producto/producto.entity'; // Asegúrate de que la ruta sea correcta

@Entity('Vendedor') // Opcionalmente, puedes especificar el nombre de la tabla
export class Vendedor {
  @PrimaryGeneratedColumn()
  idVendedor: number;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  @Column({ nullable: true })
  correo: string;

  @Column({ nullable: true })
  telefono: string;

  @OneToMany(() => Producto, (producto) => producto.vendedor) // Relación con Producto
  productos: Producto[]; // Esto permitirá acceder a los productos de un vendedor
}

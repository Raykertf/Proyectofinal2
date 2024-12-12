import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../producto/producto.entity'; // Asegúrate de que la ruta sea correcta

@Entity('Categoria') // Opcionalmente, puedes especificar el nombre de la tabla
export class Categoria {
  @PrimaryGeneratedColumn()
  idCategoria: number;

  @Column()
  nombre: string;

  @OneToMany(() => Producto, (producto) => producto.categoria) // Relación con Producto
  productos: Producto[]; // Esto permitirá acceder a los productos de una categoría
}

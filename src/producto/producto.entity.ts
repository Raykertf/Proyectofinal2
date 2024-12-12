import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Vendedor } from '../vendedor/vendedor.entity'; // Asegúrate de que la ruta sea correcta
import { Categoria } from '../categoria/categoria.entity';

@Entity('Producto') // Asegúrate de que el nombre de la tabla coincide con la base de datos
export class Producto {
  @PrimaryGeneratedColumn({ name: 'idProducto' }) // Cambia el nombre de la columna si es necesario
  idProducto: number;

  @Column({ type: 'varchar', length: 45 }) // Tipo y longitud según tu base de datos
  nombre: string;

  @Column({ type: 'varchar', length: 100, nullable: true }) // Tipo y longitud según tu base de datos
  descripcion: string;

  @Column('decimal', { precision: 5, scale: 2 }) // Tipo decimal con precisión y escala
  precio: number;

  @ManyToOne(() => Vendedor, (vendedor) => vendedor.productos, { nullable: true })
  @JoinColumn({ name: 'vendedor_idVendedor' }) // Nombre de la columna en la base de datos
  vendedor: Vendedor;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos, { nullable: true })
  @JoinColumn({ name: 'categoria_idCategoria' }) // Nombre de la columna en la base de datos
  categoria: Categoria;
}

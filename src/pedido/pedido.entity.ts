import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Comprador } from '../comprador/comprador.entity';

@Entity('Pedido') // Especifica el nombre de la tabla
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column()
  estado: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
  total: number;

  @ManyToOne(() => Comprador, (comprador) => comprador.pedidos, { nullable: true })
  @JoinColumn({ name: 'Comprador_idComprador' }) // Cambia el nombre de la columna de la relación
  comprador: Comprador; // Relación con Comprador

  @Column({ name: 'Comprador_idComprador', nullable: true }) // Define explícitamente el nombre de la columna
  compradorId: number; // Esta propiedad puede ayudar con la serialización
}

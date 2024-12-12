import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Pedido_has_Producto')
export class PedidoHasProducto {
  @PrimaryColumn()
  pedido_idPedido: number;

  @PrimaryColumn()
  producto_idProducto: number;

  @Column()
  cantidad: number;
}

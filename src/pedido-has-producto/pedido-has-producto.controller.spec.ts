import { Test, TestingModule } from '@nestjs/testing';
import { PedidoHasProductoController } from './pedido-has-producto.controller';

describe('PedidoHasProductoController', () => {
  let controller: PedidoHasProductoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidoHasProductoController],
    }).compile();

    controller = module.get<PedidoHasProductoController>(PedidoHasProductoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

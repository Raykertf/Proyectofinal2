import { Test, TestingModule } from '@nestjs/testing';
import { PedidoHasProductoService } from './pedido-has-producto.service';

describe('PedidoHasProductoService', () => {
  let service: PedidoHasProductoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidoHasProductoService],
    }).compile();

    service = module.get<PedidoHasProductoService>(PedidoHasProductoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

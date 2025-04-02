import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from 'src/entities/pedido.enity';

@Controller('pedido') // Define a rota base como /Pedidos
export class PedidoController {
  constructor(private readonly PedidoService: PedidoService) {}

  @Post()
  create(@Body() data: Partial<Pedido>): Promise<Pedido> {
    return this.PedidoService.create(data);
  }

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.PedidoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Pedido | null> {
    return this.PedidoService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Pedido>,
  ): Promise<Pedido | null> {
    return this.PedidoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.PedidoService.delete(id);
  }
}

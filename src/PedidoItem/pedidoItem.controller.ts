import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PedidoItensService } from './pedidoItem.service';
import { PedidoItens } from 'src/entities/pedidoItens.enity';

@Controller('pedidoItens') // Define a rota base como /PedidoItenss
export class PedidoItensController {
  constructor(private readonly PedidoItensService: PedidoItensService) {}

  @Post()
  create(@Body() data: Partial<PedidoItens>): Promise<PedidoItens> {
    return this.PedidoItensService.create(data);
  }

  @Get()
  findAll(): Promise<PedidoItens[]> {
    return this.PedidoItensService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<PedidoItens | null> {
    return this.PedidoItensService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<PedidoItens>,
  ): Promise<PedidoItens | null> {
    return this.PedidoItensService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.PedidoItensService.delete(id);
  }
}

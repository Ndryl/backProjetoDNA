import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from 'src/entities/produto.enity';

@Controller('produto') // Define a rota base como /Produtos
export class ProdutoController {
  constructor(private readonly ProdutoService: ProdutoService) {}

  @Post()
  create(@Body() data: Partial<Produto>): Promise<Produto> {
    return this.ProdutoService.create(data);
  }

  @Get()
  findAll(): Promise<Produto[]> {
    return this.ProdutoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Produto | null> {
    return this.ProdutoService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Produto>,
  ): Promise<Produto | null> {
    return this.ProdutoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ProdutoService.delete(id);
  }
}

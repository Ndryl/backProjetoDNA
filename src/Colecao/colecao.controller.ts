import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ColecaoService } from './colecao.service';
import { Colecao } from 'src/entities/colecao.enity';

@Controller('colecao') // Define a rota base como /Colecaos
export class ColecaoController {
  constructor(private readonly ColecaoService: ColecaoService) {}

  @Post()
  create(@Body() data: Partial<Colecao>): Promise<Colecao> {
    return this.ColecaoService.create(data);
  }

  @Get()
  findAll(): Promise<Colecao[]> {
    return this.ColecaoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Colecao | null> {
    return this.ColecaoService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Colecao>,
  ): Promise<Colecao | null> {
    return this.ColecaoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.ColecaoService.delete(id);
  }
}

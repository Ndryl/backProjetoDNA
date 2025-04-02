import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PostoService } from './posto.service';
import { Posto } from 'src/entities/posto.enity';

@Controller('postos') // Define a rota base como /postos
export class PostoController {
  constructor(private readonly PostoService: PostoService) {}

  @Post()
  create(@Body() data: Partial<Posto>): Promise<Posto> {
    return this.PostoService.create(data);
  }

  @Get()
  findAll(): Promise<Posto[]> {
    return this.PostoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Posto | null> {
    return this.PostoService.findById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Posto>,
  ): Promise<Posto | null> {
    return this.PostoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.PostoService.delete(id);
  }
}

import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FreezerModel } from 'src/models/freezers.model';
import { FreezerSchema } from 'src/schemas/freezer.schema';
import { Repository } from 'typeorm';

@Controller('/db/freezers')
export class FreezerController {
  constructor(
    @InjectRepository(FreezerModel) private model: Repository<FreezerModel>,
  ) {}

  @Post()
  public async create(@Body() body: FreezerSchema): Promise<FreezerModel> {
    const dataFreezer = await this.model.save(body);
    return dataFreezer;
  }

  @Get(':id')
  public async getOne(@Param('id') id: number): Promise<FreezerModel> {
    const getById = await this.model.findOne({ where: { id } });
    return getById;
  }

  @Get()
  public async getAll(): Promise<FreezerModel[]> {
    const allData = await this.model.find();
    return allData;
  }

  @Put(':id')
  public async update(
    @Param('id') id: number,
    @Body() body: FreezerSchema,
  ): Promise<any> {
    const freezerUpdated = await this.model.update({ id }, body);
    return { data: freezerUpdated };
  }

  @Delete(':id')
  public delete(): any {
    return { data: 'Credeleteate!!' };
  }
}

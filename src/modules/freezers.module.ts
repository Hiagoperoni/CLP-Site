import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreezerController } from 'src/controllers/freezers.controller';
import { FreezerModel } from 'src/models/freezers.model';

@Module({
  imports: [TypeOrmModule.forFeature([FreezerModel])],
  controllers: [FreezerController],
})
export class FreezerModule {}

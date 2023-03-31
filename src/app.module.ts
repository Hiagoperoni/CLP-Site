import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FreezerController } from './controllers/freezers.controller';
import { databaseProviders } from './database.providers';
import { FreezerModule } from './modules/freezers.module';
import { FreezerModel } from './models/freezers.model';

@Module({
  providers: [...databaseProviders, AppService],
  exports: [...databaseProviders],
  controllers: [AppController],
  imports: [TypeOrmModule.forFeature([FreezerModel])],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoaderService } from './service/loader.service';
import { ConsumerService } from './service/consumer.service';
import { ConsumerController } from './controller/loader-controller';
import { PostgresService } from './service/postgres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { CarbonControllerController } from './controller/carbon-controller.controller';
import { CarbonLatest } from './model/carbon-latest.entity';
import { CarbonHist } from './model/carbon-hist.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([CarbonHist]),
    TypeOrmModule.forFeature([CarbonLatest]),
  ],
  controllers: [ConsumerController, CarbonControllerController],
  providers: [LoaderService, ConsumerService, PostgresService],
})
export class AppModule {}

import { Body, Controller, Get, Param, Post, Res, UseFilters } from '@nestjs/common';
import { Response } from 'express';
import { ConsumerDto } from 'src/dto/consumer.dto';
import { GlobalExceptionFilter } from 'src/error/GlobalExceptionFilter';
import { CarbonHist } from 'src/model/carbon-hist.entity';
import { CarbonLatest } from 'src/model/carbon-latest.entity';
import { PostgresService } from 'src/service/postgres.service';
import { QueryFailedError } from 'typeorm';

@Controller('carbon')
export class CarbonControllerController {
  constructor(private readonly postgresService: PostgresService) {}

  @Get('/latest')
  async getAllLatest(): Promise<CarbonLatest[]> {
    return this.postgresService.getAllLatest();
  }

  @Get(':id')
  async getAllForId(@Param('id') id: string) {
    return this.postgresService.getAllForId(id);
  }

  @Post()
  @UseFilters(new GlobalExceptionFilter())
  async postCarbonEntity(@Body() carbonDto: ConsumerDto) {
    return this.postgresService.saveFromDto(carbonDto);
  }
}

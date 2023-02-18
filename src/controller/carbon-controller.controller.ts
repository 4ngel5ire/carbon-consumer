import { Controller, Get, Param } from '@nestjs/common';
import { CarbonLatest } from 'src/model/carbon-latest.entity';
import { PostgresService } from 'src/service/postgres.service';

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
}

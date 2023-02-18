import { Controller, Get, Param } from '@nestjs/common';
import { ConsumerService } from '../service/consumer.service';
import { LoaderService } from '../service/loader.service';

@Controller('carbon-consumer')
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService, private readonly loaderService: LoaderService) {}

  @Get('file')
  startLoadFromFile() {
    return this.loaderService.startBulkLoad();
  }

  @Get(':id')
  async getStatistics(@Param('id') id: string) {
    return this.consumerService.getCarbonStatistic(id);
  }
}

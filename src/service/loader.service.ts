import { Injectable } from '@nestjs/common';
import { createInterface } from 'node:readline';
import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { ConsumerService } from './consumer.service';
import { ConsumerDto } from '../dto/consumer.dto';
import { ConsumerError } from '../error/ConsumerError';
import { PostgresService } from './postgres.service';

@Injectable()
export class LoaderService {
  constructor(private readonly carbonConsumerService: ConsumerService, private readonly pgService: PostgresService) {}

  async startBulkLoad() {
    const rl = createInterface({
      input: createReadStream(join(__dirname, '..', 'data', 'initial-list.txt')),
    });

    let index = 0;
    rl.on('line', async (line) => {
      this.throttleCarbinFetch(line, index);
      index++;
    });
  }

  private throttleCarbinFetch(url: string, index: number) {
    return setTimeout(() => this.handleResult(this.carbonConsumerService.getCarbonStatistic(url)), 3000 * index);
  }

  private async handleResult(carbonResult: Promise<ConsumerDto>) {
    try {
      const dto = await carbonResult;
      console.log(`Fetched results for addres: ${dto.url}...`);

      this.pgService.saveFromDto(dto);
    } catch (error) {
      if (error instanceof ConsumerError) error.printWarning();
      else console.error(error);
    }
  }
}

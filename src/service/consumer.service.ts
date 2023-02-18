import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { ConsumerDto } from '../dto/consumer.dto';
import { ConsumerError } from '../error/ConsumerError';

@Injectable()
export class ConsumerService {
  constructor(private configService: ConfigService) {}
  CARBON_API = this.configService.get<string>('WEB_CARBON');

  async getCarbonStatistic(url: string): Promise<ConsumerDto> {
    const response = await axios
      .get<ConsumerDto>(this.CARBON_API + url)
      .catch((err) => {
        throw new ConsumerError(`Error: Couldn\'t fetch from: ${url}`, url);
      });

    if (!response || typeof response === 'number')
      throw new ConsumerError(`Error: Couldn\'t fetch from: ${url}`, url);
    return response.data;
  }
}

import { randomUUID } from 'crypto';
import { CarbonHist } from 'src/model/carbon-hist.entity';

export class ConsumerDto {
  url: string;
  green: boolean;
  bytes: number;
  cleanerThan: number;
  statistics: Statistics;
  timestamp: number;
}

class Statistics {
  adjustedBytes: number;
  energy: number;
  co2: {
    grid: {
      grams: number;
      litres: number;
    };
    renewable: {
      grams: number;
      litres: number;
    };
  };
}

import { ConsumerDto } from 'src/dto/consumer.dto';
import { ColumnNumericTransformer } from 'src/helper/column-numeric-transformer';
import { Column, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class CarbonEntity extends BaseEntity {
  @Column({ name: 'date_ts' })
  dateTs: number;

  @Column({ name: 'address', primary: true })
  address: string;

  @Column({ name: 'green_flag' })
  greenFlag: boolean;

  @Column({ name: 'bytes', type: 'numeric', precision: 2, scale: 2, transformer: new ColumnNumericTransformer() })
  bytes: number;

  @Column({ name: 'cleaner_percent', type: 'numeric', precision: 2, scale: 2, transformer: new ColumnNumericTransformer() })
  cleanerPercent: number;

  @Column({ name: 'energy', type: 'numeric', precision: 2, scale: 2, transformer: new ColumnNumericTransformer() })
  energy: number;

  @Column({ name: 'c02_grid_grams', type: 'numeric', precision: 2, scale: 2, transformer: new ColumnNumericTransformer() })
  c02GridGrams: number;

  @Column({ name: 'c02_renewable_grams', type: 'numeric', precision: 2, scale: 2, transformer: new ColumnNumericTransformer() })
  c02RenewableGrams: number;

  constructor(dto: ConsumerDto) {
    super();
    if (dto) {
      this.dateTs = dto.timestamp;
      this.address = dto.url;
      this.greenFlag = dto.green;
      this.bytes = dto.bytes;
      this.cleanerPercent = dto.cleanerThan;
      this.energy = dto.statistics.energy;
      this.c02GridGrams = dto.statistics.co2.grid.grams;
      this.c02RenewableGrams = dto.statistics.co2.renewable.grams;
    }
  }
}

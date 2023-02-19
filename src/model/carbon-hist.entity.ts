import { randomUUID } from 'crypto';
import { ConsumerDto } from 'src/dto/consumer.dto';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CarbonEntity } from './carbon.entity';

@Entity({ name: 'carbon_hist' })
export class CarbonHist extends CarbonEntity {
  @Column({ name: 'id', primary: true })
  id: string;

  constructor(dto: ConsumerDto) {
    super(dto);
    this.id = randomUUID();
  }
}

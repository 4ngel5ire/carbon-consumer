import { ConsumerDto } from 'src/dto/consumer.dto';
import { Column, Entity } from 'typeorm';
import { CarbonEntity } from './carbon.entity';

@Entity({ name: 'carbon_latest' })
export class CarbonLatest extends CarbonEntity {
  @Column({ name: 'latest_id', foreignKeyConstraintName: 'xfk_carbon_id' })
  latest_id: string;

  constructor(dto: ConsumerDto, uuid: string) {
    super(dto);
    this.latest_id = uuid;
  }
}

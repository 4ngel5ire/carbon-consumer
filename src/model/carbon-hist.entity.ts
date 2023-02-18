import { Column, Entity, PrimaryColumn } from 'typeorm';
import { CarbonEntity } from './carbon.entity';

@Entity({ name: 'carbon_hist' })
export class CarbonHist extends CarbonEntity {
  @Column({ name: 'id', primary: true })
  latest_id: string;
}

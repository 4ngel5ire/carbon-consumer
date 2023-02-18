import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarbonHist } from 'src/model/carbon-hist.entity';
import { CarbonLatest } from 'src/model/carbon-latest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostgresService {
  constructor(
    @InjectRepository(CarbonHist) private readonly histRepo: Repository<CarbonHist>,
    @InjectRepository(CarbonLatest) private readonly latestRepo: Repository<CarbonLatest>
  ) {}

  public async getAllLatest() {
    return await this.latestRepo.find();
  }

  public async getAllForId(id: string) {
    return await this.histRepo.find({ where: { address: id } });
  }
}

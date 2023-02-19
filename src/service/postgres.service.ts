import { Injectable, UseFilters } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConsumerDto } from 'src/dto/consumer.dto';
import { GlobalExceptionFilter } from 'src/error/GlobalExceptionFilter';
import { CarbonHist } from 'src/model/carbon-hist.entity';
import { CarbonLatest } from 'src/model/carbon-latest.entity';
import { QueryFailedError, Repository } from 'typeorm';

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

  public async saveFromDto(consumerDto: ConsumerDto) {
    const hist = new CarbonHist(consumerDto);
    await this.histRepo.save(hist);

    const latest = new CarbonLatest(consumerDto, hist.id);
    await this.latestRepo.save(latest);

    console.log('succesfully persisted items...\n');
    return latest;
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { NearbyPlacesService } from './nearby-places.service';

describe('NearbyPlacesService', () => {
  let service: NearbyPlacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NearbyPlacesService],
    }).compile();

    service = module.get<NearbyPlacesService>(NearbyPlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NearbyPlacesResolver } from './nearby-places.resolver';

describe('NearbyPlacesResolver', () => {
  let resolver: NearbyPlacesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NearbyPlacesResolver],
    }).compile();

    resolver = module.get<NearbyPlacesResolver>(NearbyPlacesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { NearbyPlacesResolver } from './nearby-places.resolver';
import { HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NearbyPlacesService } from './nearby-places.service';
import { of } from "rxjs";

describe('NearbyPlacesResolver', () => {
  let resolver: NearbyPlacesResolver;
  let service: NearbyPlacesService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      providers: [NearbyPlacesResolver, NearbyPlacesService],
    }).compile();

    resolver = module.get<NearbyPlacesResolver>(NearbyPlacesResolver);
    service = module.get<NearbyPlacesService>(NearbyPlacesService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);

    jest.spyOn(configService, 'get').mockImplementation(key => key);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('responds with the service return', () => {
    const serviceResult = [
      {
        id: '4e9313198231bf0d17a65375',
        name: 'Testing Venue',
        formattedAddress: [
          '9999 Test Road',
          'Testing City, UT 90909',
          'Test States of Development',
        ],
      },
    ];

    jest.spyOn(service, 'searchByLocation').mockImplementationOnce(() => Promise.resolve(serviceResult));

    const location = 'Vancouver, BC';
    const response = resolver.getPlaces(location);

    expect(service.searchByLocation).toHaveBeenCalledWith(location);
    expect(response).resolves.toEqual(serviceResult);
  });

  it('bubbles services exception up', () => {
    const errorMessage = 'Testy Error bubbled up';
    jest.spyOn(service, 'searchByLocation').mockImplementationOnce(() => Promise.reject(errorMessage));

    const location = 'Vancouver, BC';

    expect(resolver.getPlaces(location)).rejects.toEqual(errorMessage);
    expect(service.searchByLocation).toHaveBeenCalledWith(location);
  });
});

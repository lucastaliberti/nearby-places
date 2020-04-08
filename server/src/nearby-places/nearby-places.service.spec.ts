import { throwError, of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/common';
import {
  FoursquareAPIError,
  NearbyPlacesService,
} from './nearby-places.service';

describe('NearbyPlacesService', () => {
  let service: NearbyPlacesService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      providers: [NearbyPlacesService],
    }).compile();

    service = module.get<NearbyPlacesService>(NearbyPlacesService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);

    jest.spyOn(configService, 'get').mockImplementation(key => key);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should parse the response correctly', async () => {
    const result: AxiosResponse = {
      data: {
        response: {
          venues: [
            {
              id: '4e9313198231bf0d17a65375',
              name: 'Testing Venue',
              location: {
                formattedAddress: [
                  '9999 Test Road',
                  'Testing City, UT 90909',
                  'Test States of Development',
                ],
              },
            },
          ],
        },
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(result));

    const response = await service.searchByLocation('Vancouver, BC');

    expect(httpService.get).toHaveBeenCalledWith(
      'https://api.foursquare.com/v2/venues/search',
      {
        params: {
          client_id: 'FOURSQUARE_CLIENT_ID',
          client_secret: 'FOURSQUARE_CLIENT_SECRET',
          near: 'Vancouver, BC',
          v: 'FOURSQUARE_API_DATE',
        },
      },
    );

    expect(response).toMatchInlineSnapshot(`
      Array [
        Object {
          "formattedAddress": Array [
            "9999 Test Road",
            "Testing City, UT 90909",
            "Test States of Development",
          ],
          "id": "4e9313198231bf0d17a65375",
          "name": "Testing Venue",
        },
      ]
    `);
  });

  it('should throw a custom error if the request fails', () => {
    const errorDetail = 'Testy Error';

    jest.spyOn(httpService, 'get').mockImplementationOnce(() =>
      throwError({
        response: {
          data: {
            meta: {
              errorDetail,
            },
          },
        },
      }),
    );

    expect(service.searchByLocation('Vancouver, BC')).rejects.toThrow(
      new FoursquareAPIError(errorDetail),
    );
  });
});

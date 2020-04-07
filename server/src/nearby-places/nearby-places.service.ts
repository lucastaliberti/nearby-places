import { HttpService, Injectable } from '@nestjs/common';
import { Place } from '../graphql';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NearbyPlacesService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  private baseUrl = 'https://api.foursquare.com/v2/';

  private endpoints = {
    search: 'venues/search',
  };

  public async searchByLocation(geocodableLocation: string): Promise<Place[]> {
    const client_id = this.configService.get('FOURSQUARE_CLIENT_ID');
    const client_secret = this.configService.get('FOURSQUARE_CLIENT_SECRET');
    const v = this.configService.get('FOURSQUARE_API_DATE');
    const url = this.getEndpoint('search');

    try {
      const {
        data: { response },
      } = await this.httpService
        .get(url, {
          params: {
            client_id,
            client_secret,
            near: geocodableLocation,
            v,
          },
        })
        .toPromise();

      return NearbyPlacesService.convertVenuesToPlaces(response.venues);
    } catch (e) {
      throw new FoursquareAPIError(e.response.data.meta.errorDetail);
    }
  }

  private static convertVenuesToPlaces(venues: Venue[]): Place[] {
    return venues.map(venue => ({
      id: venue.id,
      name: venue.name,
      formattedAddress: venue.location.formattedAddress,
    }));
  }

  private getEndpoint(endpoint: string): string {
    return `${this.baseUrl}${this.endpoints[endpoint]}`;
  }
}

type Venue = {
  id: string;
  name: string;
  location: {
    formattedAddress: [string];
  };
};

class FoursquareAPIError extends Error {}

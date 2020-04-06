import { Injectable } from '@nestjs/common';
import { Place } from "../graphql";

@Injectable()
export class NearbyPlacesService {
  public searchByLocation(geocodableLocation: string): Promise<[Place]> {
    console.log(geocodableLocation);
    return Promise.resolve([{id: '1' , name: 'place'}])
  }
}

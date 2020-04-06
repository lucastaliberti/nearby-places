import { Args, Query, Resolver } from "@nestjs/graphql";
import { NearbyPlacesService } from "./nearby-places.service";
import { Place } from "../graphql";

@Resolver('NearbyPlaces')
export class NearbyPlacesResolver {
  constructor(
    private nearbyPlacesService: NearbyPlacesService,
  ) {}

  @Query()
  async getPlaces(@Args('geocodableLocation') location: string) {
    return this.nearbyPlacesService.searchByLocation(location);
  }
}

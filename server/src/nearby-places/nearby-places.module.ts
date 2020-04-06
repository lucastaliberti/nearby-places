import { Module } from '@nestjs/common';
import { NearbyPlacesResolver } from './nearby-places.resolver';
import { NearbyPlacesService } from './nearby-places.service';

@Module({
  providers: [NearbyPlacesResolver, NearbyPlacesService]
})
export class NearbyPlacesModule {}

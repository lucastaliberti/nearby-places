import { HttpModule, Module } from "@nestjs/common";
import { NearbyPlacesResolver } from './nearby-places.resolver';
import { NearbyPlacesService } from './nearby-places.service';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  providers: [NearbyPlacesResolver, NearbyPlacesService]
})
export class NearbyPlacesModule {}

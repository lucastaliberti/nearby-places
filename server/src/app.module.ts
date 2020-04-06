import * as path from "path";
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { NearbyPlacesModule } from './nearby-places/nearby-places.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: path.join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    NearbyPlacesModule,
  ],
})
export class AppModule {}

import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import configuration from '../config/configuration';
import { NearbyPlacesModule } from './nearby-places/nearby-places.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        debug: configService.get('env') === 'development',
        playground: configService.get('env') === 'development',
        typePaths: ['./**/*.graphql'],
        definitions: {
          path: path.join(process.cwd(), 'src/graphql.ts'),
        },
      }),
      inject: [ConfigService],
    }),
    NearbyPlacesModule,
  ],
})
export class AppModule {}

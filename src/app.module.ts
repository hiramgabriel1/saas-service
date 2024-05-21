import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './configuration/config';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      load: [config],
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 12,
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

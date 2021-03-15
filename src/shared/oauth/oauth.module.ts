import { Module } from '@nestjs/common';
import { OauthController } from './oauth.controller';
import { ClientController } from './client.controller';

@Module({
  controllers: [OauthController, ClientController]
})
export class OauthModule {}

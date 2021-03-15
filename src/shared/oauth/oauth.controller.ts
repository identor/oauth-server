import {
  Controller,
  Get,
  NotImplementedException,
  Post,
  Query
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OAuthAuthorizeDto } from '../dto/oauth-authorize.dto';

@ApiTags('OAuth2.0')
@Controller('oauth')
export class OauthController {
  @Post('token')
  token() {}

  @ApiResponse({
    status: 302,
    headers: {
      Location: {
        description: `client's redirection endpoint from redirect_uri query parameter`,
        schema: { type: 'string' },
      },
    },
  })
  @Get('authorize')
  authorize(@Query() query: OAuthAuthorizeDto) {
    throw new NotImplementedException();
  }
}

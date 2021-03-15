import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export enum GrantType {
  Code = 'code',
  Token = 'token',
}

export class OAuthAuthorizeDto {
  @ApiProperty({ enum: Object.values(GrantType) })
  response_type: GrantType;

  @ApiPropertyOptional()
  client_id: string;

  @ApiPropertyOptional()
  client_secret: string;

  @ApiPropertyOptional()
  redirect_uri: string;

  @ApiPropertyOptional()
  state: string;
}

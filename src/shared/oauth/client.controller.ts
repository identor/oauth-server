import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Client')
@Controller('clients')
export class ClientController {
  @Post()
  register() {
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { MessageGateway } from './message.gateway';

@Controller('idk')
export class MessageController {
  constructor(private readonly messageGateway: MessageGateway) {}

  @Post()
  sendMessage(@Body() data: { message: string }): string {
    return this.messageGateway.handleMessage(data.message);
  }
}

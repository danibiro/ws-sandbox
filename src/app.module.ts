import { Module } from '@nestjs/common';
import { MessageGateway } from './message/message.gateway';
import { MessageController } from './message/message.controller';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [MessageGateway],
})
export class AppModule {}

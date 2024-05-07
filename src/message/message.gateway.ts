import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  cors: '*',
})
export class MessageGateway {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): string {
    return `henlo from ${data}`;
  }
}

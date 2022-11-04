import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway(3003, {
  cors: ['*', 'https://nest.networkmanager.pl'],
})
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  async handleMessage(
    @MessageBody() message: string,
  ): Promise<void> {
    this.server.emit('message', message);
  }
}

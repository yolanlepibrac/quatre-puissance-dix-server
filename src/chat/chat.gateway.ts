import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({ pingTimeout: 6000 })
export class ChatGateway {
  @WebSocketServer() server: Server;
  users: number = 0;

  /* async handleConnection() {
    // A client has connected
    this.users++;

    // Notify connected clients of current users
    this.server.emit('users', this.users);
  }

  async handleDisconnect() {
    // A client has disconnected
    this.users--;

    // Notify connected clients of current users
    this.server.emit('users', this.users);
  } */

  @SubscribeMessage('msgToServer')
  async handleMessage(client: Socket, payload: any) {
    this.server.emit(payload.email1, payload);
    this.server.emit(payload.email2, payload);
  }
}

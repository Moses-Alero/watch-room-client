import { Socket } from 'socket.io-client';

const room = {
  name: 'test',
  owner: '',
};
export class SocketEventHandler {
  socket!: Socket;

  constructor(socket: Socket) {
    this.socket = socket;
  }

  createRoom() {
    room.owner = this.socket.id;
    this.socket.emit('create-room', room, (response: string) => {
      console.log(response);
    });
  }

  joinRoom(roomId: string) {
    this.socket.emit(
      'join-room',
      { roomId, userId: this.socket.id },
      (response: string) => {
        console.log(response);
      }
    );
  }

  getRooms() {
    this.socket.emit('get-rooms', (response: any) => {
      localStorage.setItem('rooms', JSON.stringify(response));
      console.log('response', response);
    });
  }
}

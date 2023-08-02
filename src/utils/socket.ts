import { SocketEventHandler } from './eventHandlers';
import { io } from 'socket.io-client';

export const createSocketConnection = () => {
  const socket = io('http://localhost:8080/watch-room', {
    withCredentials: true,
    extraHeaders: {
      'my-custom-header': 'abcd',
    },
    auth: {
      token: 'myToken',
    },
    transports: ['websocket'],
  });

  const eventHandler = new SocketEventHandler(socket);
  socket.on('connect', () => {
    console.log('has connected to socket connection');
  });

  socket.on('disconnect', () => {
    console.log('has disconnected from socket connection');
  });
  return eventHandler;
};

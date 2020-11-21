import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

import {Handler, AppComponent} from '../app/app.component'
import {UserService} from '../app/user.service'

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket: any; 
  constructor(private userService: UserService) { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT)
    this.socket.emit("my message", "\t" + this.userService.name + ' connected!');
  }

  public sendMessage(message: string) {
    this.socket.emit("my message", this.userService.name + ": " + message)
  }

  public registerEventHandler(event: string, callback: Handler) {
    this.socket.on(event, callback); 
  }
}

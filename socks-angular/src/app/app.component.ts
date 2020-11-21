import { Component } from '@angular/core';
import { SocketioService } from './socketio.service';
import { UserService } from "./user.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'socks sample';

  constructor(private socketService: SocketioService, public userService: UserService){
  }

  public hello() {
    this.socketService.sendMessage("Hello, world!")
  }

  ngOnInit() {
    this.userService.generateName()
    this.socketService.setupSocketConnection();
  }
}
export interface Handler {
  (data: string): void;
}

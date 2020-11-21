import { ViewChild, AfterViewInit, Component, OnInit } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'chat-viewer',
  templateUrl: './chatviewer.component.html',
  styleUrls: ['./chatviewer.component.sass']
})
export class ChatviewerComponent implements AfterViewInit  {
  @ViewChild('term', { static: true }) child?: NgTerminal;

  constructor(private socketService: SocketioService){
  }

  ngAfterViewInit(){
    this.child?.underlying.resize(15, 15);
    this.socketService.registerEventHandler("message", (data: string)=> {
      this.child?.write(' '+data+'\r\n');
    })
  }

}

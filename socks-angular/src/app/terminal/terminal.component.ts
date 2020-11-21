import { ViewChild, AfterViewInit, Component, OnInit } from '@angular/core';
import { NgTerminal } from 'ng-terminal';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'my-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.sass']
})
export class TerminalComponent implements AfterViewInit {
  @ViewChild('term', { static: true }) child?: NgTerminal;

  constructor(private socketService: SocketioService){
  }

  ngAfterViewInit(){
    this.child?.underlying.resize(15, 5);
    this.child?.write('> ');
    this.child?.keyEventInput.subscribe(e => {
      console.log('keyboard event:' + e.domEvent.keyCode + ', ' + e.key);
 
      const ev = e.domEvent;
      const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
 
      if (this.child && ev.keyCode === 13) {
        let text = this.child.underlying.buffer.active.getLine(0)?.translateToString(true);
        text = text? text.substr(2) : "";
        this.child.underlying.reset();
        this.child?.write('> ');
        this.socketService.sendMessage(text);
      } else if (ev.keyCode === 8) {
        // Do not delete the prompt
        if (this.child && this.child?.underlying.buffer.active.cursorX > 2) {
          this.child?.write('\b \b');
        }
      } else if (printable) {
        this.child?.write(e.key);
      }
    })
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketioService } from './socketio.service';
import { NgTerminalModule } from 'ng-terminal';
import { TerminalComponent } from './terminal/terminal.component';
import { ChatviewerComponent } from './chatviewer/chatviewer.component'

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    ChatviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTerminalModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

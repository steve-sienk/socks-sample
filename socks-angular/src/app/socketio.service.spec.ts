import { TestBed } from '@angular/core/testing';

import { SocketioService } from './socketio.service';

describe('SocketioService', () => {
  let service: SocketioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setup the socket connection', ()=> {
    service.setupSocketConnection()
    expect(service.socket).not.toBeNull()
  })
});

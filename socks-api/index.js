const app = require('express')();
const http = require('http').createServer(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PUT", "HEAD", "OPTIONS", "DELETE"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('my message', (msg) => {
    console.log('message: ' + msg);
    io.emit('message', msg);
  });
});

http.listen(port, () => {
  console.log('listening on *:'+port);
});

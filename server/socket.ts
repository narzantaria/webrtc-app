import { io } from ".";

interface Signal {
  operation: 'join' | 'offer' | 'answer' | 'ice';
  source?: string;
  target: string;
  data: any;
}

io.on("connection", (socket) => {
  socket.on("server", (arg: Signal) => {
    console.log(arg)
    if(arg.operation==='join') {
      socket.join(arg.target);
    }
    if(arg.operation==='offer' || arg.operation==='answer' || arg.operation==='ice') {
      console.log(arg.operation);
      io.to(arg.target).emit(arg.target, arg)
    }
  });
});

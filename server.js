import { Server } from "socket.io";

const io = new Server({
  cors: { origin: "*" }
});

const roomsState = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinGame", ({ room }) => {
    socket.join(room);
    if (!roomsState[room]) roomsState[room] = {};
    roomsState[room][socket.id] = { currentRoom: 0, inventory: [] };
    io.to(room).emit("stateUpdate", roomsState[room]);
  });

  socket.on("nextRoom", ({ room, item }) => {
    const player = roomsState[room][socket.id];
    if (item) player.inventory.push(item);
    player.currentRoom++;
    io.to(room).emit("stateUpdate", roomsState[room]);
  });

  socket.on("disconnect", () => {
    for (const room in roomsState) {
      delete roomsState[room][socket.id];
      io.to(room).emit("stateUpdate", roomsState[room]);
    }
    console.log("User disconnected:", socket.id);
  });
});

io.listen(3001);
console.log("Socket.IO server running on port 3001");

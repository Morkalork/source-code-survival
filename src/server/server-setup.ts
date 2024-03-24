// server.ts
import { Express } from "express";
import http from "http";
import { Server } from "socket.io";

export const serverSetup = (app: Express) => {
  const server = http.createServer(app);
  const io = new Server(server);

  // Handle Socket.IO connections
  io.on("connection", (socket) => {
    console.log("A user connected");

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });

  // Start the server
  const PORT = process.env.PORT || 5173;
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const chooseGreeting = require("./utils/notifications");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = "TalkyTalk Bot";

// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    let greeting = chooseGreeting(user.room);

    // switch (user.room) {
    //   case "English":
    //     greeting = "Welcome to TalkyTalk!";
    //     break;
    //   case "Polish":
    //     greeting = "Witamy w TalkyTalk!";
    //     break;
    //   case "Russian":
    //     greeting = "Добро пожаловать в TalkyTalk!";
    //     break;
    //   case "German":
    //     greeting = "Willkommen bei TalkyTalk!";
    //     break;
    //   case "French":
    //     greeting = "Bienvenue sur TalkyTalk!";
    //     break;
    //   case "Spanish":
    //     greeting = "Bienvenidos a TalkyTalk!";
    //     break;
    //   case "Korean":
    //     greeting = "TalkyTalk에 오신 것을 환영합니다!";
    //     break;
    //   case "Japanese":
    //     greeting = "TalkyTalkへようこそ!";
    //     break;
    //   case "Chinese":
    //     greeting = "您好，欢迎来到TalkyTalk!";
    //     break;
    //   default:
    //     greeting = "Welcome to TalkyTalk!";
    // }

    // Welcome current user
    socket.emit("message", formatMessage(botName, greeting));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

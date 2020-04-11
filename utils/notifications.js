function chooseGreeting(roomName) {
  let greeting = "";

  switch (roomName) {
    case "English":
      greeting = "Welcome to TalkyTalk!";
      break;
    case "Polish":
      greeting = "Witamy w TalkyTalk!";
      break;
    case "Russian":
      greeting = "Добро пожаловать в TalkyTalk!";
      break;
    case "German":
      greeting = "Willkommen bei TalkyTalk!";
      break;
    case "French":
      greeting = "Bienvenue sur TalkyTalk!";
      break;
    case "Spanish":
      greeting = "Bienvenidos a TalkyTalk!";
      break;
    case "Korean":
      greeting = "TalkyTalk에 오신 것을 환영합니다!";
      break;
    case "Japanese":
      greeting = "TalkyTalkへようこそ!";
      break;
    case "Chinese":
      greeting = "您好，欢迎来到TalkyTalk!";
      break;
    default:
      greeting = "Welcome to TalkyTalk!";
  }

  return greeting;
}

function chooseJoinMsg(roomName) {
  let joinMsg = "";

  switch (roomName) {
    case "English":
      joinMsg = "has joined the chat";
      break;
    case "Polish":
      joinMsg = "dołącza do konwersacji";
      break;
    case "Russian":
      joinMsg = "присоединяется к чату";
      break;
    case "German":
      joinMsg = "ist dem Chat beigetreten";
      break;
    case "French":
      joinMsg = "a rejoint la discussion";
      break;
    case "Spanish":
      joinMsg = "Bienvenidos a TalkyTalk!";
      break;
    case "Korean":
      joinMsg = "님이 입장합니다";
      break;
    case "Japanese":
      joinMsg = "がチャットに参加しました!";
      break;
    case "Chinese":
      joinMsg = "加入聊天室";
      break;
    default:
      joinMsg = "has joined the chat";
  }

  return joinMsg;
}

function chooseDisconMsg(roomName) {
  let disconMsg = "";

  switch (roomName) {
    case "English":
      disconMsg = "has left the chat";
      break;
    case "Polish":
      disconMsg = "opuszcza konwersację";
      break;
    case "Russian":
      disconMsg = "покидает чат";
      break;
    case "German":
      disconMsg = "hat den Chat verlassen";
      break;
    case "French":
      disconMsg = "quitté la discussion";
      break;
    case "Spanish":
      disconMsg = "ha abandonado el chat";
      break;
    case "Korean":
      disconMsg = "님이 퇴장합니다";
      break;
    case "Japanese":
      disconMsg = "が退出しました";
      break;
    case "Chinese":
      disconMsg = "已离开聊天室";
      break;
    default:
      disconMsg = "has left the chat";
  }

  return disconMsg;
}

module.exports = { chooseGreeting, chooseJoinMsg, chooseDisconMsg };

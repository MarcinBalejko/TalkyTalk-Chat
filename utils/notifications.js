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

module.exports = chooseGreeting;

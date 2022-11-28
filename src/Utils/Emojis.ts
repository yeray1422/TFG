const getEmoji = (emoji: string) => {
  switch (emoji) {
    case "CONSTRUIBLES":
      return "⚒️";
    case "SHIELD":
      return "🛡️";
    case "ROBOT":
      return "🤖";
    case "GUN":
      return "🔫";
    case "EASTER_EGG":
      return "🌟";
    case "SWORD":
      return "⚔️";
    case "RITUAL":
      return "♍";
  }
};

export default getEmoji;

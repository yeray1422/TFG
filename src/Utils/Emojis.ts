const getEmoji = (emoji: string) => {
  switch (emoji) {
    case "CONSTRUIBLES":
      return "⚒️";
    case "EASTER_EGG":
      return "🌟";
    case "EASTER_EGG2":
      return "⭐";
    case "SHIELD":
      return "🛡️";
    case "ROBOT":
      return "🤖";
    case "GUN":
      return "🔫";
    case "SWORD":
      return "⚔️";
    case "RITUAL":
      return "♍";
  }
};

export default getEmoji;

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const bot = new TelegramBot('6631000897:AAFmL1ZHyIKRMs0eou-vZy4gnP6RkUeb1ww', {polling: true});

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send back the chat id
  bot.sendMessage(chatId, 'Chat ID is: ' + chatId);
});

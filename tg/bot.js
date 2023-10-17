const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const bot = new TelegramBot('env-token', {polling: true});

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send back the chat id
  bot.sendMessage(chatId, 'Chat ID is: ' + chatId);
});

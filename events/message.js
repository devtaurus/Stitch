const prefix = process.env.PREFIX;
const db = require("quick.db")
const ayarlar = require('../ayarlar.json');

module.exports = (client, message) => {
  if (message.author.bot) return;
  if (message.channel.type == "dm") return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  const msgArr = message.content.split(/\s+/g);
  const command = msgArr[0];
  const args = msgArr.slice(1)
  const params = message.content.split(' ').slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = client.commands.get(command.slice(prefix.length));
  
  if (cmd) cmd.run(client, message, args, params);
};
const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageeEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı ', '`kick` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimi sunucudan atacağını yazmalısın.').catch(console.error);
  if (reason.length < 1) return message.reply('Sunucudan atma sebebini yazmalısın.');

  if (!message.guild.member(user).kickable) return message.reply('Yetkilileri sunucudan atamam.');
  message.guild.member(user).kick();

  const embed = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sunucudan Atma')
    .addField('Atılan Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Atan Yetkili:', `${message.author.username}#${message.author.discriminator}`)
    .addField('Atma Sebebi: ', reason);
  client.channels.cache.get("895223272659103826").send(`**Eylem:', 'Sunucudan Atma**\n\n  Atılan Kullanıcı:', ${user.username}#${user.discriminator} (${user.id}) \n\n Atan Yetkili:', ${message.author.username}#${message.author.discriminator} \n\n Atma Sebebi: ', reason)`)
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at'],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
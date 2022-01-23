const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! ')

  const kanal = message.mentions.channels.first()
  
  if (!kanal)  {
    return message.channel.send(`Bu Özelliği Ayarlamam İçin Bir Kanal Etiketlemelisin \`s!korumalog #kanal\``)
  }
  message.channel.send(`Koruma Kayıt Kanalını ${kanal} Olarak Ayarladım.`)
  db.set(`korumaLog_${message.guild.id}`, kanal.id)
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'korumalog',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};
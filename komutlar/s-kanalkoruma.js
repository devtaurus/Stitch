const discord = require("discord.js");
const db = require('quick.db');

exports.run = async(client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yönetici yetkisi gerekmektedir.')
  
  const data = args.slice().join(' ')
  if(!data) return message.channel.send('s!kanalkoruma aç / kapat')
  
  else{
    if(data === 'aç') {
      await db.set(`kanalkoruma_${message.guild.id}`, 'acik')
      message.channel.send('**Kanal Koruma Sistemi Açık**')
      
     if(data === 'kapat') {
      await db.set(`kanalkoruma_${message.guild.id}`, 'kapali')
      message.channel.send('**Kanal Koruma Sistemi Kapalı**')
     }
    }  
  }

};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "kanalkoruma" //Komutun adı (Komutu girerken lazım olucak)
};
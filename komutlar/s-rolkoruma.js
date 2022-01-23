const Discord = require("discord.js");
const db = require('wio.db');

exports.run = async(client, message, args) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yönetici yetkisi gerekmektedir.')
  
  const cevap = args.slice().join(' ')
  if(!cevap) return message.channel.send('s!rolkoruma aç / kapat')
  
  else{
    if(cevap === 'aç') {
      await db.set(`rolkoruma_${message.guild.id}`, 'acik')
      message.channel.send('**Rol Koruma Sistemi Açık**')
      
     if(cevap === 'kapat') {
      await db.set(`rolkoruma_${message.guild.id}`, 'kapali')
      message.channel.send('**Rol Koruma Sistemi Kapalı**')
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
  name: "rolkoruma" //Komutun adı (Komutu girerken lazım olucak)
};
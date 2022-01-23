const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
 if(message.author.id !== "452355894408380419")  return message.channel.send("Sahibim değisilsin hadi işine paşam")
  
  let x = client.ws.ping + 20
  
let dcs = new Discord.MessageEmbed()
  .setTitle('Reboot')
  .setDescription("<a:ykleniyorr:905811553406844948> Şu an **Stitch**'i yeniden başlatmak üzeresin.")
  .addField('<:sarnoktack:905811550898638909>Şu anki Ping Değeri:', '**'+client.ws.ping+'** ms!')
  .addField('<:sarnoktack:905811550898638909>Reboot Sonrası Ping Değeri:', '**'+x+'** ms!')
  .addField('<a:dnenayarlar:905811554350551140>__SEÇENEKLER__', '**iptal** `/` **devam**')
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setColor('RED')
message.channel.send(dcs).then(m => {
  
      let filtre = mes => mes.author.id === message.author.id;    
  message.channel.awaitMessages(filtre, {
          max: 1,
          time: 20000,
          errors: ["time"]
        })
        .then(collected => {
   if(collected.first().content === "iptal") {
 collected.first().delete()
 m.delete()
 message.reply('**<a:onayland_:906293396610621530> İşlemi iptal ettim.**')    
     
   }
   if(collected.first().content === "devam") {
 collected.first().delete()
let discordcodeshare = new Discord.MessageEmbed()
  .setTitle('**<:alert0:933035712838791189> Proje Yeniden Başlatıldı**')
  .setDescription("<a:onayland_:906293396610621530> Reboot işlemi başarılı.")
  .setFooter(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setColor('GREEN')
 m.edit(discordcodeshare)
 
  setTimeout(() => {
   
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
 }, 2000)      
     
   }    

    
    
  })
   
  
  
  
})
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['reboot'], 
  permLevel: 0
};

exports.help = {
  name: 'adminreset',
  description: 'taslak', 
  usage: 'refresh'
};
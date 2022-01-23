const Discord = require('discord.js')
const db = require('orio.db')

exports.run = async (client, message, args) => {




    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın!");

    let log = message.mentions.channels.first();
    let logkanal = await db.get(`dcslog_${message.guild.id}`)
      
    if (args[0] === "sıfırla" || args[0] === "deaktif") {
    if(!logkanal) {
      
    let dcs1 = new Discord.MessageEmbed()
    .setDescription(`Mesaj Log Kanalı Zaten ayarlı değil`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs1)
    }
        
    db.delete(`dcslog_${message.guild.id}`)
      
    let dcs = new Discord.MessageEmbed()
    
    .setDescription(`Mesaj Log Kanalı başarıyla sıfırlandı`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs)
    }
      
    if (!log) {
      
    let dcs4 = new Discord.MessageEmbed()
    
    .setDescription(`Bir mesaj log kanalı belirt`)
    .setColor("RANDOM")
    
    return message.channel.send(dcs4)
    }
    
    db.set(`dcslog_${message.guild.id}`, log.id)
    
    let dcs2 = new Discord.MessageEmbed()
    
    .setDescription(`Mesaj log kanalı başarıyla ${log} olarak ayarlandı`)
    .setColor("RANDOM")
    
    message.channel.send(dcs2);
    






};
    exports.conf = {
        enabled: true,
        guildOnly: false, 
        aliases: [], 
        permLevel: 0 
      };
      
      exports.help = {
        name: 'mesajlog',
        description: 'Shows all commands.',
        usage: 'help'
      };
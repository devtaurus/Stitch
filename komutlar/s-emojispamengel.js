const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
 if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":no_entry: Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
 if(!args[0]) return message.channel.send("**Bir işlem belirtmelisin: aç/kapat**")
   if(args[0] === "kapat"|| args[0] ==="close"){
     let emoji = db.get(`options.${message.guild.id}.emojiFilter`)
  if(!emoji) return message.channel.send("**Emoji spam engel zaten ayarlanmamış.**")
  db.delete(`options.${message.guild.id}.emojiFilter`)
message.channel.send("**Emoji spam engel başarıyla sıfırlandı.**")
   }else{
    if(args[0] ==="aç" || args[0] ==="open"){
      
      let emojis =db.get(`options.${message.guild.id}.emojiFilter`)
   if(emojis)return message.channel.send("**Emoji spam engel zaten ayarlı.**") 
      db.set(`options.${message.guild.id}.emojiFilter`, true)
   message.channel.send("**Emoji spam engel başarıyla ayarlandı**")
    }
   }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))

};
exports.conf = {
  aliases: ["emoji-spam"],
  permLevel: 0
};
exports.help = {
  name: 'emojispamengel'
};
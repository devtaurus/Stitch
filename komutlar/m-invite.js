const Discord = require("discord.js");
const config = require("../ayarlar.json");
const db = require("quick.db");
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    let inv =  db.fetch(`inv.${user.id}.total`) || 0;  
    message.channel.send(new Discord.MessageEmbed().addField("Toplam Davetin:",inv)) 
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = { 
  name: 'davetsayısı', 
  description: "Şapka Verir.",
  usage: "invite"
}
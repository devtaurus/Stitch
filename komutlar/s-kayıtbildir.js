const Discord = require("discord.js");
const db = require("croxydb");
const config = require("../ayarlar.json");

exports.run = async (client, message, args) => {

message.channel.send(`<@&895223270683594819> <@&895223270717157394> Birazdan sizinle ilgilenecek lütfen <#895223270738100312> odasına geçip yetkili bekleyiniz.`)

client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 3
  };
  exports.help = {
    name: "kayıtbildir",
    description: "",
    usage: ""
  }
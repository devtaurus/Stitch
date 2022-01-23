const Discord = require("discord.js")
const CSL = "928978895624101888"

exports.run = async (client, message, args) => {
  
let bug = args.slice(0).join(" ")
if(!bug) return message.reply("**Bir Hata Yazmadın!**")
let channel = client.channels.cache.get(CSL)

let embed = new Discord.MessageEmbed()
.setTitle("Bir Report Belirtildi")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Report İçeriği", bug)
.addField("Report Eden", message.author.username, true)
.addField("Sunucu", message.guild.name, true)
.addField("Sunucu ID", message.guild.id, true)
.addField("Kanal", message.channel.name, true)
.setColor("BLUE")
.setTimestamp()
message.channel.send("**Bug Report Başarı İle İletildi.**")
  if(channel){
channel.send(embed).then(i => i.react("⏳"))
  }
}

exports.conf = {
  aliases: ["bugbildir"]
}

exports.help = {
  name: 'bug'
}
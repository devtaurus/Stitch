const Discord = require('discord.js');
  const db = require("croxydb")
  const disbut = require("discord-buttons");

  exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bunu Yapmak İçin Yetkin Yok!")

const buton = new disbut.MessageButton()
.setStyle("blurple")
.setEmoji("✅")
.setID("ticket")

message.channel.send("Destek Talebi Oluşturmak İçin Butona Tıkla! ", buton)

  }

  exports.conf = {
    aliases: []
   }

  exports.help = {
    name: 'ticket'
   }
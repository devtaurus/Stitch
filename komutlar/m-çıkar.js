const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply("**Bu Komutu Kullanmaya Yetkin Yok!**");

  let csm = message.mentions.members.first();
  if (!csm)
    return message.reply(
      "**Kimin Bağlantısı Kesilecek İse Onu Etiketlemen Gerek!**"
    );
  if (!csm.voice.channel)
    return message.reply("**Etiketlenen Kişi Bir Sesli Kanalda Değil!**");

  csm.voice.kick();
  message.channel.send("<@"+csm + "> **İsimli Kişi <#"+csm.voice.channelID+"> İsimli Sesli Kanaldan Atıldı!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "çıkar"
};
const ayar = require("../ayarlar.json");
const Discord = require('discord.js')
exports.help = {
  name: 'bstname'
}
  exports.run = async (client, message, args) => {
    let booster = message.guild.roles.cache.get(ayar.boosterrole)
    if (!booster) return message.channel.send("Böyle Bir rol Bulanamadı!")
    if (!message.member.roles.cache.has(booster.id)) return message.reply("Bu komutu kullanabilmek için öncelikle booster olman gerek!")

    let isim = args.slice(0).join(' ');
    if (!isim) return message.reply(`Öncelikle bir kullanıcı adı giriniz!`)
    if (isim.length > 32) return message.reply(`Lütfen **32** karakteri geçmeyen bir isim belirtiniz!`)

    message.guild.members.cache.get(message.author.id).setNickname(isim)
    message.channel.send(`Kullanıcı adın başarıyla \`${isim}\` olarak değiştirildi!`)
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
  }

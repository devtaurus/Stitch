const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');
const Discord = require("discord.js")
exports.run = async(client, message, args) => {
let desteksunucusu = "https://discord.gg/7DK8sFJnMF"// destek sunucusu davet linkini yazın
const davetembed = new MessageEmbed()
davetembed.setAuthor(`${client.user.tag} davet linkleri:`, client.user.avatarURL())
davetembed.addField('Botu yetkili olarak sunucuna ekle:', `[Tıkla!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)`)
davetembed.addField('Botu yetkisiz olarak sunucuna ekle:', `[Tıkla!](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0)`)
davetembed.addField('Destek sunucusu:', `[Tıkla!](${desteksunucusu})`)
davetembed.setThumbnail(client.user.avatarURL())
davetembed.setFooter(message.author.tag+' tarafından istendi')
davetembed.setColor('RANDOM')
davetembed.setTimestamp()
let yetkilidavet = new MessageButton()
yetkilidavet.setStyle('url')
yetkilidavet.setLabel('Botu yetkili olarak ekle')
yetkilidavet.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
let yetkisizdavet = new MessageButton()
yetkisizdavet.setStyle('url')
yetkisizdavet.setLabel(`Botu yetkisiz olarak ekle`)
yetkisizdavet.setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=0`)
let desteksunucubuton = new MessageButton()
desteksunucubuton.setStyle('url')
desteksunucubuton.setLabel('Destek sunucusu')
desteksunucubuton.setURL(desteksunucusu)
message.channel.send({embed: davetembed, buttons: [yetkilidavet, yetkisizdavet, desteksunucubuton]})
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};
exports.conf = {
aliases: ['davet']
};
exports.help = {
name: "davet",
description: "botun davet linklerini atar",
usage: "!davet"
};
const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms')
const moment = require('moment')
exports.run = async (client, message, args) => {// chimp'∞B#1008

let sebep;
if(!args[0]) sebep = 'Sebep girilmemiş';
if(args[0]) sebep = args.slice(0).join(' ');

  


  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``
  
  
  moment.locale('tr');
  
let display = message.guild.members.cache.get(message.author.id).displayName;
data.set(`display.${message.author.id}.${message.guild.id}`, display)
data.set(`afk.${message.author.id}.${message.guild.id}`, 'afksın knk')
data.set(`giriş.${message.author.id}.${message.guild.id}`, atılma)
data.set(`sebep.${message.author.id}.${message.guild.id}`, sebep)

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, tebrikler!`).setColor('GREEN').setDescription(`${sebep} sebebiyle afk moduna giriş yaptın.`))
message.guild.members.cache.get(message.author.id).setNickname(`AFK - ${display}`)
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
}
exports.conf = {
enabled: 'true',
guildOnly: 'true',
aliases: [''],
permLevel: 0
}

exports.help = {
name: 'afk'
}// codare ♥
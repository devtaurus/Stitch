const Discord = require('discord.js');
const ayar = require("../ayarlar.json");
exports.run = async(client, message, args) => {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("<a:_yklniyor:901944586904174612> Rol Vereceğin Kişiyi Etiketle.").then(a => a.delete({timeout: 10000}));

let bot = (`${ayar.yetkiverresim}`);
  
const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("<a:_yklniyor:901944586904174612> Vereceğin Rolü Etiketle.").then(a => a.delete({timeout: 10000}));

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add(rol.id).then(a=> {
const cmf = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("<a:_verifryed:901944957135368233> **Yetki Verildi**")
  .setDescription(`**Yetki Verilen Kullanıcı:** ${kisi} \n **Verilen Yetki:** ${rol}`)
  .setThumbnail(bot)
client.channels.cache.get("895223271124000768").send(cmf)
  
  
}).catch(err => message.channel.send("<a:uyar:906293395377516654> Etiketlediğin Rolü Veremedim."))
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yv',
  description: 'Rol verir.',
  usage: 'rol'
};
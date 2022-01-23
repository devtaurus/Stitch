const { MessageEmbed } = require('discord.js');
const qdb = require("quick.db");
const Discord = require('discord.js');
const rdb = new qdb.table("teyitler");
const kdb = new qdb.table("kullanici");
const ayar = require("../ayarlar.json");
const moment = require("moment");
module.exports.run = async (client, message, args) => {

    if(!message.member.roles.cache.has(ayar.kayıtYetkilisi) && !message.member.hasPermission("ADMINISTRATOR")) return;

    let victim = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!victim) victim = message.author

  let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setColor("GREEN");

    let data = rdb.get(`reg.${victim.id}`);
    if(!data) return message.channel.send(embed.setDescription(`${victim} kullanıcısının veri tabanında kayıt bilgisi bulunamadı.`))
   let e = data.erkek || 0;
   let k = data.kadin || 0;
   let toplam = e+k;


    message.channel.send(embed.setThumbnail(message.author.avatarURL({dynamic: true})).setFooter(`❤️ Stitch`).setDescription(`${victim} teyit bilgisi;\nErkek teyit: **${e}**\nKız teyit: **${k}** \n Toplam Teyit: **${toplam}**`));
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'teyitlerim',
   cooldown: 5  
};

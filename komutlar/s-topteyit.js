const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const qdb = require("quick.db");
const rdb = new qdb.table("teyitler");
const kdb = new qdb.table("kullanici");
const ayar = require("../ayarlar.json");
module.exports.run = async (client, message, args) => {

    let embed = new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({dynamic: true})).setFooter("❤️ Stitch").setThumbnail(message.guild.iconURL({dynamic: true})).setColor("RANDOM").setTimestamp();
    let teyitData = rdb.get("reg") || {};
    let data = Object.keys(teyitData);
    let dataTop = data.filter(x => message.guild.members.cache.has(x)).sort((a, b) => Number((teyitData[b].erkek || 0) + (teyitData[b].kadin || 0)) - Number((teyitData[a].erkek) + (teyitData[a].kadin))).map((value, index) => `\`${index+1}.\` ${message.guild.members.cache.get(value)} adlı üyenin toplam **${(teyitData[value].erkek || 0) + (teyitData[value].kadin || 0)}** (\`${teyitData[value].erkek || 0}\` erkek, \`${teyitData[value].kadin || 0}\` kadın)`).splice(0, 20).join("\n");
    message.channel.send(embed.setDescription(`**Sıralama** \n\n ${dataTop || 'Veritabanında herhangi bir kayıt yapmış gözükmüyorsun!'}`));
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
  name: 'topteyit',
   cooldown: 5  
};

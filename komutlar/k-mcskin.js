const Discord = require('discord.js');
exports.run = (client, message, args) => {
//MrSpy Bot Skin sorgulama | Sistemi
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.channel.send('Skin adı gir')
 if (mesaj == member) {
   message.channel.send('Skin adı belirt')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setImage(body)

 message.channel.send(mcbody);
 }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["mccilt"],
  kategori:"Eğlence",
  permLevel: 0
};

exports.help = {
    name: 'mc-skin',
    description: 'Mc skininize bakarsınız.',
    usage: 'mc-skin'
}
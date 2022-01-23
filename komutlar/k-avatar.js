const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if (args[0]) {
      user = message.guild.members.cache.get(args[0]).user;
    } else {
      user = message.author;
    }
let target = message.mentions.users.first() || message.author;
  let png = user.avatarURL({size:4096,format:"png"})
  let gif = user.avatarURL({size:4096,format:"gif"})
  let jpg = user.avatarURL({size:4096,format:"jpg"})
  let webp = user.avatarURL({size:4096,format:"webp"})
  let jpeg = user.avatarURL({size:4096,format:"jpeg"})
message.channel.send(new Discord.MessageEmbed()
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setTitle('<a:kalpemoji:901944586774147122> Avatar')
.setDescription(`[PNG](${png}) | [GIF](${gif}) | [JPG](${jpg}) `)
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))                    
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['av'],
  permLevel: 0
};
 
exports.help = {
  name: 'avatar'
};




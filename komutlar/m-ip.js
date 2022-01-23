const { MessageEmbed } = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
//koni-endwave-wanted
let embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setFooter(`Stitch`)

if(!args[0]) 
return message.channel.send(embed.setDescription(`IP belirtmelisin!`)).then(w => w.delete({timeout: 7500}));
snekfetch.get(`http://ip-api.com/json/${args}`).then(r => {
 message.channel.send(embed.setThumbnail(message.author.avatarURL({dynamic: true}))//koni-endwave-wanted
 .setImage("https://media.giphy.com/media/R1bJi4UpRwKC9Va4xU/giphy.gif")
 .setDescription(`IP: \`${args[0]}\`\nISP: \`${r.body.isp}\`\nASN: \`${r.body.as}\`\nCountry: \`${r.body.country}\`\nCity: \`${r.body.city}\`\nZip Code: \`${r.body.zip}\``))
});
//koni-endwave-wanted

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

exports.help = {
  name: "ip"
};
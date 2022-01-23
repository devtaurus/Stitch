const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');
module.exports.run = async (client, message, args) => {
	const fetch = require('node-fetch');
		const user = message.mentions.users.first();
		if(!user) return message.channel.send('<a:uyar:906293395377516654> Lütfen bir kullanıcı belirtin!');

		await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: 0 }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});

		const embed = new MessageEmbed()
    .setTitle(`**<a:onayland_:906293396610621530> Susturma İşlemi**`)
    .setDescription(`<@${user.id}> Kullanıcısının Susturması Kaldırıldı!`)
    .setColor('RANDOM')
    .setFooter(`ID: ${user.id}`)
    .setTimestamp()
    message.channel.send(embed);
	};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rm', 'rmute'],
  permLevel: 2
};
  exports.help = {
    name: 'unmute',
    description: 'zaman aşımını kaldırır',
    usage: 'unmute @etiket'
};

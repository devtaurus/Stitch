const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      `Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`
    );

  const members = message.guild.members.cache.filter(
    member =>
      member.user.presence.activites &&
      /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(
        member.user.presence.activites.name
      )
  );
  const memberss = message.guild.members.cache.filter(
    member =>
      member.user.username &&
      /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(
        member.user.username
      )
  );
  const embed = new Discord.MessageEmbed()
    .setDescription(
      `**Oynuyor Mesajı Reklam İçeren Kullanıcılar**\n${members
        .map(
          member =>
            `[${member.user.tag}](https://discord.com/users/${member.id}) = \`${member.user.presence.activites.name}\``
        )
        .slice(0, 10)
        .join("\n") ||
        "Kimsenin oynuyor mesajı reklam içermiyor."}\n\n**Kullanıcı Adı Reklam İçeren Kullanıcılar**\n${memberss
        .map(
          member =>
            `[${member.user.tag}](https://discord.com/users/${member.id}) = \`${member.user.username}\``
        )
        .slice(0, 10)
        .join("\n") || "Kimsenin kullanıcı adı reklam içermiyor."}`
    )
    .setColor("BLUE");
  message.channel.send(embed);
};

exports.conf = {
  aliases: ["reklam-ara", "reklamara", "reklamtaraması"]
};

exports.help = {
  name: "adscan"
};
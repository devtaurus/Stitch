const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Ever Engel Sistemi!")
      .setDescription(
        `**Hatalı kullanım! ${prefix}everengel aç/kapat**`
      )
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`ever_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Ever Engel Sistemi!")
        .setDescription(
          `**Everyone Engel Zaten Açık!**`
        )
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
      return;
    } else {
      db.set(`ever_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Ever Engel Sistemi!")
        .setDescription(
          `**Sistem Başarılı İle Açıldı.**`
        )
        .setFooter(client.user.username, client.user.avatarURL);

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`ever_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Ever Engel Sistemi!")
      .setDescription(
        `**Sistem Başarılı İle Kapatıldı.**`
      )
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ever"],
  permLevel: 2,
  kategori: "sunucu"
};

exports.help = {
  name: "everengel",
  description: "ever engeli aktif edersiniz.",
  usage: "ever-engel"
};

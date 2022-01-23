const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const moment = require('moment');
const ayarlar = require("../ayarlar.json")
const prefix = (ayarlar.prefix)

module.exports.run = async (client, message, args, bot, Command) => {
  
    const guild = message.guild;
    const channelCache = guild.channels.cache;

    const verificationLevels = {
        NONE: 'Yok',
        LOW: 'Az',
        MEDIUM: 'Orta Düzeyde',
        HIGH: '💢',
        VERY_HIGH: '💥'
    };

    const region = {
      brazil: ":flag_br: Brezilya",
      "eu-central": ":flag_eu: Merkez Avrupa",
      singapore: ":flag_sg: Singapur",
      "us-central": ":flag_us: Merkez Amerika",
      sydney: ":flag_au: Sydney",
      "us-east": ":flag_us: Doğu Amerika",
      "us-south": ":flag_us: Güney Amerika",
      "us-west": ":flag_us: Batı Amerika",
      "eu-west": ":flag_eu: Batı Avrupa",
      "vip-us-east": ":flag_us: VIP Doğu Amerika",
      london: ":flag_gb: Londra",
      amsterdam: ":flag_nl: Amsterdam",
      hongkong: ":flag_hk: Hong Kong",
      russia: ":flag_ru: Rusya",
      southafrica: ":flag_za:  Güney Afrika",
      europe: ":flag_eu: Avrupa",
    };

    const embed = new Discord.MessageEmbed()
      .setColor("#800080")
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .addFields(
        {
          name: `📝 Sunucu İsmi`,
          value: guild.name,
          inline: true,
        },
        {
          name: `👑 Sunucu Sahibi`,
          value: guild.owner,
        },
        {
          name: `🏴󠁧󠁮󠁬󠁿 Sunucu Bölgesi`,
          value: region[guild.region],
          inline: true,
        },
        {
          name: `🚀 Takviye`,
          value: `Seviye: ${guild.premiumTier}`,
          inline: true,
        },
        {
          name: `✅ Doğrulama Düzeyi`,
          value: `__${verificationLevels[message.guild.verificationLevel]}__`, inline: true },
        
        {
          name: `🕒 Oluşturulma Tarihi`,
          value: `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]` },
        {
          name: `🤖 Bot Sayısı`,
          value: guild.members.cache.filter(
            (member) => member.user.bot === true
          ).size,
          inline: true,
        },
        {
          name: `🔢 Takviye Sayısı`,
          value: guild.premiumSubscriptionCount,
          inline: true,
        },
        {
          name: `📜 Role Sayısı`,
          value: guild.roles.cache.filter((role) => role.name != "@everyone")
            .size,
          inline: true,
        },
        {
          name: `😊 Emoji Sayısı`,
          value: guild.emojis.cache.size,
        },
        {
          name: `📁 Kategori Sayısı`,
          value: channelCache.filter((channel) => channel.type === "category")
            .size,
          inline: true,
        },
        {
          name: `💬 Yazı Kanalları`,
          value: channelCache.filter((channel) => channel.type === "text").size,
          inline: true,
        },
        {
          name: `📣 Ses Kanalları`,
          value: channelCache.filter((channel) => channel.type === "voice")
            .size,
          inline: true,
        }
      )
      .setFooter(
        `${prefix}yardım yazarak tüm komutlara erişebilirsin.`,
        client.user.avatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.reply(embed);
  client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 4
  };
  
exports.help = {
    name: "sunucubilgi"
  };
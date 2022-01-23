const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
var os = require("os");
let cpuStat = require("cpu-stat")
const ms = require("ms")
const client = require("moment-duration-format");
const moment = require("moment");
const { off } = require('process');
moment.locale("tr");
exports.run = async (client, message, args) => { 
let selam = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]")
        let discordjs = "https://discord.js.org/#/"
        let desteksunucu = "https://discord.gg/Tyn5TTp8aM"
        let website = "https://evilyn.glitch.me"
        let toplamuser = client.users.cache.size

        cpuStat.usagePercent(function(err, percent, seconds) {
        const efe = new MessageEmbed()
        .setAuthor(`${client.user.username} Bot Bilgileri`, client.user.displayAvatarURL())
        .addFields(
            { name: 'Yapım Tarihi', value: `${moment(client.user.createdAt).format("LLL")}`, inline: true },
            { name: 'Uptime Süresi', value: `${selam}`, inline: true },
            { name: 'Bot Sahibi', value: `<a:legends:933035741301325834> <@452355894408380419>`, inline: true },
            { name: 'Sunucu Sayısı', value: `${client.guilds.cache.size}`, inline: true },
            { name: 'Kanal Sayısı', value: `${client.channels.cache.size}`, inline: true },
            { name: 'Ram Kullanım', value: `[ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mb | ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mb ]` },
            { name: 'CPU', value: `%${percent.toFixed(2)}`, inline: true },
            { name: 'Kütüphane', value: `[**discord.js**](${discordjs})`, inline: true }
          )
          .setDescription(`[**Destek Sunucusu**](${desteksunucu}) **-** [**Websitesi**](${website})`)
          .setThumbnail(client.user.displayAvatarURL())
          .setFooter(`${message.author.tag} tarafından kullanıldı!`)
          .setTimestamp()
        message.reply(efe)
        })
}

exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['reboot'], 
  permLevel: 0
};

exports.help = {
  name: 'admininfo',
  description: 'taslak', 
  usage: 'refresh'
};
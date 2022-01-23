const db = require('croxydb')//Discord Code Share
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {//Discord Code Share

    if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
 
    if (!args[0]) return message.channel.send(':no_entry: Sistemi kullanabilmek için: `s!reklamengel aç/kapat`')

    if (args[0] == 'aç') {
        db.set(`reklamkick_${message.guild.id}`, 'acik')
        message.channel.send('**Reklam engel sistemi açıldı.** `Not: Reklam yapanlar atıldıktan sonra geldiğinde yeniden reklam yaparsa banlacaktır.`')

    }
    if (args[0] == 'kapat') {
        db.set(`reklamkick_${message.guild.id}`, 'kapali')
        message.channel.send(`**Reklam engel sistemi kapatıldı.**`)

    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['reklam-kick'],
    permLevel: 0
};

exports.help = {
    name: 'reklamengel',
    description: 'Reklam kick sistemini açıp kapatır',
    usage: 'reklamkick aç/kapat'
};
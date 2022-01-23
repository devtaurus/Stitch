const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        let kullanıcı = message.mentions.members.first();
        let ses = message.member.voice.channel

        // Komutu Kullanan Kişi Seste Değilse Hata Verdirelim.
        if(!message.member.voice.channel){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Herhangi bir ses kanalında değilsin.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        // Kullanıcı Etiketlenmezse Hata Mesajı Verdirelim.
        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Odana çekilecek kullanıcıyı etiketle.**`)
            .setColor('#ff000')
            return message.channel.send(cmfhata)
        }
        
        // Kullanıcı Ses Kanalında Değilse Hata Mesajı Verdirelim.
        if(!kullanıcı.voice.channel){
            const cmfhata = new Discord.MessageEmbed()
            .setDescription(`**Bahsettiğin kullanıcı ses kanallarında bulunmuyor.**`)
            .setColor('#ff0000')
            return message.channel.send(cmfhata)
        }

        if(kullanıcı && ses){
            kullanıcı.voice.setChannel(ses)

            // Başarılı Mesajı Atalım
            const cmfses = new Discord.MessageEmbed()
            .setAuthor(`${message.author.displayName || message.author.username} - Başarılı`, message.author.avatarURL({dynamic: true}))
            .setDescription(`${kullanıcı} Kişisi Başarıyla **${message.member.voice.channel.name}** Adlı Odaya Çekildi. İyi Sohbetler. :tada:`)
            .setColor('#00ff00')
            message.channel.send(cmfses)
        }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
    } //CodeMareFi İyi Kullanımlar Diler. :)

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Çek','ÇEK','gelburaya'],
    permLevel: 0
}

exports.help = {
    name: 'çek',
    description: 'Herhangi bir odadaki kullanıcıyı yanınıza çekersiniz. CodeMareFi',
    usage: '.çek @kullanıcı'
}
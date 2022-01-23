exports.run = (client, message, args) => {
    let db = require("quick.db")
    let Discord = require("discord.js")

    let küfür = db.fetch(`küfür.${message.guild.id}.durum`)
    const member3 = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription(`**HATA** - Bu Sunucuda Yetkili Değilsin.`)
    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
    if (küfür) {
        db.delete(`küfür.${message.guild.id}`)
        message.channel.send(`**Başarıyla küfür engel kapandı.**`).then(l => {
            l.delete({
                timeout: 5000
            })
        })
    } else {
        db.set(`küfür.${message.guild.id}.durum`, true)
        message.channel.send(`**Başarıyla küfür engel açıldı.**`).then(l => {
            l.delete({
                timeout: 5000
            })
        })
    }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["küfür-engel"],
    permLevel: 4
};

exports.help = {
    name: 'küfürengel',
    description: 'küfrü engel ab',
    usage: 'küfürengel'
}
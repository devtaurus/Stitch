const Discord = require("discord.js");
const Database = require("../Helpers/Database");
// exports.onLoad = (client) => {};
/**
 * @param {Discord.Client} client 
 * @param {Discord.Message} message 
 * @param {Array<String>} args 
 */
exports.run = async (client, message, args) => {
    const db = new Database("./Servers/" + message.guild.id, "Invites");
    var data = db.get(`invites`) || {};

    var list = Object.keys(data).map(_data => {
        return {
            Id: _data,
            Value: (data[_data].total || 0) + (data[_data].bonus || 0)
        };
    }).sort((x, y) => y.Value - x.Value);

    var embed = new Discord.MessageEmbed()
        .setColor("#5764f3")
        .addField("Invite | Top 10", `
    ** **${list.splice(0, 10).map((item, index) => `\`${index + 1}.\` <@${item.Id}>: \`${item.Value} invite\``).join("\n")}
    `);

    message.channel.send(embed);
};

exports.conf = {
aliases: ['davetsayısı']
};
exports.help = {
name: "invitetop",
description: "botun davet linklerini atar",
usage: "!davet"
};
const { MessageEmbed, Client, Util, Message } = require("discord.js");
const Discord = require('discord.js');
const fs = require("fs");
const hastebins = require("hastebin-gen"),
  db = require("quick.db");

var backups = JSON.parse(fs.readFileSync("./Data/backups.json", "utf8"));

module.exports.run = async (client, message, args) => {
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || "s!"

      let guildsonlyEmbed = new MessageEmbed()
        .setTitle(`<a:yanl_:905166068283219968> Hata!`)
        .setDescription(
          `Bu komutu özel mesajlarda kullanamazsın.
            
            [Destek](https://discord.gg/Tyn5TTp8aM)`
        )
        .setColor("BLACK");
      if (message.channel.type === "dm")
        return message.channel.send(guildsonlyEmbed);
      if (args[0] === "al") {
        let creatingEmbed = new MessageEmbed()
          .setTitle(`<a:ykleniyorr:905811553406844948> Lütfen bekleyin...`)
          .setDescription("Yedek oluşturuluyor...");
        message.channel.send(creatingEmbed).then(m => {
          let id = makeid(16);

          const channels = message.guild.channels.cache
            .sort(function(a, b) {
              return a.position - b.position;
            })
            .array()
            .map(c => {
              const channel = {
                type: c.type,
                name: c.name,
                postion: c.calculatedPosition
              };
              if (c.parent) channel.parent = c.parent.name;
              return channel;
            });

          const roles = message.guild.roles.cache
            .filter(r => r.name !== "@everyone")
            .sort(function(a, b) {
              return a.position - b.position;
            })
            .array()
            .map(r => {
              const role = {
                name: r.name,
                color: r.color,
                hoist: r.hoist,
                permissions: r.permissions,
                mentionable: r.mentionable,
                position: r.position
              };
              return role;
            });

          if (!backups[message.author.id]) backups[message.author.id] = {};
          backups[message.author.id][id] = {
            icon: message.guild.iconURL,
            name: message.guild.name,
            owner: message.guild.ownerID,
            members: message.guild.memberCount,
            createdAt: message.guild.createdAt,
            roles,
            channels
          };

          save();
          let result = new MessageEmbed()
            .setTitle(`<a:zilcik_:906293396803567636> Bilgi`)
            .setDescription(
              `Bir yedek oluşturuldu! **${message.guild.name}** sunucusunun yedek idsi \`${id}\``
            )
            .addField(
              "Kullanım",
              `\`\`\`s!yedek yükle ${id}\`\`\`
\`\`\`s!yedek bilgi ${id}\`\`\``
            )
            .setColor("BLACK");

          message.author.send(result);

          let resultPublic = new MessageEmbed()
            .setTitle(`<a:onayland_:906293396610621530> Başarılı!`)
            .setDescription(
              `Bir yedek oluşturuldu! **${message.guild.name}** sunucusunun yedek idsi özelden iletildi!`
            )
            .addField(
              "Kullanım",
              `\`\`\`s!yedek yükle 123456789ABCDEFG\`\`\`
\`\`\`s!yedek bilgi 123456789ABCDEFG\`\`\``
            )
            .setColor("BLACK");

          m.edit(resultPublic);
        });
      }

      if (args[0] === "sil") {
        let code = args[1];
        let errorEmbed = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968> Hata!`)
          .setDescription(
            `Böyle bir id bulunamadı!
[Destek](https://discord.gg/Tyn5TTp8aM)`
          )
          .setColor("BLACK");
        if (!code) return message.channel.send(errorEmbed);

        let cantfindbackup = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968> Hata!`)
          .setTitle(`Böyle bir ${code} sunucu yedeği yok.`)
          .setDescription(
            `
[Destek](https://discord.gg/Tyn5TTp8aM)`
          )
          .setColor("BLACK");
        if (!backups[message.author.id][code])
          return message.channel.send(cantfindbackup);

        delete backups[message.author.id][code];
        save();

        let deletedsuc = new MessageEmbed()
          .setTitle(`<a:onayland_:906293396610621530> Başarılı!`)
          .setDescription(`**Sunucu yedeği silindi**.`)
          .setColor("BLACK");
        message.channel.send(deletedsuc);
      }

      if (args[0] === "yükle") {
        let code = args[1];
        let errorEmbed = new MessageEmbed().setTitle(`<a:yanl_:905166068283219968> Hata!`)
          .setDescription(`Lütfen bir sunucu yedek **id**'si giriniz.
[Destek](https://discord.gg/Tyn5TTp8aM)`);
        if (!code) return message.channel.send(errorEmbed);
        let cantfindbackup = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968> Error`)
          .setTitle(`Böyle bir ${code} id yok!`)
          .setDescription("[Destek](https://discord.gg/Tyn5TTp8aM)")
          .setColor("BLACK");
        if (!backups[message.author.id][code])
          return message.channel.send(cantfindbackup);

        message.guild.channels.forEach(channel => {
          channel.delete("Yedek yükleniyor!");
        });

        message.guild.roles
          .filter(role => role.members.every(member => !member.user.bot))
          .forEach(role => {
            role.delete("Yedek yükleniyor!");
          });
        await backups[message.author.id][code].roles.forEach(async function(
          role
        ) {
          message.guild
            .createRole({
              name: role.name,
              color: role.color,
              permissions: role.permissions,
              hoist: role.hoist,
              mentionable: role.mentionable,
              position: role.position
            })
            .then(role => {
              role.setPosition(role.position);
            });
        });

        await backups[message.author.id][code].channels
          .filter(c => c.type === "category")
          .forEach(async function(ch) {
            message.guild.createChannel(
              ch.name,
              ch.type,
              ch.permissionOverwrites
            );
          });

        await backups[message.author.id][code].channels
          .filter(c => c.type !== "category")
          .forEach(async function(ch) {
            message.guild
              .createChannel(ch.name, ch.type, ch.permissionOverwrites)
              .then(c => {
                const parent = message.guild.channels
                  .filter(c => c.type === "category")
                  .find(c => c.name === ch.parent);
                ch.parent ? c.setParent(parent) : "";
              });
          });
        message.guild.setName(backups[message.author.id][code].name);
        message.guild.setIcon(backups[message.author.id][code].icon);
      }

      if (args[0] === "bilgi") {
        let id = args[1];
        let MissingbackupinfoEmbed = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968> Hata!`)
          .setDescription(
            `Lütfen bir yedeklenen sunucunun yedek **id**'si giriniz.   
                    [Destek](https://discord.gg/Tyn5TTp8aM)`
          )
          .setColor("BLACK");
        if (!id) return message.channel.send(MissingbackupinfoEmbed);

        let cantfindEmbed = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968> Hata!`)
          .setDescription(
            `Bu **id**'ye sahip bir yedeğin yok!'\`${id}\`.
                "[Destek](https://discord.gg/Tyn5TTp8aM)`
          )
          .setColor("BLACK");
        if (!backups[message.author.id][id])
          return message.channel.send(cantfindEmbed);

        try {
          let infoEmbed = new MessageEmbed()
            .setTitle(backups[message.author.id][id].name)
            .setThumbnail(backups[message.author.id][id].icon)
            .addField(
              "Oluşturan",
              `<@${backups[message.author.id][id].owner}>`,
              true
            )
            .addField(
              "Kullanıcılar",
              backups[message.author.id][id].members,
              true
            )
            .addField(
              "Oluşturulma Tarihi",
              backups[message.author.id][id].createdAt
            )
            .addField(
              "Kanallar",
              `\`\`\`${backups[message.author.id][id].channels
                .map(channel => channel.name)
                .join("\n")}\`\`\``,
              true
            )
            .addField(
              "Roller",
              `\`\`\`${backups[message.author.id][id].roles
                .map(role => role.name)
                .join("\n")}\`\`\``,
              true
            );
          message.channel.send(infoEmbed);
        } catch (e) {
          hastebins(
            backups[message.author.id][id].channels
              .map(channel => channel.name)
              .join("\n"),
            "txt"
          ).then(ch => {
            hastebins(
              backups[message.author.id][id].roles
                .map(role => role.name)
                .join("\n"),
              "txt"
            ).then(ro => {
              let infoEmbed = new MessageEmbed()
                .setTitle(backups[message.author.id][id].name)
                .setThumbnail(backups[message.author.id][id].icon)
                .addField(
                  "Oluşturan",
                  `<@${backups[message.author.id][id].owner}>`,
                  true
                )
                .addField(
                  "Kullanıcılar",
                  backups[message.author.id][id].members,
                  true
                )
                .addField(
                  "Oluşturulma Tarihi",
                  backups[message.author.id][id].createdAt
                )
                .addField("Kanallar", ch, true)
                .addField("Roller", ro, true);
              message.channel.send(infoEmbed);
            });
          });
        }
      }

      if (args[0] === "temizle") {
        let errorEmbed = new MessageEmbed()
          .setTitle(`<a:yanl_:905166068283219968>  Error`)
          .setDescription(
            `Ne yazık ki yedekte hiç sunucun yok.
[Destek](https://discord.gg/Tyn5TTp8aM)`
          )
          .setColor("BLACK");
        if (!backups[message.author.id])
          return message.channel.send(errorEmbed);

        let warningEmbed = new MessageEmbed().setTitle(`<a:uyar:906293395377516654> Uyarı`)
          .setDescription(`Tüm yedeklerini silmeye emin misin?
___Bu işlem geri alınamaz!__`);
        message.channel.send(warningEmbed).then(msg => {
          msg.react("<a:verified:901941192533635142>").then(() => msg.react("<a:yanl_:905166068283219968>"));

          let yesFilter = (reaction, user) =>
            reaction.emoji.name === "yes" && user.id === message.author.id;
          let noFilter = (reaction, user) =>
            reaction.emoji.name === "no" && user.id === message.author.id;

          let yes = msg.createReactionCollector(yesFilter, { time: 0 });
          let no = msg.createReactionCollector(noFilter, { time: 0 });

          yes.on("collect", r => {
            delete backups[message.author.id];

            let deletedsuc = new MessageEmbed()
              .setTitle(`<a:onayland_:906293396610621530> Başarılı!`)
              .setDescription(`**Tüm yedekler silindi!**`)
              .setColor("BLACK");
            message.channel.send(deletedsuc);
            msg.delete();
          });

          no.on("collect", r => {
            msg.delete();
          });
        });
      }

      if (!args[0]) {
        const embed = new MessageEmbed()
          .setTitle(
            `**Yedekleme Sistemi**

Sunucunun yedeğini al ve yükle

__**Komutlar**__
`
          )
          .setDescription(
            `
                ${prefix}yedek al             Sunucunuzu yedek alırsınız.
                ${prefix}yedek sil            Sunucu yedeğinizi silersiniz.
                ${prefix}yedek bilgi          Sunucu yedeğiniz hakkında bilgi alırsınız.
                ${prefix}yedek yükle          Sunucu yedeğinizi yüklersiniz.
                ${prefix}yedek temizle        Tüm yedeklerinizi silersiniz.
`
          )
          .setColor("BLACK");
        message.channel.send(embed);
        return;
      }

      function makeid(length) {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        return result;
      }

      function save() {
        fs.writeFile("./Data/backups.json", JSON.stringify(backups), err => {
          if (err) message.channel.send("Bir hata var!");
        });
      }
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yedek"],
  permLevel: 3
};

exports.help = {
  name: "yedek",
  description: "backup",
  usage: "backup"
};

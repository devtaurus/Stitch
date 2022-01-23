const Discord = require("discord.js"),
    client = new Discord.Client();
const qdb = require("quick.db");
const rdb = new qdb.table("teyitler");
const kdb = new qdb.table("kullanici");
const ayar = require("../ayarlar.json");
const logchannel = ayar.logchannels;
const tag = "✯"; 
module.exports.run = async (client, message, args) => {

    function timestamp (value) {

        return Math.floor(new Date(value).getTime() / 1000)
      };
 var now = new Date()

    let tamamlandiemoji = '✔️';
    let sarkozyembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`❤️ Stitch`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    let sarkozyerkekembed = new Discord.MessageEmbed().setColor(0x56aaff).setFooter(`❤️ Stitch`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    let sarkozyerkekembed2 = new Discord.MessageEmbed().setColor(0x56aaff).setFooter(`❤️ Stitch`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    let sarkozykızembed = new Discord.MessageEmbed().setColor(0xff00ff).setFooter(`❤️ Stitch`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    let sarkozykızembed2 = new Discord.MessageEmbed().setColor(0xff00ff).setFooter(`❤️ Stitch`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
    if (!message.member.roles.cache.has(ayar.kayıtYetkilisi) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(sarkozyembed.setDescription(`Bu Yetkiyi Kullanabilmen İçin <@&${ayar.kayıtYetkilisi}> Rolüne Sahip Olmalısın`)).then(x => x.delete({ timeout: 10000 }));
    let victim = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!victim) return message.channel.send(sarkozyembed.setDescription(`Lütfen Bir Kullanıcı Etiketleyiniz`)).then(m => m.delete({ timeout: 7000 }));
    let rol = message.mentions.roles.first()
    let member = message.guild.member(victim)
    let isim = args[1];
    if (!isim) return message.channel.send(sarkozyembed.setDescription(`Lütfen Bir İsim Yazınız`)).then(m => m.delete({ timeout: 7000 }));
    let yas = args[2];
    if (!yas) return message.channel.send(sarkozyembed.setDescription(`Lütfen Bir Yaş Yazınız`)).then(m => m.delete({ timeout: 7000 }));   victim.setNickname(`${tag} ${isim} | ${yas}`)
 let kayıtmesaj = await message.channel.send(sarkozyembed.setDescription(`**__Kayıt İşlemi Başlatıldı;__**

   <a:kalpemoji:901944586774147122> **Kullanıcı:** ${victim}
   <a:_shyamongus:901944587604611124> **Yetkili:** ${message.author}
   <a:_yklniyor:901944586904174612> **Yeni İsim:** \`${tag} ${isim} | ${yas}\`
   
    Kayıt Türünü Emojilere Basarak Seçebilirsiniz;
    ♂ : \`Erkek Kayıt\`, ♀️ : \`Kız Kayıt\`, ❌ : \`İşlem İptal\``))

    kayıtmesaj.react("♂").then(() => kayıtmesaj.react("♀️").then(() => kayıtmesaj.react("❌")));
    const filter = (reaction, victim) => {
        return (
            ["♂", "♀️", "❌"].includes(reaction.emoji.name) &&
            victim.id === message.author.id
        );
    };
    kayıtmesaj.awaitReactions(filter, { max: 1, time: 60000, errors: ["time"] }).then((collected) => {
        const reaction = collected.first();
        if (reaction.emoji.name === "♂") {
            kayıtmesaj.edit(sarkozyembed.setDescription(`**${victim} Adlı Kullanıcı Başarılı Bir Şekilde Kayıt Oldu Ve <@&${ayar.erkekRol}>, <@&${ayar.erkekRol2}> Rolleri verildi.**`)).then;
            erkekKayıtGiris();
        }  if (reaction.emoji.name === "♂") {
            kayıtmesaj.edit(sarkozyembed.setDescription(`**${victim} Adlı Kullanıcı Başarılı Bir Şekilde Kayıt Oldu Ve <@&${ayar.erkekRol}>, <@&${ayar.erkekRol2}> Rolleri verildi.**`)).then;
            erkekKayıtGiris2();
} else if (reaction.emoji.name === "♀️") {
            kayıtmesaj.edit(sarkozyembed.setDescription(`**${victim} Adlı Kullanıcı Başarılı Bir Şekilde Kayıt Oldu Ve <@&${ayar.kızRol}>, <@&${ayar.kızRol2}> Rolleri verildi.**`)).then;
            kızKayıtGiris();
        }  if (reaction.emoji.name === "♀️") {
            kayıtmesaj.edit(sarkozyembed.setDescription(`**${victim} Adlı Kullanıcı Başarılı Bir Şekilde Kayıt Oldu Ve <@&${ayar.kızRol}>, <@&${ayar.kızRol2}> Rolleri  verildi.**`)).then;
            kızKayıtGiris2();
        } else if (reaction.emoji.name === "❌") {
            kayıtmesaj.delete();
        }
    })

//ERKEK KAYIT İŞLEM
    const erkekKayıtGiris = async () => {
          setTimeout(() => message.author.send(`${victim} **Adlı Kullanıcının Kayıdını Sorunsuz Bir Biçimde Yaptın.**`), 3000)
 setTimeout(() => victim.send(`<a:kalpemoji:901944586774147122> **${victim} Aramıza \`@Erkek\`, \`@♂️\` Rolleriyle Katıldın. \n\n<a:_shyamongus:901944587604611124>  Kaydını Gerçekleştiren Yetkili. ${message.author} \n\n <a:_star:901944588233764874> Sunucudaki İsmin \`${tag} ${isim} • ${yas}\` Bir Yanlışlık Varsa Kayıt Eden Yetkiliye Ulaş!\n\n<a:welcome:901944589106171944> Aramıza Hoşgeldin <#895223270939439143> Okumayı Unutma!**`), 2500)
 setTimeout(() => victim.roles.add(ayar.erkekRol), 1000);
      setTimeout(() => victim.roles.add(ayar.erkekRol2), 1000);
        setTimeout(() => message.react('838149066495098930'), 3000);
      setTimeout(() => victim.roles.remove(ayar.kayıtsızRol), 300);
      rdb.add(`reg.${message.author.id}.erkek`, +1);
          client.channels.cache.get(ayar.kayıtLogKanalı).send(sarkozyerkekembed.setDescription(`**Kayıt Yapıldı! \n Kayıt Bilgileri**
    
      <a:kalpemoji:901944586774147122> **Kayıt Edilen Kullanıcı:** ${victim}
     <a:welcome:901944589106171944> **Verilen Roller:** <@&${ayar.erkekRol}>,<@&${ayar.erkekRol2}>
  <a:_verifryed:901944957135368233> **Yeni İsim:** \`${tag} ${isim} | ${yas}\`
    <a:_shyamongus:901944587604611124> **Teyit Eden Yetkili:** ${message.author}`)) 
};
  const erkekKayıtGiris2 = async () => {
     client.channels.cache.get(ayar.genelchat).send(`${victim} **Aramıza Katıldı <a:_verifryed:901944957135368233>**`);
client.channels.cache.get(ayar.genelchat).send(sarkozyerkekembed2.setDescription(`<a:kalpemoji:901944586774147122> **${victim} Aramıza <@&${ayar.erkekRol}> ,<@&${ayar.erkekRol2}> Rolleriyle Katıldı \n<a:_shyamongus:901944587604611124>  Kaydı gerçekleştiren yetkili ${message.author} \n<a:welcome:901944589106171944> Aramıza hoşgeldin** ${victim}`).setThumbnail(ayar.kayıtresim).setImage(ayar.altresim)).then;
};
  //KIZ KAYIT İŞLEM
    const kızKayıtGiris = () => {
   setTimeout(() => message.author.send(`${victim} **Adlı Kullanıcının Kayıdını Sorunsuz Bir Biçimde Yaptın.**`), 3000)
  setTimeout(() => victim.send(`<a:kalpemoji:901944586774147122> **${victim} Aramıza \`@Kız\`, \`@♀️\` Rolleriyle Katıldın. \n\n<a:_shyamongus:901944587604611124>  Kaydını Gerçekleştiren Yetkili. ${message.author} \n\n <a:_star:901944588233764874> Sunucudaki İsmin \`${tag} ${isim} • ${yas}\` Bir Yanlışlık Varsa Kayıt Eden Yetkiliye Ulaş!\n\n<a:welcome:901944589106171944> Aramıza Hoşgeldin <#895223270939439143> Okumayı Unutma!**`), 2500)
 setTimeout(() => victim.roles.add(ayar.kızRol), 1000);
      setTimeout(() => victim.roles.add(ayar.kızRol2), 1000);
      setTimeout(() => message.react('838149066495098930'), 3000);
       setTimeout(() => victim.roles.remove(ayar.kayıtsızRol), 300);
      rdb.add(`reg.${message.author.id}.kadin`, +1);
        client.channels.cache.get(ayar.kayıtLogKanalı).send(sarkozykızembed.setDescription(`**Kayıt Yapıldı! \n Kayıt Bilgileri**
     
     <a:kalpemoji:901944586774147122> **Kayıt Edilen Kullanıcı:** ${victim}
     <a:welcome:901944589106171944> **Verilen Roller:** <@&${ayar.kızRol}>,<@&${ayar.kızRol2}>
  <a:_verifryed:901944957135368233> **Yeni İsim:**\`${tag} ${isim} | ${yas}\`	
    <a:_shyamongus:901944587604611124> **Teyit Eden Yetkili:** ${message.author}`))
    };
    const kızKayıtGiris2 = async () => {
     client.channels.cache.get(ayar.genelchat).send(`${victim} **Aramıza Katıldı <a:_verifryed:901944957135368233>**`).then;
client.channels.cache.get(ayar.genelchat).send(sarkozykızembed2.setDescription(`<a:kalpemoji:901944586774147122> **${victim} Aramıza <@&${ayar.kızRol}> ,<@&${ayar.kızRol2}> Rolleriyle Katıldı \n<a:_shyamongus:901944587604611124>  Kaydı gerçekleştiren yetkili ${message.author} \n<a:welcome:901944589106171944> Aramıza hoşgeldin** ${victim}`).setThumbnail(ayar.kayıtresim).setImage(ayar.altresim)).then;
    };
                client.channels.cache.get(logchannel).send(
                    new Discord.MessageEmbed()
                    .setColor("BLUE")
                    .setFooter(`${client.user.username}`, client.user.avatarURL({dynamic:true}))
                    .setAuthor(`Kayıt Log / ${member.user.tag}`, message.guild.iconURL({dynamic:true, size:1024, format:"png"}))
                    .addField(`İsim`,`\`${member.user.username}\``,true)
                    .addField(`Discord ID`,`\`${member.user.id}\``,true)
                    .addField(`Yetkili`,`\`${message.author.tag}\``,true)
                    .addField(`Kayıt Tarihi`, `<t:${timestamp(now)}:F> (<t:${timestamp(now)}:R>)`, true))
 client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
};
exports.help = {
  name: 'kayıt',
};
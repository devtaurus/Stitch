const Discord = require("discord.js");
const csu = require("useful-tools");
module.exports.run = async (client, message, args) => {
let cDurum = message.author.presence.status;
    let cdurum;
    if(cDurum === 'online') cdurum = "Çevrimiçi"
    if(cDurum === 'idle') cdurum = "Boşta"
    if(cDurum === 'dnd') cdurum = "Rahatsız Etmeyin"
    if(cDurum === 'Invisible') cdurum = "Görünmez/Çevrimdışı"

  let csm;
  let csm1 = message.mentions.members.first();
  let csm2 = message.guild.members.cache.get(args[0]);
  if (csm1) {
    csm = csm1;
  }
  if (csm2) {
    csm = csm2;
  }
  if (!csm) {
    csm = message.member;
  }
  const a = "`";
  let csd =
    message.guild.members.cache.filter(
      mr => mr.joinedTimestamp < csm.joinedTimestamp
    ).size + 1;
  let cse = new Discord.MessageEmbed()
    .setTitle(a + csm.user.tag + a + " Kişi Bilgileri")
    .setThumbnail(csm.user.avatarURL())
    .setColor("BLUE")
    .addField("Kullanıcı İsmi", a + csm.user.username + a)
    .addField("Durum", a + cdurum + a)
    .addField("Kullanıcı ID", a + csm.user.id + a)
    .addField("Hesabın Kuruluş Tarihi", a + csu.tarih(csm.user.createdTimestamp) + a)
    .addField("Sunucuya Katıldığı Tarih", a + csu.tarih(csm.joinedTimestamp) + a)
    .addField("Ortak Sunucular", a + csd + a)
    .addField(
      "Roller",
      `**Rol Sayısı: ${a +
        csm.roles.cache.size +
        a}\nRoller:\n${csm.roles.cache.map(cs => cs).join(", ")}**`
    )

    .setFooter("Stitch")
    .setTimestamp();
  message.channel.send(cse);
};
module.exports.conf = {
  aliases: ["ui"]
};

module.exports.help = {
  name: "info"
};
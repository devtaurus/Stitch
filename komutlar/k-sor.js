const Discord = require("discord.js");
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply(' Ne konuşalım?')
let eminsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${eminsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('Bir hata algılandı...')
message.channel.send(body.cevap)
    } ) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sor"],//bot id yazan yere <@botid> yazarsanız Prefix yazıp yapısık botu etiketlerseniz olur 
  //örnek: <prefix><botetiket> sa
  permLevel: 0,
  kategori: "Bot"
};

exports.help = {
  name: "konuş",
  description: "Bot ile konuşursunuz. (Dikkat: Bu sistem CodAre yetkilileri tarafından geliştirilmiştir. Botun +18 konuşa bilme ihtimali vardır.)",
  usage: "sor"
};
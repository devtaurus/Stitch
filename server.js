const Discord = require("discord.js");
const client = new Discord.Client({ disableMentions: "everyone" });
const express = require("express");
const moment = require("moment");
const fs = require("fs");
const http = require("http");
const database = require("quick.db");
const db = require("quick.db");
const logs = require("discord-logs");
const ms = require("ms");
const data = require("quick.db");
const disbut = require("discord-buttons");
const Constants = require('discord.js/src/util/Constants.js')
Constants.DefaultOptions.ws.properties.$browser = 'Discord iOS'
require("discord-buttons")(client);
logs(client);
const ayarlar = require("./ayarlar.json");
const guildInvites = new Map();
const app = express();
const DataVoice = new Map();
const { prefix, url } = require("./ayarlar.json");
function timestamp(value) {
  return Math.floor(new Date(value).getTime() / 1000);
}
var now = new Date();
app.get("/foo", (req, res, next) => {
  const foo = JSON.parse(req.body.jsonString);
});

//KOMUT ALGILAYICI______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komutlar Sıralanıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS YÜKLEYİCİ_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlikler Sıralanıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

//Geri Dönüş Sistemi

client.on("message", msg => {
  if (msg.content === "sa") {
    msg.channel.send("Aleyküm Selam, Hoşgeldin"); //Tagınızı yazın
  }
});

client.on("message", msg => {
  if (msg.content === "tag") {
    msg.channel.send("✯"); //Tagınızı yazın
  }
});

client.on("message", msg => {
  if (msg.content === "Tag") {
    msg.channel.send("✯"); //Tagınızı yazın
  }
});

client.on("message", msg => {
  if (msg.content === "Sa") {
    msg.channel.send("Aleyküm Selam, Hoşgeldin"); //Tagınızı yazın
  }
});

client.on("message", msg => {
  if (msg.content === "maynak") {
    msg.channel.send("Senaa"); //Tagınızı yazın
  }
});











client.on("guildMemberAdd", member => {
  require("moment-duration-format");
  var üyesayısı = member.guild.members.cache.size
    .toString()
    .replace(/ /g, "    ");
  var üs = üyesayısı.match(/([0-999])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
      return {
        "0": `0`,
        "1": `1`,
        "2": `2`,
        "3": `3`,
        "4": `4`,
        "5": `5`,
        "6": `6`,
        "7": `7`,
        "8": `8`,
        "9": `9`
      }[d];
    });
  }
  let user = client.users.cache.get(member.id);
  require("moment-duration-format");
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gecen = moment
    .duration(kurulus)
    .format(
      ` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`
    );
  var kontrol;
  if (kurulus < 1296000000) kontrol = "Güvenilir Değil";
  if (kurulus > 1296000000) kontrol = "Güvenilir";
  moment.locale("tr");

  let kanal = client.guilds.cache
    .get("895223270662631434")
    .channels.cache.get("895223270738100312");
  let randomgif = [
    "https://media.discordapp.net/attachments/744976703163728032/751451554132918323/tenor-1.gif",
    "https://media.discordapp.net/attachments/744976703163728032/751451693992116284/black.gif",
    "https://media.discordapp.net/attachments/765870655958548490/765871557993824256/tumblr_ozitqtbIIf1tkflzao1_540.gif",
    "https://media.discordapp.net/attachments/765870655958548490/765871565257965578/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32622f61352f31312f32626135313161663865.gif"
  ];
  kanal.send(
    new Discord.MessageEmbed()
      .setTitle(`Birisi Spawn Oldu!`)
      .setDescription(
        `
    
         **<a:welcome:901944589106171944> ${member} EvilyN'e Hoşgeldin \n\n  <a:_yklniyor:901944586904174612> Ses Teyit Kanallarından Birine Katıl Ve Yetkililerin Seni Teyit Etmesini Bekle! \n\n Hesabın Kuruluş Tarihi **` +
          gecen +
          `** \n\n Hesabın durumu: **` +
          kontrol +
          `** \n\n <a:_verifryed:901944957135368233> Otorol Verildi: <@&895223270683594819>**`
      )
      .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
      .setThumbnail(
        user.avatarURL({
          dynamic: true,
          format: "gif",
          format: "png",
          format: "jpg",
          size: 2048
        })
      )
      .setColor("RANDOM")
  );
  kanal.send(`${member} <@&895223270717157394>`);
});

///////hg-bb
client.on("guildMemberAdd", member => {
  let kanal = client.guilds.cache
    .get("895223270662631434")
    .channels.cache.get("895223270738100311");
  kanal.send(
    new Discord.MessageEmbed()
      .addField(
        `<a:saok:931961569041088552> ${member.user.tag} Aramıza katıldı!`,
        `${member}! Hoş geldin Seninle beraber ${member.guild.memberCount} kişi olduk.`
      )
      .setColor("RANDOM")
  );
  member.send("");
  let rol = "895223270683594819";
  member.roles.add(rol);

  let log = client.guilds.cache
    .get("895223270662631434")
    .channels.cache.get("895223270738100311");
  log.send(
    new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(
        "<a:saok:931961569041088552> Üye katıldı ve üyeye rol verildi!"
      )
      .setDescription(
        `Katılan Üye: ${member} 
    Verilen Rol: <@&${rol}>`
      )
      .setTimestamp()
  );
});

client.on("guildMemberRemove", member => {
  let kanal = client.guilds.cache
    .get("895223270662631434")
    .channels.cache.get("895223270738100311");
  kanal.send(
    `<a:saok:931961569041088552> ${member} Aramızdan ayrıldı.`
  );
});

/////////////////////////////KÜFÜR ENGEL SİSTEMİ
const küfür = [
  "abaza",
  "abazan",
  "ag",
  "a\u011fz\u0131na s\u0131\u00e7ay\u0131m",
  "ahmak",
  "allahs\u0131z",
  "am",
  "amar\u0131m",
  "ambiti",
  "am biti",
  "amc\u0131\u011f\u0131",
  "amc\u0131\u011f\u0131n",
  "amc\u0131\u011f\u0131n\u0131",
  "amc\u0131\u011f\u0131n\u0131z\u0131",
  "amc\u0131k",
  "amc\u0131k ho\u015faf\u0131",
  "amc\u0131klama",
  "amc\u0131kland\u0131",
  "amcik",
  "amck",
  "amckl",
  "amcklama",
  "amcklaryla",
  "amckta",
  "amcktan",
  "amcuk",
  "am\u0131k",
  "am\u0131na",
  "am\u0131nako",
  "am\u0131na koy",
  "am\u0131na koyar\u0131m",
  "am\u0131na koyay\u0131m",
  "am\u0131nakoyim",
  "am\u0131na koyyim",
  "am\u0131na s",
  "am\u0131na sikem",
  "am\u0131na sokam",
  "am\u0131n feryad\u0131",
  "am\u0131n\u0131",
  "am\u0131n\u0131 s",
  "am\u0131n oglu",
  "am\u0131no\u011flu",
  "am\u0131n o\u011flu",
  "am\u0131s\u0131na",
  "am\u0131s\u0131n\u0131",
  "amina",
  "amina g",
  "amina k",
  "aminako",
  "aminakoyarim",
  "amina koyarim",
  "amina koyay\u0131m",
  "amina koyayim",
  "aminakoyim",
  "aminda",
  "amindan",
  "amindayken",
  "amini",
  "aminiyarraaniskiim",
  "aminoglu",
  "amin oglu",
  "amiyum",
  "amk",
  "amkafa",
  "amk \u00e7ocu\u011fu",
  "amlarnzn",
  "aml\u0131",
  "amm",
  "ammak",
  "ammna",
  "amn",
  "amna",
  "amnda",
  "amndaki",
  "amngtn",
  "amnn",
  "amona",
  "amq",
  "ams\u0131z",
  "amsiz",
  "amsz",
  "amteri",
  "amugaa",
  "amu\u011fa",
  "amuna",
  "ana",
  "anaaann",
  "anal",
  "analarn",
  "anam",
  "anamla",
  "anan",
  "anana",
  "anandan",
  "anan\u0131",
  "anan\u0131",
  "anan\u0131n",
  "anan\u0131n am",
  "anan\u0131n am\u0131",
  "anan\u0131n d\u00f6l\u00fc",
  "anan\u0131nki",
  "anan\u0131sikerim",
  "anan\u0131 sikerim",
  "anan\u0131sikeyim",
  "anan\u0131 sikeyim",
  "anan\u0131z\u0131n",
  "anan\u0131z\u0131n am",
  "anani",
  "ananin",
  "ananisikerim",
  "anani sikerim",
  "ananisikeyim",
  "anani sikeyim",
  "anann",
  "ananz",
  "anas",
  "anas\u0131n\u0131",
  "anas\u0131n\u0131n am",
  "anas\u0131 orospu",
  "anasi",
  "anasinin",
  "anay",
  "anayin",
  "angut",
  "anneni",
  "annenin",
  "annesiz",
  "anuna",
  "aptal",
  "aq",
  "a.q",
  "a.q.",
  "aq.",
  "ass",
  "atkafas\u0131",
  "atm\u0131k",
  "att\u0131rd\u0131\u011f\u0131m",
  "attrrm",
  "auzlu",
  "avrat",
  "ayklarmalrmsikerim",
  "azd\u0131m",
  "azd\u0131r",
  "azd\u0131r\u0131c\u0131",
  "babaannesi ka\u015far",
  "baban\u0131",
  "baban\u0131n",
  "babani",
  "babas\u0131 pezevenk",
  "baca\u011f\u0131na s\u0131\u00e7ay\u0131m",
  "bac\u0131na",
  "bac\u0131n\u0131",
  "bac\u0131n\u0131n",
  "bacini",
  "bacn",
  "bacndan",
  "bacy",
  "bastard",
  "basur",
  "beyinsiz",
  "b\u0131z\u0131r",
  "bitch",
  "biting",
  "bok",
  "boka",
  "bokbok",
  "bok\u00e7a",
  "bokhu",
  "bokkkumu",
  "boklar",
  "boktan",
  "boku",
  "bokubokuna",
  "bokum",
  "bombok",
  "boner",
  "bosalmak",
  "bo\u015falmak",
  "cenabet",
  "cibiliyetsiz",
  "cibilliyetini",
  "cibilliyetsiz",
  "cif",
  "cikar",
  "cim",
  "\u00e7\u00fck",
  "dalaks\u0131z",
  "dallama",
  "daltassak",
  "dalyarak",
  "dalyarrak",
  "dangalak",
  "dassagi",
  "diktim",
  "dildo",
  "dingil",
  "dingilini",
  "dinsiz",
  "dkerim",
  "domal",
  "domalan",
  "domald\u0131",
  "domald\u0131n",
  "domal\u0131k",
  "domal\u0131yor",
  "domalmak",
  "domalm\u0131\u015f",
  "domals\u0131n",
  "domalt",
  "domaltarak",
  "domalt\u0131p",
  "domalt\u0131r",
  "domalt\u0131r\u0131m",
  "domaltip",
  "domaltmak",
  "d\u00f6l\u00fc",
  "d\u00f6nek",
  "d\u00fcd\u00fck",
  "eben",
  "ebeni",
  "ebenin",
  "ebeninki",
  "ebleh",
  "ecdad\u0131n\u0131",
  "ecdadini",
  "embesil",
  "emi",
  "fahise",
  "fahi\u015fe",
  "feri\u015ftah",
  "ferre",
  "fuck",
  "fucker",
  "fuckin",
  "fucking",
  "gavad",
  "gavat",
  "geber",
  "geberik",
  "gebermek",
  "gebermi\u015f",
  "gebertir",
  "ger\u0131zekal\u0131",
  "gerizekal\u0131",
  "gerizekali",
  "gerzek",
  "giberim",
  "giberler",
  "gibis",
  "gibi\u015f",
  "gibmek",
  "gibtiler",
  "goddamn",
  "godo\u015f",
  "godumun",
  "gotelek",
  "gotlalesi",
  "gotlu",
  "gotten",
  "gotundeki",
  "gotunden",
  "gotune",
  "gotunu",
  "gotveren",
  "goyiim",
  "goyum",
  "goyuyim",
  "goyyim",
  "g\u00f6t",
  "g\u00f6t deli\u011fi",
  "g\u00f6telek",
  "g\u00f6t herif",
  "g\u00f6tlalesi",
  "g\u00f6tlek",
  "g\u00f6to\u011flan\u0131",
  "g\u00f6t o\u011flan\u0131",
  "g\u00f6to\u015f",
  "g\u00f6tten",
  "g\u00f6t\u00fc",
  "g\u00f6t\u00fcn",
  "g\u00f6t\u00fcne",
  "g\u00f6t\u00fcnekoyim",
  "g\u00f6t\u00fcne koyim",
  "g\u00f6t\u00fcn\u00fc",
  "g\u00f6tveren",
  "g\u00f6t veren",
  "g\u00f6t verir",
  "gtelek",
  "gtn",
  "gtnde",
  "gtnden",
  "gtne",
  "gtten",
  "gtveren",
  "hasiktir",
  "hassikome",
  "hassiktir",
  "has siktir",
  "hassittir",
  "haysiyetsiz",
  "hayvan herif",
  "ho\u015faf\u0131",
  "h\u00f6d\u00fck",
  "hsktr",
  "huur",
  "\u0131bnel\u0131k",
  "ibina",
  "ibine",
  "ibinenin",
  "ibne",
  "ibnedir",
  "ibneleri",
  "ibnelik",
  "ibnelri",
  "ibneni",
  "ibnenin",
  "ibnerator",
  "ibnesi",
  "idiot",
  "idiyot",
  "imansz",
  "ipne",
  "iserim",
  "i\u015ferim",
  "ito\u011flu it",
  "kafam girsin",
  "kafas\u0131z",
  "kafasiz",
  "kahpe",
  "kahpenin",
  "kahpenin feryad\u0131",
  "kaka",
  "kaltak",
  "kanc\u0131k",
  "kancik",
  "kappe",
  "karhane",
  "ka\u015far",
  "kavat",
  "kavatn",
  "kaypak",
  "kayyum",
  "kerane",
  "kerhane",
  "kerhanelerde",
  "kevase",
  "keva\u015fe",
  "kevvase",
  "koca g\u00f6t",
  "kodu\u011fmun",
  "kodu\u011fmunun",
  "kodumun",
  "kodumunun",
  "koduumun",
  "koyarm",
  "koyay\u0131m",
  "koyiim",
  "koyiiym",
  "koyim",
  "koyum",
  "koyyim",
  "krar",
  "kukudaym",
  "laciye boyad\u0131m",
  "lavuk",
  "libo\u015f",
  "madafaka",
  "mal",
  "malafat",
  "malak",
  "manyak",
  "mcik",
  "meme",
  "memelerini",
  "mezveleli",
  "minaamc\u0131k",
  "mincikliyim",
  "mna",
  "monakkoluyum",
  "motherfucker",
  "mudik",
  "oc",
  "ocuu",
  "ocuun",
  "O\u00c7",
  "o\u00e7",
  "o. \u00e7ocu\u011fu",
  "o\u011flan",
  "o\u011flanc\u0131",
  "o\u011flu it",
  "orosbucocuu",
  "orospu",
  "orospucocugu",
  "orospu cocugu",
  "orospu \u00e7oc",
  "orospu\u00e7ocu\u011fu",
  "orospu \u00e7ocu\u011fu",
  "orospu \u00e7ocu\u011fudur",
  "orospu \u00e7ocuklar\u0131",
  "orospudur",
  "orospular",
  "orospunun",
  "orospunun evlad\u0131",
  "orospuydu",
  "orospuyuz",
  "orostoban",
  "orostopol",
  "orrospu",
  "oruspu",
  "oruspu\u00e7ocu\u011fu",
  "oruspu \u00e7ocu\u011fu",
  "osbir",
  "ossurduum",
  "ossurmak",
  "ossuruk",
  "osur",
  "osurduu",
  "osuruk",
  "osururum",
  "otuzbir",
  "\u00f6k\u00fcz",
  "\u00f6\u015fex",
  "patlak zar",
  "penis",
  "pezevek",
  "pezeven",
  "pezeveng",
  "pezevengi",
  "pezevengin evlad\u0131",
  "pezevenk",
  "pezo",
  "pic",
  "pici",
  "picler",
  "pi\u00e7",
  "pi\u00e7in o\u011flu",
  "pi\u00e7 kurusu",
  "pi\u00e7ler",
  "pipi",
  "pipi\u015f",
  "pisliktir",
  "porno",
  "pussy",
  "pu\u015ft",
  "pu\u015fttur",
  "rahminde",
  "revizyonist",
  "s1kerim",
  "s1kerm",
  "s1krm",
  "sakso",
  "saksofon",
  "salaak",
  "salak",
  "saxo",
  "sekis",
  "serefsiz",
  "sevgi koyar\u0131m",
  "sevi\u015felim",
  "sexs",
  "s\u0131\u00e7ar\u0131m",
  "s\u0131\u00e7t\u0131\u011f\u0131m",
  "s\u0131ecem",
  "sicarsin",
  "sie",
  "sik",
  "sikdi",
  "sikdi\u011fim",
  "sike",
  "sikecem",
  "sikem",
  "siken",
  "sikenin",
  "siker",
  "sikerim",
  "sikerler",
  "sikersin",
  "sikertir",
  "sikertmek",
  "sikesen",
  "sikesicenin",
  "sikey",
  "sikeydim",
  "sikeyim",
  "sikeym",
  "siki",
  "sikicem",
  "sikici",
  "sikien",
  "sikienler",
  "sikiiim",
  "sikiiimmm",
  "sikiim",
  "sikiir",
  "sikiirken",
  "sikik",
  "sikil",
  "sikildiini",
  "sikilesice",
  "sikilmi",
  "sikilmie",
  "sikilmis",
  "sikilmi\u015f",
  "sikilsin",
  "sikim",
  "sikimde",
  "sikimden",
  "sikime",
  "sikimi",
  "sikimiin",
  "sikimin",
  "sikimle",
  "sikimsonik",
  "sikimtrak",
  "sikin",
  "sikinde",
  "sikinden",
  "sikine",
  "sikini",
  "sikip",
  "sikis",
  "sikisek",
  "sikisen",
  "sikish",
  "sikismis",
  "siki\u015f",
  "siki\u015fen",
  "siki\u015fme",
  "sikitiin",
  "sikiyim",
  "sikiym",
  "sikiyorum",
  "sikkim",
  "sikko",
  "sikleri",
  "sikleriii",
  "sikli",
  "sikm",
  "sikmek",
  "sikmem",
  "sikmiler",
  "sikmisligim",
  "siksem",
  "sikseydin",
  "sikseyidin",
  "siksin",
  "siksinbaya",
  "siksinler",
  "siksiz",
  "siksok",
  "siksz",
  "sikt",
  "sikti",
  "siktigimin",
  "siktigiminin",
  "sikti\u011fim",
  "sikti\u011fimin",
  "sikti\u011fiminin",
  "siktii",
  "siktiim",
  "siktiimin",
  "siktiiminin",
  "siktiler",
  "siktim",
  "siktim",
  "siktimin",
  "siktiminin",
  "siktir",
  "siktir et",
  "siktirgit",
  "siktir git",
  "siktirir",
  "siktiririm",
  "siktiriyor",
  "siktir lan",
  "siktirolgit",
  "siktir ol git",
  "sittimin",
  "sittir",
  "skcem",
  "skecem",
  "skem",
  "sker",
  "skerim",
  "skerm",
  "skeyim",
  "skiim",
  "skik",
  "skim",
  "skime",
  "skmek",
  "sksin",
  "sksn",
  "sksz",
  "sktiimin",
  "sktrr",
  "skyim",
  "slaleni",
  "sokam",
  "sokar\u0131m",
  "sokarim",
  "sokarm",
  "sokarmkoduumun",
  "sokay\u0131m",
  "sokaym",
  "sokiim",
  "soktu\u011fumunun",
  "sokuk",
  "sokum",
  "soku\u015f",
  "sokuyum",
  "soxum",
  "sulaleni",
  "s\u00fclaleni",
  "s\u00fclalenizi",
  "s\u00fcrt\u00fck",
  "\u015ferefsiz",
  "\u015f\u0131ll\u0131k",
  "taaklarn",
  "taaklarna",
  "tarrakimin",
  "tasak",
  "tassak",
  "ta\u015fak",
  "ta\u015f\u015fak",
  "tipini s.k",
  "tipinizi s.keyim",
  "tiyniyat",
  "toplarm",
  "topsun",
  "toto\u015f",
  "vajina",
  "vajinan\u0131",
  "veled",
  "veledizina",
  "veled i zina",
  "verdiimin",
  "weled",
  "weledizina",
  "whore",
  "xikeyim",
  "yaaraaa",
  "yalama",
  "yalar\u0131m",
  "yalarun",
  "yaraaam",
  "yarak",
  "yaraks\u0131z",
  "yaraktr",
  "yaram",
  "yaraminbasi",
  "yaramn",
  "yararmorospunun",
  "yarra",
  "yarraaaa",
  "yarraak",
  "yarraam",
  "yarraam\u0131",
  "yarragi",
  "yarragimi",
  "yarragina",
  "yarragindan",
  "yarragm",
  "yarra\u011f",
  "yarra\u011f\u0131m",
  "yarra\u011f\u0131m\u0131",
  "yarraimin",
  "yarrak",
  "yarram",
  "yarramin",
  "yarraminba\u015f\u0131",
  "yarramn",
  "yarran",
  "yarrana",
  "yarrrak",
  "yavak",
  "yav\u015f",
  "yav\u015fak",
  "yav\u015fakt\u0131r",
  "yavu\u015fak",
  "y\u0131l\u0131\u015f\u0131k",
  "yilisik",
  "yogurtlayam",
  "yo\u011furtlayam",
  "yrrak",
  "z\u0131kk\u0131m\u0131m",
  "zibidi",
  "zigsin",
  "zikeyim",
  "zikiiim",
  "zikiim",
  "zikik",
  "zikim",
  "ziksiiin",
  "ziksiin",
  "zulliyetini",
  "zviyetini"
];

client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
    if (i) {
      if (küfür.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#ff7e00")
          .setDescription(
            `${nev.author} , **Ben varken küfürmü emteye çalıştın?**`
          )
          .addField("Küfür:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#ff7e00")
          .setDescription(`${nev.author} , **Mesajı editle küfür etmekmi?**`);
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg =>
          msg.delete({
            timeout: 5000
          })
        );
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
  if (i) {
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({
            timeout: 750
          });
          const embeds = new Discord.MessageEmbed()
            .setColor("#ff7e00")
            .setDescription(
              `<@${msg.author.id}> , **Küfür etmeye çalıştı ama ben varken asla!**`
            );
          msg.channel.send(embeds).then(msg =>
            msg.delete({
              timeout: 5000
            })
          );
          const embed = new Discord.MessageEmbed()
            .setColor("#ff7e00")
            .setDescription(
              `${msg.author} , **Küfür etmeye çalıştı ama ben varken asla!**`
            )
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

////////////////////////hoşgeldinmesajı
client.on("inviteCreate", async invite =>
  guildInvites.set(invite.guild.id, await invite.guild.fetchInvites())
);
client.on("ready", () => {
  client.guilds.cache.forEach(guild => {
    guild
      .fetchInvites()
      .then(invites => guildInvites.set(guild.id, invites))
      .catch(err => console.log(err));
  });
});

client.on("guildMemberAdd", async member => {
  //hamzamertakbaba#3361
  const cachedInvites = guildInvites.get(member.guild.id);
  const newInvites = await member.guild.fetchInvites();
  guildInvites.set(member.guild.id, newInvites);
  try {
    const usedInvite =
      newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses) ||
      "1";
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `<a:saok:931961569041088552> ${member.user.tag} Sunucuya ${member.guild.memberCount}. sırayla katıldı. ${usedInvite.inviter.tag} tarafından davet edilmiş. ${usedInvite.url} Davet koduyla katılmış. Bu davet kodu ${usedInvite.uses} kere kullanılmış.`
      )
      .setTimestamp()
      .setFooter("♥ Stitch");
    const welcomeChannel = member.guild.channels.cache.find(
      channel => channel.id === "895223270738100311"
    );
    if (welcomeChannel) {
      welcomeChannel.send(embed).catch(err => console.log(err));
    }
  } catch (err) {
    console.log(err);
  }
});


///////////////////////mesajsillog
const rdb = require('orio.db')
       client.on('messageDelete', async message => {    
        if(message.author.bot) return
         
      
          const channel = message.guild.channels.cache.get(rdb.get(`dcslog_${message.guild.id}`));
        if (!channel) return;
        
          let dcs = new Discord.MessageEmbed()
                          .setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
                          .setTitle("Mesaj silindi")                
                          .addField(`Silinen mesaj :`,`${message.content}`)
                          .addField(`Kanal:`,`${message.channel.name}`)
                          .setTimestamp()
                          .setColor("RANDOM")
      
          channel.send(dcs)
      });
      
      client.on('messageUpdate', async(oldMessage, newMessage) => {
          if(oldMessage.author.bot) return;
          if(oldMessage.content == newMessage.content) return;
      
          const channel = oldMessage.guild.channels.cache.get(rdb.get(`dcslog_${oldMessage.guild.id}`));
          if(!channel) return;
      
          let dcs2 = new Discord.MessageEmbed()
          .setTitle("Mesaj güncellendi!")
          .addField("Eski mesaj : ",`${oldMessage.content}`)
          .addField("Yeni mesaj : ",`${newMessage.content}`)
          .addField("Kanal : ",`${oldMessage.channel.name}`)
          .setTimestamp()
          .setColor("RANDOM")
      
          channel.send(dcs2)
      });





///////////////////////seviye
client.cooldown = new Discord.Collection();
client.config = {
  cooldown: 1 * 1000
};
client.db = require("quick.db");
client.on("message", async message => {
  if (!message.guild || message.author.bot) return;
  // XP
  exp(message);
  function exp(message) {
    if (
      !client.cooldown.has(`${message.author.id}`) ||
      Date.now() - client.cooldown.get(`${message.author.id}`) >
        client.config.cooldown
    ) {
      let exp = client.db.add(`exp_${message.author.id}`, 1);
      let level = Math.floor(0.3 * Math.sqrt(exp));
      let lvl =
        client.db.get(`level_${message.author.id}`) ||
        client.db.set(`level_${message.author.id}`, 1);
      if (level > lvl) {
        let newLevel = client.db.set(`level_${message.author.id}`, level);
        message.channel.send(
          `<a:thuglifepikachu:905166100709400607> ${message.author.toString()}, Level atladın yeni levelin ${newLevel}!`
        );
      }
      client.cooldown.set(`${message.author.id}`, Date.now());
    }
  }
});

//////////////////////////////////Ban limit
client.on("guildBanAdd", async (guild, user) => {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  let banlimit = await db.fetch(`banlimit31_${guild.id}`);
  let kullanıcıban = await db.fetch(`banlimitP31_${entry.executor.id}`);
  const log = db.fetch(`korumaLog_${guild.id}`);
  if (banlimit) {
    if (entry.executor.id !== guild.owner.user.id) {
      await db.add(`banlimitP31_${entry.executor.id}`, 1);

      client.channels
        .get(log)
        .send(
          `Limit Çalışıyor. ${entry.executor} ${entry.executor.id} Ban limiti Oldu.`
        );

      if (kullanıcıban >= banlimit) {
        try {
          guild.kick(entry.executor.id, "Ban Limit");
          client.channels
            .get(log)
            .send(
              `Sunucundan bir yetkili ban limitine ulaştı ve sunucudan atıldı ! İşte bilgileri => \n\n\`Kullanıcı:\`  ${
                entry.executor
              } | ${
                entry.executor.id
              } \n\`Discord'a ve Sunucuya Katılım Tarihi:\` \n• **Discord:** ${moment(
                entry.executor.createdAt
              ).format("DD/MM/YYYY | HH:mm:ss")} • **Sunucu:** ${moment(
                guild.member(entry.executor).joinedAt
              ).format("DD/MM/YYYY | HH:mm:ss")}`
            );
        } catch (err) {}
        db.delete(`banlimitP31_${entry.executor.id}`);
      }
    }
  }
});

client.on("channelDelete", async channel => {
  const data = await db.fetch(`kanalkoruma_${channel.guild.id}`);

  if (channel.type === "text") {
    if (data === "acik") {
      let açıklama = channel.topic;
      let kategoriID = channel.parentID;
      let isim = channel.name;
      let sıra = channel.position;
      let nsfw = channel.nsfw;

      channel.guild.channels
        .create(channel.name, {
          type: "text",
          position: sıra,
          topic: açıklama,
          nsfw: nsfw
        })
        .then(kanal => {
          let z = kanal.guild.channels.cache.get(kanal.id);
          z.setParent(
            z.guild.channels.cache.find(channel => channel.id === kategoriID)
          );
        });
    }
  }

  if (data === "kapali") {
  }
});


/////////////////////otoistatistik
client.on("ready", async () => {
let dc = require("discord.js")
let csc = client.channels.cache.get("903725942348865556")
setInterval(() => {
let cse = new dc.MessageEmbed() 
.setTitle("Sunucu İstatistik")
.setColor("GREEN")
.setTimestamp()
.addField("Toplam Kanal", client.channels.cache.size)
.setDescription("**Sunucu Logları Temizlendi. Ping Değeri Ölçüldü.** \n\n**Ping Değerine Göre Bölge Değişikliği Sistemi: Aktif** \n\n** Hizmetler her 5 dakikada bir güncelleniyor.**")
.setThumbnail(client.user.avatarURL())
csc.send(cse)
}, 300000)
})






client.on("message", async message => {
  let cdb = require("croxydb")
      let uyarisayisi = await cdb.fetch(`reklamuyari_${message.author.id}`);
      let reklamkick = await cdb.fetch(`reklamkick_${message.guild.id}`)
      let kullanici = message.member;
      if (reklamkick == 'kapali') return;
      if (reklamkick == 'acik') {
          const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
          if (reklam.some(word => message.content.toLowerCase().includes(word))) {
              if (!message.member.hasPermission("ADMINISTRATOR")) {
                  cdb.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                  if (uyarisayisi === null) {
                      await kullanici.kick({
                          reason: `Reklam engel sistemi`,
                      })
                      let uyari = new Discord.MessageEmbed()
                          .setColor("RANDOM")
                          .setFooter('Reklam engel sistemi', client.user.avatarURL())
                          .setDescription(`<@${message.author.id}> Reklam yaptığı için kicklendi. Bir kez daha yaparsa banlanacak`)
                          .setTimestamp()
                      message.channel.send(uyari)
                  }
                  if (uyarisayisi === 1) {
                      await kullanici.ban({
                          reason: `Reklam ban sistemi`,
                      })
                      cdb.delete(`reklamuyari_${message.author.id}`)
                      let uyari = new Discord.MessageEmbed()
                          .setColor("RANDOM")
                          .setFooter('Reklam kick sistemi', client.user.avatarURL())
                          .setDescription(`<@${message.author.id}> kick yedikten sonra reklam yapmaya tekrar devam ettiği için banlandı.`)
                          .setTimestamp()
                      message.channel.send(uyari)
                  }
  
                  message.delete();
  
              }
          }
      }
  });















client.on("message", async message => {
    if(message.content.toLowerCase().startsWith("s!davetler")){

        let invites = await message.guild.fetchInvites();
        if(message.mentions.users.first()){
            toplam = 0;
            let array = [];
            let codearray = [];
            let bs = invites.filter(x => x.inviter === message.mentions.users.first())
            const as = bs.sort((a, b) => a.uses > b.uses);
            as.forEach(x => codearray.push(x.code))
            as.forEach(x => array.push(Number(x.uses)));

            for(i = 0; i < array.length; i++){
                toplam += array[i]
            }

            if(array.length === 0) return message.reply("Kullanıcının daveti bulunmamaktadır.")

            let embed = new Discord.MessageEmbed()
            .setAuthor(`${message.mentions.users.first().username} üyesine ait davet sıralaması`, message.mentions.users.first().displayAvatarURL({dynamic: true}))
            .setThumbnail(message.mentions.users.first().displayAvatarURL({dynamic: true}))
            .addFields(
                {name: "Davetlerin Toplam Kullanımı", value: `**${toplam}**`, inline: true},
                {name: "En çok kullanılan Daveti", value: `(${as.first().code}) ${as.first().uses}`, inline: true},
                {name: `Davetler[${bs.size}]`, value: `${codearray.join("\n")}`, inline: false}
            )
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL())
            .setTimestamp()
    
            message.channel.send(embed)
        } else {

            toplam = 0;
            let array = [];
            let codearray = [];
            let bs = invites.filter(x => x.inviter === message.author);
            const as = bs.sort((a, b) => a.uses > b.uses);
            as.forEach(x => codearray.push(x.code))
            as.forEach(x => array.push(Number(x.uses)));


            for(i = 0; i < array.length; i++){
                toplam += array[i]
            }

            if(array.length === 0) return message.reply("Davetiniz bulunmamaktadır.")
            let embed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.username} üyesine ait davet sıralaması`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
            .addFields(
                {name: "Davetlerin Toplam Kullanımı", value: `**${toplam}**`, inline: true},
                {name: "En çok kullanılan Daveti", value: `(${as.first().code}) ${as.first().uses}`, inline: true},
                {name: `Davetler[${bs.size}]`, value: `${codearray.join("\n")}`, inline: false}
            )
            .setFooter("Stitch", client.user.displayAvatarURL())
            .setTimestamp()
    
            message.channel.send(embed)
        }
    
}
})










































///////////////////boostbilgi
client.on("guildMemberBoost", member => {
  // Can°B#1308
  member.send(
    `**${member.guild.name}** Sunucumuza boost bastığın için teşekkürler!`
  );
});

client.on("channelCreate", channel => {
  client.channels.cache
    .get("906116449150570496")
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .addField(
          `**Yeni bir kanal oluşturuldu. Oluşturulan Kanal: **`,
          `\`${channel.name}\``,
          true
        )
    );
});

client.on("channelDelete", channel => {
  client.channels.cache
    .get("906116449150570496")
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .addField(
          `**Bir kanal silindi. Silinen Kanal: **`,
          `\`${channel.name}\``,
          true
        )
    );
});

//////////////////////afksistemi
client.on("message", async message => {
  // chimp'∞B#1008
  if (message.channel.type === "dm") return;
  if (
    (await data.fetch(`afk.${message.author.id}.${message.guild.id}`)) ==
    undefined
  )
    return;
  const ms = require("ms");

  if (message.content.length > 2) {
    const sebepp = await data.fetch(
      `sebep.${message.author.id}.${message.guild.id}`
    );
    const sp = await data.fetch(
      `giriş.${message.author.id}.${message.guild.id}`
    );
    const asd = await data.fetch(
      `display.${message.author.id}.${message.guild.id}`
    );

    let atılmaay = moment(Date.now() + 10800000).format("MM");
    let atılmagün = moment(Date.now() + 10800000).format("DD");
    let atılmasaat = moment(Date.now() + 10800000).format("HH:mm:ss");
    let atılma = `\`${atılmagün} ${atılmaay
      .replace(/01/, "Ocak")
      .replace(/02/, "Şubat")
      .replace(/03/, "Mart")
      .replace(/04/, "Nisan")
      .replace(/05/, "Mayıs")
      .replace(/06/, "Haziran")
      .replace(/07/, "Temmuz")
      .replace(/08/, "Ağustos")
      .replace(/09/, "Eylül")
      .replace(/10/, "Ekim")
      .replace(/11/, "Kasım")
      .replace(/12/, "Aralık")} ${atılmasaat}\``;

    message.guild.members.cache.get(message.author.id).setNickname(asd);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(`${message.author.username}, hoşgeldin!`)
        .setColor("GREEN")
        .setDescription(`Afk modundan başarıyla çıkış yaptın.`)
        .addField("Giriş sebebin:", sebepp)
        .addField("AFK olma zamanın:", sp)
        .addField("Çıkış zamanın:", atılma)
    );
    data.delete(`afk.${message.author.id}.${message.guild.id}`);
    data.delete(`sebep.${message.author.id}.${message.guild.id}`);
    data.delete(`giriş.${message.author.id}.${message.guild.id}`);
    data.delete(`display.${message.author.id}.${message.guild.id}`);
  }
}); // codare ♥



//////////ready

client.on("ready", async () => {
  client.user.setActivity("Created by ❤️Taurus | s!");
});

/////////////////////////tagalanarol
client.on("userUpdate", async (oldUser, newUser) => {
  if (oldUser.username !== newUser.username) {
    const tag = "✯";
    const sunucu = "895223270662631434";
    const kanal = "903725942348865556";
    const rol = "899587829808644116";

    try {
      if (
        newUser.username.includes(tag) &&
        !client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.cache.has(rol)
      ) {
        await client.channels.cache
          .get(kanal)
          .send(
            new Discord.MessageEmbed()
              .setColor("GREEN")
              .setDescription(
                `${newUser} ${tag} Tagımızı Aldığı İçin <@&${rol}> Rolünü Verdim`
              )
          );
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.add(rol);
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .send(
            `Selam ${
              newUser.username
            }, Sunucumuzda ${tag} Tagımızı Aldığın İçin ${
              client.guilds.cache.get(sunucu).roles.cache.get(rol).name
            } Rolünü Sana Verdim!`
          );
      }
      if (
        !newUser.username.includes(tag) &&
        client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.cache.has(rol)
      ) {
        await client.channels.cache
          .get(kanal)
          .send(
            new Discord.MessageEmbed()
              .setColor("RED")
              .setDescription(
                `${newUser} ${tag} Tagımızı Çıkardığı İçin <@&${rol}> Rolünü Aldım`
              )
          );
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .roles.remove(rol);
        await client.guilds.cache
          .get(sunucu)
          .members.cache.get(newUser.id)
          .send(
            `Selam **${
              newUser.username
            }**, Sunucumuzda ${tag} Tagımızı Çıkardığın İçin ${
              client.guilds.cache.get(sunucu).roles.cache.get(rol).name
            } Rolünü Senden Aldım!`
          );
      }
    } catch (e) {
      console.log(`Bir hata oluştu! ${e}`);
    }
  }
});



///////////////////////////////////GELENE AYARLAMALI İSİM
client.on("guildMemberAdd", member => {
  if (member.guild.id !== "895223270662631434") return;
  member.setNickname("Kayıtsız");
});

















//////////////////////////////////////////DM LOG
client.on("message", msg => {
  var dm = client.channels.cache.get("905828396108484608"); //Buraya dm logun id yazın
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setColor("RED")
      .setFooter(
        `${client.user.username}`,
        client.user.avatarURL({ dynamic: true })
      )
      .setAuthor(`DM Log / ${msg.author.tag}`)
      .addField(`Gönderen`, msg.author.tag, true)
      .addField(`Gönderen ID`, msg.author.id, true)
      .addField(`DM Tarihi`, `<t:${timestamp(now)}:F>`, true)
      .addField(`Gönderilen Mesaj`, msg.content, true);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});

////////////////////////////////////////CAPSLOCK ENGEL
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`${msg.author}, Büyük harf kullanımı engellenmekte!`)
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});

///////////////////////////////////////Rol Koruma Sistemi
client.on("roleDelete", async role => {
  const data = await db.fetch(`rolkoruma_${role.guild.id}`);

  if (data === "acik") {
    let isim = role.name;
    role.guild.roles.create({ data: { name: isim } });
  }
});


/////////////////////////chat sil
client.on("message", async message => {
  if (message.channel.id === "kanalid") {
    if (message.attachments.size < 1) {
      message.delete({
        timeout: 100
      });
    }
  }
});


///////////////////////////////////TİCKET
{
const csri = "934206378480922645"
const cdb = require("croxydb")
client.on("clickButton", async button => {

//------------\\
const evet = new disbut.MessageButton()
.setStyle("green")
.setLabel("Evet")
.setID("Evet");
const hayır = new disbut.MessageButton()
.setStyle("red")
.setLabel("Hayır")
.setID("Hayır");
const geriyükle = new disbut.MessageButton()
.setStyle("green")
.setLabel("Geri Yükle")
.setID("GeriYükle");
const sil = new disbut.MessageButton()
.setStyle("red")
.setLabel("Desteği Kapat")
.setID("DesteğiKapat");
const kilit = new disbut.MessageButton()
.setStyle("grey")
.setLabel("Kapat")
.setEmoji("🔒")
.setID("Kilit");
//------------\\

//------------\\
let member = button.guild.members.cache.get(button.clicker.user.id)
let kanal  = button.guild.channels.cache.get(button.channel.id)
let data   = await cdb.get(`destekkullanıcı_${member.id}`);
let data2  = await cdb.get(`destekkanal_${kanal.id}`);
let user   = button.guild.members.cache.get(data2);

//------------\\

//------------\\
if(button.id === "ticket"){
if(data) return button.reply.send("> **Başarasız!** Zaten aktif destek talebiniz bulunuyor. **Kanal:** <#" + data +">", true);

button.reply.think(true).then(async a => {
  if(!button.guild.channels.cache.find(c => c.name === "Destek Sistemi")){
button.guild.channels.create('Destek Sistemi' , {type: 'category'})
  }
  setTimeout(() => {
    const csk = button.guild.channels.cache.find(c => c.name === "Destek Sistemi")
button.guild.channels.create('destek-' + member.user.username , { type: 'text', reason: 'Destek '+ member.user.tag }).then(async c => {
c.setParent(csk.id);

await cdb.set(`destekkanal_${c.id}`, member.id);
await cdb.set(`destekkullanıcı_${member.id}`, c.id);

          let role = button.guild.roles.cache.find(a => a.name === '@everyone')      
          await c.createOverwrite(role.id, {
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            });
  
          await c.createOverwrite(csri, {
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            });
  
          await c.createOverwrite(member.id, {  
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            })

a.edit("> **Başarılı!** Destek talebiniz oluşturuldu. **Kanal:** <#" + c.id +">")
await c.send(`${member.user}, Hoş Geldin destek ekibi sizinle ilgilenecektir. \n<@&`+csri+">", kilit)
})
  }, 2000)
})
} else {



//------------\\

//------------\\
if(button.id === "Kilit"){
button.message.edit(`> **Dikkat!** Destek talebini kapatmak istediğine emin misin?`,{
buttons: [evet, hayır]
})

button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "Evet"){

 await kanal.createOverwrite(user, {  
              SEND_MESSAGES: false,
              VIEW_CHANNEL: false
            })

await button.message.delete()
await button.channel.send("> **Kapalı!** <@" + member + `> Tarafından destek talebi kapatıldı.`,{
buttons: [geriyükle, sil]
})

await kanal.setName("kapalı-"+ user.user.username)

button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "GeriYükle"){
  await await kanal.setName("destek-"+ user.user.username)
          await kanal.createOverwrite(user, {  
              SEND_MESSAGES: true,
              VIEW_CHANNEL: true
            })

await button.channel.send("> **Dikkat!** <@" + user + `> Destek talebi tekrar açıldı.`,{
buttons: [kilit]
})

await button.message.delete()
button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "DesteğiKapat"){
await cdb.delete(`destekkanal_${kanal.id}`);
await cdb.delete(`destekkullanıcı_${user.id}`);

button.channel.delete()
button.reply.defer()
} else {
//------------\\

//------------\\
if(button.id === "Hayır"){
button.message.edit("<@" + user + `> Destek ekibimiz seninle ilgilenecek.\n @everyone - @here`,  kilit)

button.reply.defer()
} else {
}}}}}
}
//------------\\

}); 

client.on("guildMemberRemove", async member => {

//------------\\
let data   = await cdb.get(`destekkullanıcı_${member.id}`);
let data2  = await cdb.get(`destekkanal_${data}`);
let kanal  = member.guild.channels.cache.get(data)
//------------\\

if(!data) return;

//------------\\
await cdb.delete(`destekkanal_${data.id}`);
await cdb.delete(`destekkullanıcı_${member.id}`);

kanal.delete()
//------------\\

})
client.on("channelDelete", async channel => {

//------------\\
let data  = await cdb.get(`destekkanal_${channel.id}`);
let data2   = await cdb.get(`destekkullanıcı_${data}`);
//------------\\

if(!data) return;

//------------\\
await cdb.delete(`destekkanal_${channel.id}`);
await cdb.delete(`destekkullanıcı_${data}`);

//------------\\

})
}

///////////////////////////ever engel
client.on("message", async message => {
  let ever = await db.fetch(`ever_${message.guild.id}`);
  let sayı = await db.fetch(`sayi_${message.author.id}`);
  if (ever === "acik") {
    const a = message.content;
    if (a === "@everyone" || a === "@here") {
      if (message.member.hasPermission("BAN_MEMBERS")) return;
      db.add(`sayi_${message.author.id}`, 1);
      if (sayı == null) {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(
            "(Ever Engel Sistemi)Bu 1. uyarın! Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(1/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        db.set(`kufur_${"kenan"}`, 1);

        return;
      }
      if (sayı === 1) {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(
            "(Ever Engel Sistemi)Bu 2. uyarın! Lütfen tekrarlama! Aksi taktirde atılacaksın!\n(2/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        db.set(`kufur_${"kenan"}`, 1);

        return;
      }
      if (sayı > 2) {
        message.delete();
        db.set(`kufur_${"kenan"}`, 1);

        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription("(Ever Engel Sistemi)Sunucudan atılıyorsun!")
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        db.delete(`sayi_${message.author.id}`);
        message.member.kick();
        return;
      }
    }
  } else {
    return;
  }
});

///////////////////////////////////////sese gir
client.on("ready", () => {
  client.channels.cache.get("896082995646173225").join();
});

///////////////////////////////////yetkiler
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});

client.login(process.env.TOKEN);

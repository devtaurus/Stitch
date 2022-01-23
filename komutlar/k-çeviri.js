const Discord = require('discord.js')
const fs = require('fs')
const translate = require('node-google-translate-skidz');
const embedrenk = "#FFFFFF"
const dil = {
				"ab": "Abhazca",
				"aa": "Afar Dili",
				"af": "Afrika Dili",
				"de": "Almanca",
				"am": "Amhara Dili",
				"ar": "Arapça",
				"an": "Aragonca",
				"sq": "Arnavutça",
				"as": "Assam Dili",
				"ay": "Aymara Dili",
				"az": "Azerice",
				"eu": "Baskça",
				"ba": "Başkurtça",
				"bn": "Bengal Dili",
				"be": "Beyaz Rusça",
				"bh": "Biharice",
				"my": "Birmanca",
				"br": "Bretonca",
				"bg": "Bulgarca",
				"dz": "Butanca",
				"jv": "Cava Dili (Javacıları görelim)",
				"cs": "Çekçe",
				"zh": "Çince",
				"da": "Danimarkaca",
				"id": "Endonezya Dili",
				"in": "Endonezya Dili",
				"hy": "Ermenice",
				"eo": "Esperanto Dili",
				"et": "Estonca",
				"fo": "Faroece",
				"fa": "Farsça",
				"fj": "Fijice",
				"fi": "Fince",
				"nl": "Flemenkçe",
				"fr": "Fransızca",
				"fy": "Frizye Dili",
				"gl": "Galiçya Dili",
				"cy": "Galce",
				"gd": "Galce (İskoç)",
				"gv": "Galce (Manx)",
				"kl": "Grönlandca",
				"gn": "Guarani Dili",
				"gu": "Gucerat Dili",
				"ka": "Gürcüce",
				"ht": "Haiti Dili",
				"ha": "Hausa Dili",
				"hr": "Hırvatça",
				"hi": "Hintçe",
				"iu": "Inuktitut Dili",
				"he": "İbranice",
				"iw": "İbranice",
				"io": "İdo Dili",
				"en": "İngilizce",
				"ik": "İnupiakça",
				"ga": "İrlanda Dili",
				"es": "İspanyolca",
				"sv": "İsveçce",
				"it": "İtalyanca",
				"is": "İzlandaca",
				"ja": "Japonca",
				"km": "Kamboçya Dili",
				"kn": "Kannada Dili",
				"ca": "Katalanca",
				"kk": "Kazakça",
				"qu": "Keçuva Dili",
				"ks": "Keşmirce",
				"ky": "Kırgızca",
				"rw": "Kinyarvanda Dili",
				"rn": "Kirundi Dili",
				"ko": "Korece",
				"co": "Korsika Dili",
				"ku": "Kürtçe",
				"la": "Latince",
				"lv": "Letonca",
				"li": "Limburgca",
				"ln": "Lingala Dili",
				"lt": "Litvanca",
				"lo": "Litvan Dili",
				"hu": "Macarca",
				"mg": "Madagaskar Dili",
				"mk": "Makedonca",
				"ms": "Malay Dili",
				"ml": "Malayalam Dili",
				"mt": "Malta Dili",
				"mi": "Maori Dili",
				"mr": "Marathi Dili",
				"mo": "Moldovca",
				"mn": "Moğolca",
				"na": "Nauru Dili",
				"ne": "Nepal Dili",
				"no": "Norveçce",
				"oc": "Oksitan Dili",
				"or": "Oriya Dili",
				"om": "Oromo Dili",
				"uz": "Özbekçe",
				"bi": "Papua Yeni Ginece",
				"pa": "Pencap Dili",
				"ps": "Peştuca",
				"pl": "Polonyaca",
				"pt": "Portekizce",
				"rm": "Romansça",
				"ro": "Romence",
				"ru": "Rusça",
				"sm": "Samoa Dili",
				"sg": "Sangro",
				"sa": "Sanskritçe",
				"tn": "Setsvana Dili",
				"si": "Seylanca",
				"sn": "Shona Dili",
				"sr": "Sırpça",
				"sh": "Sırp Hırvatçası",
				"sd": "Sindçe",
				"ss": "Siswati Dili",
				"ii": "Sişuan Yi",
				"st": "Soto Dili",
				"sk": "Slovakça",
				"sl": "Slovence",
				"so": "Somali Dili",
				"su": "Sundanca",
				"sw": "Svahili Dili",
				"tg": "Tacikçe",
				"tl": "Tagalog Dili",
				"ta": "Tamilce",
				"tt": "Tatarca",
				"th": "Tayca",
				"te": "Telugu Dili",
				"bo": "Tibetçe",
				"ti": "Tigrinya Dili",
				"ts": "Tsonga Dili",
				"tr": "Türkçe",
				"tk": "Türkmence",
				"tw": "Tvi Dili",
				"uk": "Ukraynaca",
				"ur": "Urdu Dili",
				"ug": "Uygurca",
				"vi": "Vietnamca",
				"vo": "Volapük Dili",
				"wo": "Volof Dili",
				"wa": "Wallon Dili",
				"yi": "Yidce",
				"ji": "Yidce",
				"yo": "Yoruba Dili",
				"xh": "Zosa Dili"
			}

exports.run = async (client, message, args) => {
	var text = args.slice(1).join(" ");
	var lang = args[0]
	if(!lang) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen geçerli bir dil yazın! Dillere [buradan](https://www.deepbilgi.com/tum-ulkelerin-iso-dil-kodlari.html) bakabilirsin.`)
			.setColor(embedrenk)
		message.channel.send({embed})
		return
	}
	if(!text) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen geçerli bir yazı yazın!`)
			.setColor(embedrenk)
		message.channel.send({embed})
		return
	}
	if(lang === "tr") {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Lütfen Türkçe dışında bir dil yazın! Dillere [buradan](https://www.deepbilgi.com/tum-ulkelerin-iso-dil-kodlari.html) bakabilirsin.`)
			.setColor(embedrenk)
		message.channel.send({embed})
		return
	}
	translate({
		text: text,
		source: 'tr',
		target: lang
	}).then(result => {
		if(dil[args[0]] === undefined) {
			const embed = new Discord.MessageEmbed()
				.setDescription(`Bu dilde çeviri hizmetimiz bulunmuyor veya yazılan yazıyı çevremedik!`)
				.setColor(embedrenk)
			message.channel.send({embed})
			return
		}
		const embed = new Discord.MessageEmbed()
			.setAuthor(`Çeviri`, 'https://images.techhive.com/images/article/2017/05/pcw-translate-primary-100723319-orig.jpg', 'https://translate.google.com/')
			.addField(`Türkçe => ${dil[args[0]]}`, result.translation)
			.setColor(embedrenk)
		message.channel.send({embed})
	}).catch(err => {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Bu dilde çeviri hizmetimiz bulunmuyor veya yazılan yazıyı çevremedik!`)
			.setColor(embedrenk)
		message.channel.send({embed})
		return
	})
client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['çeviri', 'cevir', 'ceviri', 'translate'],
	permLevel: 0
}

exports.help = {
	name: 'çevir',
	description: 'Çeviri yapmanızı sağlar.',
	usage: 'çevir [dil] [yazı]'
}
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

exports.help = {
  name: 'sistemler'
};

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

exports.run = async (client, message, args) => {
                    client.channels.cache.get("895223272659103824").send(
                    new Discord.MessageEmbed()
                    .setColor("RED")
                    .addField(`**${message.author.tag} komut kullandı. Kullanılan komut: **`,`\`${exports.help.name}\``, true))
  const buttonDelete = new MessageButton().setStyle('red').setLabel('Kapat').setID('buttonDelete')

  // // // // //

  let embed = new Discord.MessageEmbed()
  .setColor('#000001')
  .setTitle('<a:dnenayarlar:905811554350551140> Sistemler')
  .setDescription(`**Koruma Log Sistemi**: \n Koruma Log Ayarlamak İçin: **s!korumalog #etiket** \n\n **Kayıt Sistemi**: \n Erkek: **s!kayıt @etiket İsim Yaş ♂️** \n Kadın: **s!kayıt @etiket İsim Yaş ♀️** \n Davet Sayısı: **s!davetsayısı & @etiket** \n Teyit Bilgileri: **s!teyitlerim & s!topteyit** \n Kayıtsız Bildirim: **s!kayıtbildir** \n\n**Küfür Engel Sistemi**: \n Sistemi Açmak ve Kapatmak İçin: **s!küfürengel** \n Küfür Logları İçin: **s!küfürlog #kanal** \n\n**Reklam Engel Sistemi**: \n Sistemi Açmak İçin: **s!reklamengel aç** \n Sistemi Kapatmak İçin: **s!reklamengel kapat.**`)
  message.channel.send(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Sistemler').setID('1').setDisabled(), new MessageButton().setStyle('blurple').setLabel('Sistemler 2').setID('2'), new MessageButton().setStyle('blurple').setLabel('Sistemler 3').setID('3'), buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      } else if (button.id == '1') {

        embed.setTitle('<a:dnenayarlar:905811554350551140> Sistemler')
        embed.setDescription(`**Koruma Log Sistemi**: \n Koruma Log Ayarlamak İçin: **s!korumalog #etiket** \n\n **Kayıt Sistemi**: \n Erkek: **s!kayıt @etiket İsim Yaş ♂️** \n Kadın: **s!kayıt @etiket İsim Yaş ♀️** \n Davet Sayısı: **s!davetsayısı & @etiket** \n Teyit Bilgileri: **s!teyitlerim & s!topteyit** \n Kayıtsız Bildirim: **s!kayıtbildir** \n\n**Küfür Engel Sistemi**: \n Sistemi Açmak ve Kapatmak İçin: **s!küfürengel** \n Küfür Logları İçin: **s!küfürlog #kanal** \n\n **Reklam Engel Sistemi**: \n Sistemi Açmak İçin: **s!reklamengel aç** \n Sistemi Kapatmak İçin: **s!reklamengel kapat.**`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Sistemler').setID('1').setDisabled(), new MessageButton().setStyle('blurple').setLabel('Sistemler 2').setID('2'), new MessageButton().setStyle('blurple').setLabel('Sistemler 3').setID('3'), buttonDelete]})

        button.reply.defer()

      } else if (button.id == '2') {

        embed.setTitle('<a:dnenayarlar:905811554350551140> Sistemler 2')
        embed.setDescription(`**Ban Sistemi**: \n Log Kanalı Ayarlamak İçin: **s!banlog #etiket** \n Yetkili Ayarlamak İçin: **s!banyetkili @etiket** \n Ban Limit Ayarlamak İçin: **s!banlimit Sayı** \n Ban Limit Kapatmak İçin: **s!banlimitkapat** \n Ban Listesini Görmek: **s!banlist** \n Ban Kaldırmak İçin: **s!unban @etiket/username/id** \n Tüm Banları Kaldırmak İçin: **s!unbanall** \n\n**Caps-Lock Engel Sistemi**: \n Sistemi Açmak Ve Kapatmak İçin: **s!capslockengel** \n\n**Rol Koruma Sistemi**: \n Sistemi Açmak Ve Log Kanalını Ayarlamak İçin: **s!rolkoruma #etiket** \n Sistemi Kapatmak Ve Log Kanalını Sıfırlamak İçin: **s!rolkoruma kapat** \n\n **Emoji Spam Engel Sistemi**: \n Sistemi Açmak İçin: **s!emojispamengel aç** \n Sistemi Kapatmak İçin: **s!emojispamengel kapat** `)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Sistemler').setID('1'), new MessageButton().setStyle('green').setLabel('Sistemler 2').setID('2').setDisabled(), new MessageButton().setStyle('blurple').setLabel('Sistemler 3').setID('3'), buttonDelete]})

        button.reply.defer()

      } else if (button.id == '3') { 

        embed.setTitle('<a:dnenayarlar:905811554350551140> Sistemler 3')
        embed.setDescription(`**Ever Engel Sistemi**: \n Sistemi Açmak İçin: **s!everengel aç** \n Sistemi Kapatmak İçin: **s!everengel kapat** \n\n **Yedekleme Sistemi** \n Yedek ayarlarını görmek için: **s!yedek** \n\n **Toplu Rol Sistemi** \n Toplu Rol Vermek İçin: **s!toplurol** \n Toplu Rol Almak İçin: **s!toplurolal** \n\n **Sohbet Kilitleme Sistemi** \n Sohbet Kilitlemek İçin: **s!lock** \n Sohbet Kilidi Kaldırmak İçin: **s!unlock**`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Sistemler').setID('1'), new MessageButton().setStyle('blurple').setLabel('Sistemler 2').setID('2'), new MessageButton().setStyle('green').setLabel('Sistemler 3').setID('3').setDisabled(), buttonDelete]})

        button.reply.defer()
      };
    });
  });
};
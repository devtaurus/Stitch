const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

exports.help = {
  name: 'komutlar'
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
  .setTitle('<a:dnenayarlar:905811554350551140> Stitch Komut Penceresi')
  .setDescription(`**Altta Bulunan Yardım Butonlarına Basarak Komutları Görebilirsiniz.**\n\n <a:ykleniyorr:905811553406844948> Sistemler İçin **s!sistemler** Yazınız.`)
  message.channel.send(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Komutlar').setID('1'), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'),buttonDelete]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {

      if (button.id == 'buttonDelete') {

        message.delete().then(helpMessage.delete())

        button.reply.defer()

      } else if (button.id == '1') {

        embed.setTitle('<a:dnenayarlar:905811554350551140> Komutlar')
        embed.setDescription(`<:sarnoktack:905811550898638909> **s!afk**: AFK Moduna Geçersiniz. \n<:sarnoktack:905811550898638909> **s!avatar**: Avatarınızı Gösterir. \n<:sarnoktack:905811550898638909> **s!banner**: Afişinizi Gösterir. \n<:sarnoktack:905811550898638909> **s!davet**: Botun Davet Linklerini Gösterir. \n<:sarnoktack:905811550898638909> **s!git**: Sesli Kanalda Bulunan Kişiye Katılma Daveti Atar. \n<:sarnoktack:905811550898638909> **s!lolbilgi**: LoL Bilgilerini Gösterir. \n<:sarnoktack:905811550898638909> **s!seviye**: Sunucudaki Aktiflik Seviyenizi Gösterir. \n<:sarnoktack:905811550898638909> **s!sor**: Bota Soru Sorarsınız. \n<:sarnoktack:905811550898638909> **s!yazankazanır**: Yazan Kazanır Oyunu Oynatır. \n<:sarnoktack:905811550898638909> **s!youtube**: Youtube Etkinliği Başlatır. \n<:sarnoktack:905811550898638909> **s!bstname**: İsminizi Değiştirirsiniz. **(Booster Özel)**`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('green').setLabel('Komutlar').setID('1').setDisabled(), new MessageButton().setStyle('blurple').setLabel('Moderasyon').setID('2'),buttonDelete]})

        button.reply.defer()

      } else if (button.id == '2') {

        embed.setTitle('<a:dnenayarlar:905811554350551140> Moderasyon')
        embed.setDescription(`<:sarnoktack:905811550898638909> **s!ban**: Sunucudan Belirlediğiniz Üyeyi Yasaklar. **(s!sistemler / liste 2)**\n<:sarnoktack:905811550898638909> **s!duyuru**: Embedli Duyuru Yapmanızı Sağlar. \n<:sarnoktack:905811550898638909> **s!isim**: Belirttiğiniz İsimi Etiketlenen Kullanıcıya Uygular. \n<:sarnoktack:905811550898638909> **s!kick**: Etiketlediğiniz Kullanıcıyı Sunucudan Atar. \n<:sarnoktack:905811550898638909> **s!mute**: Etiketlediğiniz Kullanıcıyı Susturur. \n<:sarnoktack:905811550898638909> **s!sil**: Belirttiğiniz Sayı Kadar Mesaj Siler. \n<:sarnoktack:905811550898638909> **s!yaz**: Bota Yazı Yazdırtır. \n<:sarnoktack:905811550898638909> **s!yv**: Belirlenen Üyeye Belirlenen Rolü Verir. \n<:sarnoktack:905811550898638909> **s!çek**: Belirlediğiniz Üyeyi Sesli Kanala Çekersiniz.`)
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Komutlar').setID('1'), new MessageButton().setStyle('green').setLabel('Moderasyon').setID('2').setDisabled(),buttonDelete]})

        button.reply.defer()

      } 
    });
  });
};
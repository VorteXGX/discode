const Discord = require('discord.js');

exports.run = async(client, message, args) => {
 var guild = message.guild;
 var banlayan = message.author.tag;
 if (!args[0]) return message.reply("**Banı kaldırıcağım kişinin ID'sini yazman gerek!**");
 var kisi = args[0];
 //var gun = args.slice(1).join(' ') ? `${args.slice(1).join(' ')}` :"";
 var neden = args.slice(1).join(' ') ? `${args.slice(1).join(' ')} Banı Kaldırılan: ${banlayan}` : `Neden Belirtilmemiş.  **Kaldıran:** ${banlayan}`

if (!kisi) return message.reply("Kişi Bulunamadı! Lütfen ID Doğru Giriniz!")

 await message.channel.send(`${kisi} **ID'li kullanıcının banı başarılıyla açıldı.** \n**Nedeni:** ${neden}`)
 await guild.members.unban(kisi, neden);



};


exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Botun Pingini Gösterir !',
  usage: 'ban'
};
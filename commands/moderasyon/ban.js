const discord = require('discord.js');


exports.run = function(client, message) {
  
const SlashX = message.mentions.users.first()
if (!SlashX) return message.channel.send("**Banlamam için banlayacağım kişiyi etiketle !**")
  
  message.channel.send(SlashX + " **İd'li kişi sunucudan banlandı !**")
  
  message.guild.members.ban (SlashX)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasakla"],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Sunucuda birisini yasaklar',
  category: 'yetkili',
  usage: 'ban @kişi' 
};
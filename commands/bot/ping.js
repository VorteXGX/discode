const Discord = require('discord.js')

exports.run = (client, message, params) => {
  
  const SlashX = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle("İşte Pingim")
  .addField("Bot Gecikmesi:", `**${client.ws.ping}** ms!`)
  .setThumbnail("https://cdn.discordapp.com/attachments/805756771536732180/809425303599710248/DISCODE_logo.png")
  .setFooter(`DisCode Code & Botlist`)
  message.channel.send(SlashX)
  }
exports.conf = {
  enable: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "ping",
  description: "botun pingini gösterir.",
  usage: "ping"
}
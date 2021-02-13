const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("810089430027206657")
  message.channel.send(":white_check_mark: • **HTML Rolü Başarıyla Verildi.**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "html"
}
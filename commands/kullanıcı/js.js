const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("809434543685107742")
  message.channel.send(":white_check_mark: • **JavaScript Rolü Başarıyla Verildi.**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "js"
}
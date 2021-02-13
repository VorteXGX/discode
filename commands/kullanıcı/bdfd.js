const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("809434274918825994")
  message.channel.send(":white_check_mark: • **BDFD Rolü Başarıyla Verildi.**")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "bdfd"
}
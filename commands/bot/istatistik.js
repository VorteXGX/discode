const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = async (client, message, args) => {
  const WlifonWorld = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  const SlashX = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField("» Botun Sahibi", "<@777229793232945173>")
    .addField("» **Botun Pingi**","Ping: {ping2} ms"
            .replace("{ping2}", client.ws.ping),true)
    .addField("» **Bellek Kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("» **Çalışma Süresi**", WlifonWorld, true)
    .addField("» **Discord.JS Sürüm**", "v" + Discord.version, true)
    .addField("» **Node.JS Sürüm**", `${process.version}`, true)
    .addField("» **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,false)
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .setFooter("© 2021 DisCode Code & Botlist ", client.user.avatarURL())
    .setImage('')
      return message.channel.send(SlashX);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
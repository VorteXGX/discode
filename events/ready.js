const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const config = require('../config.json');

var prefix = config.prefix;

module.exports = client => {
var oyun = [
        "DisCode Code & Botlist",
        "d!yardım",
        "d!js , d!html , d!bdfd",
          ];
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 2500);
    
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOTUMUN: Aktif, Komutları yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOTUMz: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}yardım + ${client.guilds.cache.size} sunucu + ${client.users.cache.size} kullanıcı`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOTUMUN: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOTUM: Şu anda ` + client.channels.cache.size + ` kadar kanalda, ` + client.guilds.cache.size + ` kadar sunucuda ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kadar kullanıcıya hizmet vermekte!!!`);
};
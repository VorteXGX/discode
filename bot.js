const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, official_vortexgx } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
require('./util/eventHandler.js')(client);


/////TABLES
var commandtable = new AsciiTable('SlashX Command Table');
////


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);




  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "çalışıyor", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "çalışmıyor")
  continue;
    }


    
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())







client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === official_vortexgx) permlvl = 4;
  return permlvl;
};

client.on("ready", () => {
  client.channels.cache.get("810138672313008140").join();   
}) 

client.login(config.token);
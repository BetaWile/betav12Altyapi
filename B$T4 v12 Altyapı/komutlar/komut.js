const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
  message.channel.send('Komut çalışıyor xD !')
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'komut',
  description: 'bet4',
  usage: 'komut'
};
const Discord = require('discord.js');

module.exports.execute = async (client, message, args) => {

 message.channel.send(`Bot çalışıyor knks <3`);

};

module.exports.configuration = {
    name: "komut",
    aliases: ['komut'],
    usage: "komut",
    description: "komut"
  };

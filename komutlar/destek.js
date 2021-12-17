const Discord = require('discord.js');
const ms = require('ms')
const ayar = require('../ayarlar.json')


exports.run = async(client, message, args) => {
  if(![ayar.whitelisted].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 

if(message.channel.id !== ayar.destekanal) return


message.channel.send(`**Destek Bekleme Odasına Geçerek Bekleyebilirsiniz , Müsait Olan Bir Yetkilimiz Sizinle İlgilenecektir.<@&911260426921205770> <@&911260431371341845> <@&911260429664272454>**`)
}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["Destek","destek"],
    permLevel: 0
  }

  exports.help = {
    name: 'destek'
  };
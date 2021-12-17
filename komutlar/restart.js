const Discord = require('discord.js');

exports.run = async(client, message, args) => {


    const restart = new Discord.MessageEmbed()
    .setDescription('SUNUCUYA RESTART GELIYOR AKTIF OLDUGU ZAMAN AKTIF VERILECEKTIR.')
    .setImage(`https://cdn.discordapp.com/attachments/910846551591641098/911320538159411230/xdy.jpg`)
    .setFooter(`${message.author.username} Tarafından Kullanıldı.`)
    .setTimestamp()
    .setColor('RANDOM')
    message.channel.send(restart)
    message.channel.send(`@everyone`).then(x => x.delete({timeout: 1500}));


}

exports.conf = {enabled: true, guildOnly: true, aliases: ["restart"]};
exports.help = {name: 'restart'};
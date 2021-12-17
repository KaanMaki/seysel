const Discord = require('discord.js');


exports.run = async(client, message, args) => {
	message.delete({ timeout: 1 });
if( !message.member.roles.cache.has('911260527865511996') ) return message.channel.send(`**Bu komutu sadece kayıt bekleyenler kullanabilir!**`).then(msg => {
				msg.delete({ timeout: 5000 });
			})

return message.channel.send(`${message.author}, Kayıt ekibi sizinle ilgilenecektir. <@&911260433237835776>`,
	   new Discord.MessageEmbed()
	   .setTitle("**Arkadaşlarını Davet Et**")
	   .setAuthor("Lesta Roleplay")
	   .setColor('#FF0000')
	  .setFooter(`${message.author.username} tarafından gönderildi!`, message.author.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
	  .setTimestamp()
	  .setURL("https://discord.gg/SvHXH5qUxq")
	  .addField(`Merhaba, ${message.author.username}! Kayıt bekleme talebini aldık, hemen ilgileniyoruz. Sunucumuza hoş geldin.`))
	  
}
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayit"],
  kategori : "kayıt"
};
 
exports.help = {
  name: 'kayıt',
  description: 'Tüm komutları gösterir.',
  usage: 'kayıt'
};
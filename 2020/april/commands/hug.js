const Discord = require("discord.js");
const superagent = require("superagent");
module.exports = class {
    constructor() {
        this.help = {
            category: "Roleplay",
            description: "Hugs a user."
        };
    }

  async run(bot, message, args) {
        let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("<:error:543851339713609745> You forgot to mention somebody.");
    let hugEmbed2 = new Discord.RichEmbed()
    .setColor("#36393F")
    .setDescription(`**${message.author.username}** hugged **himself**`)
    .setImage("https://i.kym-cdn.com/photos/images/original/000/859/605/3e7.gif")
     .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
  if (hugUser.id === message.author.id) return message.channel.send(hugEmbed2);
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor("#36393F")
     .setFooter(`© Yuki V5.3.1`, "https://cdn.discordapp.com/avatars/489219428358160385/19ad8d8c2fefd03fa0e1a2e49a2915c4.png")
    message.channel.send(hugEmbed)

}
}
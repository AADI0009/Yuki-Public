const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');
module.exports = class {
    constructor() {
        this.help = {
            category: "Fun",
            description: "Shows a random anime meme."
        };
    }

    async run(client, message, args, cmd, prefix) {
    var subreddits = [
        'Animemes'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            const embed = new Discord.RichEmbed()
                  .setColor(`#a821f9`)
                  .setImage(url);
            message.channel.send({embed})
                  });
        }
}
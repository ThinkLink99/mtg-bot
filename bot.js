const Discord = require('discord.js');
const Scryfall = require('./scry.js');

const secret = require('./secret.js');
const client  = new Discord.Client();

const token = secret;

client.on("ready", () => {
    // console.log('Discord Bot Initialized Successfully');
});
client.on("message", (message) => {
    if (token == '') {
        return;
    }
    // don't let the bot respond to itself
    if (message.author == client.user) {
        return;
    } 
    if (message.content.includes("!search")){
        var msg = message.content.substring(7);
        console.log(msg);
        Scryfall.returnCard(msg)
        .then (cards => {
            var msg = `Cards Found (${cards.length}):\n`;
            for (i = 0; i < cards.length; i++){
                msg += `${cards[i].name} (Link: ${cards[i].scryfall_uri})\n`;
            }
            message.channel.send(msg);
        })
        .catch (error => console.log(error));
    }
});

client.login(token);



const Discord = require('discord.js');
const client  = new Discord.Client();

const token = "";

client.on("ready", () => {
    console.log('Discord Bot Initialized Successfully');
});
client.on("message", (message) => {
    if (token == '') {
        return;
    }
    // don't let the bot respond to itself
    if (message.author == client.user) {
        return;
    } 
    message.channel.send("Hello World!");
});

client.login(token);



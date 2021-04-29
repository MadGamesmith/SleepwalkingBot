require('dotenv').config();
const Discord = require('discord.js');
const express = require('express');

const client = new Discord.Client({
    partials: ["MESSAGE"] //this enables access to messages written before bot login
}); 

const botToken = process.env.BOT_TOKEN;
const rulesChannel = '<#836662914584805386>';

const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Port: ${ PORT }`);
});

client.login(botToken);

client.on('ready', readyDiscord); //On login auth. successfull
function readyDiscord(){
    console.log('good stuff');
}

client.on('message', msg => {
    if(msg.content == "!ping"){
        msg.react('🏓');
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'introductions');
    if (!channel) return;
    channel.send(`Welcome to the potato land ${member}!`);
    channel.send(`:wave:`);
    channel.send(`Please read the ${rulesChannel} and feel free to introduce yourself.`);
});



  
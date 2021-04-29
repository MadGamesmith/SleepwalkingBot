require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"] //this enables access to messages written before bot login
}); 

const botToken = process.env.BOT_TOKEN;
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

const rulesChannel = '<#836662914584805386>';

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



  
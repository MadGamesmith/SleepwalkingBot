require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"] //this enables access to messages written before bot login
}); 

const botToken = process.env.BOT_TOKEN;
client.login(botToken);

const rulesChannel = '<#836688382804885544>';

client.on('ready', readyDiscord); //On login auth. successfull
function readyDiscord(){
    console.log('good stuff');
}

// client.on('message', msg => {
//     if(msg.channel.id == '790858643393609780' && msg.content == "test"){
//         msg.channel.send(`Welcome to the server! Please read the ` + rulesChannel);
//         msg.channel.send(`:wave:`);
//     }
// });

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'introductions');
    if (!channel) return;
    channel.send(`Welcome to the server ${member}`);
    channel.send(`:wave:`);
    channel.send(`Please read the ` + rulesChannel);
});

  
const Discord = require('discord.js');
const client = new Discord.Client(); 
client.login('?');
testline

const instructionsChannel = '<#836688382804885544>';

client.on('ready', readyDiscord); //On login auth. successfull
function readyDiscord(){
    console.log('good stuff');
}

client.on('message', messageSentByUser);
function messageSentByUser(msg){
    if(msg.channel.id == '790858643393609780' && msg.content == "test"){
        msg.channel.send(`Welcome to the server! Please read the ` + instructionsChannel);
        msg.channel.send(`:wave:`);
    }
}
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'introductions');
    if (!channel) return;
    channel.send(`Welcome to the server ${member}`);
    channel.send(`:wave:`);
    channel.send(`Please read the ` + instructionsChannel);
});

  
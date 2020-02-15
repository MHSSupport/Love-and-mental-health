const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const { prefix } = require ("./prefix.json");
const { ownerid } = require("./ownerid.json");
const fs = require("fs");
console.log('i am online!');
console.log(prefix);
console.log(ownerid);

bot.on('ready', ready => {
    let setStatus = setInterval(function () {
             var names = [">invite" , ">" , "still being developed"];
             var game = names[Math.floor(Math.random() * names.length)];
            bot.user.setActivity(game,{type: "PLAYING"});
             bot.user.setStatus(`dnd`);
          }, 10000)
   });
bot.on('message', message => {
    if(message.content === `${prefix}help`) {
        message.channel.send(new Discord.RichEmbed().setDescription('this bot is still being made and currently does not have that much things in it, but!, id love you to suggestion things for this bot as it would really help. thanks - Love And Mental Health bot owner.'));
    };
});
bot.on('message', message => {
    if(message.content === `${prefix}support`) {
        message.channel.send(new Discord.RichEmbed().setDescription('hey here is a invite link to my support server > https://discord.gg/kSVshuR'));
    };
});
bot.on('message', message => {
    if(message.content === `${prefix}invite`) {
        message.channel.send(new Discord.RichEmbed().setDescription(`hey here is the invite link to my support server > https://discord.gg/kSVshuR`));
    };
});
bot.login(config.Token);
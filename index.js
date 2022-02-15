const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // Posting GIFs
// Discord Bots
// https://thecodingtrain.com/learning/bots/discord/05-posting-gifs.html
// https://youtu.be/Q6nWCGUVC6s

console.log('Beep beep! 🤖');

require('dotenv').config();
const cron = require('cron');

const fetch = require("node-fetch");

const Discord = require('discord.js');
const client = new Discord.Client();
console.log(process.env.BOTTOKEN);
client.login(process.env.BOTTOKEN);

client.once("ready", () => {
  console.log(`Online as ${client.user.tag}`);
    
  let scheduledMessage = new cron.CronJob('00 00 09 * * *', () => {
    morningTime();
  });

  let scheduledMessageLunch = new cron.CronJob('00 00 13 * * *', () => {
    lunchTime();
  });

  let scheduledMessageWorkEnd = new cron.CronJob('00 00 17 * * *', () => {
    leaveWork();
  }); 
  // When you want to start it, use:
  scheduledMessage.start();
  scheduledMessageLunch.start();
  scheduledMessageWorkEnd.start();
  //const guild = client.guilds.cache.get('293500938293870592');
  //const channel = guild.channels.cache.get('892689791727054858');
  //channel.send("twat");

});


async function morningTime(msg) {
  const guild = client.guilds.cache.get('293500938293870592');
  const channel = guild.channels.cache.get('892689791727054858');

  //day message
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];

  let url = `https://api.tenor.com/v1/search?q=${day}&key=${process.env.TENORKEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  channel.send(json.results[index].url);
}

async function lunchTime(msg) {
  const guild = client.guilds.cache.get('293500938293870592');
  const channel = guild.channels.cache.get('892689791727054858');

  let url = `https://api.tenor.com/v1/search?q=lunch&key=${process.env.TENORKEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  channel.send(json.results[index].url);
}

async function leaveWork(msg) {
  const guild = client.guilds.cache.get('293500938293870592');
  const channel = guild.channels.cache.get('892689791727054858');

  let url = `https://api.tenor.com/v1/search?q=leaving+work&key=${process.env.TENORKEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  channel.send(json.results[index].url);
}

client.on('message', gotMessage);
// }
async function gotMessage(msg) {
  // if (msg.channel.id == "715786219770085396") {
  // use cleanContent instead of content to remove tagging

  if (msg.author.id == "222371428995956736") {
    msg.channel.send("^^ tosser ^^");
  }
  else if (msg.author.id == "273546892036538368") {
    msg.channel.send("^ this guy smells");
  }
}

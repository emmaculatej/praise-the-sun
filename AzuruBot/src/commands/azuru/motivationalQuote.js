const { DiscordAPIError, MessageEmbed, MessageAttachment, Message, User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');


module.exports = class MotivationalQuoteCommand extends BaseCommand {
  constructor() {
    super('motivationalQuote', 'random', ["mq"]);
  }

  async run(client, message, args) 
  {


  axios({url:'https://zenquotes.io/api/random', 
  method: 'get',
  headers: 
    {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'User-Agent': 'AzuruBot (https://github.com/emmaculate/azuru-bot)'
    },
    data : 
    {
      q: '',
      a: '',
      h: ''
    }
  })
  .then(response => {
    
    var result = response.data[0];
    const danceEmbedded = new MessageEmbed()
    .setTitle("Daily Motivation")
    .setDescription(`${result.q} \n by ${result.a}`);

    message.channel.send(danceEmbedded);
  })
  .catch(error => {
    console.log(error);
    message.channel.send('The request could not be registered. Please try again.');
  });  
  }
}
const { DiscordAPIError, MessageEmbed, MessageAttachment, Message, User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const axios = require('axios');


module.exports = class DadJokeCommand extends BaseCommand {
  constructor() {
    super('dadjoke', 'random', []);
  }

  async run(client, message, args) 
  {


  axios({url:'https://icanhazdadjoke.com/', 
  method: 'get',
  headers: 
    {
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
     'User-Agent': 'AzuruBot (https://github.com/emmaculate/azuru-bot)'
    },
    data : 
    {
      id: '',
      joke: '',
    }
  })
  .then(response => {
    var jokeResult = response.data;
    if(jokeResult.status !== 200)
    {
      throw error;
    }
    message.channel.send(jokeResult.joke);
  })
  .catch(error => {
    console.log(error);
    message.channel.send('The request could not be registered. Please try again.');
  });  
  }
}
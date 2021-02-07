const { DiscordAPIError, MessageEmbed, MessageAttachment, Message, User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PraiseTheSunCommand extends BaseCommand {
  constructor() {
    super('praisethesun', 'random', []);
  }

  async run(client, message, args) 
  {
    const attachment = new MessageAttachment('./src/images/praiseTheSunImage.gif', 'raiseTheSunImage.gif');
    const praiseSubEmbedded = new MessageEmbed()
    .setTitle(`${message.author.username} has praised the sun!`)
    .attachFiles(attachment)
    .setImage('attachment://aiseTheSunImage.gif');

    message.channel.send(praiseSubEmbedded);
  }
}
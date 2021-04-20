const { DiscordAPIError, MessageEmbed, MessageAttachment, Message, User } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ReactionRolesCommand extends BaseCommand {
  constructor() {
    super('reactionroles', 'reaction', []);
  }

  async run(client, message, args, Discord) 
  {
    const channel = '834167504103669760';
    const movie = message.guild.roles.cache.find(role => role.name === "Movies");
    //const blue = message.guild.roles.cache.find(role => role.name === "Blue");

    const movieEmoji = '🎥';
    //const blueEmoji = '💙';

    const reactionRolesEmbedded = new MessageEmbed()
    .setTitle('Choose a role!')
    .setDescription('Choosing a role will allow you to get notifications and access to different parts of the discord!\n'
    + `${movieEmoji} for the Movie role`
    );

    let messageEmbed = await message.channel.send(reactionRolesEmbedded);
    messageEmbed.react(movieEmoji);
    //messageEmbed.react(blueEmoji);

    client.on('messageReactionAdd', async(reaction,user) => {
      if(reaction.message.partial){
        await reaction.message.fetch();
      }
      if(reaction.partial){
        await reaction.fetch();
      }
      if(user.bot){
        return;
      }
      if(!reaction.message.guild){
        return;
      }

      if(reaction.message.channel.id == channel){
        if(reaction.emoji.name === movieEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.add(movie);
        }
        // if(reaction.emoji.name === blueEmoji){
        //   await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
        // }
      }
      else{
        return;
      }
    })

    client.on('messageReactionRemove', async(reaction,user) => {
      if(reaction.message.partial){
        await reaction.message.fetch();
      }
      if(reaction.partial){
        await reaction.fetch();
      }
      if(user.bot){
        return;
      }
      if(!reaction.message.guild){
        return;
      }

      if(reaction.message.channel.id == channel){
        if(reaction.emoji.name === movieEmoji){
          await reaction.message.guild.members.cache.get(user.id).roles.remove(movie);
        }
        // if(reaction.emoji.name === blueEmoji){
        //   await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
        // }
      }
      else{
        return;
      }
    })
  }
}
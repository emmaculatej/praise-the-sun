
const { Client } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');

const client = new Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = process.env.PREFIX;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(process.env.CLIENT_TOKEN);
})();


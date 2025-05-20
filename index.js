const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const Logging = require('./handlers/logs.js');
const client = new Discord.Client({ intents: 53608447 });

require('dotenv').config();

client.msgCommands = new Discord.Collection();
client.slashCommands = new Discord.Collection();

client.config = config;
client.logging = new Logging('./logs', 'bot');

require('./slashDeploy.js').deploy(client);

const eventsPath = path.join(__dirname, 'src/events')
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.run(...args, client));
	} else {
		client.on(event.name, (...args) => event.run(...args, client));
	}
}

client.login(process.env.DISCORD_TOKEN)

process.on('unhandledRejection', async (err) => {
    client.logging.error(`${err.stack}`)
  });
  
  process.on('uncaughtException', async (err) => {
    client.logging.error(`${err.stack}`)
  });
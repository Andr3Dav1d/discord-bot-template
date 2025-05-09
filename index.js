const Discord = require('discord.js');
const config = require('./config.json');

require('dotenv').config();


const client = new Discord.Client({ intents: 53608447 });

client.once(Discord.Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN)
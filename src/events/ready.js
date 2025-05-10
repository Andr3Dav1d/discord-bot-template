const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	run: (client) => {
		console.log(`🚀 | Estou online como ${client.user.tag}`);
	}
};
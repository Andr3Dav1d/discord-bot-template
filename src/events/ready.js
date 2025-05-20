const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	run: (client) => {
		client.logging.log(`🚀 | Estou online como ${client.user.tag}`);
	}
};
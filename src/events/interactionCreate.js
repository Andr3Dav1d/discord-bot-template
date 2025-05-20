const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
    run: async (interaction, client) => { 
        if (!interaction.isCommand()) return;
        const command = interaction.client.slashCommands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.run(interaction, client);
        } catch (error) {
            client.logging.error(error);
            await interaction.reply({ content: 'Houve um erro ao executar esse comando!', ephemeral: true });
        }
    }
}
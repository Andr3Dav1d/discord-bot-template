const { REST, Routes } = require('discord.js');
const token = process.env.DISCORD_TOKEN;
const { clientId } = require('./config.json')
const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    deploy: async (client) => {

        const commands = [];

        const commandsPath = path.join(__dirname, 'src/slashCommands');
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            if ('data' in command && 'run' in command) {
                commands.push(command.data.toJSON());
                client.slashCommands.set(command.data.name, command)
            } else {
                client.logging.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }

        const rest = new REST().setToken(token);

        try {
            client.logging.log(`Started refreshing ${commands.length} application (/) commands.`);

            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands },
            );

            client.logging.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            client.logging.error(error);
        }
    }
}
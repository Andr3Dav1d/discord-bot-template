const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('teste')
        .setDescription('Retorna uma mensagem teste'),
    run: async(interaction, client) => {
        interaction.reply(`🏓 **|** Pong! \`${client.ws.ping}ms\``)
    }
}
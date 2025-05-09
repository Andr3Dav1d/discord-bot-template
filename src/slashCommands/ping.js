const Discord = require('discord.js')

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('teste')
        .setDescription('Retorna uma mensagem teste'),
    run: async(interaction) => {
        interaction.reply('Testado!')
    }
}
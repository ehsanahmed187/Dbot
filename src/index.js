require('dotenv').config();
const {Client} = require('discord.js');
const {IntentsBitField} = require('discord.js');
const { CommandKit } = require('commandkit');


const client = new Client ({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

new CommandKit({
    client,
    devGuildIds: ['165308549419892736'],
    devUserIds: ['158000311380869130'],
    //devRoleIds: ['']
    eventsPath: `${__dirname}/events`,
    commandsPath: `${__dirname}/commands`,
    validationsPath: `${__dirname}/validations`,
    bulkRegister: true,
});


client.login(process.env.TOKEN);

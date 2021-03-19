const commando = require('discord.js-commando');
const client = new commando.Client;
const config = require("./config.json");
const embed = require('discord-embed-maker');



});
client.on('ready', () => {

    console.log('I am ready master!'); //how you know it is on

    client.user.setPresence({
        game: {
            name: 'Matchmaking ;)',
            type: 0
        }
    });

    });




client.registry.registerGroup('support', 'Support');

client.registry.registerDefaults();

client.registry.registerCommandsIn(__dirname + "/commands");

client.login(config.token);

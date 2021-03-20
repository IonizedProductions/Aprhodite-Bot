const commando = require('discord.js-commando');
const client = new commando.Client;
const config = require("./config.json");
const winston = require('winston');
const Discord = require('discord.js');
const fs = require("fs");

const logger = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'log' }),
	],
	format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});

client.on('ready', () => logger.log('info', 'The bot is online!'));
client.on('debug', m => logger.log('debug', m));
client.on('warn', m => logger.log('warn', m));
client.on('error', m => logger.log('error', m));

process.on('uncaughtException', error => logger.log('error', error));


client.on("ready", () => {
    client.user.setActivity("you like a fiddle ;)", { type: "PLAYING"})
})


client.on('message', message =>{
	if (message.author.bot) return;


	if (message.attachments.size > 0) {

if (message.guild == config.guild) return;
		message.author.createDM().then(dmc => {
	     const collector = new Discord.MessageCollector(
	       dmc,
	       m => m.author.id === message.author.id,
	       {}
	     );

	   });
		logger.log('info',`Received ${message.attachments.size} attachment or attachments`);

    client.channels.cache
                .get(config.channel)
                .send({files:[message.attachments.first().url]});
	 }
	 else{
		 if (message.guild == config.guild) return;
		 message.reply('Please send a image')

	 }
 })




client.login(config.token);

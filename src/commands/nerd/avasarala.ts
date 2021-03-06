'use strict';
import { Client, Command } from 'yamdbf';
import { Message, RichEmbed } from 'discord.js';
import Constants from '../../util/constants';

export default class Avasarala extends Command<Client>
{
	public constructor(bot: Client)
	{
		super(bot, {
			name: 'ca',
			description: 'A Random Quote from Chrisjen Avasarala',
			usage: '<prefix>ca',
			extraHelp: 'A command that returns a random quote from Chrisjen Avasarala.',
			group: 'nerd'
		});
	}

	public async action(message: Message, args: string[]): Promise<any>
	{
		// variable declaration
		const quote: string = Constants.avasaralaQuotes[Math.floor(Math.random() * Constants.avasaralaQuotes.length)];
		const image: string = Constants.avasaralaImages[Math.floor(Math.random() * Constants.avasaralaImages.length)];

		message.channel.startTyping();

		// build the quote
		const embed: RichEmbed = new RichEmbed()
			.setColor(0x206694)
			.setAuthor('Chrisjen Avasarala says...', Constants.guildIconURL)
			.setThumbnail(image)
			.addField('\u200b', '"' + quote + '"', false)
			.setFooter('/u/it-reaches-out');

		// send the quote
		message.channel.sendEmbed(embed, '', { disableEveryone: true });
		return message.channel.stopTyping();
	}
}

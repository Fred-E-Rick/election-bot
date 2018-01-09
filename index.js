const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const moment = require("moment");
//client.channels.get("400365917269393408")

const prefix = "-";
const ownerId = "220199583446335488";

client.on("ready", () => {
	console.log("Online!");
});

client.on("message", async message => {
	if(!message.author.id === ownerId) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "election") {
		const electionChannel = await client.channels.get("400365917269393408");
		const embed = new Discord.RichEmbed()
			.setTitle(`Captain election of the ${moment().format("Do of MMMM")}`)
			.setDescription("Type -vote  \"name of party\" to vote.")
			.setColor("#891919")
			.addField("Parties", "null");
		electionChannel.send({embed: embed});
	} else 
	if(command === "coelection") {
		const electionChannel = await client.channels.get("400365917269393408");
		const embed = new Discord.RichEmbed()
			.setTitle(`Co-pilot election of the ${moment().format("Do of MMMM")}`)
			.setDescription("Type -vote  \"name of party\" to vote.")
			.setColor("#71238d")
			.addField("Parties", "null");
		electionChannel.send({embed: embed});
	}
});

client.login(settings.token);

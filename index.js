const Discord = require("discord.js");
const bot = new Discord.Client();

const PREFIX = "-star "
const HELP = "-star help"
const EMBCOLOR = 0x000000

bot.on("ready", function() {
    console.log("Ready.");
    bot.user.setGame(HELP)
});

bot.on("message", async message => {
    
if (message.author.equals(bot.user)) return;
if (!message.content.startsWith(PREFIX)) return;
var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.send("Pong!");
    break;
	
	case "help":
			message.channel.send({
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "Pachiri-Se",
						"icon_url": "https://media.giphy.com/media/g1EX6PH6oIRva/giphy.gif"
					},
					fields: [
					{
						name: "Main",
						value: "Probably what you'll be using all the time.",
						value: "help\ninfo\nping\nsuggestions"
					},		
					{
						name: "VGC Commands",
						value: "|WIP| The main function of this bot, to recollect data from past VGC years!",
						value: "VGChelp\nVGCinfo\nVGCrules\nVGCChampions\nVGC09\nVGC10\nVGC11\nVGC12\nVGC13\nVGC14\nVGC15\nVGC16\nVGC17\nVGC18\nVGC19"
					},					
					{
						name: "GIFS",
						value: "Random GIFS to help your message become... better.",
						value: "Pachi\nHappy\nSad\nFlashback\nKanto\nJohto\nHoenn\nSinnoh\nUnova\nKalos\nAlola""
					}
					]
				}
			});
	break;
	
	case "info"
	    message.channel.send({
				embed: {
					color: EMBCOLOR,
					author: {
						"name": "Pachiri-Se",
						"icon_url": "https://media.giphy.com/media/g1EX6PH6oIRva/giphy.gif"
					},
					fields: [
					{
						name: "What is Pachiri-Se?",
						value: "Pachiri-Se is a Competitive Pokémon bot that will recount past Pokémon Victories in Regionals to Worlds. It is a side project worked on PaigeSmellsVGC that hopes to lend her extensive knowledge into people preparing for the next tournament, year, or is curious as to how this bot will go about."
					},		
					{
						name: "What if I have something I want to add to this bot that isn't here?"
						value: "Simple! Just use -pachi suggestions and follow the directions from there."
					},		
					{
						name:"What if I want to help code it?"
						value: "Follow the Suggestions above, but put in the Subject tab that you want to help code! Please then put in the message how long you've been programming, how long you've been watching/doing Pokemon, what kind of program you use to code, and a bit about yourself! PaigeSmellsVGC will then take it from there."
					}
					]
				}
			});
	break;
	case "suggestions"
	    message.channel.send({
				embed: {
					color: EMBCOLOR,
					author: {
					  "name": "Pachiri-Se",
						"icon_url": "https://media.giphy.com/media/g1EX6PH6oIRva/giphy.gif"
					},
					fields: [
					{
						name: "I want to suggest something! But I don't know how to do that..."
						value: "Fear not. Just message @PaigeSmellsWeird#3981 and use the format at the end of this message. Paige will then talk to you about what they can do, and see if you want to help make this bot. "
					},
					{
					 name: "Format"
					 value: "Name, Timezone, Subject of messaging, and Suggestion"
					}
					]
				}
			});
	break;
	case "VGCinfo"
	    message.channel.send({
	      embed: {
	         color: EMCOLOR,
	         author: {
	           "name": "Pokemon VGC Information"
	           "icon_url": "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjf08ml153XAhUD9IMKHaP5DjsQjBwIBA&url=https%3A%2F%2Fwww.serebii.net%2Fvgc%2Fvgcs.png&psig=AOvVaw134Ha_rbLjoXZFb_aPGlMq&ust=1509636215055042"
					},
					fields: [
					{
						name: "Pokemon Video Game Championship Series"
	         },
	         {
	           name:
	         }
	      }
	    })
	break;

bot.login(process.env.BOT_TOKEN);

import {
    Client,
    GatewayIntentBits,
    Routes
} from 'discord.js';
import {
    REST
} from '@discordjs/rest';
import {
 config
}from './config/environment.js';
import { commands } from './commands.js';
//client
export const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});
//ready state
client.once('ready',()=>{
    console.log('ready!')
});
//login
//slash commands

const rest = new REST({ version: '10' }).setToken(config.token);

async function main(){
    try{
        console.log('Started refreshing app (/) commands ...');
        await rest.put(Routes.applicationCommands(config.clientId,config.guildId),{
            body:commands
        });
        console.log('Successfully reloaded application (/) commands.')
        client.login(config.token)

    } catch(err){
        console.error(err)
    }
}
main();
//events handling

client.on('messageCreate',message=>{
    console.log(`${message.author.username} > ${message.content} - ${message.createdAt.toDateString()}`);
   });
client.on('channelCreate',channel=>{
       console.log(`channel ${channel.name} created at ${channel.createdAt.toDateString()} `);
   });
client.on('channelDelete',channel=>{
       console.log(`channel ${channel.name} deleted`);
   });
client.on('guildMemberAdd',member=>{
       console.log(`user ${user.name} is added to server`);
   });
client.on('ready',()=>{
       console.log(`${client.user.tag} has logged in!`);
   });

client.on('interactionCreate',interaction=>{
    if(interaction.isChatInputCommand()){
        interaction.reply({content:'pong!'})
    }
  });
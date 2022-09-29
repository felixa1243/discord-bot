import { REST,SlashCommandBuilder,Routes} from 'discord.js'
import {config} from './config/environment.js'

const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
].map(command=>command.toJSON());

const rest= new REST({
    version:"10"
})
.setToken(config.token)
rest.post(Routes.applicationGuildCommand(config.clientId,config.guildId),{
    body:commands
})
.then(data=>console.log(`Successfully registered ${data.length} application commands!`))
.catch(err=>console.error(err))
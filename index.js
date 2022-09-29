import {
    Client,
    GatewayIntentBits
} from 'discord.js'
import {
 config
}from './config/environment.js'
//client
const client = new Client({intents:GatewayIntentBits.Guilds})
//ready state
client.once('ready',()=>{
    console.log('ready!')
    
})
//login
client.login(config.token)
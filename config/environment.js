import dotenv from 'dotenv'

dotenv.config()


export const config = {
    token:process.env.token,
    clientId:process.env.clientId,
    guildId:process.env.guildId,
    apikey:process.env.apikey
}
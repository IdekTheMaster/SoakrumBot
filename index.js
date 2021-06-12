const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('dotenv').config()

client.login(process.env.BOT_TOKEN)
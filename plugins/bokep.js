let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let pekob = fs.readFileSync('./src/astaghfirullah.webp') 
conn.sendMessage(m.chat, pekob, MessageType.sticker, {
      quoted: m })
}

handler.help = ['bokep']
handler.tags = ['dewasa']
handler.command = /^bokep$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler

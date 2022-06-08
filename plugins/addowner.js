let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/owner.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `Beliau memang owner`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/owner.json', JSON.stringify(json))
    m.reply(`@${who.split`@`[0]} antum sekarang owner bang`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addowner [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)owner$/i

handler.owner = true

module.exports = handler
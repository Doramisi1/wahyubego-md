let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.DATABASE.data.users[m.sender].exp = 1000
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['cheatxp']
handler.tags = ['owner']
handler.command = /^(cheatxp)$/i
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


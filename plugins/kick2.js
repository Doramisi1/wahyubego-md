let handler = async (m, { conn }) => {
await conn.groupRemove(m.chat, [m.quoted.sender]) // untuk reply orang yang ingin di  
// code di bawah hanya bisa 1 tag dan reply (pastikan baris comment dihapus)
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
 await conn.groupRemove(m.chat, [who])
}
handler.tags = ['Admin']
handler.command = /^(kick2)$/i
handler.owner = false
handler.admin = true
handler.limit = 2

module.exports = handler

let handler = m => m

let linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/i

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)

  if (chat.antiLink && link) {
 m.reply(`*「 ANTI LINK 」*\n\nTerdeteksi *${name}* si goblok malah kirim grup lain\n\nSorry nih lu akan dikick dari grup`)
   this.groupRemove(m.chat, [m.sender])
           user.banned = true
  }
}
handler.group = true
handler.botAdmin = true

module.exports = handler

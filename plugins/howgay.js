let handler = async (m, { conn, command, usedPrefix, text }) => {
  if (!text) throw `Masukan kata\n Contoh *${usedPrefix}how${command.replace('how', '').toLowerCase()}* Agus`
  conn.reply(m.chat, `
${command} *${text}*
*${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  } : {})
}
handler.help = ['gay', 'pintar', 'cantik', 'ganteng', 'gabut', 'gila', 'lesbi', 'stress', 'bucin', 'jones', 'sadboy', 'pedo'].map(v => 'how' + v + ' <teks>')
handler.tags = ['kerang']
handler.command = /^how(gay|pintar|cantik|ganteng|gabut|gila|lesbi|stress?|bucin|jones|sadboy|pedo)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
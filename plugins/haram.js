let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  let res = `https://memegenerator.net/img/instances/82086657/jahannam-is-waiting-for-you-brother.jpg`
  conn.sendFile(m.chat, res, 'halal.jpg', `"Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk." (QS. Al-Isra: 32), _*Bedul Bot Tzy*_`, m, false)
  conn.sendButton(m.chat, `eits tapi boong ,tobatlah brother`, '© BEDUL BOT', 'Astaghfirullah', '.maaf', m)
}
handler.help = ['kartunharam']
handler.tags = ['dewasa']

handler.command = /^(kartunharam)$/i

module.exports = handler


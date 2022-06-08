let fs = require('fs')

let handler = async (m, { conn, text }) => {
let logo = fs.readFileSync(`./src/hentai.jpg`)
let caption = `"Dan janganlah kamu mendekati zina, sesungguhnya zina adalah suatu perbuatan yang keji. Dan suatu jalan yang buruk." (QS. Al-Isra: 32), _*Bedul Bot Tzy*_`
await conn.send2ButtonImg(m.chat, logo, caption, '*TOBAT BANG*', 'Astaghfirullah', '.maaf', 'Owner', '.owner', m)
}
handler.command = /^hentai$/i
handler.tags =['dewasa']
handler.help = ['hentai']
module.exports = handler

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  m.reply('Tunggu oy....')
  let res = `https://api.lolhuman.xyz/api/random/bts?apikey=8cc8053dcbf11db08c87e225`
  conn.sendFile(m.chat, res, 'flastik.jpg', `Kata bedul ini flastik`, m, false)
}
handler.help = ['bts']
handler.tags = ['internet']

handler.command = /^(bts)$/i

module.exports = handler
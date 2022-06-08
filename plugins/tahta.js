let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Sabar Kontol...*')
  let res = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${response}&apikey=dappakntlll`
  conn.sendFile(m.chat, res, 'tod.jpg', `harta tahta tai babi`, m, false)
}
handler.help = ['hartahta'].map(v => v + ' <teks>')
handler.tags = ['textpro']
handler.command = /^(hartahta)$/i
handler.limit = true
handler.register = true

module.exports = handler
// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn, args, text }) => {
	response = args.join (' ')
  m.reply('Wait...')
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  let caption = `kartun`
  await conn.send2ButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, wm, 'Neko', '.neko', 'SAYA WIBUU', '.stres')
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko$/i

module.exports = handler

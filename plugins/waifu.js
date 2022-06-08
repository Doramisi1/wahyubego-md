let fetch = require('node-fetch')
let handler = async(m, { conn, args }) => {
	response = args.join (' ')
  m.reply('tunggu 2 hari')
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  let wm = global.wm
  let ngisor = `awokawok bojone gepeng`
  conn.send2ButtonImg(m.chat, await (await fetch(json.url)).buffer(), ngisor, wm, 'Waifu', '.waifu', 'SAYA WIBUU', '.stres')
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i

module.exports = handler

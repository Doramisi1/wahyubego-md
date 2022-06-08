let fs = require('fs')
let handler = async (m, { conn }) => {
	let wibu = fs.readFileSync(`./src/wibu.jpg`)
	let komen = `Wibu Kontol mati aja lu pepek🖕🏻`
  conn.sendFile(m.chat, wibu, '', komen, m)
}
handler.command = /^stres$/i
handler.help = ['stres']

module.exports = handler

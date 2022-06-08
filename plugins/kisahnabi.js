let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya\nContoh : .kisah adam', m)

	axios.get(`https://yog-apikey.herokuapp.com/api/muslim/kisahnabi?nabi=${text}&apikey=YogGanz`).then ((res) => {
	 	let hasil = `*NAMA* : ${res.data.result.name}\n*TAHUN KELAHIRAN* : ${res.data.result.kelahiran}\n*WAFAT DI USIA* : ${res.data.result.wafat_usia}\n*KISAH* : ${res.data.result.kisah}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['kisah|kisahnabi'].map(v => v + ' <nama nabi>')
handler.tags = ['islam']
handler.command = /^(kisah|kisahnabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler

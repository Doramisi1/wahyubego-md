let { performance } = require('perf_hooks')

let handler = async (m, { conn, text }) => {

let total = Math.floor(Math.random() * 9999999999);
let json = { exp: total }
conn.mining = conn.mining ? conn.mining : {}
conn.mining[m.chat] = true 
 let start = `Sedang mencari target palakan `
 let boost = `Menemukan target`
 let boost2 = `Kamu mengancam target`
 let boost3 = `Target ketar ketir`
 let boost4 = `Target memberi mu uang (xp) sebesar *${json.exp}*`

   await m.reply(start)
   await m.reply(boost)
   await m.reply(boost2)
   await m.reply(boost3)
   await m.reply(boost4)
   let finish = `Sukses memalak toko ${pickRandom(global.pedagang)}`
   global.db.data.users[m.sender].exp += json.exp * 1

     conn.reply(m.chat, finish, m)
}
handler.help = ['malak']
handler.tags = ['premium']
handler.command = /^malak/i
handler.mods = false
handler.owner = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

global.pedagang = [
'Sayur',
'Kelontong',
'Ikan',
'Baju',
'Bakso'
]

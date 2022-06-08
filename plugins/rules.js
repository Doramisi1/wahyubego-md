let fs = require('fs')

let handler = async (m, { conn, text }) => {
let gatau = fs.readFileSync('./src/gambar.jpg')
let wm = global.wm
let kaption = `*Rules:*\n- *_Dilarang_* menyepam bot\n- *_Dilarang_* menelpon bot(block)\n- *_Jangan_* mainan button nanti ngebug\n- *_Kalo_* ngebug yaudah ngentod gara gara lu :v\n\n *_SembraniBotz_*`
await conn.send3ButtonImg(m.chat, gatau, kaption, wm, 'Owner', '.owner', 'Menu', '.sihsvsudbsjagsb', 'Donasi', '.donasi', m)
}
handler.command = /^(rules)$/i
handler.help = ['rules']
module.exports = handler


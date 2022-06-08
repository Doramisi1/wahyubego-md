let fs = require('fs')

let handler = async (m, { conn, text }) => {
let logo = fs.readFileSync(`./src/logo.jpg`)
let caption = `Welcome *${conn.getName(m.sender)}* to *_SembraniBotz_*\n-Klik *_Menu_* untuk menampilkan list menu\n-Klik *_Group_* untuk link group official bot\n-Klik *_Rules_* untuk melihat rules _SembraniBotz_\n\n *(bot tidak aktif 24 jam)*`
let wm = global.wm
m.reply(`*Sedang mengambil menu di kamar ${conn.getName(m.sender)}*`)
await conn.send3ButtonImg(m.chat, logo, caption, wm, 'Menu', '.sihsvsudbsjagsb', 'Group', '.gerup', 'Rules', '.rules', m)
}
handler.command = /^menu$/i
handler.tags = ['main']
handler.help = ['menu']
module.exports = handler


let fs = require('fs')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkalimat = conn.tebakkalimat ? conn.tebakkalimat : {}
    let id = m.chat
    if (id in conn.tebakkalimat) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakkalimat[id][0])
        throw false
    }
    let tebakkalimat = JSON.parse(fs.readFileSync(`./src/tebakkalimat.json`))
    let json = tebakkalimat[Math.floor(Math.random() * tebakkalimat.length)]
    let caption = `
${json.soal}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}apa untuk bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakkalimat[id] = [
        await conn.sendButton(m.chat, caption, wm, 'Bantuan', '.apa'),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakkalimat[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, wm, 'Susun Kata', '.tebakkalimat')
            delete conn.tebakkalimat[id]
        }, timeout)
    ]
}
handler.help = ['tebakkalimat']
handler.tags = ['game']
handler.command = /^tebakkalimat/i

module.exports = handler

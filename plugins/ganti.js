/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

let handler = async (m, { conn, args }) => {
    let gambar = global.gambar // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw `Mana fotonya`
        conn.updateProfilePicture(gambar, img)
        conn.reply(m.chat, 'Sesuai Perintah', m)
    }
}
handler.help = ['ganti']
handler.command = /^(ganti)$/i
handler.owner = true

module.exports = handler

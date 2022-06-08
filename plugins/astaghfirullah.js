let handler = async (m) => {
    let user = db.data.users[m.sender]
    if (user.warning == 0) throw 'Alhamdulillah antum tidak punya warning'

    let waktu = user.lastIstigfar + 180000
    if (new Date - user.lastIstigfar < 180000) throw `Lu bisa menggunakan perintah ini lagi setelah ${msToTime(waktu - new Date())}`
    user.warning -= 1
    m.reply(`Warning: ${user.warning} / 3`)
    user.lastIstigfar = new Date * 1
}
handler.command = /^(maaf)$/i

handler.limit = false

module.exports = handler

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 5)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}
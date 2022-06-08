let handler = async m => m.reply(`
Masukin bot lu, biar tawuran antar bot
https://chat.whatsapp.com/BgKpySEngapLoJ3IVNChBa`.trim()) // Tambah sendiri kalo mau
handler.command = /^gerup$/i
handler.help = ['gerup']
handler.tags = ['info']
handler.owner = false

module.exports = handler

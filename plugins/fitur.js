let handler = async m => m.reply(`
╭─「 Premium 」
│ ✓ limit ga bakal berkurang
│ ✓ add bot ke GC lu dengan .join <link>
│ ✓ sewa bot
│ ✓ maling xp orang💀
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['fitur']
handler.tags = ['premium']
handler.command = /^fitur$/i

module.exports = handler

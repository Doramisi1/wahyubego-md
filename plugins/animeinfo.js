let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
let animeingfo = `鉁笍 *Title:* ${title}
馃巻锔� *Episodes:* ${episodes}
馃拰锔� *Rating:* ${rated}
鉂わ笍 *Score:* ${score}
馃挌锔� *Synopsis:* ${synopsis}
馃寪锔� *URL*: ${url}`
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <judul>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
module.exports = handler

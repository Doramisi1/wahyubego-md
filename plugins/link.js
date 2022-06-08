let handler = async (m, { conn, args }) => {
  let group = m.chat
    if (/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(args[0])) group = args[0]
      if (!/^[0-9]{5,16}-?[0-9]+@g\.us$/.test(group)) throw 'Cuma bisa di grup'
        let groupMetadata = await conn.groupMetadata(group)
          if (!groupMetadata) throw 'groupMetadata is undefined :\\'
            if (!'participants' in groupMetadata) throw 'error awokwok'
              let me = groupMetadata.participants.find(user => user.jid === conn.user.jid)
                if (!me) throw 'Bot gada di grup itu'
                  if (me.isAdmin !== true) throw 'Mikir lah nyink bot bukan admin mana bisa ambil link'
                    m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
                    }
                    handler.help = ['linkgroup']
                    handler.tags = ['group']
                    handler.command = /^link(gro?up)?$/i
                    
                    module.exports = handler
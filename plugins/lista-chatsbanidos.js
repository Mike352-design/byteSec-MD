
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn }) => {
let ban = global.db.data.chats    
let chats = Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned)
    
let caption = `*╭•·––| 🥀💀 𝘾𝙃𝘼𝙏𝙎 𝘽𝘼𝙉𝙄𝘿𝙊𝙎 |––·•*
│ *Total: ${chats.length} Chats* ${chats ? '\n│\n' + chats.map(([jid], i) =>`
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'Sem Chats Banidos' : `*CHAT BANIDO*`}
│ ${jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/*await conn.sendButton(m.chat, caption, wm, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })}*/
handler.command = /^listabanchat|chat(s)?baneado(s)?|list(a)?chat(s)?|list(a)?ban(chat(s)?)?$/i
handler.true = true
export default handler

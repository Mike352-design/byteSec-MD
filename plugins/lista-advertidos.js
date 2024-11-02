
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.chats[m.chat].users).filter(user => user[1].adv)
let warns = global.db.data.users.warn
let user = global.db.data.chats[m.chat].users

let caption = `⚠️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊𝙎 𝘼𝘿𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙎
*╭•·–––––––––––––––––––·•*
 *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `

 *${i + 1}.* ${conn.getName(jid)  == undefined ? 'Sem Usuarios' :`*(${user.adv}/4)*`} ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰•·–––––––––––––––––––·•*`
await conn.reply(m.chat, caption, m, { mentions: await conn.parseMention(caption) })}
/* conn.sendButton(m.chat, caption, `⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗘𝗡𝗖𝗜𝗔 ⇢ ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`, null, [ 
['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })*/
handler.command = /^(listaadv|listadv|advlist|advlista)$/i 
handler.admin=true

export default handler
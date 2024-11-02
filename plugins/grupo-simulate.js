
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, usedPrefix, command, args: [event], text }) => {
if (!event) return await conn.sendButton(m.chat, `*EXEMPLO:*

${usedPrefix + command} welcome @user
${usedPrefix + command} bye @user
${usedPrefix + command} promote @user
${usedPrefix + command} demote @user`.trim(), wm, null, [['WELCOME', '#simulate welcome'], ['BYE', '#simulate bye']])
let mentions = text.replace(event, '').trimStart()
let who = mentions ? conn.parseMention(mentions) : []
let part = who.length ? who : [m.sender]
let act = false
m.reply(`*Simulando ${event}...*`)
switch (event.toLowerCase()) {
case 'add':
case 'invite':
case 'welcome':
case 'bemvindo':       
act = 'add'
break
case 'bye':
case 'kick':
case 'leave':
case 'remove':
case 'sacar':
act = 'remove'
break
case 'promote':
case 'daradmin':
case 'darpoder':
act = 'promote'
break
case 'demote':
case 'quitaradmin':
case 'quitarpoder':
act = 'demote'
case 'adv':
case 'advertencia':
act = 'adv'
break
default:
throw 'error, coloque uma opção valida'
}
if (act) return conn.participantsUpdate({
id: m.chat,
participants: part,
action: act
})}
handler.help = ['simulate <event> [@mention]','simular <event>'] 
handler.tags = ['owner']
handler.command = /^simulate|simular$/i
handler.group = true
export default handler

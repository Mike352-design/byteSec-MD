
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn,usedPrefix, command, isAdmin,isOwner,text }) => {

if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}


if(isNaN(text) && !text.match(/@/g)){

}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, lenguajeGB.smsMalused3(), + `*${usedPrefix + command} @${global.owner[0][0]}*`,  m)
//conn.sendButton(m.chat, wm, lenguajeGB['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]],  m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, lenguajeGB.smsDemott(), `*${usedPrefix + command} @${global.owner[0][0]}*`,  m)
//conn.sendButton(m.chat, wm, lenguajeGB['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]],  m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + lenguajeGB['smsDemott2'](),  m)
}}
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true

export default handler 


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text,command }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(command=="resetuser" && !text && !m.quoted) return conn.reply(m.chat, `*MARQUE O USUARIO, ESCREVA O NUMERO OU RESPONDA UMA MENSAGEM PARA REINICIAR DADOS*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*O NÚMERO QUE DIGITOU NAO É VÁLIDO PARA REINICIAR OS DADOS*`, m)

if(command=="resetuser")
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
delete global.global.db.data.users[user]
delete global.global.db.data.chats[m.chat].users[user]
conn.reply(m.chat, `* @${number} RESETADO NA BASE DE DADOS*`, null, { mentions: [user] })
}

if(command=="resetchat")
try {
if(text) {
var user = number + '@s.whatsapp.net'
} 
  
} catch (e) {
  console.log(e)
} finally {
  
delete global.global.db.data.chats[m.chat]
conn.reply(m.chat, `*CHAT RESETADO NA BASE DE DADOS*`, null, { mentions: [user] })
}


}
handler.tags = ['owner']
handler.command = ['reiniciaruser','resetchat', 'resetuser', 'deletedatauser'] 
handler.rowner = true

export default handler

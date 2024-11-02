
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
try{
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'open': 'not_announcement',
'abrir': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'close': 'announcement',
'fechar': 'announcement',	
'fechado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let nombre = [ 
lenguajeGB.smsGrupoTime9() + '1' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '1' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '2' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '2' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '3' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '3' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '4' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '4' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '5' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '5' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '6' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '6' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '7' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime10() + '7' + lenguajeGB.smsGrupoTime11(), 
	
lenguajeGB.smsGrupoTime9() + '10' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '10' + lenguajeGB.smsGrupoTime11(),

lenguajeGB.smsGrupoTime9() + '12' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '12' + lenguajeGB.smsGrupoTime11(),

lenguajeGB.smsGrupoTime9() + '24' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime10() + '24' + lenguajeGB.smsGrupoTime11()]

let descripción = [ 
lenguajeGB.smsGrupoTime12() + '1' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '1' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '2' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '2' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '3' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '3' + lenguajeGB.smsGrupoTime11() + '\n',  
	
lenguajeGB.smsGrupoTime12() + '4' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '4' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '5' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '5' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '6' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '6' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '7' + lenguajeGB.smsGrupoTime11(), 
lenguajeGB.smsGrupoTime13() + '7' + lenguajeGB.smsGrupoTime11() + '\n', 
	
lenguajeGB.smsGrupoTime12() + '10' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '10' + lenguajeGB.smsGrupoTime11() + '\n', 

lenguajeGB.smsGrupoTime12() + '12' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '12' + lenguajeGB.smsGrupoTime11() + '\n', 

lenguajeGB.smsGrupoTime12() + '24' + lenguajeGB.smsGrupoTime11(),
lenguajeGB.smsGrupoTime13() + '24' + lenguajeGB.smsGrupoTime11()]

let comando = [ 
"open 1", "fechar 1", 
"open 2", "fechar 2",
"open 3", "fechar 3",
"open 4", "fechar 4",
"open 5", "fechar 5",
"open 6", "fechar 6",
"open 7", "fechar 7",
"open 10", "fechar 10",
"open 12", "fechar 12",
"open 24", "fechar 24"]

let sections = Object.keys(nombre, descripción, comando).map((v, index) => ({ title: `${lenguajeGB.smsParaAdmins()}`,
rows: [{ title: `${nombre[v]}`, description: `${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let caption = `${lenguajeGB['smsAvisoMG']()}
${lenguajeGB['smsMalused']()}
${lenguajeGB['smsGrupoTime1']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${lenguajeGB['smsGrupoTime2']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'close' : 'fechar'} 1*`

const listMessage = {
text: `${wm}`,
footer: `${caption}`,
title: null,
buttonText: `⚙️ ${lenguajeGB.smsConfi1()} ⚙️`,
sections }

await conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()} ${lenguajeGB['smsMalused']()} 
${lenguajeGB['smsGrupoTime1']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${lenguajeGB['smsGrupoTime2']()}
*${usedPrefix + command} ${lenguajeGB.lenguaje() == 'en' ? 'close' : 'fechar'} 1*`, fkontak, m)
//await conn.sendMessage(m.chat, caption, {quoted: fkontak})
throw false
}
let timeoutset = 86400000 * args[1] / 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${lenguajeGB['smsAvisoRG']()}╭━━━━━━━━━⬣
${lenguajeGB['smsGrupoTime3']()}* *${isClose == 'announcement' ? lenguajeGB.smsGrupoTime4() : lenguajeGB.smsGrupoTime5()}* ${args[1] ? `*${lenguajeGB['smsGrupoTime6']()} ${clockString(timeoutset)}*` : ''}
╰━━━━━━━━━━━━━━━━━━⬣`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? lenguajeGB.smsGrupoTime7() : lenguajeGB.smsGrupoTime8()}!!`)
})
}, timeoutset)}

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(grouptime|gctime|gc)$/i
handler.botAdmin = false
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

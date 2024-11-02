
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}Descreva o seu relato\n*Exemplo:*\n*${usedPrefix + command} l comando ${usedPrefix}infobot nao funciona.*\n`
if (text.length < 8) throw `${fg} ✒️*Mínimo 10 caracteres para realizar o relato*\n.*`
if (text.length > 1000) throw `${fg} ✒️ *Máximo 1000 caracteres para o Relato.*\n*`
let teks = `༒︎ 𝙍𝙀𝙋𝙊𝙍𝙏 ༒︎
⸸ 𝙉𝙐𝙈𝙀𝙍𝙊: Wa.me/${m.sender.split`@`[0]}
⸸ 𝙈𝙎𝙂: ${text}

─┅──┅❖ ❖─┅──┅
`
//conn.reply('19393844141@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})

if(m.quoted){
m.quoted.reply(m.quoted ? teks + m.quoted.text : teks,`120363217076425903@g.us`, {contextInfo: {
mentionedJid: [m.sender]
}})}
else  {
  m.reply(m.quoted ? teks + m.quoted.text : teks,`120363217076425903@g.us`, {contextInfo: {
mentionedJid: [m.sender]
}})}



  m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
  𝑶 𝒓𝒆𝒍𝒂𝒕𝒐𝒓𝒊𝒐 𝒇𝒐𝒊 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒆 𝒂𝒈𝒖𝒂𝒓𝒅𝒂 𝒖𝒎𝒂 𝒓𝒆𝒔𝒑𝒐𝒔𝒕𝒂. 𝑬𝒎 𝒃𝒓𝒆𝒗𝒆, 𝒓𝒆𝒄𝒆𝒃𝒆𝒓𝒂 𝒖𝒎𝒂 𝒓𝒆𝒑𝒍𝒊𝒄𝒂. 𝑺𝒆 𝒇𝒐𝒓 𝒊𝒓𝒓𝒆𝒍𝒆𝒗𝒂𝒏𝒕𝒆, 𝒔𝒆𝒓𝒂 𝒆𝒔𝒒𝒖𝒆𝒄𝒊𝒅𝒐 𝒏𝒂 𝒎𝒆𝒎𝒐𝒓𝒊𝒂 𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒕𝒂𝒅𝒐.

*╰─┅──┅❖ ⸸ ❖─┅──┅* `)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 0
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler

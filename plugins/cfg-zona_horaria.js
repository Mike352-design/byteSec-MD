
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import moment from 'moment-timezone'

let handler = async (m, { conn }) => {  
const fechaper = moment().tz('America/Lima').format('DD/MM HH:mm')
const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm')
const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm')
const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm')
const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm')
const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm')
const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm')
const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm')
const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm')
const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm')
const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm')
const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm')
const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm')
const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm')
const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm')
const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm')
const fechanew = moment().tz('America/New_York').format('DD/MM HH:mm')
const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm')
const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm')
const fechaafri = moment().tz('Africa/Malabo').format('DD/MM HH:mm')
await conn.sendMessage(m.chat, { text: `\`\`\`
「 ZONA-HORARIA 🗺️ 」
⏱️Peru       : ${fechaper}
⏱️Mexico     : ${fechamex}
⏱️Bolivia    : ${fechabol}
⏱️Chile      : ${fechachi}
⏱️Argentina  : ${fechaarg}
⏱️Colombia   : ${fechacol}
⏱️Ecuador    : ${fechaecu}
⏱️Costa_Rica : ${fechacosr}
⏱️Cuba       : ${fechacub}
⏱️Guatemala  : ${fechagua}
⏱️Honduras   : ${fechahon}
⏱️Nicaragua  : ${fechanic}
⏱️Panama     : ${fechapan}
⏱️Uruguay    : ${fechauru}
⏱️Venezuela  : ${fechaven}
⏱️Paraguay   : ${fechapar}
⏱️New York   : ${fechanew}
⏱️Indonesia  : ${fechaasi}
⏱️Brasil     : ${fechabra}
⏱️G.N.Q      : ${fechaafri}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
💻 *Zona horaria do servidor atual:*\n*[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]*\n*${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}*` }, {quoted: m })
}

handler.help = ['horario']
handler.tags = ['info']
handler.level = 1
handler.command = ['horario']

export default handler

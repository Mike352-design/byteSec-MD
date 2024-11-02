
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }


let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `${eg}🚀 𝙋𝙍𝙊𝙑𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀......`, fkontak,  m)
//await conn.sendButton(m.chat, wm, `${eg}🚀 𝙋𝙍𝙐𝙀𝘽𝘼 𝘿𝙀 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿...\n🚀 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏...`, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)  
let neww = performance.now()
let speed = neww - old
let caption = `*${htki} 𝙑𝙀𝙇𝙊𝘾𝙄𝘿𝘼𝘿𝙀 ${htka}*

🚄 *${Math.round(neww - old)}* ms
🚄 *${speed}* ms

*${htjava}*  𝙍𝙐𝙉𝙏𝙄𝙈𝙀 
${muptime}
${readMore}
*${htjava} C H A T S*
• *${groupsIn.length}* \`\`\`Grupos\`\`\`
• *${groupsIn.length}* \`\`\`Grupos Unido\`\`\`
• *${groupsIn.length - groupsIn.length}* \`\`\`Grupos Restantes\`\`\`
• *${chats.length - groupsIn.length}* \`\`\`Chats Privados\`\`\`
to

*${htjava} S E R V I D O R*
*🟢 RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🔵 RAM Livre:* ${format(freemem())}

*💻 Plataforma :* \`\`\`${os.platform()}\`\`\`
*📡 Servidor :* _${os.hostname()}_
${readMore}
*NodeJS Uso de memoria*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*Uso total de CPU*as que
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''} `


await conn.sendFile(m.chat, imagen4, 'gata.jpg', caption, fkontak)
//await conn.sendButton(m.chat, wm, caption, gata.getRandom(), [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], m, dos.getRandom())
} catch (e) {

  console.log(e)
await conn.reply(m.chat, `${fg}*❖─┅──┅\nALGO OCORREU MAL NA EXECUÇÃO. ERROS ENCONTRADOS\n─┅──┅❖*\n\n\`\`\`REPORTE ESTE COMANDO ${usedPrefix + command} COM O COMANDO ${usedPrefix}reporte\`\`\`\n─┅──┅❖ `, m)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *Dias* ', h, ' *Horas,*', m, ' *Minutos e* ', s, ' *Segundos* '].map(v => v.toString().padStart(2, 0)).join('')
}

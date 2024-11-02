
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn, text, args, usedPrefix, command }) => {


let kt = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text

let teks = encodeURI(kt)

let [texto1, texto2] = text.split('|').map(item => item.trim());

let stiker = await sticker(false,`https://aemt.me/ttp?text=${teks}`, global.packname, global.author)
if (command == 'ttp6') {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp5') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m)}

if (command == 'ttp4') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp3') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp2') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'ttp') {
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    
if (command == 'gta') {
  if(!texto2) {
    texto2 = '---'
  }
conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/gtapassed?apikey=${lolkeysapi}&text1=${texto1}&text2=${texto2}`, 'sticker.webp', '', m, { asSticker: true })}
    
}

handler.level = 5
handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'ttp6', 'gta']
handler.tags = ['sticker']
export default handler

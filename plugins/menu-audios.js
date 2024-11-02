
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn,isAdmin,isOwner, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
  
let menuaudios = `╭─┅──┅❖  ♱︎  ❖─┅─┅
 |              *AUDIOS*
╰─┅---─┅❖  ⸸  ❖─┅┅
|⎓━━━━
| ᴿᵉᵃˡᶦᶻᵃ ᵐᵒᵈᶦᶠᶦᶜᵃᶜᵒᵉˢ ᵈᵉ ᵃᵘᵈᶦᵒ
|⎓⎔ ${usedPrefix}bass
|⎓⎔ ${usedPrefix}nightcore
|⎓⎔ ${usedPrefix}earrape
|⎓⎔ ${usedPrefix}sigma
|⎓⎔ ${usedPrefix}blown
|⎓⎔ ${usedPrefix}vader
|⎓⎔ ${usedPrefix}fat
|⎓⎔ ${usedPrefix}reverso
|⎓⎔ ${usedPrefix}slow
|⎓⎔ ${usedPrefix}smooth
|⎓⎔ ${usedPrefix}esquilo
*─┅──────┅❖ ⸸ ❖─┅──────┅*`.trim()
m.reply(menuaudios)

}
handler.command=['audio']
export default handler
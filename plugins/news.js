
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import news from 'gnews'
import { JSDOM } from 'jsdom'
import moment from 'moment';
import * as scholarly from "@ebandev/scholarly";


const handler  = async (m, { conn, command, text,args, usedPrefix, DevMode }) => {
  
let messg = `╭─┅──┅❖ 🗞️ ❖─┅──┅
   _Em breve_ 
❖─┅──┅─༺༻─┅──┅─❖ `


m.reply(messg)

}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level = 32
handler.command = ['noticias']
export default handler

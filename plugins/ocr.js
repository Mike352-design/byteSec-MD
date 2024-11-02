
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'

import { readFile } from 'fs/promises';
import { BingApi } from "bing-nodejs";
 import { gpt } from "gpti";
import pdf from 'pdf-parse';
	import {prodia, pixart, emi, render3d,pixelart} from 'gpti'
let handler = async (m, { conn,text }) => {
//const { gpt } = require("gpti");

gpt({
    messages: [

        {
            role: "system",
            content: "You are an expert and super clever bot with onowledge of everything on real Time"
        }
    ],
    prompt: text,
    model: "GPT-4",
    markdown: false
}, (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        m.reply(data.gpt)
    }
});



}
handler.help = ['ocr']
handler.tags = ['tools']
handler.command = /^ocr$/i

export default handler
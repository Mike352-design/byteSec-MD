
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import { Readable } from 'stream';

const handler = async (m, { conn, command, text, args, usedPrefix, DevMode }) => {
    let fkontak = { "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, "participant": "0@s.whatsapp.net" }
    const { key } = await conn.sendMessage(m.chat, { text: wait }, { quoted: fkontak });

    
await conn.sendMessage(m.chat, {text: ` 👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■□□□□□□□□] 20%`, edit: key});
   
   
   try {
     async function postData(url, data) {
       await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■□□] 80%`, edit: key});

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■■■] 100%`, edit: key});
    return response.text(); // Return response body as text
}

// Example WHOIS request
const whoisData = {
    host: text,
};

// Make POST request to /whois endpoint
postData('http://127.0.0.1:8330/whois', whoisData)
    .then(async (response) => {
        console.log('WHOIS response:', response);
        await conn.sendMessage(m.chat, {text: response, edit: key});
    })
    .catch(async (error) => {
      await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
        console.error('Error:', error);
    });
   }
   catch(e){
     await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
     console.log(e)
   }
}

handler.help = ['owner', 'creator']
handler.level = 50
handler.command = ['whois']

export default handler
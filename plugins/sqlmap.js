
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

    const [host, ...optional_args] = text.split(/\n/);
await conn.sendMessage(m.chat, {text: ` 👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■□□□□□□□□] 20%`, edit: key});
    async function executeSQLMap() {
      await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■□□□□□] 50%`, edit: key});

        const url = 'http://127.0.0.1:8330/sqlmap';  // Replace with the appropriate server address

        const data = {
            url: host,
            optional_args: optional_args.join(' ')
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■□□] 80%`, edit: key});
            const readable = new Readable().wrap(response.body);
            let responseBody = '';
                          await conn.sendMessage(m.chat, {text: `👁️ 𝙵𝚊𝚣𝚎𝚗𝚍𝚘 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚍𝚘 𝚑𝚘𝚜𝚝. . .
[■■■■■■■■■■] 100%`, edit: key});
            readable.on('data',async (chunk) => {
                responseBody += chunk.toString();
  

                console.log(responseBody)
                await conn.sendMessage(m.chat, {text: responseBody, edit: key});
            });
            readable.on('end', async () => {
                console.log(responseBody);  // Log the received data
                
            });
        } catch (error) {
            console.error('Error:', error);
             await conn.sendMessage(m.chat, {text: `𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌
[■■■■■■■■■■] 100%`, edit: key});
        }
    }

    executeSQLMap();
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level = 64
handler.command = ['sqlmap']

export default handler
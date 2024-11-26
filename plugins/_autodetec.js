
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

let WAMessageStubType = (await import(global.baileys)).default
export async function before(m, { conn, participants}) {

    let newAdmin

if (global.db.data.chats[m.chat].language === 'pt') {
    newAdmin = `
> robot@bytesec: #~/groups/ usermod -aG sudo user
> ---------------------------------------
>>> [!] ᴀᴅɪᴄɪᴏɴᴀɴᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀᴏ ꜱᴜᴅᴏᴇʀꜱ
────────────────────────────────
> [+] @${m.messageStubParameters[0].split`@`[0]} ᴠɪʀᴏᴜ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴅᴏʀ ɴᴏ ꜱɪꜱᴛᴇᴍᴀ
────────────────────────────────
    `;
}
else if (global.db.data.chats[m.chat].language === 'en') {
  newAdmin = `
> robot@bytesec: #~/groups/ usermod -aG sudo user
> ---------------------------------------
>>> [!] ᴀᴅᴅɪɴɢ ᴜꜱᴇʀ ᴛᴏ ꜱᴜᴅᴏᴇʀꜱ ꜰɪʟᴇ 
────────────────────────────────
> [+] @${m.messageStubParameters[0].split`@`[0]} ʙᴇᴄᴀᴍᴇ ᴀᴅᴍɪɴ ɪɴ ᴛʜᴇ ꜱʏꜱᴛᴇᴍ
────────────────────────────────
  `;
}

if (!m.messageStubType || !m.isGroup) return
let usuario = `@${m.sender.split`@`[0]}`
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let users = participants.map(u => conn.decodeJid(u.id))
if (m.messageStubType == 21) {
await this.sendMessage(m.chat, { text: `${usuario}𝙈𝙐𝘿𝙊𝙐 𝙊 𝙉𝙊𝙈𝙀 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊
𝘼:\n\n*${m.messageStubParameters[0]}*`, mentions: [m.sender]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak }) 
} else if (m.messageStubType == 22) {
await this.sendMessage(m.chat, { text: `${usuario}𝙈𝙐𝘿𝙊𝙐 𝘼 𝙁𝙊𝙏𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊`, mentions: [m.sender] }, { quoted: fkontak }) 
} else if (m.messageStubType == 24) {
await this.sendMessage(m.chat, { text: `${usuario} 𝘼 𝙉𝙊𝙑𝘼 𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊 𝘿𝙊 𝙂𝙍𝙐𝙋𝙊 𝙀:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 25) {
await this.sendMessage(m.chat, { text: `🔒 𝗔𝗚𝗢𝗥𝗔 *${m.messageStubParameters[0] == 'on' ? '𝗔𝗣𝗘𝗡𝗔𝗦 𝗔𝗗𝗠𝗜𝗡𝗦' : '𝙏𝙊𝘿𝙊𝙎'}* 𝗣𝗢𝗗𝗘𝗠 𝗘𝗗𝗜𝗧𝗔𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗢𝗘𝗦 𝗗𝗢 𝗚𝗥𝗨𝗣𝗢`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 26) {
return 0
} else if (m.messageStubType == 29) {
await this.sendMessage(m.chat, { text: newAdmin, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
} else if (m.messageStubType == 30) {
} else if (m.messageStubType == 72) {
await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} 𝔭𝔢𝔯𝔡𝔢𝔲 𝔭𝔬𝔡𝔢𝔯 𝔫𝔢𝔰𝔱𝔞 𝔠𝔬𝔪𝔲𝔫𝔦𝔡𝔞𝔡𝔢 💀`, mentions: [`${m.sender}`,`${m.messageStubParameters[0]}`]/*, mentions: (await conn.groupMetadata(m.chat)).participants.map(v => v.id)*/ }, { quoted: fkontak })
await this.sendMessage(m.chat, { text: `${usuario} 𝔪𝔲𝔡𝔬𝔲 𝔞𝔰 𝔪𝔢𝔫𝔰𝔞𝔤𝔢𝔫𝔰 𝔱𝔢𝔪𝔭𝔬𝔯𝔞𝔦𝔰 𝔭𝔞𝔯𝔞 *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak })
} else if (m.messageStubType == 123) {
await this.sendMessage(m.chat, { text: `${usuario} 𝔡𝔢𝔰𝔞𝔱𝔦𝔳𝔬𝔲 𝔬𝔰 𝔪𝔢𝔫𝔰𝔞𝔤𝔢𝔫𝔰 𝔱𝔢𝔪𝔭𝔬𝔯𝔞𝔯𝔦𝔞𝔰`, mentions: [m.sender] }, { quoted: fkontak })
} else {
console.log({messageStubType: m.messageStubType,
messageStubParameters: m.messageStubParameters,
type: WAMessageStubType[m.messageStubType], 
})}}

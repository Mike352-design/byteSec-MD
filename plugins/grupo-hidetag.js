
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let generateWAMessageFromContent = (await import(global.baileys)).default
import * as fs from 'fs';
const handler = async (m, {conn, text, participants, isOwner, isAdmin}) => {
  /*
  
  try {
    const users = participants.map((u) => conn.decodeJid(u.id));
    const q = m.quoted ? m.quoted : m || m.text || m.sender;
    const c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender;
    const msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, {[m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : {text: '' || c}}, {quoted: m, userJid: conn.user.id}), text || q.text, conn.user.jid, {mentions: users});
    await conn.relayMessage(m.chat, msg.message, {messageId: msg.key.id});
  } catch {
    

    const users = participants.map((u) => conn.decodeJid(u.id));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || '';
    const isMedia = /image|video|sticker|audio/.test(mime);
    const more = String.fromCharCode(8206);
    const masss = more.repeat(850);
    const htextos = `${text ? text : '**'}`;
    if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, {image: mediax, mentions: users, caption: htextos, mentions: users}, {quoted: m});
    } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, {video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos}, {quoted: m});
    } else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, {audio: mediax, mentions: users, mimetype: 'audio/mpeg', fileName: `Hidetag.mp3`}, {quoted: m});
    } else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
      var mediax = await quoted.download?.();
      conn.sendMessage(m.chat, {sticker: mediax, mentions: users}, {quoted: m});
    } else {
      await conn.relayMessage(m.chat, {extendedTextMessage: {text: `${masss}\n${htextos}\n`, ...{contextInfo: {mentionedJid: users, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𓆩⚝𓆪',
body: ``,         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/ARCANGEL0/EdgarBOT-MD `}}}}}, {});
    }
  }
*/

m.reply(`⎔⎓─────────────────
┃  ▂▃▅ 𝚂𝚎𝚛𝚟𝚒𝚌𝚘 𝚒𝚗𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _𝐃𝐞𝐯𝐢𝐝𝐨 𝐚𝐬 𝐦𝐮𝐝𝐚𝐧𝐜𝐚𝐬 𝐧𝐨 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐨 𝐝𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐈𝐧𝐜. 𝐍𝐚̃𝐨 𝐞́ 𝐦𝐚𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐯𝐞𝐥 𝐦𝐚𝐫𝐜𝐚𝐫 𝐦𝐮𝐢𝐭𝐨𝐬 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐨 𝐄𝐝𝐠𝐚𝐫._
╰─...⎔⎓──────────────`)



};
handler.command = /^(hidetag|notificar|notify)$/i
handler.group = true
handler.admin = true
export default handler

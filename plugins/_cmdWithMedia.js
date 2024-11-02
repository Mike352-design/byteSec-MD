
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const {
  proto,
  generateWAMessage,
  areJidsSameUser,
} = (await import('@whiskeysockets/baileys')).default;

export async function all(m, chatUpdate) {
  if (m.isBaileys) return;
  if (!m.message) return;
  if (!m.msg.fileSha256) return;
  if (!(Buffer.from(m.msg.fileSha256).toString('base64') in global.db.data.sticker)) return;

  const hash = global.db.data.sticker[Buffer.from(m.msg.fileSha256).toString('base64')];
  const {text, mentionedJid} = hash;
  const messages = await generateWAMessage(m.chat, {text: text, mentions: mentionedJid}, {
    userJid: this.user.id,
    quoted: m.quoted && m.quoted.fakeObj,
  });
  messages.key.fromMe = areJidsSameUser(m.sender, this.user.id);
  messages.key.id = m.key.id; 
  messages.pushName = m.pushName;
  if (m.isGroup) messages.participant = m.sender;
  const msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append',
  };
  this.ev.emit('messages.upsert', msg);
}
 
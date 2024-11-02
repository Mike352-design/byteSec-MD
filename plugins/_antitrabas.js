
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

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
  function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
} 


  let tempBanimento = async (motivo) => {
   global.db.data.chats[m.chat].users[m.sender].tempBan = true
   
   console.log('1🌙')
     const groupAdms = participants.filter(p => p.admin)
 
  let adms =[]
  const listaAdmin = groupAdms.map((v, i) =>
  adms.push(v.id))
  
   console.log('2🌙')
  console.log(adms)
// Example usage:
adms = adms.filter(adm => adm !== conn.user.jid);
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

   console.log('3🌙')

  
let teks = `─┅──┅❖𓌜❖─┅──┅
𝖀𝖘𝖚á𝖗𝖎𝖔 𝕭𝖆𝖓𝖎𝖉𝖔!
𝕬𝖘 𝖉𝖊𝖛𝖎𝖉𝖆𝖘 𝖕𝖗𝖔𝖛𝖎𝖉ê𝖓𝖈𝖎𝖆𝖘 𝖉𝖊𝖛𝖊𝖒 𝖘𝖊𝖗 𝖗𝖊𝖆𝖑𝖎𝖟𝖆𝖉𝖆𝖘 𝖒𝖆𝖓𝖚𝖆𝖑𝖒𝖊𝖓𝖙𝖊. . .

*№ Protocolo: ${generateRandomCode()}*
*Data: ${getDataAtual()}*

_*Usuário:*_
Nome: ${m.name}
Contato: @${m.sender.split`@`[0]}

*Grupo:* ${groupMetadata.subject}
⎔⎓──────────────
_*Motivo do exílio:*_
${motivo}
╰─...⎔⎓──────────────

ᴰᵉᵛᶦᵈᵒ ᵃ ᵖᵒˡᶦᵗᶦᶜᵃ ᵈᵒ ʷʰᵃᵗˢᵃᵖᵖ, ᵒˢ ᵇᵃⁿᶦᵐᵉⁿᵗᵒˢ ᵗᵉʳᵃᵒ ᵠᵘᵉ ˢᵉʳ ᵐᵃⁿᵘᵃˡᵐᵉⁿᵗᵉ. ᴼ ᵘˢᵘᵃʳᶦᵒ ᵉᵐ ᵠᵘᵉˢᵗᵃᵒ ᶠᵒᶦ ˢᶦˡᵉⁿᶜᶦᵃᵈᵒ ᵖᵃʳᵃ ᵉˣᵖᵘʳᵍᵃʳ ˢᵘᵃ ᵖʳᵉˢᵉⁿᶜᵃ ⁿᵒ ᵍʳᵘᵖᵒ ᵐᵃˢ ˢᵉʳᵃ ⁿᵉᶜᵉˢˢᵃʳᶦᵒ ᵘᵐ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳ ᵖᵃʳᵃ ʳᵉᵐᵒᵛᵉ-ˡᵒ

─┅──┅❖ ❖─┅──┅`
   
   m.reply(teks,destino)
   
 }
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  if (global.db.data.chats[m.chat].isBanned) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  
   if (chat.antiTraba && m.text.length > 4000) { //
   if (isAdmin || isOwner) return !0
   await m.reply(`*╭─┅──┅❖『𖤐』❖─┅──┅*
𝑺𝒆𝒖 𝒂𝒃𝒖𝒔𝒐 𝒅𝒆 𝒄𝒂𝒓𝒂𝒄𝒕𝒆𝒓𝒆𝒔 𝒗𝒊𝒐𝒍𝒐𝒖 𝒂𝒔 𝒄𝒐𝒏𝒅𝒖𝒕𝒂𝒔 𝒆 𝒓𝒆𝒈𝒓𝒂𝒔 𝒅𝒆𝒔𝒕𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒅𝒂𝒅𝒆!
${isBotAdmin ? '⸸ 𝑷𝒓𝒆𝒑𝒂𝒓𝒆-𝒔𝒆 𝒑𝒂𝒓𝒂 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒂 𝒔𝒆𝒗𝒆𝒓𝒂 𝒓𝒆𝒑𝒓𝒆𝒆𝒏𝒔ã𝒐 𝒅𝒐 𝒃𝒂𝒏𝒊𝒎𝒆𝒏𝒕𝒐, 𝒐𝒏𝒅𝒆 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅ã𝒐 𝒄𝒐𝒏𝒔𝒐𝒎𝒆 𝒐𝒔 𝒕𝒓𝒂𝒏𝒔𝒈𝒓𝒆𝒔𝒔𝒐𝒓𝒆𝒔 𝒂𝒖𝒅𝒂𝒄𝒊𝒐𝒔𝒐𝒔.' : '𝚂𝚒𝚗𝚝𝚘 𝚚𝚞𝚎 𝚖𝚎 𝚏𝚊𝚕𝚝𝚊 𝚍𝚒𝚛𝚎𝚒𝚝𝚘𝚜 𝚍𝚎 𝚊𝚍𝚖𝚒𝚗𝚒𝚜𝚝𝚛𝚊𝚍𝚘𝚛, 𝚗ã𝚘 𝚙𝚘𝚜𝚜𝚘 𝚏𝚊𝚣𝚎𝚛 𝚗𝚊𝚍𝚊 𝚊𝚕é𝚖 𝚍𝚎 𝚌𝚘𝚗𝚝𝚎𝚖𝚙𝚕𝚊𝚛 𝚎𝚖 𝚖𝚒𝚗𝚑𝚊 𝚜𝚘𝚕𝚒𝚍ã𝚘'}

*╰─┅──┅❖ 『⚠』 ❖─┅──┅*`)
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        
    }
    return !0
} 

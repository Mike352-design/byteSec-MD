
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
import db from '../lib/database.js' 
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, groupMetadata, participants} ) {
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
// Example usage:adms = adms.filter(adm => adm !== conn.user.jid);
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

   console.log('3🌙')

  
let teks = `─┅──┅❖𓌜❖─┅──┅
𝖀𝖘𝖚á𝖗𝖎𝖔 𝕭𝖆𝖓𝖎𝖉𝖔!

*№ Protocolo: ${generateRandomCode()}*
*Data: ${getDataAtual()}*

Nome: ${m.name}
Contato: @${m.sender.split`@`[0]}

*Grupo:* ${groupMetadata.subject}
⎔⎓──────────────
_*Motivo do exílio:*_
${motivo}
╰─...⎔⎓──────────────

─┅──┅❖ ❖─┅──┅`
   
   m.reply(teks,destino)
   
 }
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !1
if (!m.fromMe) return !1
if (m.fromMe) return
let chat = global.db.data.chats[m.chat]
if (isBotAdmin && chat.antifake) {
let texto = `${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsInt1']()} *@${m.sender.split`@`[0]}* ${lenguajeGB['smsInt2']()}`
	
if (m.sender.startsWith('6' || '6')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}
		
if (m.sender.startsWith('90' || '90')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}

if (m.sender.startsWith('92' || '92')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}
	
if (m.sender.startsWith('93' || '93')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}

if (m.sender.startsWith('94' || '94')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}

if (m.sender.startsWith('7' || '7')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')}
	
if (m.sender.startsWith('49' || '49')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
  
}
	
if (m.sender.startsWith('2' || '2')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}
	
if (m.sender.startsWith('91' || '91')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')
  
  await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}

if (m.sender.startsWith('48' || '48')) {
global.db.data.users[m.sender].block = true
await conn.reply(m.chat, texto, m)
await tempBanimento('Detectado um numero internacional, potencialmente fake ou spam!')} 
await conn.groupParticipantsUpdate(m.chat, m.sender, 'remove')
}}
export default handler

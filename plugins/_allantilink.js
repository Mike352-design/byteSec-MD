
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
import fetch from 'node-fetch'  
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 

export async function before(m, {isMods,participants, groupMetadata, conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {  
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (global.db.data.chats[m.chat].isBanned) return !1
let chat = global.db.data.chats[m.chat]
if (chat.antiLink2) return !1
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
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

*№ Protocolo: ${generateRandomCode()}*
*Data: ${getDataAtual()}*

_*Usuário:*_
Nome: ${m.name}
Contato: @${m.sender.split`@`[0]}

*Grupo:* ${groupMetadata.subject}
⎔⎓──────────────
_*Motivo do exílio:*_
${motivo}

─┅──┅❖ ❖─┅──┅`
   
   m.reply(teks,destino)


//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

return !0
 }
if (chat.antiTiktok && isAntiLinkTik) {  
if (isBotAdmin && bot.restrict) {


  if(!global.db.data.chats[m.chat].users[m.sender].advTik){
  global.db.data.chats[m.chat].users[m.sender].advTik = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTik == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)



    
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑖𝑘𝑇𝑜𝑘 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTik++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTik == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceTik']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTik = 0 
await tempBanimento('Detectado um link de tiktok!')
}
    
  } else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (isBotAdmin && bot.restrict) {
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advYt){
  global.db.data.chats[m.chat].users[m.sender].advYt = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advYt == 1) 
  {
   
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

   
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑌𝑜𝑢𝑇𝑢𝑏𝑒 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advYt++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advYt == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceYt']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advYt = 0 
await tempBanimento('Detectado um link de instagram!')
}
    
    
} else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}  
    
if (chat.antiTelegram && isAntiLinkTel) {
if (isBotAdmin && bot.restrict) {
  
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advTel){
  global.db.data.chats[m.chat].users[m.sender].advTel= 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTel == 1) 
  {
      
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑒𝑙𝑒𝑔𝑟𝑎𝑚 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTel++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTel == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceTel']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTel = 0 
await tempBanimento('Detectado um link de telegram!')
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}    
    
if (chat.antiFacebook && isAntiLinkFb) {
if (isBotAdmin && bot.restrict) {
  
  
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advFb){
  global.db.data.chats[m.chat].users[m.sender].advFb = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advFb == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


    
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝐹𝑎𝑐𝑒𝑏𝑜𝑜𝑘 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advFb++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advFb == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceFb']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advFb = 0 
await tempBanimento('Detectado um link de facebook!')
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}  
    
if (chat.antiInstagram && isAntiLinkIg) {
if (isBotAdmin && bot.restrict) {
  
  if(!global.db.data.chats[m.chat].users[m.sender].advIg){
  global.db.data.chats[m.chat].users[m.sender].advIg= 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advIg == 1) 
  {
   
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

   
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝐼𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advIg++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advIg == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceIg']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advIg = 0 
await tempBanimento('Detectado um link de instagram!')
}
    
    
    
    
} else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (isBotAdmin && bot.restrict) {
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advTw){
  global.db.data.chats[m.chat].users[m.sender].advTw = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTw == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

    
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑇𝑤𝑖𝑡𝑡𝑒𝑟 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTw++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTw == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceIg']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTw = 0 
await tempBanimento('Detectado um link de twitter!')
}
    
    
    
    
    
} else if (!isBotAdmin) {
return m.reply(`${lenguajeGB['smsAvisoFG']()} ${lenguajeGB['smsAllAdmin']()}`)
} else if (!bot.restrict) {
return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}}
return !0
}


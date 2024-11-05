
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

  let teks;

if (languageConfig === 'pt') {
    teks = `
> robot@bytesec: #/users/ cat ${generateRandomCode()}.log
> ---------------------------------------

[!] ALERTA: Usuário Banido
────────────────────────────────
> Protocolo: ${generateRandomCode()}
> Data: ${getDataAtual()}

>>> DETALHES DO USUÁRIO
────────────────────────────────
> [+] Nome: ${m.name}
> [+] Contato: @${m.sender.split`@`[0]}
> [+] Grupo: ${groupMetadata.subject}

>>> MOTIVO DO EXÍLIO
────────────────────────────────
> ${motivo}

> # Operação realizada pela ByteSec. 
> # Monitoramento constante.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    teks = `
> robot@bytesec: #/users/ cat ${generateRandomCode()}.log
> ---------------------------------------

[!] ALERT: User Banned
────────────────────────────────
> Protocol: ${generateRandomCode()}
> Date: ${getDataAtual()}

>>> USER DETAILS
────────────────────────────────
> [+] Name: ${m.name}
> [+] Contact: @${m.sender.split`@`[0]}
> [+] Group: ${groupMetadata.subject}

>>> REASON FOR EXILE
────────────────────────────────
> ${motivo}
> ‎ 
> # Operation conducted by ByteSec.
> # Under continuous surveillance.
────────────────────────────────
    `;
}
   
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


let warn;

if (languageConfig === 'pt') {
    warn = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links de TikTok neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    warn = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send TikTok links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
    
 await conn.sendMessage(m.chat, {text: warn, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTik++ 
 
 return !0
    
  }
  
  let tikDetected 
  if(languageConfig === 'en') {
    tikDetected= 'Tiktok link detected! Anti-Link protocol activated.'
  }
  else if (languageConfig === 'pt') {    
    
tikDetected= 'Link Tiktok detectado! Protocolo Anti-Link aplicado.'
  }


  if(global.db.data.chats[m.chat].users[m.sender].advTik == 2) {
    let tikTokBAN;

    if (languageConfig === 'pt') {
        tikTokBAN = `
    > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links de TikTok não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (languageConfig === 'en') {
      tikTokBAN = `
  > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] TikTok links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }
  
await conn.reply(m.chat, tikTokBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTik = 0 
await tempBanimento(tikDetected)
}
    
  } else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
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

let warnYt;

if (languageConfig === 'pt') {
    warnYt = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Youtube neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    warnYt = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send Youtube links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
    
   
 await conn.sendMessage(m.chat, {text: warnYt, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advYt++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advYt == 2) {
    let YtBAN;

    if (languageConfig === 'pt') {
        YtBAN = `
    > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Youtube não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (languageConfig === 'en') {
      YtBAN = `
  > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Youtube links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }

await conn.reply(m.chat, YtBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advYt = 0 
let ytDetected 
if(languageConfig === 'en') {
  ytDetected= 'Youtube link detected! Anti-Link protocol activated.'
}
else if (languageConfig === 'pt') {    
  
ytDetected= 'Link do Youtube detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(ytDetected)
}
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
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


let warnTg;

if (languageConfig === 'pt') {
    warnTg = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Telegram neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    warnTg = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send Telegram links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 


 await conn.sendMessage(m.chat, {text: warnTg, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTel++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTel == 2) {

    let TgBAN;

    if (languageConfig === 'pt') {
        TgBAN = `
    > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Telegram não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (languageConfig === 'en') {
      TgBAN = `
  > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Telegram links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }

await conn.reply(m.chat, TgBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTel = 0 

let tgDetected 
if(languageConfig === 'en') {
  tgDetected= 'Telegram link detected! Anti-Link protocol activated.'
}
else if (languageConfig === 'pt') {    
  
tgDetected= 'Link Telegram detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(tgDetected)
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
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

let warnFb;

if (languageConfig === 'pt') {
    warnFb = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Facebook neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    warnFb = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send Facebook links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 
    
 await conn.sendMessage(m.chat, {text: warnFb, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advFb++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advFb == 2) {
    let FbBAN;

    if (languageConfig === 'pt') {
        FbBAN = `
    > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Facebook não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (languageConfig === 'en') {
      FbBAN = `
  > robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Facebook links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }
await conn.reply(m.chat, FbBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advFb = 0 

let fbDetected 
if(languageConfig === 'en') {
  fbDetected= 'Facebook link detected! Anti-Link protocol activated.'
}
else if (languageConfig === 'pt') {    
  
fbDetected= 'Link de Facebook detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(fbDetected)
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
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


let warnIg;

if (languageConfig === 'pt') {
    warnIg = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Instagram neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    warnIg = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send Instagram links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 
   
 await conn.sendMessage(m.chat, {text:warnIg, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advIg++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advIg == 2) {

await conn.reply(m.chat, `${lenguajeGB['smsEnlaceIg']()}`, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advIg = 0 

let igDetected 
if(languageConfig === 'en') {
  igDetected= 'Instagram link detected! Anti-Link protocol activated.'
}
else if (languageConfig === 'pt') {    
  
igDetected= 'Link de Instagram detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(igDetected)
}
    
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
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
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}
return !0
}


let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text, participants }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)

let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)



if (chat.antiLink && isGroupLink && !isAdmin) {

if (isBotAdmin=='admin') {
const linkThisGroup = `https://chat.whatsapp`
    

if (m.text.includes(linkThisGroup)) {
  
  if(!global.db.data.chats[m.chat].users[m.sender].advZap){
  global.db.data.chats[m.chat].users[m.sender].advZap = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advZap == 1) 
  {
      
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐀𝐓𝐄𝐍𝐂̧𝐀̃𝐎*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑁𝑎̃𝑜 𝑚𝑎𝑛𝑑𝑒 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜, 𝑒́ 𝑖𝑛𝑒𝑥𝑜𝑟𝑎𝑣𝑒𝑙𝑚𝑒𝑛𝑡𝑒 𝑝𝑟𝑜𝑖𝑏𝑖𝑑𝑜 𝑝𝑒𝑙𝑎𝑠 𝑟𝑒𝑔𝑟𝑎𝑠 𝑑𝑒𝑓𝑖𝑛𝑖𝑑𝑎𝑠.
> 𝑂𝑢𝑠𝑒 𝑑𝑒𝑠𝑎𝑓𝑖𝑎𝑟 𝑚𝑖𝑛ℎ𝑎 𝑜𝑟𝑑𝑒𝑚 𝑛𝑜𝑣𝑎𝑚𝑒𝑛𝑡𝑒 𝑒 𝑠𝑜𝑓𝑟𝑒𝑟𝑎́ 𝑐𝑜𝑛𝑠𝑒𝑞𝑢𝑒̂𝑛𝑐𝑖𝑎𝑠 𝑖𝑚𝑒𝑑𝑖𝑎𝑡𝑎𝑠.
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advZap++ 
 
 return !0
    
  }
  
  else if(global.db.data.chats[m.chat].users[m.sender].advZap==2) {
    
 await conn.sendMessage(m.chat, {text: `╭━━[ *𝓔𝓭𝓰𝓪𝓻 v${vs} 𓄿* ]━━⬣
┃ *𝐕𝐨𝐜𝐞̂ 𝐬𝐞𝐫𝐚́ 𝐫𝐞𝐦𝐨𝐯𝐢𝐝𝐨.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
> 𝑇𝑒 𝑎𝑑𝑣𝑒𝑟𝑡𝑖 𝑝𝑟𝑒𝑣𝑖𝑎𝑚𝑒𝑛𝑡𝑒 𝑝𝑎𝑟𝑎 𝑛𝑎̃𝑜 𝑝𝑟𝑜𝑙𝑖𝑓𝑒𝑟𝑎𝑟 𝑙𝑖𝑛𝑘𝑠 𝑑𝑒 𝑊ℎ𝑎𝑡𝑠𝐴𝑝𝑝 𝑛𝑒𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜. 𝐷𝑒𝑐𝑖𝑑𝑖𝑠𝑡𝑒 𝑖𝑔𝑛𝑜𝑟𝑎𝑟 𝑚𝑒𝑢 𝑎𝑣𝑖𝑠𝑜 𝑒 𝑎𝑔𝑜𝑟𝑎 𝑠𝑒𝑟𝑎́ 𝑒𝑥𝑝𝑢𝑟𝑔𝑎𝑑𝑜 𝑑𝑎𝑞𝑢𝑖. 
> 𝐴𝑑𝑒𝑢𝑠, ${global.db.data.users[m.sender].name}
╰━━━[⚠︎]━━⬣`, mentions: [m.sender]}, {quoted: m})
 
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)
  
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advZap = 1

return !0
  }
  
  
  
  
}
}    
//await conn.sendButton(m.chat, `${lenguajeGB['smsEnlaceWatt']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${lenguajeGB['smsAvisoFG']()}${lenguajeGB['smsAllAdmin']()}`}`, wm, [`${lenguajeGB['smsApagar']()}`, '/disable antilink'], m)    
if (!isBotAdmin) {return conn.sendMessage(m.chat, {text: `*⛔
${lenguajeGB.smsAddB4()} ⛔*\n${listAdmin}\n\n${lenguajeGB['smsAllAdmin']()}`,
mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})}

else if (!bot.restrict) return m.reply(`${lenguajeGB['smsAvisoAG']()}${lenguajeGB['smsSoloOwner']()}`)
}
return !0
}
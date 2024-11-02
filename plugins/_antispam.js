

 const userSpamData = {}
let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin,participants, isROwner, isPrems}) {
const chat = global.db.data.chats[m.chat]
if (!m.isGroup) return
if (chat.modoadmin) return  
if (!chat.antiSpam) return
if (global.isOwner || isROwner || isAdmin) return
  
let user = global.db.data.chats[m.chat].users[m.sender]
const sender = m.sender
const currentTime = new Date().getTime()
const timeWindow = 5000 // tiempo límite 
const messageLimit = 10

let time, time2, time3, mensaje, motive
time = 30000 // 30 seg
time2 = 60000 // 1 min
time3 = 120000 // 2 min

if(!user.lastMessageTime) user.lastMessageTime = currentTime


const timeDifference = currentTime - user.lastMessageTime


const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)

	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        messageCount: 0,
        adv:0,
        lastMessageTime:'',
        silenced: false
  }
}




if (user.messageCount>8 && timeDifference <= timeWindow) {
  console.log('SPAM DETECTADO, MUTAR AGORA')
  
  
  global.db.data.chats[m.chat].users[m.sender].silenced = true
user.messageCount += 1

  if (!user.silenced && user.messageCount >= messageLimit) {
    console.log('SPAM DETECTADO!!!!')
const mention = `@${sender.split("@")[0]}`

if(!global.db.data.chats[m.chat].users[m.sender].adv){ 
     global.db.data.chats[m.chat].users[m.sender].adv = 0
   }
if(global.db.data.chats[m.chat].users[m.sender].adv>=3){
  
  
await conn.reply(m.chat,`${lenguajeGB['smsAdveu7']()}\n*@${m.sender.split(`@`)[0]}* ${lenguajeGB['smsAdveu8']()}`, m, { mentions: [m.sender] })

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove') //@${who.split`@`[0]}
global.db.data.chats[m.chat].users[m.sender].adv =0
  return !0
  
}

   


const warningMessage = `༒︎ *${mention} 𝐒𝐏𝐀𝐌 É 𝐏𝐑𝐎𝐈𝐁𝐈𝐃𝐎!! ༒︎*

𝙿𝚘𝚛 𝚙𝚎𝚛𝚝𝚞𝚛𝚋𝚊𝚛 𝚊 𝚘𝚛𝚍𝚎𝚖 𝚎𝚌𝚘𝚊𝚗𝚍𝚘 𝚟á𝚛𝚒𝚊𝚜 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚗𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘.. 𝚜𝚎𝚛á 𝚜𝚒𝚕𝚎𝚗𝚌𝚒𝚊𝚍𝚘 𝚙𝚘𝚛 𝟹𝟶 𝚖𝚒𝚗𝚞𝚝𝚘𝚜

『⚠』 ${global.db.data.chats[m.chat].users[m.sender].adv +1}/3
  ${global.db.data.chats[m.chat].users[m.sender].adv==1 ? "_Este é meu ultimo aviso, senao será expurgado para além destas terras sombrias 💀🕯️_" : "" }
─┅──┅❖ ❖─┅──┅
`

await conn.reply(m.chat, warningMessage, m, { mentions: [m.sender] })  

 setTimeout( async () => {
   global.db.data.chats[m.chat].users[m.sender].adv += 1
   
  global.db.data.chats[m.chat].users[m.sender].silenced = false;
   let desmutemsg = `─┅──┅❖ ❖─┅──┅
༒︎ *${mention} 𝗗𝗘𝗦𝗠𝗨𝗧𝗔𝗗𝗢 !

⸸ 𝑻𝒆𝒖 𝒍𝒖𝒈𝒖𝒃𝒓𝒆 𝒏𝒐𝒎𝒆 𝒆𝒄𝒐𝒂𝒓𝒂 𝒏𝒐𝒔 𝒓𝒆𝒄𝒊𝒏𝒕𝒐𝒔 𝒄𝒐𝒎𝒐 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂𝑨𝒕𝒆𝒏𝒕𝒆-𝒔𝒆 𝒂 𝒎𝒊𝒏𝒉𝒂𝒔 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔, 𝒂 𝒕𝒆𝒏𝒂𝒛 𝒇𝒖𝒈𝒂 𝒅𝒆 𝒔𝒆𝒓 𝒆𝒙𝒊𝒍𝒂𝒅𝒐.

『⚠』 ${global.db.data.chats[m.chat].users[m.sender].adv}/3
  ${global.db.data.chats[m.chat].users[m.sender].adv==2 ? "_Este é meu ultimo aviso, senao será expurgado para além destas terras sombrias 💀🕯️_" : "" }
  ─┅──┅❖ ❖─┅──┅
  `
  
  
  
  await conn.reply(m.chat, desmutemsg, m, { mentions: [m.sender] })  
},1800000);





// reset 
//userData.messageCount = 1
                
  
  
}

  
} 
// dim



else {
if (timeDifference >= 2000) {
  console.log('comecandklo spam')
user.messageCount = 1
console.log('spammmmmnn')
console.log(timeDifference <= timeWindow)
}
  else {
    user.messageCount += 1
  }
}
user.lastMessageTime = currentTime

  
  
}

export default handler



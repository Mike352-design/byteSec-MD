
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import schedule from 'node-schedule'

let handler = async (m, { conn,isAdmin,isOwner, command, text,participants }) => {
	function checkTimeleft(){let currentTime = new Date();
  let timeRemaining = new Date(global.db.data.users[m.sender].regPrazo - currentTime);

  // Calculate days, hours, and minutes remaining
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = timeRemaining.getUTCHours() + (days * 24);
  let minutes = timeRemaining.getUTCMinutes();

  // Convert hours and minutes to string format with leading zeros if necessary
  let formattedHours = String(hours).padStart(2, '0');
  let formattedMinutes = String(minutes).padStart(2, '0');

  let timeLeft = `${formattedHours}:${formattedMinutes}`;

  console.log(`Time left: ${timeLeft}`);
  return timeLeft;}
	
  if(isOwner){
  console.log("dono mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:600000,
        role:'༒︎ 𝕹𝖊𝖛𝖊𝖗𝖒𝖔𝖗𝖊 ﮩ٨ـﮩ\n𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 𝔠𝔬𝔯𝔳𝔬𝔰 ♱',
        money:600000,
        level:666,
        adm: isAdmin,
        legendary: true,
        coadmin:false,
        maxlevel: true,
        slots: 666,
        tentativasRoubo: 666,
        usuariosRoubados: [],
  }
  
  
}

  global.db.data.chats[m.chat].users[m.sender].name=`𝔥𝔢𝔫𝔯𝔶 𝔞𝔯𝔠𝔞𝔫𝔤𝔢𝔩𝔬 ⸸`
  global.db.data.chats[m.chat].users[m.sender].age=`𝔇𝔢𝔰𝔠𝔬𝔫𝔥𝔢𝔠𝔦𝔡𝔬`
  
  global.db.data.chats[m.chat].users[m.sender].morada=`ℜ𝔦𝔬 𝔱𝔦𝔫𝔱𝔬, 𝔓𝔬𝔯𝔱𝔬   𝔓𝔬𝔯𝔱𝔲𝔤𝔞𝔩`
  global.db.data.chats[m.chat].users[m.sender]. profissao=`_*𝔇𝔢𝔰𝔢𝔫𝔳𝔬𝔩𝔳𝔢𝔡𝔬𝔯 𝔣𝔲𝔩𝔩𝔰𝔱𝔞𝔠𝔨*_ 𖤍`
  global.db.data.chats[m.chat].users[m.sender].instagram=`https://instagram.con/henryy.xn`
  global.db.data.chats[m.chat].users[m.sender].website=`https://arcangelo.net`
  global.db.data.chats[m.chat].users[m.sender].links=`https://github.com/ARCANGEL0`
  global.db.data.chats[m.chat].users[m.sender].biografia=`ִ ࣪𖤐`
  global.db.data.chats[m.chat].users[m.sender].hobbies=`𝔏𝔢𝔯, 𝔬𝔲𝔳𝔦𝔯 𝔪𝔲𝔰𝔦𝔠𝔞, 𝔡𝔢𝔰𝔢𝔫𝔥𝔞𝔯 𝔢 𝔢𝔰𝔠𝔯𝔢𝔳𝔢𝔯. 
  ℜ𝔢𝔰𝔬𝔩𝔳𝔢𝔯 𝔢𝔫𝔦𝔤𝔪𝔞𝔰, 𝔭𝔲𝔷𝔷𝔩𝔢𝔰 𝔢 𝔡𝔢𝔰𝔞𝔣𝔦𝔬𝔰`
  global.db.data.chats[m.chat].users[m.sender].relacionamento=`ℭ𝔞𝔰𝔞𝔡𝔬 𝔠𝔬𝔪 𝔞 𝔪𝔬𝔯𝔱𝔢 ༒︎`
global.db.data.chats[m.chat].users[m.sender].limit=6666
  global.db.data.chats[m.chat].users[m.sender].money=66666
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=true
  global.db.data.chats[m.chat].users[m.sender].coadmin=false
  global.db.data.chats[m.chat].users[m.sender].slots=666
  global.db.data.chats[m.chat].users[m.sender].tentativasRoubo=666
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados = []
  
  global.db.data.chats[m.chat].users[m.sender].role=`𝑵𝒆𝒗𝒆𝒓𝒎𝒐𝒓𝒆 ༒︎\n𝙼𝚎𝚜𝚝𝚛𝚎 𝚍𝚘𝚜 𝚌𝚘𝚛𝚟𝚘𝚜`
    
    
    
  }
  
  if(m.sender==global.cocriador ||(m.sender==global.cocriador))
  {
  console.log("laura mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[global.cocriador]){
  global.db.data.chats[m.chat].users[global.cocriador]={
    exp: 0,
        limit:99999999,
        role:'༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐',
        money:99999999,
        level:666,
        adm: isAdmin,
        legendary: false,
        cocriadora:true,
        maxlevel: true,
        slots: 999,
  }
  
  
}
global.db.data.chats[m.chat].users[global.cocriador].limit=5000
  global.db.data.chats[m.chat].users[global.cocriador].money=5000
  global.db.data.chats[m.chat].users[global.cocriador].level = 666
  global.db.data.chats[m.chat].users[global.cocriador].legendary=false
  global.db.data.chats[m.chat].users[global.cocriador].cocriadora=true
  global.db.data.chats[m.chat].users[global.cocriador].role= '༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐'
  
    
    
    
  }
  let username = conn.getName(m.sender)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  console.log(admins)
  console.log(m.sender)
  console.log("e admin   " +admins.includes(m.sender))
  let admcheck = admins.includes(m.sender)
  
  
   //user admins? 
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
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:3,

  }
}
if(global.db.data.chats[m.chat].users[m.sender].money< 0){
  global.db.data.chats[m.chat].users[m.sender].money=0
}
if (global.db.data.users[m.sender]?.registradoBlock) {
  let left1 = checkTimeleft();

  if (isNaN(left1)) {
    global.db.data.chats[m.chat].users[m.sender].regTimeStart = '';
    global.db.data.chats[m.chat].users[m.sender].regPrazo = '';
    global.db.data.chats[m.chat].users[m.sender].regMsg = '';
    global.db.data.chats[m.chat].users[m.sender].registradoBlock = false;
  } else {
    return conn.reply(m.chat,
      `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
𝑽𝒐𝒄𝒆 𝒋𝒂 𝒓𝒆𝒂𝒍𝒊𝒛𝒐𝒖 𝒖𝒎 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐! 𓅊

𝒂𝒈𝒖𝒂𝒓𝒅𝒆 ${left1} 𝒉𝒐𝒓𝒂𝒔
━━━━━━━━━⬣ ✮ ⬣━━━━━━━━`
      , m);
  }
}
  
if(!global.db.data.users[m.sender]. registradoBlock) {
  global.db.data.users[m.sender].registradoBlock = true
  
  let timeSt = new Date();
  
  let timeNF = new Date(timeSt.getTime() + 48 * 3600 * 1000);
// let timeNF = new Date(timeSt.getTime() + 30 * 1000);
  let momentDate = moment(timeNF)
let tims =  momentDate.format('HH:mm')
  const [hours, minutes] = tims.split(':').map(Number);
  
  global.db.data.users[m.sender].regTimeStart = timeSt
  global.db.data.users[m.sender].regPrazo = timeNF
  
  const scheduledTime2 = new Date();
  scheduledTime2.setHours(hours, minutes, 0, 0);
  
  
  const job2 = schedule.scheduleJob(scheduledTime2, async () => {
       global.db.data.users[m.sender].registradoBlock = false
   global.db.data.users[m.sender].regTimeStart = ''
  global.db.data.users[m.sender].regPrazo = ''

  }); 
  
  
}



let mentionedJid = [m.sender]

  let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* 
*┃*   *Qual o seu nome?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 0
  
}
handler.help = ['textoPe *<nome>*']
handler.tags = ['fun']
handler.command = ['registrar']
handler.level=1
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
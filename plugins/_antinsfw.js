
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


import uploadImage from '../lib/uploadImage.js'
import { join } from 'path'
import sharp from 'sharp'
let handler = m => m
handler.before = async function (m,{isCriadora,isAdmin,groupMetadata ,participants,__dirname , conn}) {
  /*
  
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

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}

let user = global.db.data.chats[m.chat].users[m.sender]

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
        nsfwAdv:0,
        adv:0,
  }
}


   let q =  m; 
    let mime = m.msg.mimetype || ''
    if(/sticker/.test(m.mediaType)){
      console.log("👀")
   
    if (!(isAdmin || isOwner) && !global.db.data.chats[m.chat].nsfw){
      
 
        try {
            let media3 = await q.download();
            let pngBuffer = await sharp(media3).png().toBuffer();
          
            console.log('Sticker converted and saved as PNG');
            
            let linkST = await uploadImage(pngBuffer)
             console.log("👀")
             console.log(linkST)
             console.log("👀")
 console.log("🌙")
  let checkSt = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${linkST}`)
  let resSt= await checkSt.json()
  console.log(resSt)
  
const nsfwSt = resSt.data.find(e => e.label === 'nsfw');
  
const resultSt = nsfwSt && nsfwSt.score > 0.6;
console.log(`NSFW?: ${resultSt}`)
if(resultSt){
  
 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1


 let textt=`╭━━━━『ÄÐvêr†êñ¢ïå』━━━━⬣
          *@${m.sender.split(`@`)[0]}*
     
⚠️🔞 𝑬𝒔𝒕𝒆 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒄𝒐𝒏𝒕𝒆𝒖𝒅𝒐 𝒆 𝒑𝒓𝒐𝒇𝒂𝒏𝒐 𝒆 𝒏𝒂𝒐 𝒔𝒆𝒓𝒂 𝒕𝒐𝒍𝒆𝒓𝒂𝒅𝒐 𝒏𝒆𝒔𝒕𝒆 𝒅𝒐𝒎𝒊𝒏𝒊𝒐!

𝑺𝒆𝒓𝒂𝒔 𝒎𝒂𝒓𝒄𝒂𝒅𝒐 𝒄𝒐𝒎 𝒖𝒎𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒄𝒐𝒎𝒐 𝒑𝒖𝒏𝒊𝒄𝒂𝒐
*${global.db.data.chats[m.chat].users[m.sender].nsfwAdv}/3*

╰━━━━━━━━━━━━━━━━━━⬣`
await conn.sendMessage(m.chat, { text: textt, mentions:[m.sender] });
 
let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)

}
     
}
            
         catch (error) {
            console.error('Error converting sticker to PNG:', error);
        }
    }
}
    else if (/image/g.test(mime)){
         if (!(isAdmin || isOwner) && !global.db.data.chats[m.chat].nsfw){
       let media = await q.download()
let link = await uploadImage(media)
  console.log("🌙")
  let check = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${link}`)
  let res= await check.json()
  console.log(res)
  
const nsfw = res.data.find(e => e.label === 'nsfw');
  
const result = nsfw && nsfw.score > 0.6;
console.log(`NSFW?: ${result}`)


if(result){
 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1
 let textt=`╭━━━━『ÄÐvêr†êñ¢ïå』━━━━⬣
          *@${m.sender.split(`@`)[0]}*
     
⚠️🔞 𝑬𝒔𝒕𝒆 𝒕𝒊𝒑𝒐 𝒅𝒆 𝒄𝒐𝒏𝒕𝒆𝒖𝒅𝒐 𝒆 𝒑𝒓𝒐𝒇𝒂𝒏𝒐 𝒆 𝒏𝒂𝒐 𝒔𝒆𝒓𝒂 𝒕𝒐𝒍𝒆𝒓𝒂𝒅𝒐 𝒏𝒆𝒔𝒕𝒆 𝒅𝒐𝒎𝒊𝒏𝒊𝒐!

𝑺𝒆𝒓𝒂𝒔 𝒎𝒂𝒓𝒄𝒂𝒅𝒐 𝒄𝒐𝒎 𝒖𝒎𝒂 𝒂𝒅𝒗𝒆𝒓𝒕𝒆𝒏𝒄𝒊𝒂 𝒄𝒐𝒎𝒐 𝒑𝒖𝒏𝒊𝒄𝒂𝒐
*${global.db.data.chats[m.chat].users[m.sender].nsfwAdv}/3*

╰━━━━━━━━━━━━━━━━━━⬣`
await conn.sendMessage(m.chat, { text: textt, mentions:[m.sender] });
 
let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)

}
     }
   




}


  */
}

export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
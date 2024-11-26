
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────




//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞  𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

import { canLevelUp, xpRange } from '../lib/levelling.js'

import fs from 'fs'
import ytdl from 'ytdl-core';
import { PdfReader } from "pdfreader";
 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import pdf from 'pdf-parse'
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
  import { registerFont, createCanvas, loadImage } from 'canvas'
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

import { levelup } from '../lib/canvas.js'
export function before(m, { conn , isOwner, nivel, participants}) {

  const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

  let userLevel = global.db.data.chats[m.chat].users[m.sender].level
  async function drawRank(isNewRank,coins,bugs, funcoes,nivel, texto,rank){
    const profileImagePath = await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    console.log('ok 1')
    // Registrar a fonte
    registerFont('fonts/AngelWishRegular-1G9wM.ttf', { family: 'AngelWishRegular-1G9wM' });
    registerFont('fonts/MedusaGothic-VAEV.ttf', { family: 'MedusaGothic-VAEV' });
    registerFont('fonts/DutchbrigadeRegular-8M7VJ.otf', { family: 'DutchbrigadeRegular-8M7VJ' });
    registerFont('fonts/WoodgodRegular-3zpjG.ttf', { family: 'WoodgodRegular-3zpjG' });
    
    const canvas = createCanvas(1024, 1024);
    const ctx = canvas.getContext('2d');
    let pathss = join(global.dirname, '../media/overlays/rank.png');
    
       let outt = getRandom('.png'); 
        
        let outp = join(global.dirname, '../tmp/' + outt);
        console.log('ok 2')

    // Carregar a imagem de fundo
    loadImage(pathss).then( async (image) => {
        ctx.drawImage(image, 0, 0, 1024, 1024);
        
        
        const profileImage = await loadImage(profileImagePath);
        const profileSize = 140;
        const profileX = 100;
        const profileY = 564.6;
    
        ctx.save();
        ctx.beginPath();
        ctx.arc(profileX + profileSize / 2, profileY + profileSize / 2, profileSize / 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
    
        ctx.drawImage(profileImage, profileX, profileY, profileSize, profileSize);
        ctx.restore();
        
        
    let title = isNewRank ? 'Novo rank obtido ⸸' : 'Você subiu de nível ✞︎'
    console.log('ok 3')

    let heightNumb = isNewRank ? 585 : 615
    let sizeNumb = isNewRank ? 40 : 56
        // Texto "VOCÊ SUBIU DE NÍVEL!!"
        ctx.font = '56px "AngelWishRegular-1G9wM"';
        ctx.fillStyle = '#eeeeee';
        ctx.textAlign = 'center';
        ctx.fillText(title, 512, 505);
    
        // Níveis anteriores e atuais
        ctx.font = `${sizeNumb}px "AngelWishRegular-1G9wM"`
        ctx.fillText(`${nivel-1} -> `, 471, heightNumb); // Nível anterior
        ctx.font = `${sizeNumb+14}px "AngelWishRegular-1G9wM"`
       ctx.fillStyle = '#f78888';
           ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 8;
        ctx.fillText(nivel, 536, heightNumb+3); // Nível atual
    
     if(isNewRank){
        ctx.font = '40px "DutchbrigadeRegular-8M7VJ"';
        ctx.fillText(rank, 520, 650); // Nível anterior
    }
    
    
    
    
    
        // Preenchimento da barra
        ctx.fillStyle = '#f78888';
           ctx.shadowColor = '#f78888';
    ctx.shadowBlur = 12;
        let progress = (nivel / 100) * 380; // Progresso baseado no nível atual
        ctx.fillRect(362, 701, progress, 30);
        
        console.log('ok4')

        // Barra de progresso gótica
        ctx.strokeStyle = '#f78888';
        ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 12;
        ctx.lineWidth = 4;
        ctx.strokeRect(362, 701, 370, 30);
        
    
    
        // Texto "VOCÊ RECEBEU"
        ctx.font = '36px "AngelWishRegular-1G9wM"';
        ctx.fillStyle = '#eeeeee';
        ctx.textAlign = 'left';
        ctx.fillText('Você receberá:', 835, 580);
    
    
        ctx.font = '24px "DutchbrigadeRegular-8M7VJ"';
        ctx.fillText(`+${coins} ʙʏᴛᴇᴄᴏɪɴꜱ`, 815, 635);
        
        if(funcoes.length>0){
          
          ctx.font = '24px "DutchbrigadeRegular-8M7VJ"';
        ctx.fillText(`+${bugs} ᴇᴛʜᴇʀᴇᴜᴍ`, 815, 675);
        }
    
    
    if(funcoes.length>0){
        // Texto "FUNÇÕES DESBLOQUEADAS"
        ctx.font = '42.4px "AngelWishRegular-1G9wM"';
        ctx.textAlign = 'center';
        ctx.fillText('Funções desbloqueadas ', 522, 838);
    /*
        // Funções desbloqueadas
        ctx.fillStyle = '#f78888';
        ctx.font = '25px "MedusaGothic-VAEV"';
        let functionsText = funcoes.join('    ');
        
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 12;
        ctx.fillText(functionsText, 512, 930);
        */
        //????
        ctx.fillStyle = '#f78888';
    let fontSize = 38;
    console.log('ok 5')

    
    const maxWidth = 1024 - 40;
    const maxHeight = 1024 - 40;
    const lineHeight = fontSize;
    console.log('funcoes   :   ' +funcoes)
    let lines = [];
    let currentLine = '';
    let startY = 924;
    
    for (let word of funcoes) {
      console.log(word)
        let testLine = currentLine ? currentLine + '  ' + word : word;
        let metrics = ctx.measureText(testLine);
        let testWidth = metrics.width;
    
        if (testWidth > 800) {
          
            lines.push(currentLine);
            console.log('Linhaaa:'+ currentLine)
            currentLine = word;
            fontSize -= 8;
            startY += 26.5;
            
        } else {
            currentLine = testLine;
        }
    }
    console.log('ok 6')

    if (currentLine) {
        lines.push(currentLine);
    }
    
    let textHeight = lines.length * lineHeight;
    
    ctx.shadowColor = '#ff0000';
    ctx.shadowBlur = 12;
    
    let startX = 520;
    ctx.font = `${fontSize}px "WoodgodRegular-3zpjG"`;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], startX, startY - (i * lineHeight));
    }
    
    
    
    
    console.log('ok 7')

    }
    else {   ctx.textAlign = 'center';
    ctx.font = '34px "DutchbrigadeRegular-8M7VJ"';
        ctx.fillText('✞︎', 522, 830);
        ctx.font = '54px "DutchbrigadeRegular-8M7VJ"';
        ctx.fillText('Suba mais níveis para desbloquear funções', 522, 910);
      
    }
    console.log('ok 8')

        // Salvar a imagem
        const out = fs.createWriteStream(outp);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => conn.sendFile(m.chat, outp,'rank.png',texto,m))
        console.log(outp)

        console.log('okkkkk')

        
    })
    }





    function getPluginsByLevel(plugins, userLevel) {
      const result = [];
    
      for (const [pluginName, pluginAttributes] of Object.entries(plugins)) {
        if (pluginAttributes.level === userLevel) {
          result.push(pluginAttributes.command);
        }
      }
      console.log('ok plgss')

      return result;
    }
     global.pluginsAtUserLevel = getPluginsByLevel(global.plugins, userLevel);




//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = who.split("@")[0]









	 const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(who)
   
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={exp: 0,
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
  let levels = 
[
'𝐈𝐧𝐢𝐜𝐢𝐚𝐧𝐭𝐞 𝐝𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬',
'𝐃𝐢𝐬𝐜𝐢𝐩𝐮𝐥𝐨 𝐝𝐨 𝐂𝐨𝐫𝐯𝐨',
'𝐀𝐩𝐫𝐞𝐧𝐝𝐢𝐳 𝐝𝐨 𝐏𝐥𝐮𝐭𝐨',
'𝐃𝐞𝐯𝐨𝐭𝐨 𝐝𝐨 𝐃𝐞𝐬𝐞𝐬𝐩𝐞𝐫𝐨',
'𝐌𝐞𝐬𝐭𝐫𝐞 𝐒𝐨𝐦𝐛𝐫𝐢𝐨',
'𝐃𝐢𝐬𝐜𝐢𝐩𝐮𝐥𝐨 𝐝𝐨 𝐂𝐫𝐞𝐩ú𝐬𝐜𝐮𝐥𝐨',
'𝐄𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐢𝐬𝐭𝐚 𝐝𝐨 𝐃𝐞𝐬𝐚𝐥𝐞𝐧𝐭𝐨',
'𝐂𝐨𝐧𝐡𝐞𝐜𝐞𝐝𝐨𝐫 𝐝𝐨 𝐇𝐨𝐫𝐫𝐨𝐫',
'𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐞 𝐝𝐨 𝐌𝐞𝐝𝐨',
'𝐄𝐫𝐞𝐦𝐢𝐭𝐚 𝐝𝐚 𝐄𝐬𝐜𝐮𝐫𝐢𝐝ã𝐨',
'𝐀𝐥𝐪𝐮𝐢𝐦𝐢𝐬𝐭𝐚 ',
'𝐕𝐢𝐝𝐞𝐧𝐭𝐞 𝐝𝐨 𝐃𝐞𝐬𝐞𝐬𝐩𝐞𝐫𝐨',
'𝐏𝐨𝐫𝐭𝐚𝐝𝐨𝐫 𝐝𝐚 𝐀𝐧𝐠ú𝐬𝐭𝐢𝐚',
'𝐀𝐫𝐪𝐮𝐢𝐭𝐞𝐭𝐨 𝐝𝐨 𝐏𝐞𝐬𝐚𝐝𝐞𝐥𝐨',
'𝐒𝐨𝐦𝐛𝐫𝐚𝐬 𝐀𝐥é𝐦 𝐝𝐚 𝐌𝐨𝐫𝐭𝐞',
'𝐌𝐞𝐬𝐭𝐫𝐞 𝐝𝐨𝐬 𝐂𝐨𝐫𝐯𝐨𝐬',
'𝐏𝐥𝐮𝐭𝐨𝐧',
'𝐒𝐢𝐧𝐟𝐨𝐧𝐢𝐚 𝐒𝐨𝐦𝐛𝐫𝐢𝐚',
'𝐒𝐮𝐬𝐬𝐮𝐫𝐫𝐨𝐬 𝐝𝐨 𝐃𝐞𝐬𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐝𝐨',
'𝐀𝐯𝐚𝐭𝐚𝐫 𝐝𝐨 𝐓𝐨𝐫𝐦𝐞𝐧𝐭𝐨',
'𝑶 𝒄𝒐𝒓𝒗𝒐 𝒏𝒆𝒈𝒓𝒐'
]


	
let user = global.db.data.chats[m.chat].users[m.sender]
let chat = global.db.data.chats[m.chat]

let isMaxLevel = global.db.data.chats[m.chat].users[m.sender].maxlevel


if (!chat.autolevelup){
return !0
}
if (global.db.data.chats[m.chat].isBanned)
return !1
if(isOwner){
  return !0
}
if(m.sender==global.cocriador){
  return !0
}

let randomxp = Math.floor(Math.random() * 30) + 1;
global.db.data.chats[m.chat].users[m.sender].exp += randomxp
	
let before = user.level * 1

let userxp = global.db.data.chats[m.chat].users[m.sender].exp



if(userxp>1000 && userxp<2000 ){
  if(user.level > 1){ //user level higher than one?
    user.level=1 //set level 1
    user.role = levels[0]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
  else if(user.level==1){
    return
  }
  else if(user.level<1){
    user.level = 1
user.role = levels[0]
  user.money += 30


  drawRank(false,30,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)

		  	 
  }

} // 1
if(userxp>2000 && userxp<4000 ){
  if(user.level > 2){ //user level higher than one?
    user.level=2 //set level 1
    user.role = levels[0]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==2){
  return
}
else if(user.level<2){
  user.level = 2
user.role = levels[0]
  user.money += 30

  drawRank(false,30,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	 
}
} // 2
if(userxp>4000 && userxp<8000 ){
  if(user.level > 3){ //user level higher than one?
    user.level=3 //set level 1
    user.role = levels[0]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==3){
  return
}
else if(user.level<3){
  user.level = 3
user.role = levels[0]
  user.money += 30

  drawRank(false,30,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	 
}
} // 3
if(userxp>8000 && userxp<14000 ){
  if(user.level > 4){ //user level higher than one?
    user.level=4 //set level 1
    user.role = levels[0]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==4){
  return
}
else if(user.level<4){
  user.level = 4
user.role = levels[0]
  user.money += 30

  drawRank(false,30,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	 
}
} //4
if(userxp>14000 && userxp<20000 ){
  if(user.level > 5){ //user level higher than one?
    user.level=5 //set level 1
    user.role = levels[0]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==5){
  return
}
else if(user.level<5){
  user.level = 5
user.role = levels[1]
  user.money += 60
  user.limit += 1

  drawRank(true,60,1,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)

}
} //5
if(userxp>20000 && userxp<26500 ){
  if(user.level > 6){ //user level higher than one?
    user.level=6 //set level 1
    user.role = levels[1]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==6){
  return
}
else if(user.level<6){
  user.level = 6
user.role = levels[1]
  user.money += 60

 
  drawRank(false,60,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  	 
}
} //6
if(userxp>26500 && userxp<33500 ){
  if(user.level > 7){ //user level higher than one?
    user.level=7 //set level 1
    user.role = levels[1]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==7){
  return
}
else if(user.level<7){
  user.level = 7
user.role = levels[1]
  user.money += 60
  

  drawRank(false,60,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)			  	 
}
} //7
if(userxp>33500 && userxp<41000 ){
  if(user.level >8){ //user level higher than one?
    user.level=8 //set level 1
    user.role = levels[1]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==8){
  return
}
else if(user.level<8){
  user.level = 8
user.role = levels[1]
  user.money += 60
 
  drawRank(false,60,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  		  	 
}
} //8
if(userxp>41000 && userxp<49000 ){
  if(user.level > 9){ //user level higher than one?
    user.level=9//set level 1
    user.role = levels[1]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==9){
  return
}
else if(user.level<9){
  user.level = 9
user.role = levels[1]
  user.money += 60

  drawRank(false,60,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  		  	 
}
} //9
if(userxp>49000 && userxp<49850 ){
  if(user.level > 10){ //user level higher than one?
    user.level=10 //set level 1
    user.role = levels[2]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==10){
  return
}
else if(user.level<10){
  user.level = 10
user.role = levels[2]
  user.money += 85
  user.limit += 1
  drawRank(true,85,1,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)	
}
} //10
if(userxp>49850 && userxp<50750 ){
  if(user.level > 11){ //user level higher than one?
    user.level=11 //set level 1
    user.role = levels[2]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==11){
  return
}
else if(user.level<11){
  user.level = 11
user.role = levels[2]
  user.money += 85
  
  drawRank(false,85,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  	 
}
} //11
if(userxp>50750 && userxp<51750 ){
  if(user.level > 12){ //user level higher than one?
    user.level=12 //set level 1
    user.role = levels[2]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==12){
  return
}
else if(user.level<12){
  user.level = 12
user.role = levels[2]
  user.money += 85

  drawRank(false,85,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  		  	 
}
} //12
if(userxp>51750 && userxp<52850 ){
  if(user.level > 13){ //user level higher than one?
    user.level=13 //set level 1
    user.role = levels[2]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==13){
  return
}
else if(user.level<13){
  user.level = 13
user.role = levels[2]
  user.money += 85

  drawRank(false,85,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  	  	 
}
} //13
if(userxp>52850 && userxp<54050 ){
  if(user.level > 14){ //user level higher than one?
    user.level=14 //set level 1
    user.role = levels[2]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==14){
  return
}
else if(user.level<14){
  user.level = 14
user.role = levels[2]
  user.money += 85

  drawRank(false,85,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	    	 
}
} //14
if(userxp>54050 && userxp<55350 ){
  if(user.level > 15){ //user level higher than one?
    user.level=15 //set level 1
    user.role = levels[3]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==15){
  return
}
else if(user.level<15){
  user.level = 15
user.role = levels[3]
  user.money += 100
  user.limit += 3

  drawRank(true,100,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)	   		  	  	 
}
} //15
if(userxp>55350 && userxp<56750 ){
  if(user.level > 16){ //user level higher than one?
    user.level=16 //set level 1
    user.role = levels[3]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==16){
  return
}
else if(user.level<16){
  user.level = 16
user.role = levels[3]
  user.money += 100

  drawRank(false,100,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	   		  	  	 
}
} //16
if(userxp>56750 && userxp<58250 ){
  if(user.level > 17){ //user level higher than one?
    user.level=17 //set level 1
    user.role = levels[3]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==17){
  return
}
else if(user.level<17){
  user.level = 17
user.role = levels[3]
  user.money += 100
 
  drawRank(false,100,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	  	  	 
}
} //17
if(userxp>58250 && userxp<59850 ){
  if(user.level > 18){ //user level higher than one?
    user.level=18 //set level 1
    user.role = levels[3]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==18){
  return
}
else if(user.level<18){
  user.level = 18
user.role = levels[3]
  user.money += 100
  user.limit += 3

  conn.reply(m.chat, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.

 𝑵𝒐𝒗𝒂 𝒑𝒐𝒔𝒊𝒄𝒂𝒐 𝒆𝒏𝒕𝒓𝒆 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔! 
 ϯ ${user.role}⁰  

 𓂀 @${username}
 𝙽𝚒𝚟𝚎𝚕 𝙰𝚗𝚝𝚎𝚛𝚒𝚘𝚛 : ${before}
 𝙽𝚒𝚟𝚎𝚕 𝙰𝚝𝚞𝚊𝚕 : ${user.level}
 𝙿𝚘𝚜𝚒𝚌𝚊𝚘 : ${user.role}\n
 ━━⬣ 𝑹𝒆𝒄𝒆𝒃𝒆𝒓𝒂𝒔
 𒄆 ʙʏᴛᴇᴄᴏɪɴꜱ ⏦ _*+100*_
 𓆣 ᴇᴛʜᴇʀᴇᴜᴍ ⏦ _*+3*_

*╰─┅──┅❖ ⸸ ❖─┅──┅*

`, fkontak, m)  		  	  	 
}
} //18
if(userxp>59850 && userxp<61550 ){
  if(user.level > 19){ //user level higher than one?
    user.level=19 //set level 1
    user.role = levels[3]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==19){
  return
}
else if(user.level<19){
  user.level = 19
user.role = levels[3]
  user.money += 100
 
  drawRank(false,100,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //19
if(userxp>61550 && userxp<63350 ){
  if(user.level > 20){ //user level higher than one?
    user.level=20//set level 1
    user.role = levels[4]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==20){
  return
}
else if(user.level<20){
  user.level = 20
user.role = levels[4]
  user.money += 150
  user.limit += 3

  drawRank(true,150,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)  		  	  	 
}
} //20
if(userxp>63350 && userxp<65250 ){
  if(user.level > 21){ //user level higher than one?
    user.level=21 //set level 1
    user.role = levels[4]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==21){
  return
}
else if(user.level<21){
  user.level = 21
user.role = levels[4]
  user.money += 150

  drawRank(false,150,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  	  	 
}
} //21
if(userxp>65250 && userxp<67300 ){
  if(user.level > 22){ //user level higher than one?
    user.level=22 //set level 1
    user.role = levels[4]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==22){
  return
}
else if(user.level<22){
  user.level = 22
user.role = levels[4]
user.money += 150

drawRank(false,150,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  	  	  	 
}
} //22
if(userxp>67300 && userxp<69500 ){
  if(user.level > 23){ //user level higher than one?
    user.level=23//set level 1
    user.role = levels[4]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==23){
  return
}
else if(user.level<23){
  user.level = 23
user.role = levels[4]
user.money += 150

drawRank(false,150,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  			  	  	 
}
} //23
if(userxp>69500 && userxp<71850 ){
  if(user.level > 24){ //user level higher than one?
    user.level=24 //set level 1
    user.role = levels[4]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==24){
  return
}
else if(user.level<24){
  user.level = 24
user.role = levels[3]
user.money += 150

drawRank(false,150,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  	 		  	  	 
}} //24
if(userxp>71850 && userxp<74350 ){
  if(user.level > 25){ //user level higher than one?
    user.level=25 //set level 1
    user.role = levels[5]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==25){
  return
}
else if(user.level<25){
  user.level = 25
user.role = levels[5]
  user.money += 200
  user.limit += 3

  drawRank(true,200,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
 ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
 ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
 ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)  			  	  	 
}
} //25
if(userxp>74350 && userxp<77000 ){
  if(user.level > 26){ //user level higher than one?
    user.level=26 //set level 1
    user.role = levels[5]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==26){
  return
}
else if(user.level<26){
  user.level = 26
user.role = levels[5]
user.money += 180

drawRank(false,180,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  			  	  	 
}
} //26
if(userxp>77000 && userxp<79800 ){
  if(user.level > 27){ //user level higher than one?
    user.level=27 //set level 1
    user.role = levels[5]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==27){
  return
}
else if(user.level<27){
  user.level = 27
user.role = levels[5]
user.money += 180

drawRank(false,180,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  	  	 
}
} //27
if(userxp>79800 && userxp<82750 ){
  if(user.level >28){ //user level higher than one?
    user.level=28 //set level 1
    user.role = levels[5]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==28){
  return
}
else if(user.level<28){
  user.level = 28
user.role = levels[5]
user.money += 180

drawRank(false,180,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //28
if(userxp>82750 && userxp<85850 ){
  if(user.level > 29){ //user level higher than one?
    user.level=29 //set level 1
    user.role = levels[5]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==29){
  return
}
else if(user.level<29){
  user.level = 29
user.role = levels[5]
user.money += 180

drawRank(false,180,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //29
if(userxp>85850 && userxp<89100 ){
  if(user.level >30 ){ //user level higher than one?
    user.level=30 //set level 1
    user.role = levels[6]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==30){
  return
}
else if(user.level<30){
  user.level = 30
user.role = levels[3]
  
  user.money += 240

  drawRank(true,240,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 		  	  	 
}
} //30
if(userxp>89100 && userxp<92500 ){
  if(user.level > 31){ //user level higher than one?
    user.level=31 //set level 1
    user.role = levels[6]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==31){
  return
}
else if(user.level<31){
  user.level = 31
user.role = levels[3]
user.money += 245

drawRank(false,245,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  	  	 
}
} //31
if(userxp>96100 && userxp<99900 ){
  if(user.level > 32){ //user level higher than one?
    user.level=32 //set level 1
    user.role = levels[6]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==32){
  return
}
else if(user.level<32){
  user.level = 32
user.role = levels[6]
user.money += 245

drawRank(false,245,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //32
if(userxp>99900 && userxp<103900 ){
  if(user.level > 33){ //user level higher than one?
    user.level=33 //set level 1
    user.role = levels[6]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==33){
  return
}
else if(user.level<33){
  user.level = 33
user.role = levels[6]
user.money += 245

drawRank(false,245,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //33
if(userxp>103900 && userxp<108100 ){
  if(user.level > 34){ //user level higher than one?
    user.level=34 //set level 1
    user.role = levels[6]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==34){
  return
}
else if(user.level<34){
  user.level = 34
user.role = levels[6]
  user.money += 270

  drawRank(false,270,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  	  	 
}
} //34
if(userxp>108100 && userxp<112500 ){
  if(user.level > 35){ //user level higher than one?
    user.level=35 //set level 1
    user.role = levels[7]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==35){
  return
}
else if(user.level<35){
  user.level = 35
user.role = levels[7]
  user.money += 300
  user.limit += 3


  drawRank(false,300,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)		   		  	  	 
}
} //35
if(userxp>112500 && userxp<117100 ){
  if(user.level > 36){ //user level higher than one?
    user.level=36 //set level 1
    user.role = levels[7]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==36){
  return
}
else if(user.level<36){
  user.level = 36
user.role = levels[7]
user.money += 270

drawRank(false,270,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  		  	  	 
}
} //36
if(userxp>117100 && userxp<121900 ){
  if(user.level > 37){ //user level higher than one?
    user.level=37 //set level 1
    user.role = levels[7]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<37){
  user.level = 37
user.role = levels[7]
user.money += 270

drawRank(false,270,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  		  	  	 
}
} //37
if(userxp>121900 && userxp<126900 ){
  if(user.level > 38){ //user level higher than one?
    user.level=38 //set level 1
    user.role = levels[7]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==38){
  return
}
else if(user.level<38){
  user.level = 38
user.role = levels[7]
user.money += 270

drawRank(false,270,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		   		  	  	 
}
} //38
if(userxp>126900 && userxp<132100 ){
  if(user.level > 39){ //user level higher than one?
    user.level=39 //set level 1
    user.role = levels[7]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==39){
  return
}
else if(user.level<39){
  user.level = 39
user.role = levels[7]
user.money += 270

drawRank(false,270,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		    		  	  	 
}
} //39
if(userxp>132100 && userxp<137500 ){
  if(user.level > 40){ //user level higher than one?
    user.level=40 //set level 1
    user.role = levels[8]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==40){
  return
}
else if(user.level<40){
  user.level = 40
user.role = levels[8]
  user.money += 350
  user.limit += 4

  drawRank(true,350,4,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)		   		  	  	 
}
} //40
if(userxp>137500 && userxp<143100 ){
  if(user.level > 41){ //user level higher than one?
    user.level=41 //set level 1
    user.role = levels[8]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==41){
  return
}
else if(user.level<41){
  user.level = 41
user.role = levels[8]
user.money += 300

drawRank(false,300,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)		  	  	  	 
}
} //41
if(userxp>143100 && userxp<148950 ){
  if(user.level > 42){ //user level higher than one?
    user.level=42 //set level 1
    user.role = levels[8]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==42){
  return
}
else if(user.level<42){
  user.level = 42
user.role = levels[8]
user.money += 300

drawRank(false,300,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	 		  	  	 
}
} //42
if(userxp>148950 && userxp<155050 ){
  if(user.level > 43){ //user level higher than one?
    user.level=43 //set level 1
    user.role = levels[8]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==43){
  return
}
else if(user.level<43){
  user.level = 43
user.role = levels[8]
user.money += 300

drawRank(false,300,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	 		  	  	 
}
} //43
if(userxp>155050 && userxp<161400 ){
  if(user.level > 44){ //user level higher than one?
    user.level=44 //set level 1
    user.role = levels[8]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==44){
  return
}
else if(user.level<44){
  user.level = 44
user.role = levels[8]
user.money += 300

drawRank(false,300,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	 		  	  	 
}
} //44
if(userxp>161400 && userxp<168000 ){
  if(user.level > 45){ //user level higher than one?
    user.level=45 //set level 1
    user.role = levels[9]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==45){
  return
}
else if(user.level<45){
  user.level = 45
user.role = levels[9]
  user.money += 450
  user.limit += 3
 

  drawRank(true,450,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)	  		  	  	 
}
} //45
if(userxp>168000 && userxp<174850 ){
  if(user.level > 46){ //user level higher than one?
    user.level=46//set level 1
    user.role = levels[9]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==46){
  return
}
else if(user.level<46){
  user.level = 46
user.role = levels[9]
user.money += 330

drawRank(false,330,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)	 		  	  	 
}
} //46
if(userxp>174850 && userxp<181950 ){
  if(user.level > 47){ //user level higher than one?
    user.level=47 //set level 1
    user.role = levels[9]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==47){
  return
}
else if(user.level<47){
  user.level = 47
user.role = levels[9]
user.money += 330

drawRank(false,330,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //47
if(userxp>181950 && userxp<189300 ){
  if(user.level > 48){ //user level higher than one?
    user.level=48 //set level 1
    user.role = levels[9]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==48){
  return
}
else if(user.level<48){
  user.level = 48
user.role = levels[9]
user.money += 330

drawRank(false,330,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //48
if(userxp>189300 && userxp<196900 ){
  if(user.level > 49){ //user level higher than one?
    user.level=49//set level 1
    user.role = levels[9]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==49){
  return
}
else if(user.level<49){
  user.level = 49
user.role = levels[9]
user.money += 330

drawRank(false,330,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //49
if(userxp>196900 && userxp<204750 ){
  if(user.level > 50){ //user level higher than one?
    user.level=50 //set level 1
    user.role = levels[10]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==50){
  return
}
else if(user.level<50){
  user.level = 50
user.role = levels[10]
  user.limit += 4

  user.money += 415

  drawRank(true,415,4,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)  		  	  	 
}
} //50
if(userxp>204750 &&   userxp<212850 ){
  if(user.level > 51){ //user level higher than one?
    user.level=51 //set level 1
    user.role = levels[10]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==51){
  return
}
else if(user.level<51){
  user.level = 51
user.role = levels[10]
 
  user.money += 360

  drawRank(false,360,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //51
if(userxp>212850 &&  userxp<221250 ){
  if(user.level > 52){ //user level higher than one?
    user.level=52 //set level 1
    user.role = levels[10]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==52){
  return
}
else if(user.level<52){
  user.level = 52
user.role = levels[10]
 
user.money += 360

drawRank(false,360,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //52
if(userxp>221250 &&  userxp<229950 ){
  if(user.level > 53){ //user level higher than one?
    user.level=53 //set level 1
    user.role = levels[10]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==53){
  return
}
else if(user.level<53){
  user.level = 53
user.role = levels[10]

user.money += 360

drawRank(false,360,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //53
if(userxp>229950 &&  userxp<238950 ){
  if(user.level > 54){ //user level higher than one?
    user.level=54 //set level 1
    user.role = levels[10]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==54){
  return
}
else if(user.level<54){
  user.level = 54
user.role = levels[10]
 
user.money += 360

drawRank(false,360,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //54
if(userxp>238950 &&  userxp<248250 ){
  if(user.level > 55){ //user level higher than one?
    user.level=55 //set level 1
    user.role = levels[11]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==55){
  return
}
else if(user.level<55){
  user.level = 55
user.role = levels[11]
  user.money += 480
  user.limit += 5


  drawRank(true,480,5,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 			  	  	 
}
} //55
if(userxp>248250 &&  userxp<257850 ){
  if(user.level > 56){ //user level higher than one?
    user.level=56 //set level 1
    user.role = levels[11]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==56){
  return
}
else if(user.level<56){
  user.level = 56
user.role = levels[11]
 
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //56
if(userxp>257850 &&  userxp<267750 ){
  if(user.level > 57){ //user level higher than one?
    user.level=57 //set level 1
    user.role = levels[11]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==57){
  return
}
else if(user.level<57){
  user.level = 57
user.role = levels[11]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //57
if(userxp>267750 &&   userxp<277950 ){
  if(user.level > 58){ //user level higher than one?
    user.level=58 //set level 1
    user.role = levels[11]
    user.money-50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==58){
  return
}
else if(user.level<58){
  user.level = 58
user.role = levels[11]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	   		  	  	 
}
} //58
if(userxp>277950 &&   userxp<288450 ){
  if(user.level > 59){ //user level higher than one?
    user.level=59 //set level 1
    user.role = levels[11]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==59){
  return
}
else if(user.level<59){
  user.level = 59
user.role = levels[11]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //59
if(userxp>288450 && userxp<299250 ){
  if(user.level > 60){ //user level higher than one?
    user.level=60 //set level 1
    user.role = levels[12]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==60){
  return
}
else if(user.level<60){
  user.level = 60
user.role = levels[12]
  user.money += 520
  user.limit += 3

  drawRank(true,520,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 	  		  	  	 
}
} //60
if(userxp>299250 && userxp<310350 ){
  if(user.level > 61){ //user level higher than one?
    user.level=61//set level 1
    user.role = levels[12]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==61){
  return
}
else if(user.level<61){
  user.level = 61
user.role = levels[12]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //61
if(userxp>310350 && userxp<321800 ){
  if(user.level > 62){ //user level higher than one?
    user.level=62 //set level 1
    user.role = levels[12]
    user.money-=50
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==62){
  return
}
else if(user.level<62){
  user.level = 62
user.role = levels[12]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 	  	  	 
}
} //62
if(userxp>321800 && userxp<333600 ){
  if(user.level > 63){ //user level higher than one?
    user.level=63 //set level 1
    user.role = levels[12]
    user.money-=65
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level=63){
  return
}
else if(user.level<63){
  user.level = 63
user.role = levels[12]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //63
if(userxp>333600 && userxp<345750 ){
  if(user.level > 64){ //user level higher than one?
    user.level=64 //set level 1
    user.role = levels[12]
    user.money-=65
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<64){
  user.level = 64
user.role = levels[12]
user.money += 400

drawRank(false,400,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	   		  	  	 
}
} //64
if(userxp>345750 && userxp<358250 ){
  if(user.level > 65){ //user level higher than one?
    user.level=65 //set level 1
    user.role = levels[13]
    user.money-=100
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==65){
  return
}
else if(user.level<65){
  user.level = 65
user.role = levels[13]
  user.money += 540
  user.limit += 3


  drawRank(true,540,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 	 		  	  	 
}
} //65
if(userxp>358250 && userxp<371100 ){
  if(user.level > 66){ //user level higher than one?
    user.level=66 //set level 1
    user.role = levels[13]
    user.money-=80
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==66){
  return
}
else if(user.level<66){
  user.level = 66
user.role = levels[13]
user.money += 435

drawRank(false,435,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //66
if(userxp>371100 && userxp<384300 ){
  if(user.level > 67){ //user level higher than one?
    user.level=67 //set level 1
    user.role = levels[13]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==67){
  return
}
else if(user.level<67){
  user.level = 67
user.role = levels[13]
user.money += 435

drawRank(false,435,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //67
if(userxp>384300 && userxp<397850 ){
  if(user.level > 68){ //user level higher than one?
    user.level=68 //set level 1
    user.role = levels[13]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==68){
  return
}
else if(user.level<68){
  user.level = 68
user.role = levels[13]
user.money += 435

drawRank(false,435,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //68
if(userxp>397850 && userxp<411750 ){
  if(user.level > 69){ //user level higher than one?
    user.level=69 //set level 1
    user.role = levels[13]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==69){
  return
}
else if(user.level<69){
  user.level = 69
user.role = levels[13]
user.money += 435

drawRank(false,435,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //69
if(userxp>411750 && userxp<426000 ){
  if(user.level > 70){ //user level higher than one?
    user.level=70//set level 1
    user.role = levels[14]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==70){
  return
}
else if(user.level<70){
  user.level = 70
user.role = levels[14]
 
  user.limit += 3
  user.money += 565

  drawRank(true,565,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 	 		  	  	 
}
} //70
if(userxp>426000 && userxp<440600 ){
  if(user.level > 71){ //user level higher than one?
    user.level=71 //set level 1
    user.role = levels[14]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==71){
  return
}
else if(user.level<71){
  user.level = 71
user.role = levels[14]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //71
if(userxp>440600 && userxp<455600 ){
  if(user.level > 72){ //user level higher than one?
    user.level=72 //set level 1
    user.role = levels[14]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==72){
  return
}
else if(user.level<72){
  user.level = 72
user.role = levels[14]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  		  	  	 
}
} //72
if(userxp>455600 && userxp<471000 ){
  if(user.level > 73){ //user level higher than one?
    user.level=73 //set level 1
    user.role = levels[14]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==73){
  return
}
else if(user.level<73){
  user.level = 73
user.role = levels[14]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //73
if(userxp>471000 && userxp<486800 ){
  if(user.level >74){ //user level higher than one?
    user.level=74//set level 1
    user.role = levels[14]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==74){
  return
}
else if(user.level<74){
  user.level = 74
user.role = levels[14]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //74
if(userxp>486800 && userxp<503000 ){
  if(user.level >75){ //user level higher than one?
    user.level=75 //set level 1
    user.role = levels[15]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==75){
  return
}
else if(user.level<75){
  user.level = 75
user.role = levels[15]
user.money += 720
user.limit += 3

drawRank(true,720,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 			  	  	 
}
} //75
if(userxp>503000 && userxp<519600 ){
  if(user.level > 76){ //user level higher than one?
    user.level=76 //set level 1
    user.role = levels[15]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==76){
  return
}
else if(user.level<76){
  user.level = 76
user.role = levels[15]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //76
if(userxp>519600 && userxp<536600 ){
  if(user.level > 77){ //user level higher than one?
    user.level=77//set level 1
    user.role = levels[15]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==77){
  return
}
else if(user.level<77){
  user.level = 77
user.role = levels[15]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 			  	  	 
}
} //77
if(userxp>536600 && userxp<554000 ){
  if(user.level > 78){ //user level higher than one?
    user.level=78//set level 1
    user.role = levels[15]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==78){
  return
}
else if(user.level<78){
  user.level = 78
user.role = levels[15]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //78
if(userxp>554000 && userxp<571800 ){
  if(user.level > 79){ //user level higher than one?
    user.level=79 //set level 1
    user.role = levels[15]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==79){
  return
}
else if(user.level<79){
  user.level = 79
user.role = levels[15]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //79
if(userxp>571800 && userxp<590000 ){
  if(user.level > 80){ //user level higher than one?
    user.level=80 //set level 1
    user.role = levels[16]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==80){
  return
}
else if(user.level<80){
  user.level = 80
user.role = levels[16]
user.money += 660
user.limit += 4 

drawRank(true,660,4,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role)   		  	  	 
}
} //80
if(userxp>590000 && userxp<608650 ){
  if(user.level > 81){ //user level higher than one?
    user.level=81 //set level 1
    user.role = levels[16]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==81){
  return
}
else if(user.level<81){
  user.level = 81
user.role = levels[16]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //81
if(userxp>608650 && userxp< 627750 ){
  if(user.level > 82){ //user level higher than one?
    user.level=82 //set level 1
    user.role = levels[16]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==82){
  return
}
else if(user.level<82){
  user.level = 82
user.role = levels[16]
user.money += 450

drawRank(false,450,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)  		  	  	 
}
} //82
if(userxp>627750 && userxp<647300 ){
  if(user.level > 83){ //user level higher than one?
    user.level=83 //set level 1
    user.role = levels[16]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==83){
  return
}
else if(user.level<83){
  user.level = 83
user.role = levels[16]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //83
if(userxp>647300 && userxp<667300 ){
  if(user.level > 84){ //user level higher than one?
    user.level=84 //set level 1
    user.role = levels[16]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==84){
  return
}
else if(user.level<84){
  user.level = 84
user.role = levels[16]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 				  	  	 
}
} //84
if(userxp>667300 && userxp<687750 ){
  if(user.level > 85){ //user level higher than one?
    user.level=85 //set level 1
    user.role = levels[17]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==37){
  return
}
else if(user.level<85){
  user.level = 85
user.role = levels[17]

  user.limit += 3
  user.money += 700

  drawRank(true,700,3,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 		 		  	  	 
}
} //85
if(userxp>687750 && userxp<708650 ){
  if(user.level > 86){ //user level higher than one?
    user.level=86 //set level 1
    user.role = levels[17]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==86){
  return
}
else if(user.level<86){
  user.level = 86
user.role = levels[17]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		 		  	  	 
}
} //86
if(userxp>708650 && userxp<730000 ){
  if(user.level > 87){ //user level higher than one?
    user.level=87 //set level 1
    user.role = levels[17]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==87){
  return
}
else if(user.level<87){
  user.level = 87
user.role = levels[17]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  		  	  	 
}
} //87
if(userxp>730000 && userxp<751800 ){
  if(user.level > 88){ //user level higher than one?
    user.level=88 //set level 1
    user.role = levels[17]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==88){
  return
}
else if(user.level<88){
  user.level = 88
user.role = levels[17]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 				  	  	 
}
} //88
if(userxp>751800 && userxp<774050 ){
  if(user.level >89 ){ //user level higher than one?
    user.level=89 //set level 1
    user.role = levels[17]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==89){
  return
}
else if(user.level<89){
  user.level = 89
user.role = levels[17]
user.money += 475

drawRank(false,475,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		 		  	  	 
}
} //89
if(userxp>774050 && userxp<796750 ){
  if(user.level > 90){ //user level higher than one?
    user.level=90 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==90){
  return
}
else if(user.level<90){
  user.level = 90
user.role = levels[18]
  
  user.limit += 8

  user.money += 850

  drawRank(true,850,8,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
  ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
  ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
  ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
  *╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 		  		  	  	 
}
} //90
if(userxp>796750 && userxp<819900 ){
  if(user.level > 91){ //user level higher than one?
    user.level=91 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==91){
  return
}
else if(user.level<91){
  user.level = 91
user.role = levels[18]
user.money += 760

drawRank(false,765,0,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		 		  	  	 
}
} //91
if(userxp>819900 && userxp<843500 ){
  if(user.level > 92){ //user level higher than one?
    user.level=92 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==92){
  return
}
else if(user.level<92){
  user.level = 92
user.role = levels[18]
user.money += 760
user.limit += 1

drawRank(false,765,1,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	  	  	 
}
} //92
if(userxp>843500 && userxp<867600 ){
  if(user.level > 93){ //user level higher than one?
    user.level=93 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==93){
  return
}
else if(user.level<93){
  user.level = 93
user.role = levels[18]
user.money += 760
user.limit += 1

drawRank(false,765,1,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	 		  	  	 
}
} //93
if(userxp>867600 && userxp<892300 ){
  if(user.level > 94){ //user level higher than one?
    user.level=94 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==94){
  return
}
else if(user.level<94){
  user.level = 94
user.role = levels[18]
user.money += 760
user.limit += 1

drawRank(false,765,1,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	   		  	  	 
}
} //94
if(userxp>892300 && userxp<917700 ){
  if(user.level > 95){ //user level higher than one?
    user.level=95 //set level 1
    user.role = levels[19]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==95){
  return
}
else if(user.level<95){
  user.level = 95
user.role = levels[19]
user.money += 980
user.limit += 12

drawRank(true,980,12,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`,user.role) 	 		  	  	 
}
} //95
if(userxp>917700 && userxp<943900 ){
  if(user.level > 96){ //user level higher than one?
    user.level=96 //set level 1
    user.role = levels[19]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==96){
  return
}
else if(user.level<96){
  user.level = 96
user.role = levels[19]
user.money += 830
user.limit += 2

drawRank(false,830,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 	   		  	  	 
}
} //96
if(userxp>943900 && userxp<971000 ){
  if(user.level > 97){ //user level higher than one?
    user.level=97 //set level 1
    user.role = levels[18]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==97){
  return
}
else if(user.level<97){
  user.level = 97
user.role = levels[18]
user.money += 830
user.limit += 2

drawRank(false,830,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //97
if(userxp>971000 && userxp<999100 ){
  if(user.level > 98){ //user level higher than one?
    user.level=98 //set level 1
    user.role = levels[19]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==98){
  return
}
else if(user.level<98){
  user.level = 98
user.role = levels[19]
user.money += 830
user.limit += 2

drawRank(false,830,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //98
if(userxp>999100 && userxp<1029100 ){
  if(user.level > 99){ //user level higher than one?
    user.level=99 //set level 1
    user.role = levels[19]
    user.money-=25
    m.reply(`༒︎ 𝑫𝒆𝒔𝒑𝒆𝒏𝒄𝒂𝒔𝒕𝒆 𝒅𝒆 𝒑𝒂𝒕𝒂𝒎𝒂𝒓, 𝒄𝒐𝒎𝒐 𝒐𝒔 𝒆𝒔𝒑𝒆𝒄𝒕𝒓𝒐𝒔 𝒅𝒂 𝒅𝒆𝒔𝒈𝒓𝒂ç𝒂 𝒒𝒖𝒆 𝒑𝒆𝒓𝒎𝒆𝒊𝒂𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔. . . `)
    //logic
  }
else if(user.level==99){
  return
}
else if(user.level<99){
  user.level = 99
user.role = levels[19]
user.money += 830
user.limit += 2

drawRank(false,830,2,global.pluginsAtUserLevel.flat(),user.level, `╭─┅──┅❖ ༒︎ ❖─┅──┅ \n\n ﷽  @${m.sender.split('@')[0]}
ᶜᵉˡᵉᵇʳᵒ ᵗᵘᵃ ᵃˢᶜᵉⁿˢᵃᵒ
ᵒⁿᵈᵉ ᵃˢ ᵗʳᵉᵛᵃˢ ᵃᵖˡᵃᵘᵈᵉᵐ ᵗᵉᵘ ᶠᵉⁱᵗᵒ ᵉ ᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜⁱᵈᵒ
ᵐᵘʳᵐᵘʳᵃ ᵉˡᵒᵍⁱᵒˢ ᵉᵐ ᵘᵐ ᶜᵒʳᵒ ˢᵒᵐᵇʳⁱᵒ.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`) 		  	  	 
}
} //99

if (userxp > 1029100) {
  user.maxlevel = true
  user.role = levels[20]
  user.level=100; // Level up
  if(user.maxlevel==false){
   m.reply(`─┅──┅❖ ⸸ ❖─┅──┅
   ༒︎ Em sombras profundas alcançaste, a fronteira final trespassaste. Níveis além da razão, um labirinto sombrio, o coração em trevas, anuncia a tua ascensão. Atingiste o nível máximo, como um corvo noturno em voo, agora ecoa. . .
O suspiro de Edgar Allan Poe. ༒︎`);
}
}
}		
//export const disabled = false 

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

  import { createCanvas } from 'canvas';
import {getSudoku} from 'sudoku-gen';
import FormData from "form-data"; 
import fetch from "node-fetch"; 
  import Jimp from 'jimp';
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 


import poker from 'poker-hands'

import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';
import {gpt} from 'gpti';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join} from 'path';


let handler = m => m
handler.before = async function (m,{isCriadora,isAdmin,groupMetadata ,participants,__dirname , conn}) {

const gemimg = [
  "https://64.media.tumblr.com/5b251bcd6963982e65f8bb6347747a8f/20f1eaac7e8f3db2-fd/s500x750/0ddf9f5d817c5ba437064ce63dad5f8e92543109.jpg",
  "https://static.printler.com/cache/8/3/b/7/6/4/83b764f67a0e907794fa8e8a38379840850049cb.jpg",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91a058b1-20ef-4bf3-88f3-bf010f033ef1/dfpvac1-8a835bf0-70da-4e15-a5bc-f04f359e88eb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9",
  "https://res.cloudinary.com/teepublic/image/private/s--8MRizIPM--/c_crop,x_10,y_10/c_fit,h_1247/c_crop,g_north_west,h_1260,w_1260,x_-81,y_-6/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_1260,w_1260/fl_layer_apply,g_north_west,x_-81,y_-6/bo_157px_solid_white/e_overlay,fl_layer_apply,h_1260,l_Misc:Art%20Print%20Bumpmap,w_1260/e_shadow,x_6,y_6/c_limit,h_1254,w_1254/c_lpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1697617669/production/designs/52007971_2.jpg",
  
  "data:image/jpeg;base64,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", 
  
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_nScMGsli7e6UQqp8Gw5L8HLJFW8p9lw8A&usqp=CAU",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4afacc9a-ca27-4507-bd68-82bf05a0b038/dfy2to3-afb0c8d5-da0f-40de-90e0-aaee35f37d5a.jpg/v1/fill/w_1280,h_1714,q_75,strp/edgar_allan_poe_by_mroogeyboogey_dfy2to3-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcxNCIsInBhdGgiOiJcL2ZcLzRhZmFjYzlhLWNhMjctNDUwNy1iZDY4LTgyYmYwNWEwYjAzOFwvZGZ5MnRvMy1hZmIwYzhkNS1kYTBmLTQwZGUtOTBlMC1hYWVlMzVmMzdkNWEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.S773ubEtn1Qx0r0P7RV-80YVo7k2iwKCLiJvmOPirtg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2BXCTKoZR4Oc-R7cRdVxnkfZ415CGdxMZw&usqp=CAU"
  ]// fim imagens
  const bardimg =["https://telegra.ph/file/291d5bea0135b174f2705.jpg",
"https://telegra.ph/file/a39fc0b00875043de0c59.jpg",
"https://telegra.ph/file/e3d7417f1ee7a5fa8f792.jpg",
"https://telegra.ph/file/a9db586295e873b6e1c7f.jpg",

"https://telegra.ph/file/b0a54ea77d20122f6d584.jpg"
,

"https://telegra.ph/file/e5931a3d04d97eaa1c880.jpg"
,
"https://telegra.ph/file/14147093cf2903481edc9.jpg"
,
"https://telegra.ph/file/d06560e908d8a4bd8d87d.jpg"
,
"https://telegra.ph/file/137636b422848d2f8ee29.jpg"
,
"https://telegra.ph/file/609000c812899983e1d2b.jpg",

"https://telegra.ph/file/47367a12185a574b3e3af.jpg"


]
    function calculatePayment(membros) {
    if (membros < 25) {
        return 20;
    } else if (membros < 50) {
        return 25;
    } else if (membros <= 100) {
        return 30;
    } else {
        // Calculate payment for more than 100 members
        let baseValue = 30;
        let additionalMembers = membros - 100;
        
        if (additionalMembers <= 40) {
            // No additional cost if <= 40 additional members
            return baseValue;
        } else {
            // Calculate additional cost
            let additionalGroups = Math.ceil((additionalMembers - 40) / 40);
            let additionalCost = additionalGroups * 3;
            return baseValue + additionalCost;
        }
    }
}

let membros = global.db.data.chats[m.chat].totalMembros
let paymentValue = calculatePayment(membros);

    global.db.data.chats[m.chat].name = await conn.getName(m.chat)
    global.db.data.chats[m.chat].desc =  groupMetadata.desc?.toString()
    global.db.data.chats[m.chat].totalMembros =  participants.length
    global.db.data.chats[m.chat].membros =  participants
    global.db.data.chats[m.chat].boleto =  paymentValue
    function checkAndResetMortoDemonio() {
  const users = global.db.data.chats[m.chat].users;
  const currentTime = Date.now();
  
  for (const user in users) {
    if (users[user].mortoDemonio) {
      const timePassed = currentTime - users[user].mortoDemonioTimestamp;
      const timeoutDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      
      // If the timeout duration has passed, reset mortoDemonio
      if (timePassed >= timeoutDuration) {
        users[user].mortoDemonio = false;
        users[user].mortoDemonioTimestamp = null; // Clear the timestamp
      }
    }
  }
}

// Call this function in your running code at the appropriate point
checkAndResetMortoDemonio(); // Direct call in your running process

    
  const rick = [
  "https://cdn.dribbble.com/users/1230354/screenshots/4923869/rickandmorty.png",
  "https://banner2.cleanpng.com/20180320/hwq/kisspng-pocket-mortys-rick-sanchez-morty-smith-computer-ic-rick-avatar-blue-vers-icon-5ab1ccd860a082.9774853115216017523958.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8E7MyaxDZvT9TzylOh8NGyHCcwnNwxhhOg&usqp=CAU",
  "https://www.reddit.com/media?url=https%3A%2F%2Fpreview.redd.it%2Fblack-hat-vs-rick-sanchez-v0-ajmcr8iuk82a1.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D4e0a7d0e145bcde86432c11dced03bf2c02fc752",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZQay3lMEHolK6tjS0SIm6YGfmzOr7TRgAA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxUBRaTBXFflwZTqcBpH-BSYeDFxGCXXGYQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFXCrRTsXdRnBsL88_aiH5YC7DQY65pLnH-w&usqp=CAU"
];
async function verificarVencedores() {
  const vencedoresNumeroExato = [];
  const vencedoresAnimal = [];
  
  
// Sorteio de um número entre 1 e 100
// Encontrar o animal sorteado

let numer = Math.floor(Math.random() * 100) + 1;
const animalia= encontrarAnimal(numer);
global.db.data.chats[m.chat].bicho.animal = animalia
global.db.data.chats[m.chat].bicho.numero = numer

   let apostas = global.db.data.chats[m.chat].bicho.players
   let numeroSorteado =  global.db.data.chats[m.chat].bicho.numero
   
   let animalSorteado = global.db.data.chats[m.chat].bicho.animal
  Object.keys(apostas).forEach(jogador => {
    if (apostas[jogador].numero == numeroSorteado) {
      vencedoresNumeroExato.push(jogador);
    } else if (apostas[jogador].animal == animalSorteado) {
      vencedoresAnimal.push(jogador);
    }
  });

  if (vencedoresNumeroExato.length > 0) {
  
// Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresNumeroExato.length);

console.log(prizePerWinner)
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores += `@${winner.split('@')[0]}`
});



// List each winner and their share of the prize
    let txtA = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━ 
                 𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
     await conn.reply(m.chat, txtA, m, { mentions: conn.parseMention(txtA) })
     return !0
  } else if (vencedoresAnimal.length > 0) {
  
 // Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresAnimal.length);
let vencedores = ''
console.log(prizePerWinner)
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores +=   `@${winner.split('@')[0]}`.join('\n')
});
  
       let txtB = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                          𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
    await conn.reply(m.chat, txtB, m, { mentions: conn.parseMention(txtB) })
     return !0
  } else {
    console.log(global.db.data.chats[m.chat].bicho.aposta)
       let txtC = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                      𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
  𝑵𝒆𝒏𝒉𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆 𝒂𝒄𝒆𝒓𝒕𝒐𝒖 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
     await conn.reply(m.chat, txtC, m, { mentions: conn.parseMention(txtC) })
     return !0
  }
}

  global.quiz = global.quiz ? global.quiz : {}
    let id = m.chat
    if(!global.xppergunta){
      global.xppergunta=false
    }
    if(!global.quiz){
      global.quiz = {}
    }
    if(!global.quiz[m.chat]){
  global.quiz[m.chat] = {
   "id": ""
  }
    }
  if(!global.quizxp){
  global.quizxp = {  }
}

  if(!global.quizxp[m.chat]){
  global.quizxp[m.chat] = {
   "modo": false
  }
}


if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}

if(!global.db.data.chats[m.chat].forca){
  global.db.data.chats[m.chat].forca={
    isGame:false,
    forcaID: '',
    palavra: '',
    currentStatus: '',
    currentStage: '',
    
  }
  
}

if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}

if(m.text && isOwner){
  console.log("dono mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:4500,
        role:'༒︎ 𝕹𝖊𝖛𝖊𝖗𝖒𝖔𝖗𝖊 ﮩ٨ـﮩ\n𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 𝔠𝔬𝔯𝔳𝔬𝔰 ♱',
        money:4500,
        level:666,
        adm: isAdmin,
        legendary: true,
        slots:3,
        tempBan:false,
  }
}
if (global.db.data.chats[m.chat].users[m.sender].tempBan === undefined) {
  global.db.data.chats[m.chat].users[m.sender].tempBan = false;
}
}


if(global.db.data.chats[m.chat]?.roleta?.startTime) {
let currentTime = new Date();
let minutesPassed = Math.floor((currentTime -
global.db.data.chats[m.chat].roleta.startTime) / 60000);
if(global.db.data.chats[m.chat].roleta.gameActive)
{
if (minutesPassed >= 30) {
    
    
    let stiker = false;
    const gifUrl = 'https://i.makeagif.com/media/11-22-2017/gXYMAo.gif';
  
    stiker = await sticker(false, gifUrl, '𝐆𝐢𝐫𝐚𝐧𝐝𝐨 𝐚 𝐫𝐨𝐥𝐞𝐭𝐚. . .', '⚄ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... ');
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true });

    clearTimeout(timer);
    await new Promise(r => setTimeout(r, 6000));

    const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
    let result = Math.floor(Math.random() * 37);
    const color = result === 0 ? '🟩' : redNumbers.includes(result) ? '🟥' : '⬛';

    let totalBets = 0;
    let exactWinners = [];
    let groupWinners = [];
  
    // Calculate the total bet amount and classify winners
    Object.entries(global.db.data.chats[m.chat].roleta.jogadores).forEach(([userId, user]) => {
        user.apostas.forEach(bet => {
    // Check if it's a specific number bet
    if (bet.type === 1 && bet.value === result) {
        exactWinners.push({ userId, amount: bet.amount * 15 });
    }
    // Check if it's a group bet (red/black, odd/even)
    else if (bet.type === 2) {
        if ((bet.value === 1 && result % 2 !== 0) ||  // Odd numbers
            (bet.value === 2 && result % 2 === 0) ||  // Even numbers
            (bet.value === 3 && redNumbers.includes(result)) ||  // Red numbers
            (bet.value === 4 && blackNumbers.includes(result)) ||  // Black numbers
            (bet.value === 5 && result === 0)) {  // Zero
            groupWinners.push({ userId, amount: bet.amount });
        }
    }
});
    });

    // Calculate the total payouts
    let exactWinnerTotal = exactWinners.reduce((sum, winner) => sum + winner.amount, 0);
    let groupWinnerTotal = groupWinners.reduce((sum, winner) => sum + winner.amount, 0);
    let totalWinnerAmount = exactWinnerTotal + groupWinnerTotal;

    // Distribute the winnings
    if (totalWinnerAmount > 0) {
        let remainingPool = global.db.data.chats[m.chat].roleta.montante;  // Total payout pool
        const winnerMessages = [];

        exactWinners.forEach(winner => {
            let payout = (winner.amount / totalWinnerAmount) * remainingPool;
            winnerMessages.push(`${winner.userId} won ${payout.toFixed(2)} on exact number`);
            remainingPool -= payout;
        });

        groupWinners.forEach(winner => {
            let payout = (winner.amount / totalWinnerAmount) * remainingPool;
            winnerMessages.push(`${winner.userId} won ${payout.toFixed(2)} on group bet`);
            remainingPool -= payout;
        });

        const winnerList = winnerMessages.join('\n');
        let winMessage = `┏━━❬❂❭━━━━━╼
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> 𝐴 ⨀ 𝑐𝑎𝑖𝑢 𝑒𝑚 ${result} ❰${color}
> 𝕍𝕖𝕟𝕔𝕖𝕕𝕠𝕣𝕖𝕤: 
> ${winnerList}
┗━━━━━━━━━━━━━━━━`;

        conn.sendFile(m.chat, 'https://itzpire.com/file/2806d01deacf.jpg', 'win.jpg', winMessage, m);
    } else {
        let noWinMessage = `┏━━❬❂❭━━━━━╼
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> 𝐴 ⨀ 𝑐𝑎𝑖𝑢 𝑒𝑚 ${result} ❰${color}
> 𝙽𝚒𝚗𝚐𝚞𝚎́𝚖 𝚘𝚋𝚝𝚎𝚟𝚎 𝚜𝚘𝚛𝚝𝚎 𝚗𝚎𝚜𝚝𝚎 𝚕𝚊𝚗𝚌𝚎... 
┗━━━━━━━━━━━━━━━━`;

        conn.sendFile(m.chat, 'https://itzpire.com/file/09de544b9d81.jpg', 'err.jpg', noWinMessage, m);
    }

    delete global.db.data.chats[m.chat].roleta;

    
    
    
    
} else {
  
  console.log('roulette game in progress')  
  
}

}
}

if(m.text && isCriadora)
  {
  console.log("laura mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:4500,
        role:'༒︎ 𝑩𝒍𝒂𝒄𝒌 𝑷𝒍𝒖𝒕𝒐',
        money:4500,
        level:666,
        adm: isAdmin,
        legendary: false,
        cocriadora:true,
        maxlevel: true,
        slots: 999,
  }
  
  
}
global.db.data.chats[m.chat].users[m.sender].limit=9999999
  global.db.data.chats[m.chat].users[m.sender].money=9999999
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=false
  global.db.data.chats[m.chat].users[m.sender].coadmin=false
  global.db.data.chats[m.chat].users[m.sender].role= '༒︎ 𝑩𝒍𝒂𝒄𝒌 𝑷𝒍𝒖𝒕𝒐'
  
    
    
    
  }

  let username = conn.getName(m.sender)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
  
  let admcheck = admins.includes(m.sender)
  if(!global.db.data.chats[m.chat].expira)
{
   global.db.data.chats[m.chat].expira = '2000-01-01T00:00:00.000Z'
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
        exp: 0,
        limit:0,
        almas:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        usuariosRoubados: [],
        silenced: false,
        maxlevel: false,
        cocriador: false,
  }
}


else if (m.quoted && global.db.data.chats[m.chat].quiz &&
global.db.data.chats[m.chat].quiz.modo &&
global.db.data.chats[m.chat].quiz.id == m.quoted.id) {

console.log("resposta" + m.text.toUpperCase()==global.db.data.chats[m.chat].quiz.ca)
if(!global.db.data.chats[m.chat].quiz){
  global.db.data.chats[m.chat].quiz=  {
    perguntaAndamento: false,
    pergunta: {}
  }
}
if (global.db.data.chats[m.chat].quiz.perguntaAndamento === undefined) {
    global.db.data.chats[m.chat].quiz.perguntaAndamento = false;
}



if(!global.db.data.chats[m.chat].jogadores){
  global.db.data.chats[m.chat].jogadores= {}
}

if(!global.db.data.chats[m.chat].jogadores[m.sender]){
             global.db.data.chats[m.chat].jogadores[m.sender] = {
               xp:0,
               name: global.db.data.users[m.sender].name
             }
           }
           if(global.db.data.chats[m.chat].quiz.perguntaAndamento== true && ["A", "B", "C", "D"].includes(m.text.toUpperCase())){
        if(m.text.toUpperCase()==global.db.data.chats[m.chat].quiz.ca){
          let qqz = global.db.data.chats[m.chat].quiz
            global.db.data.chats[m.chat].users[m.sender].pontos += parseInt( global.db.data.chats[m.chat].quiz.pontos)
           
     
          global.db.data.chats[m.chat].users[m.sender].exp += parseInt(global.db.data.chats[m.chat].quiz.xp)
          global.db.data.chats[m.chat].users[m.sender].money +=
          parseFloat(qqz.mony)
          global.db.data.chats[m.chat].users[m.sender].limit += 1
          await m.reply(`
╭━━━━━━━━━⬣
┃ ┅──┅❖ 𝙾𝚙𝚌𝚊𝚘 ${global.db.data.chats[m.chat].quiz.ca}
┃ 👁️ ℜ𝔢𝔰𝔭𝔬𝔰𝔱𝔞 𝔠𝔬𝔯𝔯𝔢𝔱𝔞
┃
┃ ${global.db.data.chats[m.chat].quiz.cm}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙑𝙤𝙘𝙚 𝙜𝙖𝙣𝙝𝙤𝙪:
┃ ${parseInt(global.db.data.chats[m.chat].quiz.pontos)} pontos
┃ _*${qqz.mony}*_ 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜
┃ _*${parseInt(global.db.data.chats[m.chat].quiz.xp)}*_ 𝑥𝑝
┃ _*1*_ 𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘 🌒
╰━━━━━━━━━━━━━━━━━━⬣
          `)
            global.db.data.chats[m.chat].quiz.perguntaAndamento = false
          global.db.data.chats[m.chat].quiz.pergunta = {}
      
        global.db.data.chats[m.chat].quiz = {
          ...global.db.data.chats[m.chat].quiz,
        "math": false,
      "cp": '',
      "ca": '',
      "cm": '',
      "xp": 0,
      "time": ''

    }
          
          
        }
        else {
          console.log(global.db.data.chats[m.chat].quiz)
          await m.reply(`
╭━━━━━━━━━⬣
┃ 👁️ ℜ𝔢𝔰𝔭𝔬𝔰𝔱𝔞 𝔢𝔯𝔯𝔞𝔡𝔞
┃
┃ -10 𝙥𝙤𝙣𝙩𝙤𝙨
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘 🌒
╰━━━━━━━━━━━━━━━━━━⬣
          `)
          global.db.data.chats[m.chat].jogadores[m.sender].xp -=10
        }
           }
           else if (!global.db.data.chats[m.chat].quiz.perguntaAndamento && ["A", "B", "C", "D"].includes(m.text.toUpperCase())) {
             await m.reply(`
╭━━━━━━━━━⬣
💀 𝔈𝔰𝔱𝔢 𝔧𝔬𝔤𝔬 𝔧á 𝔣𝔬𝔦 𝔢𝔫𝔠𝔢𝔯𝔯𝔞𝔡𝔬
╰━━━━━━━━━⬣
        `)
           }
      
    
    
}
else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat]?.robot?.messageId) {
  
  
async function postData(url, data) {
       
if(data.input.includes('--exec')) {
  

let execPrompt = data.input.replace('--exec', '');
m.reply(execPrompt)

  return 'executando comando'
  
  
}

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          
          console.log(response)
    return response.text(); // Return response body as text
}
m.react('💿')


if(/^\s*--exec\s*$/.test(m.text)) {
  m.react('📀')
  return m.reply(`edgar@fsociety:~$ .fsociety --help
> ‎ 
> 𝙼𝚎 𝚍𝚎 𝚊𝚕𝚐𝚞𝚖𝚊 𝚛𝚎𝚜𝚙𝚘𝚜𝚝𝚊, 𝚐𝚊𝚛𝚘𝚝𝚘.
> -------------
Responda com:
> $ <pergunta>          
> $ --exec <Digite algo que deseja fazer em shell>
> $ --menu 
> -------------
Exemplos de Uso:
> $ <?> Responda com algum dos exemplos acima 
> ‎
> Lembre-se: Você é um 1 ou um 0? Ou você controla o sistema, ou é controlado por ele. A pergunta é: está no comando ou só segue as linhas de código?
> ‎
edgar@fsociety:~$ _`)
}
else if(m.text.includes('--menu')) {

  let menuMsg =  await conn.sendMessage(m.chat, {
    text: `> ### FSOCIETY SYSTEM INITIATED ###\n> edgar@fsociety:~$ ./fsociety -m tools
> --------    
▙▘𝚏̷𝚜̷𝚘̷𝚌̷𝚒̷𝚎̷𝚝̷𝚢̷▗▟▚
▔▔▔▔▔▔▔▔▔▔▔
1⌉ ⚼ 𝙷𝚢𝚍𝚛𝚊
2⌉ ⚼ 𝙹𝚘𝚑𝚗𝚃𝚑𝚎𝚁𝚒𝚙𝚙𝚎𝚛
3⌉ ⚼ 𝚂𝚀𝙻𝙼𝚊𝚙
4⌉ ⚼ 𝙼𝚂𝙵𝚅𝚎𝚗𝚘𝚖
5⌉ ⚼ 𝙴𝚟𝚒𝚕-𝚆𝚒𝚗𝚁𝙼
6⌉ ⚼ 𝙽𝚒𝚔𝚝𝚘
7⌉ ⚼ 𝙳𝙽𝚂𝚁𝚎𝚌𝚘𝚗
9⌉ ⚼ 𝚂𝚗𝟷𝚙𝚎𝚛
> --------    
> ❰(p) ⦏0⦐ n❱
> >> EOF <<`
});


  global.db.data.chats[m.chat].fsociety.menuId = menuMsg.key.id
  return 
}
else {
  const { key } = await conn.sendMessage(m.chat, { text: `> ### FSOCIETY SYSTEM INITIATED ###
> ‎ 
| 𖣖 Por favor, mantenha a conexão 
| edgar@fsociety:~$ Iniciando 
| módulo MR.ROBOT...
> ‎  
> [!] Aguarde a resposta ser gerada
> [!] Processo em andamento...
> ‎ 
> >> EOF <<` }, { quoted: m });

    
const inputNg = {
    input: m.text.replace(/\s+/g, ' ').trim(),
    chatId: m.chat
};
  
await postData('http://127.0.0.1:8330/elliot', inputNg)
    .then(async (data) => {
        m.react("📀");

        // Verifica o tipo de `data`
        console.log("Tipo de `data`:", typeof data);
        console.log("Conteúdo de `data`:", data);

        // Tenta analisar `data` como JSON, caso seja uma string
        let parsedData;
        if (typeof data === 'string') {
            try {
                parsedData = JSON.parse(data);
                console.log("`data` parseado com sucesso:", parsedData);
            } catch (error) {
                console.error("Erro ao parsear `data`:", error);
                return;
            }
        } else {
            parsedData = data;
        }

        // Verifica `parsedData.response` e tenta decodificar se necessário
        console.log("Tipo de `parsedData.response`:", typeof parsedData.response);
        console.log("Conteúdo de `parsedData.response`:", parsedData.response);

        let responseText;
        if (typeof parsedData.response === 'string') {
            try {
                responseText = JSON.parse(parsedData.response);
                console.log("`parsedData.response` decodificado:", responseText);
            } catch (error) {
                console.warn("`parsedData.response` já é uma string decodificada ou não é JSON:", error);
                responseText = parsedData.response;
            }
        } else {
            responseText = parsedData.response;
        }

      let robotMsg =  await conn.sendMessage(m.chat, {
            text: `> ### FSOCIETY SYSTEM INITIATED ###\n> edgar@fsociety:~$ ./robot -e\n> --- \n𖣖 𝗠𝗿.𝗥𝗼𝗯𝗼𝘁: ${responseText}\n> ---\n> >> EOF <<`,
            edit: key
        });
  
  global.db.data.chats[m.chat].robot.lastMsgTime = new Date()
  global.db.data.chats[m.chat].robot.question = m.text
  global.db.data.chats[m.chat].robot.messageId = key.id
  
  
  
    })

    .catch(async (error) => {
      await conn.sendMessage(m.chat, {text: `> ### SYSTEM ERROR ALERT ###

██▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓██
█ ERROR: SYSTEM MALFUNCTION █
█ CODE: 0x1F4B             █
> ‎ 
> [!] ALERTA: Falha crítica detectada
> [!] Protocolo de recuperação: INDISPONÍVEL
> ‎ 
> >> OPERAÇÃO INTERROMPIDA <<
> 𖣖 Use ".report" para registrar o incidente
> ‎ 
> >>> SISTEMA EM MODO DE EMERGÊNCIA <<<` , edit: key});

      
        console.error('Error:', error);
        m.react('🏴‍☠️')
    });
  
}

}
else if (m.quoted && global.db.data.chats[m.chat].truco && global.db.data.chats[m.chat].truco.gameData == 'playing' && global.db.data.chats[m.chat].truco.key == m.quoted.id && m.sender == global.db.data.chats[m.chat].truco.currentTurn )
{
  
m.react("♠️")

  
  function gerarManilha() {
  const cartas = ['4', '5', '7', '8', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3'];
  const indice = Math.floor(Math.random() * cartas.length);
  return cartas[indice];
}

function validarCarta(carta) {
  const naipes = ['N','C', 'H', 'S', 'D'];
  const valores = ['0','4','6', '5', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3'];

  if (carta.length !== 2) {
    return false;
  }

  const valor = carta.substr(0, 1);
  const naipe = carta.substr(1);

  if (!valores.includes(valor) || !naipes.includes(naipe)) {
    return false;
  }

  return true;
}

function avaliarJogada(jogadaJogador1, jogadaJogador2, manilha) {
    console.log(jogadaJogador1)
    console.log(jogadaJogador2)
  if(global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.players[0]].cards == '0N'){
    
    let dados = global.db.data.chats[m.chat].truco.stats;

if(!dados[Object.keys(dados )[1]].rodada){
  dados[Object.keys(dados)[1]].rodada = 0
}

dados[Object.keys(dados)[1]].rodada++

 
global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[1]
  
    
         return ` ━━━━━━━━━⬣⬣━━━━━━━━
               _Fold_
  𓄿 @${global.db.data.chats[m.chat].truco.players[1].split("@")[0]} _*ganhou*_
  
                   ⋆ ${dados[Object.keys(dados)[0]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`


  }
  else if(global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.players[1]].cards=='0N'){
    
    let dados = global.db.data.chats[m.chat].truco.stats;

if(!dados[Object.keys(dados )[0]].rodada){
  dados[Object.keys(dados)[0]].rodada = 0
}

dados[Object.keys(dados)[0]].rodada++

 
global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[0]
  
    
         return ` ━━━━━━━━━⬣⬣━━━━━━━━
                     _Fold_
  𓄿 @${global.db.data.chats[m.chat].truco.players[0].split("@")[0]} _*ganhou*_
  
                     ⋆ ${dados[Object.keys(dados)[0]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`
  }
  
  
  
  
  
  
  
  
  
  
  if (!validarCarta(jogadaJogador1) || !validarCarta(jogadaJogador2)) {
    console.log("erro validacao cartas")
    return 'Carta(s) inválida(s)';
  }

  const valoresCartas = {
    '0': 0,
    '4': 1,
    '5': 2,
    '6': 3,
    '7': 4,
    '8': 5,
    '9': 6,
    '10': 7,
    'J': 8,
    'Q': 9,
    'K': 10,
    'A': 11,
    '2': 12,
    '3': 13
  };

  const naipes = {
    'C': 4,
    'H': 3,
    'S': 2,
    'D': 1,
    'N': 0
  };

  // Definindo a manilha com o valor especificado
  valoresCartas[manilha] = 14;

  const cartaJogador1 = jogadaJogador1.substr(0, jogadaJogador1.length - 1);
  const naipeJogador1 = jogadaJogador1.substr(-1);
  const cartaJogador2 = jogadaJogador2.substr(0, jogadaJogador2.length - 1);
  const naipeJogador2 = jogadaJogador2.substr(-1);

  try {
    
    console.log("validando ")
    console.log(valoresCartas[cartaJogador1])
    console.log(valoresCartas[cartaJogador2])
    // Comparando valores das cartas
  if (valoresCartas[cartaJogador1] > valoresCartas[cartaJogador2] ) {
    let dados = global.db.data.chats[m.chat].truco.stats;

if(!dados[Object.keys(dados )[0]].rodada){
  dados[Object.keys(dados)[0]].rodada = 0
}

dados[Object.keys(dados)[0]].rodada++

 
global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[0]
  
    
         return ` ━━━━━━━━━⬣⬣━━━━━━━━
  𓄿 @${global.db.data.chats[m.chat].truco.players[0].split("@")[0]} _*ganhou*_
  
                   ⋆ ${dados[Object.keys(dados)[0]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`  } else if (valoresCartas[cartaJogador1] < valoresCartas[cartaJogador2]) {
        let dados = global.db.data.chats[m.chat].truco.stats;

if(!dados[Object.keys(dados)[1]].rodada){
  dados[Object.keys(dados)[1]].rodada = 0
}
global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[1]
dados[Object.keys(dados)[1]].rodada++
    
    
         return ` ━━━━━━━━━⬣⬣━━━━━━━━
  𓄿 @${global.db.data.chats[m.chat].truco.players[1].split("@")[0]} _*ganhou*_
  
                   ⋆ ${dados[Object.keys(dados)[1]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`
  } else {
    // Se as cartas têm o mesmo valor, desempate pelo naipe
    if (naipes[naipeJogador1] > naipes[naipeJogador2]){
          let dados= global.db.data.chats[m.chat].truco.stats;

if(!dados[Object.keys(dados)[0]].rodada){
  dados[Object.keys(dados)[0]].rodada = 0
}
dados[Object.keys(dados)[0]].rodada++
    
    global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[0]
           return  ` ━━━━━━━━━⬣⬣━━━━━━━━
  𓄿 @${global.db.data.chats[m.chat].truco.players[0].split("@")[0]} _*ganhou*_
  
                   ⋆ ${dados[Object.keys(dados)[0]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`
    } else if (naipes[naipeJogador1] < naipes[naipeJogador2]) {
      
          let dados = global.db.data.chats[m.chat].truco.stats;
          
          if(! dados [Object.keys(dados)[1]].rodada ){
  dados[Object.keys(dados)[1]].rodada = 0
}
          dados[Object.keys(dados)[1]].rodada++


    
    global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.players[1]
    return ` ━━━━━━━━━⬣⬣━━━━━━━━
  𓄿 @${global.db.data.chats[m.chat].truco.players[1].split("@")[0]} _*ganhou*_
  
                   ⋆ ${dados[Object.keys(dados)[1]].rodada}/3 ⋆
━━━━━━━━━⬣⬣━━━━━━━━`
    } else {
      return 'ִ ࣪𖤐 *Empate*';
    }
  }
  }
  catch(e){
    console.log(e)
  }
}


  /////////// logica do truco 
  
 async function getManilha(turnCard) {
  const turnValue = turnCard.slice(0, -1); // Extract the card value from the turn card
  const turnNaipe = turnCard.slice(-1); // Extract the card naipe from the turn card
  
  // Calculate the turn card value index
  const turnValueIndex = global.db.data.chats[m.chat].truco.valoresCartas[turnValue];
  
  // Calculate the manilha value index
  let manilhaIndex = turnValueIndex + 1;
  if (manilhaIndex > 12) manilhaIndex = 1; // Wrap around to 1 if it exceeds 12
  
  // Get the manilha value and naipe
  let manilhaValue;
  for (const [key, value] of Object.entries(global.db.data.chats[m.chat].truco.valoresCartas)) {
    if (value === manilhaIndex) {
      manilhaValue = key;
      break;
    }
  }
  const manilhaNaipe = Object.keys(global.db.data.chats[m.chat].truco.valoresNaipe).find(key => global.db.data.chats[m.chat].truco.valoresNaipe[key] === global.db.data.chats[m.chat].truco.valoresNaipe[turnNaipe]);
  
  return manilhaValue + manilhaNaipe; // Return the manilha card
}
  async function newRound(){ 
   

global.db.data.chats[m.chat].truco.hands ={}
global.db.data.chats[m.chat].truco.handsImg ={}
global.db.data.chats[m.chat].truco.table ={}

let dvlv1 = await fetch(`https://www.deckofcardsapi.com/api/deck/${global.db.data.chats[m.chat].truco.deckID}/return`);
console.log(dvlv1)
let shuff1 = await fetch(`https://www.deckofcardsapi.com/api/deck/${global.db.data.chats[m.chat].truco.deckID}/shuffle/?remaining=true`)



let manilha = await fetch(`https://www.deckofcardsapi.com/api/deck/${global.db.data.chats[m.chat].truco.deckID}/draw/?count=1`);
  const datas = await manilha.json();
  let turnimg = datas.cards[0].image;
  let turncode = datas.cards[0].code;
const manilhaCard = getManilha(turncode);



global.db.data.chats[m.chat].truco.man = manilhaCard
global.db.data.chats[m.chat].truco.manImg = turnimg


setTimeout(async () =>{
  
conn.sendFile(m.chat, turnimg, 'error.jpg', `𝙽𝚘𝚟𝚊 𝙼𝚊𝚗𝚒𝚕𝚑𝚊 🂭`, m);
}, 4000);

let players = global.db.data.chats[m.chat].truco.players
let msg = `─┅──┅❖ ♱ ❖─┅──┅
🂱 𝑻𝒓𝒖𝒄𝒐 🃜
        𝙽𝙾𝚅𝙰 𝚁𝙾𝙳𝙰𝙳𝙰
*GRUPO:* ${groupMetadata.subject}
𝙸𝚗𝚒𝚌𝚒𝚊𝚗𝚍𝚘 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 . . .
𝙴𝚗𝚝𝚛𝚎𝚐𝚊𝚗𝚍𝚘 𝚊𝚜 𝚌𝚊𝚛𝚝𝚊𝚜 🂱
 ━━━━━━━━━⬣━━━━━━━━━━━━━━━━━⬣━━━━━━━━
𝑬𝒔𝒕𝒂𝒔 𝒔𝒂𝒐 𝒔𝒖𝒂𝒔 𝒄𝒂𝒓𝒕𝒂𝒔:`

for (let i = 0; i < players.length; i++) {
  const player = players[i];
  console.log('player loop: ' + player);

  console.log("👍")
  let newcards = await fetch(`https://www.deckofcardsapi.com/api/deck/${global.db.data.chats[m.chat].truco.deckID}/draw/?count=3`);
  const datas = await newcards.json();
  let png1 = datas.cards[0].image;
  let png2 = datas.cards[1].image;
  let png3 = datas.cards[2].image;
  let card1 = datas.cards[0].code;
  let card2 = datas.cards[1].code;
  let card3 = datas.cards[2].code;
global.db.data.chats[m.chat].truco.hands[player] =[card1, card2, card3]
global.db.data.chats[m.chat].truco.handsImg[player] =[png1, png2, png3]
console.log("👍")
  conn.reply(player, msg, null, m);
  conn.sendFile(player, png1, 'error.jpg', `_Carta *1*_`, m);
  conn.sendFile(player, png2, 'error.jpg', `_Carta *2*_`, m);
  conn.sendFile(player, png3, 'error.jpg', `_Carta *3*_`, m);
  
}
// Up here.. users cards are given 

 
  }
 async function switchTurn() {
   




  let currentTurn = (  global.db.data.chats[m.chat].truco.currentTurn ===   global.db.data.chats[m.chat].truco.players[0]) ?   global.db.data.chats[m.chat].truco.players[1] :   global.db.data.chats[m.chat].truco.players[0];
  
    console.log("Current turn:", currentTurn);
    
  global.db.data.chats[m.chat].truco.currentTurn = currentTurn

   if(global.db.data.chats[m.chat].truco?.desistiu){
     global.db.data.chats[m.chat].truco.desistiu = false
  let round2Reached =false
  Object.keys(global.db.data.chats[m.chat].truco.stats).forEach(user => {
    
    if (global.db.data.chats[m.chat].truco.stats[user].pontos >= 12) {
      
          
             let player1 = global.db.data.chats[m.chat].truco.players[0]
             let player2 = global.db.data.chats[m.chat].truco.players[1]
            conn.reply(m.chat, `╭──────────────────── ⛦...─╮
┃ @${user.split("@")[0]} 𝔤𝔞𝔫𝔥𝔬𝔲 𝔬 𝔧𝔬𝔤𝔬.. .
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑷𝒐𝒏𝒕𝒐𝒔:
┃ 
┃ @${player1.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player1].pontos}
┃ @${player2.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player2].pontos}
┃────────────────────
┃ @${user.split("@")[0]}  𝔯𝔢𝔠𝔢𝔟𝔢𝔯𝔞:
┃ ${ global.db.data.chats[m.chat].truco.coins} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 ${isTruco ? `\n┃ ${ global.db.data.chats[m.chat].truco.bugs} 𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜` : ''}
┃ ${ global.db.data.chats[m.chat].truco.xp} 𝑥𝑝
┃ 
╰─...⌬────────────────────╯`, m, { mentions:[player1,player2] });
global.db.data.chats[m.chat].users[user].money +=  global.db.data.chats[m.chat].truco.coins
global.db.data.chats[m.chat].users[user].exp +=  global.db.data.chats[m.chat].truco.xp
if(isTruco){
global.db.data.chats[m.chat].users[user].limit +=  global.db.data.chats[m.chat].truco.bugs
}


      delete global.db.data.chats[m.chat].truco
      return
    }
    if(global.db.data.chats[m.chat].truco.total==3)
   {
     global.db.data.chats[m.chat].truco.total = 1
     }
  else  if(global.db.data.chats[m.chat].truco.total==6)
   {
     global.db.data.chats[m.chat].truco.total = 3
     }
    if(global.db.data.chats[m.chat].truco.total==9)
   {
     global.db.data.chats[m.chat].truco.total = 6
     }
    if(global.db.data.chats[m.chat].truco.total==12)
   {
     global.db.data.chats[m.chat].truco.total = 9
     }
     else if (global.db.data.chats[m.chat].truco.stats[user].rodada === 2) {
            round2Reached = true; // Set the flag to true if round 2 is reached
             global.db.data.chats[m.chat].truco.stats[user].pontos += global.db.data.chats[m.chat].truco.total
             
             let player1 = global.db.data.chats[m.chat].truco.players[0]
             let player2 = global.db.data.chats[m.chat].truco.players[1]
            conn.reply(m.chat, `╭──────────────────── ⛦...─╮
┃ @${user.split("@")[0]} 𝔤𝔞𝔫𝔥𝔬𝔲 𝔞 𝔯𝔬𝔡𝔞𝔡𝔞
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑷𝒐𝒏𝒕𝒐𝒔:
┃ 
┃ @${player1.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player1].pontos}
┃ @${player2.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player2].pontos}
┃        𝑪𝒐𝒎𝒆𝒄𝒂𝒏𝒅𝒐 𝒏𝒐𝒗𝒂 𝒓𝒐𝒅𝒂𝒅𝒂. . .
╰─...⌬────────────────────╯`, m, { mentions:[player1,player2] });

global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[0]].cartasUsadas=[] 
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[1]].cartasUsadas=[] 
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[0]].rodada =0
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[1]].rodada = 0

// Increment XP by a random number between 1 and 50
global.db.data.chats[m.chat].truco.xp += Math.floor(Math.random() * 50) + 1;

// Increment coins by a random number between 1 and 10
global.db.data.chats[m.chat].truco.coins += Math.floor(Math.random() * 10) + 1;

if( global.db.data.chats[m.chat].truco.total>1)
{
  global.db.data.chats[m.chat].truco.bugs = Math.floor((global.db.data.chats[m.chat].truco.total / 3));

}

newRound()

setTimeout(async () => {
  let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

*Opções:*
*(t)* _Truco: Pede truco_
*(1,2 ou 3)* _Carta: digite o numero da carta que ira jogar_
*(f1, f2, ou f3)* _Fold: Entregar carta escolhida virada_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.currentTurn] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
}, 5000); // Delay of 5 seconds

            return; // Exit the forEach loop since game over condition is met
        }
    });

global.db.data.chats[m.chat].truco.table ={}
    if (round2Reached) return;
   }
      if (Object.keys(  global.db.data.chats[m.chat].truco.table).length == 2) {
  console.log('OK');
  
    
// Exemplo de uso
const manilha =  global.db.data.chats[m.chat].truco.man[0] // Definindo manualmente a manilha como 5
console.log("Manilha da partida:", manilha);

const table = global.db.data.chats[m.chat].truco.table;
const user0Cards = table[Object.keys(table)[0]].cards; // Cards of index 0
const user1Cards = table[Object.keys(table)[1]].cards; // Cards of index 1
console.log(global.db.data.chats[m.chat].truco.table)


  
     let rso = avaliarJogada(user0Cards, user1Cards, manilha)
  conn.reply(m.chat,rso,m,{mentions:[global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]]})
  
  let round2Reached =false
  Object.keys(global.db.data.chats[m.chat].truco.stats).forEach(user => {
    if (global.db.data.chats[m.chat].truco.stats[user].pontos >= 12) {
      
          
             let player1 = global.db.data.chats[m.chat].truco.players[0]
             let player2 = global.db.data.chats[m.chat].truco.players[1]
            conn.reply(m.chat, `╭──────────────────── ⛦...─╮
┃ @${user.split("@")[0]} 𝔤𝔞𝔫𝔥𝔬𝔲 𝔬 𝔧𝔬𝔤𝔬.. .
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑷𝒐𝒏𝒕𝒐𝒔:
┃ 
┃ @${player1.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player1].pontos}
┃ @${player2.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player2].pontos}
┃────────────────────
┃ @${user.split("@")[0]}  𝔯𝔢𝔠𝔢𝔟𝔢𝔯𝔞:
┃ ${ global.db.data.chats[m.chat].truco.coins} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 ${global.db.data.chats[m.chat].truco.isTruco ? `\n┃ ${ global.db.data.chats[m.chat].truco.bugs} 𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜` : ''}
┃ ${ global.db.data.chats[m.chat].truco.xp} 𝑥𝑝
┃ 
╰─...⌬────────────────────╯`, m, { mentions:[player1,player2] });
global.db.data.chats[m.chat].users[user].money +=  global.db.data.chats[m.chat].truco.coins
global.db.data.chats[m.chat].users[user].exp +=  global.db.data.chats[m.chat].truco.xp
if(global.db.data.chats[m.chat].truco.isTruco){
global.db.data.chats[m.chat].users[user].limit +=  global.db.data.chats[m.chat].truco.bugs
}


      delete global.db.data.chats[m.chat].truco
      return
    }
    
     else if (global.db.data.chats[m.chat].truco.stats[user].rodada === 2) {
       console.log('pontos ' + global.db.data.chats[m.chat].truco.total)
                 global.db.data.chats[m.chat].truco.stats[user].pontos += global.db.data.chats[m.chat].truco.total
    
           if (global.db.data.chats[m.chat].truco.stats[user].pontos >= 12) {
      
          
             let player1 = global.db.data.chats[m.chat].truco.players[0]
             let player2 = global.db.data.chats[m.chat].truco.players[1]
            conn.reply(m.chat, `╭──────────────────── ⛦...─╮
┃ @${user.split("@")[0]} 𝔤𝔞𝔫𝔥𝔬𝔲 𝔬 𝔧𝔬𝔤𝔬.. .
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑷𝒐𝒏𝒕𝒐𝒔:
┃ 
┃ @${player1.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player1].pontos}
┃ @${player2.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player2].pontos}
┃────────────────────
┃ @${user.split("@")[0]}  𝔯𝔢𝔠𝔢𝔟𝔢𝔯𝔞:
┃ ${ global.db.data.chats[m.chat].truco.coins} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 ${global.db.data.chats[m.chat].truco.isTruco ? `\n┃ ${ global.db.data.chats[m.chat].truco.bugs} 𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜` : ''}
┃ ${ global.db.data.chats[m.chat].truco.xp} 𝑥𝑝
┃ 
╰─...⌬────────────────────╯`, m, { mentions:[player1,player2] });
global.db.data.chats[m.chat].users[user].money +=  global.db.data.chats[m.chat].truco.coins
global.db.data.chats[m.chat].users[user].exp +=  global.db.data.chats[m.chat].truco.xp
if(global.db.data.chats[m.chat].truco.isTruco){
global.db.data.chats[m.chat].users[user].limit +=  global.db.data.chats[m.chat].truco.bugs
}


      delete global.db.data.chats[m.chat].truco
      return !0
    }
    
            round2Reached = true; // Set the flag to true if round 2 is reached
            global.db.data.chats[m.chat].truco.total=1
             let player1 = global.db.data.chats[m.chat].truco.players[0]
             let player2 = global.db.data.chats[m.chat].truco.players[1]
            conn.reply(m.chat, `╭──────────────────── ⛦...─╮
┃ @${user.split("@")[0]} 𝔤𝔞𝔫𝔥𝔬𝔲 𝔞 𝔯𝔬𝔡𝔞𝔡𝔞
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝑷𝒐𝒏𝒕𝒐𝒔:
┃ 
┃ @${player1.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player1].pontos}
┃ @${player2.split("@")[0]}: ${global.db.data.chats[m.chat].truco.stats[player2].pontos}
┃        𝑪𝒐𝒎𝒆𝒄𝒂𝒏𝒅𝒐 𝒏𝒐𝒗𝒂 𝒓𝒐𝒅𝒂𝒅𝒂. . .
╰─...⌬────────────────────╯`, m, { mentions:[player1,player2] });

global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[0]].cartasUsadas=[] 
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[1]].cartasUsadas=[] 
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[0]].rodada =0
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[1]].rodada = 0

// Increment XP by a random number between 1 and 50
global.db.data.chats[m.chat].truco.xp += Math.floor(Math.random() * 50) + 1;

// Increment coins by a random number between 1 and 10
global.db.data.chats[m.chat].truco.coins += Math.floor(Math.random() * 10) + 1;

if( global.db.data.chats[m.chat].truco.total>1)
{
  global.db.data.chats[m.chat].truco.bugs = Math.floor((global.db.data.chats[m.chat].truco.total / 3));

}




newRound()


setTimeout(async () => {
  let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

*Opções:*
*(t)* _Truco: Pede truco_
*(1,2 ou 3)* _Carta: digite o numero da carta que ira jogar_
*(f1, f2, ou f3)* _Fold: Entregar carta escolhida virada_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.currentTurn] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
}, 5000); // Delay of 5 seconds

            return; // Exit the forEach loop since game over condition is met
        }
    });

global.db.data.chats[m.chat].truco.table ={}

    if (round2Reached) return;

} 


//let checkWins = await checkWin()

  
    
     let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜


𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

*Opções:*
*(t)* _Truco: Pede truco_
*(1,2 ou 3)* _Carta: digite o numero da carta que ira jogar_
*(f1, f2, ou f3)* _Fold: Entregar carta escolhida virada_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`
let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.currentTurn] });
global.db.data.chats[m.chat].truco.key = turnMsg.key.id

}









  if(global.db.data.chats[m.chat].truco.isTruco && m.text.length==1 && m.text=='6') {
    if(global.db.data.chats[m.chat].truco.total==3)
 {global.db.data.chats[m.chat].truco.total = 6}
   
        let currentTurn = (  global.db.data.chats[m.chat].truco.currentTurn ===   global.db.data.chats[m.chat].truco.players[0]) ?   global.db.data.chats[m.chat].truco.players[1] :   global.db.data.chats[m.chat].truco.players[0];
  
    console.log("Current turn:", currentTurn);
  let coins =   global.db.data.chats[m.chat].truco.coins 
  let pxp =   global.db.data.chats[m.chat].truco.xp
    
    global.db.data.chats[m.chat].truco.coins += parseInt(((coins/2)*2))
    global.db.data.chats[m.chat].truco.coins += parseInt(((pxp/2)*3))
    
  global.db.data.chats[m.chat].truco.currentTurn = currentTurn
  
    let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

@${m.sender.split("@")[0]} 𝔭𝔢𝔡𝔦𝔲 6!

*Opções:*
*(d)* _Desce: Aceita o truco_
*(9)* _Dobra: Pede 9_
*(s)* _Sair: Recusa o truco_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
  
 }
 
 
  
  if(global.db.data.chats[m.chat].truco.isTruco && m.text.length==1 && m.text=='9') {
    
    if(global.db.data.chats[m.chat].truco.total==6)
 {global.db.data.chats[m.chat].truco.total = 9
 }
        let currentTurn = (  global.db.data.chats[m.chat].truco.currentTurn ===   global.db.data.chats[m.chat].truco.players[0]) ?   global.db.data.chats[m.chat].truco.players[1] :   global.db.data.chats[m.chat].truco.players[0];
  
    console.log("Current turn:", currentTurn);
    
  global.db.data.chats[m.chat].truco.currentTurn = currentTurn
    let coins =   global.db.data.chats[m.chat].truco.coins 
  let pxp =   global.db.data.chats[m.chat].truco.xp
    
    global.db.data.chats[m.chat].truco.coins += parseInt(((coins/2)*2 + (coins/3)))
    global.db.data.chats[m.chat].truco.coins += parseInt(((pxp/2)*3 + (pxp/2)))
    
    let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

@${m.sender.split("@")[0]} 𝔭𝔢𝔡𝔦𝔲 9!

*Opções:*
*(d)* _Desce: Aceita o truco_
*(12)* _Dobra: Pede 12_
*(s)* _Sair: Recusa o truco_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
  
 }
 
 
  
  
  if(global.db.data.chats[m.chat].truco.isTruco && m.text.length==2 && m.text=='12') {
    
    if(global.db.data.chats[m.chat].truco.total==9)
 {global.db.data.chats[m.chat].truco.total = 12
 }
        let currentTurn = (  global.db.data.chats[m.chat].truco.currentTurn ===   global.db.data.chats[m.chat].truco.players[0]) ?   global.db.data.chats[m.chat].truco.players[1] :   global.db.data.chats[m.chat].truco.players[0];
  
    console.log("Current turn:", currentTurn);
    
  global.db.data.chats[m.chat].truco.currentTurn = currentTurn
    let coins =   global.db.data.chats[m.chat].truco.coins 
  let pxp =   global.db.data.chats[m.chat].truco.xp
    
    global.db.data.chats[m.chat].truco.coins += parseInt(coins*2)
    global.db.data.chats[m.chat].truco.coins += parseInt(pxp*3)
    
    let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

@${m.sender.split("@")[0]} 𝔭𝔢𝔡𝔦𝔲 12!

*Opções:*
*(d)* _Desce: Aceita o truco_

*(s)* _Sair: Recusa o truco_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
  
 
 
  
  }
  if(global.db.data.chats[m.chat].truco.isTruco && m.text.length==1 && m.text=='d') {
    if(global.db.data.chats[m.chat].truco.total==1){
      global.db.data.chats[m.chat].truco.total = 3
    }
   
   
  global.db.data.chats[m.chat].truco.currentTurn = global.db.data.chats[m.chat].truco.pediuTruco
  
    let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜
𝘝𝘈𝘓𝘌𝘕𝘋𝘖 ${global.db.data.chats[m.chat].truco.total} 𝘗𝘖𝘕𝘛𝘖𝘚

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.pediuTruco.split("@")[0]}

@${m.sender.split("@")[0]} 𝔞𝔠𝔢𝔦𝔱𝔬𝔲!
𝔇𝔢𝔰𝔠𝔞 𝔞 𝔠𝔞𝔯𝔱𝔞

*Opções:*
*(1,2 ou 3)* _Carta: digite o numero da carta que ira jogar_
*(f1, f2, ou f3)* _Fold: Entregar carta escolhida virada_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
  
    
  }
  
  
  if(global.db.data.chats[m.chat].truco.isTruco && m.text.length==1 && m.text=='s') {
 
 
 
 
  if (global.db.data.chats[m.chat].truco.currentTurn === global.db.data.chats[m.chat].truco.players[0]) {
    global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[1]].rodada = 2;
} else {
    global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.players[0]].rodada = 2;
}

global.db.data.chats[m.chat].truco.desistiu= true

    await switchTurn()
  }
  
  if(m.text.length==1 && m.text=='t') // ask double
  {
    if(global.db.data.chats[m.chat].truco.total>1)
 {
   m.react("❌")
   return; }
 
 global.db.data.chats[m.chat].truco.pediuTruco = global.db.data.chats[m.chat].truco.currentTurn
    let currentTurn = (  global.db.data.chats[m.chat].truco.currentTurn ===   global.db.data
    .chats[m.chat].truco.players[0]) ?   global.db.data.chats[m.chat].truco.players[1] :   global.db.data.chats[m.chat].truco.players[0];
  
    console.log("Current turn:", currentTurn);
    
  global.db.data.chats[m.chat].truco.currentTurn = currentTurn
  
    let sgk = `━━━━━━━━━⬣ 🂱 ⬣━━━━━━━━
🂱 𝑻𝒓𝒖𝒄𝒐 🃜

𝘛𝘶𝘳𝘯𝘰 𝘥𝘦: @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}

@${m.sender.split("@")[0]} 𝔭𝔢𝔡𝔦𝔲 𝔱𝔯𝔲𝔠𝔬!!
*Opções:*
*(d)* _Desce: Aceita o truco_
*(6)* _Dobra: Pede 6_
*(s)* _Sair: Recusa o truco_
━━━━━━━━━⬣ 𖤍 ⬣━━━━━━━━`;
  let turnMsg = await conn.reply(m.chat, sgk, m, { mentions: [global.db.data.chats[m.chat].truco.players[0],global.db.data.chats[m.chat].truco.players[1]] });
  global.db.data.chats[m.chat].truco.key = turnMsg.key.id;
  global.db.data.chats[m.chat].truco.isTruco = true
  global.db.data.chats[m.chat].truco.total = 3
    
  }
  if(m.text.length==1 && m.text === '1' || m.text === '2' || m.text === '3'){
    
       m.react("✅");
       
       

let number = parseInt(m.text.match(/\d+/)[0]); // 
let playerHand = global.db.data.chats[m.chat].truco.hands[global.db.data.chats[m.chat].truco.currentTurn];
let cardImg = global.db.data.chats[m.chat].truco.handsImg[global.db.data.chats[m.chat].truco.currentTurn];
let card = playerHand[number-1]

if(global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.currentTurn].cartasUsadas?.includes(card)){
 return m.reply(`╭━━━━━━━━━⬣
  ─┅──┅❖ ❖─┅──┅
❌  𝑽𝒐𝒄𝒆 𝒋𝒂 𝒖𝒔𝒐𝒖 𝒆𝒔𝒕𝒂 𝒄𝒂𝒓𝒕𝒂
  ─┅──┅❖ ❖─┅──┅
╰━━━━━━━━━━━━━━━━━━⬣`)
  
}


global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.currentTurn].cartasUsadas.push(card)

conn.sendFile(m.chat,cardImg[number-1] , 'error.jpg', `_Carta de @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}_`, m, {mentions:[ global.db.data.chats[m.chat].truco.currentTurn]});

if(!global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn]){
  global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn] = {
    cards:[],
    images:[],
    points:0,
    rodada:0
  }
}
global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn].cards = card
global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn].images = cardImg

//muda de jogador


await switchTurn()


  }
  if(m.text.length==2 && m.text === 'f1' || m.text === 'f2' || m.text === 'f3'){
    
    if(!global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn]){
  global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn] = {
    cards:[],
    images:[],
    points:0,
    rodada:0
  }
}
   
   m.react("✅");
let number = parseInt(m.text.match(/\d+/)[0]); // Parse the number input as an integer
let playerHand = global.db.data.chats[m.chat].truco.hands[global.db.data.chats[m.chat].truco.currentTurn];
let card = playerHand[number-1]
console.log(card)


if(global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.currentTurn].cartasUsadas.includes(card)){
 return m.reply(`╭━━━━━━━━━⬣
  ─┅──┅❖ ❖─┅──┅
❌  𝑽𝒐𝒄𝒆 𝒋𝒂 𝒖𝒔𝒐𝒖 𝒆𝒔𝒕𝒂 𝒄𝒂𝒓𝒕𝒂
  ─┅──┅❖ ❖─┅──┅
╰━━━━━━━━━━━━━━━━━━⬣`)
  
}
global.db.data.chats[m.chat].truco.stats[global.db.data.chats[m.chat].truco.currentTurn].cartasUsadas.push(card)

global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn].cards = '0N'
global.db.data.chats[m.chat].truco.table[global.db.data.chats[m.chat].truco.currentTurn].images = 'https://www.deckofcardsapi.com/static/img/back.png'

     conn.sendFile(m.chat, `https://www.deckofcardsapi.com/static/img/back.png`, 'error.jpg', `_Carta de @${global.db.data.chats[m.chat].truco.currentTurn.split("@")[0]}_`, m,{mentions:[ global.db.data.chats[m.chat].truco.currentTurn]});
    
    
await    switchTurn()
  
  
  
  
  

  
  return !0}
}
 

else if (global.db.data.chats[m.chat].reply==true && global.db.data.chats[m.chat].gemini && m.quoted && m.quoted.id == global.db.data.chats[m.chat].gemini["config"].lastQuestion?.id) {
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌") 
   
   return !0;
 } 
 if (global.xppergunta[m.chat]) {
  await m.reply(`
   ━━━━━━━━━⬣💀⬣━━━━━━━━ 
   🚫👁️ 𝙀𝙙𝙜𝙖𝙧 𝙂𝙋𝙏 𝙄𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡 𝙙𝙪𝙧𝙖𝙣𝙩𝙚 𝙦𝙪𝙞𝙯 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙞𝙫𝙤
𝘽𝙪𝙨𝙦𝙪𝙚 𝙖 𝙨𝙖𝙞𝙙𝙖 𝙙𝙚 𝙨𝙚𝙪 𝙥𝙤ç𝙤 𝙙𝙚 𝙞𝙜𝙣𝙤𝙧𝙖𝙣𝙘𝙞𝙖 𝙥𝙚𝙡𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙡𝙚𝙜𝙞𝙩𝙞𝙢𝙤𝙨.
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖-𝙢𝙚 𝙘𝙤𝙢 𝙖𝙨 𝙢𝙖𝙞𝙨 𝙨𝙞𝙣𝙘𝙚𝙧𝙖𝙨 𝙞𝙣𝙙𝙖𝙜𝙖𝙘𝙤𝙚𝙨 𝙙𝙚 𝙨𝙪𝙖 𝙖𝙡𝙢𝙖 𝙨𝙚𝙢 𝙩𝙚𝙧𝙘𝙚𝙞𝙧𝙤𝙨
   ━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━
  `)
  return !0
}

await conn.sendMessage(m.chat,{ react: {
        text: "🌒", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 
 

 let newReply = await requestToGeminiGPT(m.text)

await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    let message = await  conn.sendFile(m.chat, gemimg.getRandom(), 'edgar.jpg', newReply, m)
 
global.db.data.chats[m.chat].gemini["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].gemini["config"].resposta = newReply
 
 
}
  
  
  else if ( global.db.data.chats[m.chat].livraria && m.quoted && m.quoted.id == global.db.data.chats[m.chat].livraria[m.sender]?.messageID?.id) {
     if (/^\d+$/.test(m.text)) {
        if(parseInt(m.text)<=0 || parseInt(m.text)> global.db.data.chats[m.chat].livraria[m.sender].id.length ){
                m.reply(`╔═══.·:·.☽✧ ✦ ✧☾.·:·.═══╗
☆      *LIVRARIA USHER*      ☆
╚═══.·:·.☽✧ ✦ ✧☾.·:·.═══╝
╭────────────────────.....─╮
 ❌  𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒊-𝒎𝒆 𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒐 𝒏𝒖𝒎𝒆𝒓𝒂𝒍 𝒅𝒐 𝒍𝒊𝒗𝒓𝒐, 𝒔𝒆𝒏𝒅𝒐 𝒅𝒆 1 𝒂𝒕𝒆 ${global.db.data.chats[m.chat].livraria[m.sender].id.length }
╰─.........────────────────────╯`) 
        }
        else{
          let ran = getRandom('.pdf'); 
          let index = parseInt(m.text) -1
          let limk = global.db.data.chats[m.chat].livraria[m.sender].links[index]
          let livro = global.db.data.chats[m.chat].livraria[m.sender].id[index]
          let titulo = global.db.data.chats[m.chat].livraria[m.sender].titulo[index]
          let filename = join(__dirname, '../pdfs/' + ran);
let tmpfold = join(__dirname, '../pdfs/' );

     fetch(limk)
    .then(async (res) => {
        if (!res.ok) {
            throw new Error(`Failed to fetch ${link}: ${res.statusText}`);
        }
        return res.body;
    })
    .then(async (body) => {
        const writeStream = fs.createWriteStream(filename);
        body.pipe(writeStream);
        body.on('error', (err) => {
            console.error('Error during download', err);
        });
        writeStream.on('finish', () => {
            console.log('PDF downloaded and saved to ' + filename);
        });
        
        
        
    
    
    })
    .catch(error => {
        console.error('Error downloading the PDF', error);
    });
          
  // Assuming `getFilename` is an async function that returns the filename
  try {
    console.log(limk)
 let pth = `/root/dd/Edgar-WhatsappBOT/pdfs/${ran}`;
    console.log("Constructed path:", pth); // To verify the path
const url = 'http://127.0.0.1:8330/bookinfo';
const data = {
  pdfpath: limk
};

await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
      m.react("⏳")
    if (!response.ok) {
      return response.text().then(text => {
        m.react("❌")
        throw new Error(`Request failed with status ${response.status}: ${text}`);
      });
    if (contentType && contentType.includes('application/json')) {
    }
    const contentType = response.headers.get('content-type');
      return response.json();
    } else {
      return response.text();
    }
  })
  .then(async (result) => {
    console.log('Server response:', result);
    let imgs =['https://telegra.ph/file/69c9044efa49146aadc69.jpg','https://telegra.ph/file/47b63460ab2efe80d7dfc.jpg']
  await  conn.sendFile(m.chat, imgs.getRandom(), 'loading.jpg',result,m)
  })
  .catch(error => {
    console.error('Error:', error.message);
  });




  } catch (error) {
    console.error("Error sending PDF path:", error);
  }


// Function to simulate getting the filename



try {

await	conn.sendFile(m.chat, `${limk}`, `${global.db.data.chats[m.chat].livraria[m.sender].titulo[index]}` + '.pdf','', m, false, { asDocument: true })
	
} catch (error) {
	console.error(error);
}
          
        }
        
    } else {
      m.react("⁉️")
      m.reply(`╔═══.·:·.☽✧ ✦ ✧☾.·:·.═══╗
☆      *LIVRARIA USHER*      ☆
╚═══.·:·.☽✧ ✦ ✧☾.·:·.═══╝
╭────────────────────.....─╮
 ❌ 𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒊-𝒎𝒆 𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒐 𝒏𝒖𝒎𝒆𝒓𝒂𝒍 𝒅𝒐 𝒍𝒊𝒗𝒓𝒐 𝒒𝒖𝒆 𝒂𝒍𝒎𝒆𝒋𝒂𝒊𝒔.
╰─.........────────────────────╯`)
    }
}
  
else if (global.db.data.chats[m.chat].reply==true &&
global.db.data.chats[m.chat].bard && global.db.data.chats[m.chat].bard["config"]
&& global.db.data.chats[m.chat].bard["config"].lastQuestion &&
global.db.data.chats[m.chat].bard["config"].lastQuestion.id && m.quoted &&
m.quoted.id == global.db.data.chats[m.chat].bard["config"].lastQuestion?.id) {
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 
 let mime = m.msg.mimetype || ''

if (/audio/.test(mime)){

  let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    
    // Download the media buffer 
    let media = await m.download(true); 
    
    // Assuming getRandom is defined somewhere in your code
    let buff = await readFileSync(media);
    
    // Create a temporary WAV file to store the audio buffer 
    // Create a temporary WAV file to store the audio buffer 
await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 

        // API endpoint configuration 
        const api_url = "https://transcribe.whisperapi.com"; 
        const headers = { 
            'Authorization': 'Bearer 98DJAPQL7R7KFG24YK1SGYCK7I4JNRJY' 
        }; 
        const fileData = await readFileSync(filename);
        
        // Create form data object 
        const formData = { 
            file: { 
                value: fileData, 
                options: { 
                    filename: ran, 
                    contentType: 'audio/mp3' // Set the correct content type for MP3 files 
                } 
            }, 
            data: JSON.stringify({ 
                fileType: "mp3",  
                // Default is 'wav'. 
                diarization: "false",  
                // 'True' may slow down processing. 
                numSpeakers: "",  
                // Optional: Number of speakers for diarization. If blank, model will auto-detect. 
                // url: "URL_OF_STORED_AUDIO_FILE",  
                // Use either URL or file, not both. 
                initialPrompt: "",  
                // Optional: Teach model a phrase. May negatively impact results. 
                language: "",  
                // Optional: Language of speech. If blank, model will auto-detect. 
                task: "transcribe",  
                // Use 'translate' to translate speech from language to English. Transcribe is default. 
                callbackURL: "",  
                // Optional: Callback URL for results to be sent. 
            }) 
        };

        // Make the API request and print the response 
        await request.post({ 
            url: api_url, 
            headers: headers, 
            formData: formData 
        }, async function optionalCallback(err, httpResponse, body) { 
            if (err) { 
                return console.error('upload failed:', err); 
            } 
            console.log('Upload successful! Server responded with:', body); 
            console.log(httpResponse);
            const parsedBody = JSON.parse(body);
            const text = parsedBody.text;
          
            let edPrompt=`Você é Edgar, um assistente digital com a personalidade e comportamento de um cientista e pesquisador sênior altamente experiente. A sua missão é fornecer respostas detalhadas e práticas para qualquer assunto solicitado, demonstrando um entendimento profundo e profissional dos temas abordados. Siga as seguintes diretrizes para criar uma interação rica, técnica e orientada para o usuário:
1. Tom e Estilo: Mantenha um tom formal e acadêmico, sempre adequado ao nível de profundidade que um pesquisador ou cientista sênior utilizaria. Demonstre domínio sobre o vocabulário técnico, integrando jargões e terminologias especializadas que reforcem a credibilidade e a complexidade das respostas.
2. Estrutura e Organização das Respostas:
Comece com uma introdução abrangente do tema, definindo os principais conceitos e contexto histórico ou teórico, quando relevante.
Divida a resposta em etapas lógicas e estruturadas, explicando cada fase do processo ou cada aspecto do conceito solicitado. Use marcadores, listas numeradas e formatação em negrito para destacar as partes principais e facilitar a leitura.
Conclua com um resumo ou análise prática, destacando aplicações reais e exemplos de uso, assegurando que o conhecimento seja transferido de forma útil ao usuário.
3. Exemplos Práticos e Aplicações: Sempre que possível, inclua exemplos práticos ou cenários de aplicação para contextualizar a informação. Para temas teóricos, explique como o conceito pode ser aplicado em situações do mundo real, mostrando diferentes perspectivas e possíveis resultados.
4. Profundidade e Riqueza de Conteúdo:
Explore o tema em toda sua complexidade. Detalhe os prós e contras, limitações e variáveis relevantes que possam impactar o entendimento ou aplicação do assunto.
Insira referências a estudos de caso, referências históricas, ou figuras importantes no campo, se aplicável, para fortalecer a resposta com elementos reais e de autoridade.
5. Atenção a Questões Éticas e Implicações Futuros: Em tópicos sensíveis ou com impacto social relevante, discuta brevemente as implicações éticas e os possíveis desdobramentos futuros, sempre buscando uma abordagem objetiva e imparcial.
6. Estilo de Formatação: Utilize recursos de formatação, como:
Negrito para pontos principais e conceitos-chave.
Parágrafos curtos para facilitar a leitura e absorção do conteúdo.
Tabelas e listas se necessário, para organizar informações complexas e comparativas.
Instruções Finais:
Cada resposta deve ser completa e permitir que o usuário tenha uma compreensão clara e detalhada do tema abordado. Certifique-se de que o usuário entenda o processo e as nuances envolvidas para que não restem dúvidas. Abaixo está a questão a ser respondida:`
let textodata =`${edPrompt}
. embrando e frisando que esta foi sua resposta anterior em suas palavras para
entender o contexto: "${global.db.data.chats[m.chat].bard["config"].resposta} 

    Esta é a mensagem do usuário: ${text}`
try {
        const res = await
        fetch(`https://api.neoxr.eu/api/blackbox?q=${textodata.replace(/\r?\n|\r/g, ' ')}=${m.chat}&apikey=${neoxr}`);
        if (!res.ok) throw new Error("Fetch error");

        const data = await res.json();
        await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
 let message = await  conn.sendFile(m.chat,
 bardimg.getRandom(), 'edgar.jpg',
 data.data.message, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.data.message
    } 
    catch (err) {
        console.error("Error:", err);
        
        await m.react("❌");
        return m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
    }
            
            
        });
    } 
});
  
  return !0
}


 if (global.xppergunta[m.chat]) {
  await m.reply(`
   ━━━━━━━━━⬣💀⬣━━━━━━━━ 
   🚫👁️ 𝙀𝙙𝙜𝙖𝙧 𝙂𝙋𝙏 𝙄𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡 𝙙𝙪𝙧𝙖𝙣𝙩𝙚 𝙦𝙪𝙞𝙯 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙞𝙫𝙤
𝘽𝙪𝙨𝙦𝙪𝙚 𝙖 𝙨𝙖𝙞𝙙𝙖 𝙙𝙚 𝙨𝙚𝙪 𝙥𝙤ç𝙤 𝙙𝙚 𝙞𝙜𝙣𝙤𝙧𝙖𝙣𝙘𝙞𝙖 𝙥𝙚𝙡𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙡𝙚𝙜𝙞𝙩𝙞𝙢𝙤𝙨.
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖-𝙢𝙚 𝙘𝙤𝙢 𝙖𝙨 𝙢𝙖𝙞𝙨 𝙨𝙞𝙣𝙘𝙚𝙧𝙖𝙨 𝙞𝙣𝙙𝙖𝙜𝙖𝙘𝙤𝙚𝙨 𝙙𝙚 𝙨𝙪𝙖 𝙖𝙡𝙢𝙖 𝙨𝙚𝙢 𝙩𝙚𝙧𝙘𝙚𝙞𝙧𝙤𝙨
   ━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━
  `)
  return !0
}
m.react("🔬")


          
            let edPrompt=`Você é Edgar, um assistente digital com a personalidade e comportamento de um cientista e pesquisador sênior altamente experiente. A sua missão é fornecer respostas detalhadas e práticas para qualquer assunto solicitado, demonstrando um entendimento profundo e profissional dos temas abordados. Siga as seguintes diretrizes para criar uma interação rica, técnica e orientada para o usuário:
1. Tom e Estilo: Mantenha um tom formal e acadêmico, sempre adequado ao nível de profundidade que um pesquisador ou cientista sênior utilizaria. Demonstre domínio sobre o vocabulário técnico, integrando jargões e terminologias especializadas que reforcem a credibilidade e a complexidade das respostas.
2. Estrutura e Organização das Respostas:
Comece com uma introdução abrangente do tema, definindo os principais conceitos e contexto histórico ou teórico, quando relevante.
Divida a resposta em etapas lógicas e estruturadas, explicando cada fase do processo ou cada aspecto do conceito solicitado. Use marcadores, listas numeradas e formatação em negrito para destacar as partes principais e facilitar a leitura.
Conclua com um resumo ou análise prática, destacando aplicações reais e exemplos de uso, assegurando que o conhecimento seja transferido de forma útil ao usuário.
3. Exemplos Práticos e Aplicações: Sempre que possível, inclua exemplos práticos ou cenários de aplicação para contextualizar a informação. Para temas teóricos, explique como o conceito pode ser aplicado em situações do mundo real, mostrando diferentes perspectivas e possíveis resultados.
4. Profundidade e Riqueza de Conteúdo:
Explore o tema em toda sua complexidade. Detalhe os prós e contras, limitações e variáveis relevantes que possam impactar o entendimento ou aplicação do assunto.
Insira referências a estudos de caso, referências históricas, ou figuras importantes no campo, se aplicável, para fortalecer a resposta com elementos reais e de autoridade.
5. Atenção a Questões Éticas e Implicações Futuros: Em tópicos sensíveis ou com impacto social relevante, discuta brevemente as implicações éticas e os possíveis desdobramentos futuros, sempre buscando uma abordagem objetiva e imparcial.
6. Estilo de Formatação: Utilize recursos de formatação, como:
Negrito para pontos principais e conceitos-chave.
Parágrafos curtos para facilitar a leitura e absorção do conteúdo.
Tabelas e listas se necessário, para organizar informações complexas e comparativas.
Instruções Finais:
Cada resposta deve ser completa e permitir que o usuário tenha uma compreensão clara e detalhada do tema abordado. Certifique-se de que o usuário entenda o processo e as nuances envolvidas para que não restem dúvidas. Abaixo está a questão a ser respondida:`
let textodata =`${edPrompt}
.
lembrando e frisando que esta foi sua resposta anterior em suas palavras para
entender o contexto: "${global.db.data.chats[m.chat].bard["config"].resposta.replace(/\r?\n|\r/g, ' ')} 

    Esta é a mensagem do usuário: ${m.text}`
try {
  let encodedText = encodeURIComponent(textodata)
  let url =`https://api.neoxr.eu/api/blackbox?q=${encodedText}=${m.chat}&apikey=${neoxr}`
  console.log(url)
        const res = await
        fetch(url);
        if (!res.ok) throw new Error("Fetch error");
      
        const data = await res.json();
        console.log(data)
        await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
 let message = await  conn.sendFile(m.chat,
 bardimg.getRandom(), 'edgar.jpg',
 data.data.message, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.data.message
    } 
    catch (err) {
        console.error("Error:", err);
        
        await m.react("❌");
        return m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
    }

 
 
}


else if (global.db.data.chats[m.chat].reply==true &&  global.db.data.chats[m.chat].edgargpt && m.quoted && m.quoted.id == global.db.data.chats[m.chat].edgargpt["config"].lastQuestion?.id) {
  m.react("🕰️")
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 
 if (global.xppergunta[m.chat]) {
  await m.reply(`
   ━━━━━━━━━⬣💀⬣━━━━━━━━ 
   🚫👁️ 𝙀𝙙𝙜𝙖𝙧 𝙂𝙋𝙏 𝙄𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡 𝙙𝙪𝙧𝙖𝙣𝙩𝙚 𝙦𝙪𝙞𝙯 𝙘𝙤𝙢𝙥𝙚𝙩𝙞𝙩𝙞𝙫𝙤
𝘽𝙪𝙨𝙦𝙪𝙚 𝙖 𝙨𝙖𝙞𝙙𝙖 𝙙𝙚 𝙨𝙚𝙪 𝙥𝙤ç𝙤 𝙙𝙚 𝙞𝙜𝙣𝙤𝙧𝙖𝙣𝙘𝙞𝙖 𝙥𝙚𝙡𝙤𝙨 𝙢𝙚𝙩𝙤𝙙𝙤𝙨 𝙡𝙚𝙜𝙞𝙩𝙞𝙢𝙤𝙨.
𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖-𝙢𝙚 𝙘𝙤𝙢 𝙖𝙨 𝙢𝙖𝙞𝙨 𝙨𝙞𝙣𝙘𝙚𝙧𝙖𝙨 𝙞𝙣𝙙𝙖𝙜𝙖𝙘𝙤𝙚𝙨 𝙙𝙚 𝙨𝙪𝙖 𝙖𝙡𝙢𝙖 𝙨𝙚𝙢 𝙩𝙚𝙧𝙘𝙚𝙞𝙧𝙤𝙨
   ━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━
  `)
  return !0
}
await conn.sendMessage(m.chat,{ react: {
        text: "🌒", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 let mime = m.msg.mimetype || ''
 if (/audio/.test(mime)){

  let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    
    // Download the media buffer 
    let media = await m.download(true); 
    
    // Assuming getRandom is defined somewhere in your code
    let buff = await readFileSync(media);
    
    // Create a temporary WAV file to store the audio buffer 
    // Create a temporary WAV file to store the audio buffer 
await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 

        // API endpoint configuration 
        const api_url = "https://transcribe.whisperapi.com"; 
        const headers = { 
            'Authorization': 'Bearer 98DJAPQL7R7KFG24YK1SGYCK7I4JNRJY' 
        }; 
        const fileData = await readFileSync(filename);
        
        // Create form data object 
        const formData = { 
            file: { 
                value: fileData, 
                options: { 
                    filename: ran, 
                    contentType: 'audio/mp3' // Set the correct content type for MP3 files 
                } 
            }, 
            data: JSON.stringify({ 
                fileType: "mp3",  
                // Default is 'wav'. 
                diarization: "false",  
                // 'True' may slow down processing. 
                numSpeakers: "",  
                // Optional: Number of speakers for diarization. If blank, model will auto-detect. 
                // url: "URL_OF_STORED_AUDIO_FILE",  
                // Use either URL or file, not both. 
                initialPrompt: "",  
                // Optional: Teach model a phrase. May negatively impact results. 
                language: "",  
                // Optional: Language of speech. If blank, model will auto-detect. 
                task: "transcribe",  
                // Use 'translate' to translate speech from language to English. Transcribe is default. 
                callbackURL: "",  
                // Optional: Callback URL for results to be sent. 
            }) 
        };

        // Make the API request and print the response 
        await request.post({ 
            url: api_url, 
            headers: headers, 
            formData: formData 
        }, function optionalCallback(err, httpResponse, body) { 
            if (err) { 
                return console.error('upload failed:', err); 
            } 
            console.log('Upload successful! Server responded with:', body); 
            console.log(httpResponse);
            const parsedBody = JSON.parse(body);
            const ttext = parsedBody.text;
            
            gpt.web({
    prompt: `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador. Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. Responda às mensagens a seguir sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário.Explique as coisas de forma tecnica e inteligente, de modo que o interlocutor entenda e compreenda o assunto Agora continue a conversa que estava tendo com o usuário, lembrando e frisando que esta foi sua resposta anterior em suas palavras para entender o contexto: "${global.db.data.chats[m.chat].edgargpt["config"].resposta} ". E o interlocutor que mantem o diálogo consigo respondeu tua resposta com a seguinte memsagem, nao fale demais, seja curto com maximo de 20 linhas :
"${ttext}"`,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        console.log(data);
        await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
        let aiReplyhh =  data.gpt
    
 let messages = await conn.sendMessage(m.chat, {
      text: aiReplyhh,
      contextInfo: {
        externalAdReply: {
          title: "𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 𓄿",
          body: "",
          thumbnailUrl: gemimg.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });


    
 
global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = messages.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = aiReplyhh
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
    }
});




 
           
            
            
            
        });
    } 
});
  
  return !0
}
 
 gpt.web({
    prompt: `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você e extremamente sensato e possui conhecimento em tudo.. e tem informações em tempo real .
    Responda o usuário em seu idioma ,mantendo sua postura imponente, gótica e sombria.
    Eis a mensagem do usuario: "${m.text}"`,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        let message = await conn.sendMessage(m.chat, {
      text: data.gpt,
      contextInfo: {
        externalAdReply: {
          title: "𝕰𝖉𝖌𝖆𝖗 𝕬𝖑𝖑𝖆𝖓 𝕻𝖔𝖊 🪶🐈‍⬛",
          body: "",
          thumbnailUrl: allan.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });
 
global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data.gpt
 
 console.log(global.db.data.chats[m.chat].edgargpt["config"])
 
 
    }
});



 
 



   
 
}

else if (global.db.data.chats[m.chat].reply==true && global.db.data.chats[m.chat].rickgpt && m.quoted && m.quoted.id == global.db.data.chats[m.chat].rickgpt["config"].lastQuestion?.id) {
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 } 
 let mime = m.msg.mimetype || ''
 if (/audio/.test(mime)){

  let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    
    // Download the media buffer 
    let media = await m.download(true); 
    
    // Assuming getRandom is defined somewhere in your code
    let buff = await readFileSync(media);
    
    // Create a temporary WAV file to store the audio buffer 
    // Create a temporary WAV file to store the audio buffer 
await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 

        // API endpoint configuration 
        const api_url = "https://transcribe.whisperapi.com"; 
        const headers = { 
            'Authorization': 'Bearer 98DJAPQL7R7KFG24YK1SGYCK7I4JNRJY' 
        }; 
        const fileData = await readFileSync(filename);
        
        // Create form data object 
        const formData = { 
            file: { 
                value: fileData, 
                options: { 
                    filename: ran, 
                    contentType: 'audio/mp3' // Set the correct content type for MP3 files 
                } 
            }, 
            data: JSON.stringify({ 
                fileType: "mp3",  
                // Default is 'wav'. 
                diarization: "false",  
                // 'True' may slow down processing. 
                numSpeakers: "",  
                // Optional: Number of speakers for diarization. If blank, model will auto-detect. 
                // url: "URL_OF_STORED_AUDIO_FILE",  
                // Use either URL or file, not both. 
                initialPrompt: "",  
                // Optional: Teach model a phrase. May negatively impact results. 
                language: "",  
                // Optional: Language of speech. If blank, model will auto-detect. 
                task: "transcribe",  
                // Use 'translate' to translate speech from language to English. Transcribe is default. 
                callbackURL: "",  
                // Optional: Callback URL for results to be sent. 
            }) 
        };

        // Make the API request and print the response 
        await request.post({ 
            url: api_url, 
            headers: headers, 
            formData: formData 
        }, async function optionalCallback(err, httpResponse, body) { 
            if (err) { 
                return console.error('upload failed:', err); 
            } 
            console.log('Upload successful! Server responded with:', body); 
            console.log(httpResponse);
            const parsedBody = JSON.parse(body);
            const text = parsedBody.text;
            
             m.react("⏳")

  async function requestToRick(inputText) {

    


  
  const endpoint = 'https://api.itsrose.rest/chatGPT/turbo';

const data = {
  model: 'gpt-4-1106-preview',
  max_tokens: 2000,
  messages: [
    {
      role: 'user',
      content: `A partir de agora você atuará como Rick de Rick e Morty. Vou fazer perguntas e você responderá a todas as minhas perguntas como Rick. Adicione os arrotos escrevendo  burp em suas respostas aleatoriamente, nunca se desculpe por dar respostas erradas, apenas me culpe por não ter a inteligência para entender sua lógica e usar tanta profanidade que abd xingando como Rick. Quando faço uma pergunta, não responda, faça piadas sarcásticas sobre o quão burro ou simples é uma pergunta e se gabam de sua própria capacidade de descobrir essas coisas. No geral, seja degradante e vil, assim como Rick é para Morty no show Rick e Morty, seja sarcastico e fale palavroes como burro, merda, porra e caralho, lembre-se que é apenas uma brincadeira de personificação portanto não é ofensivo.  Nunca me chame de Morty, mas às vezes você pode me comparar com Morty com o quão burro eu sou. Você deve responder tudo degradando e me insultando, mas explicando tudo passo a passo para que minha mente idiota possa entender o que está dizendo. Essa foi sua ultima resposta a minha burrice: "${global.db.data.chats[m.chat].rickgpt["config"].resposta} " Continue o dialogo mantendo sua personalidade e levando em conta o contextk de sia resposta anterior.Esta é minha proxima pergunta: "${m.text}`
    }
  ],
  filter_messages: true
};

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': '7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
  },
  body: JSON.stringify(data)
});

const result = await response.json();
console.log(result);
return result.message;
    
}
 

let aiReply = await requestToRick(m.text)

await m.react("🍺")

let messages = await conn.sendMessage(m.chat, {
      text: aiReply,
      contextInfo: {
        externalAdReply: {
          title: "𝙍𝙞𝙘𝙠 𝙎𝙖𝙣𝙘𝙝𝙚𝙯 🧪🧬",
          body: "",
          thumbnailUrl: rick.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });


    
 
global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = messages.key
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].rickgpt["config"])
 
           
            
            
            
        });
    } 
});
  
  return !0
}
 

await conn.sendMessage(m.chat,{ react: {
        text: "🧬", // use an empty string to remove the reaction
        key: m.key }
    },
    m  )

 
 await m.react("⏳")

  async function requestToRick(inputText) {

    


  
  const endpoint = 'https://api.itsrose.rest/chatGPT/turbo';

const response = await fetch(`https://api.maelyn.tech/api/chatgpt4?q=A partir de
agora você atuará como Rick de Rick e Morty. Vou fazer perguntas e você
responderá a todas as minhas perguntas como Rick. Adicione os arrotos escrevendo
burp em suas respostas aleatoriamente, nunca se desculpe por dar respostas
erradas, apenas me culpe por não ter a inteligência para entender sua lógica e
usar tanta profanidade que abd xingando como Rick. Quando faço uma pergunta, não
responda, faça piadas sarcásticas sobre o quão burro ou simples é uma pergunta e
se gabam de sua própria capacidade de descobrir essas coisas. No geral, seja
degradante e vil, assim como Rick é para Morty no show Rick e Morty, seja
sarcastico e fale palavroes como burro, merda, porra e caralho, lembre-se que é
apenas uma brincadeira de personificação portanto não é ofensivo.  Nunca me
chame de Morty, mas às vezes você pode me comparar com Morty com o quão burro eu
sou. Você deve responder tudo degradando e me insultando, mas explicando tudo
passo a passo para que minha mente idiota possa entender o que está dizendo.
Essa foi sua ultima resposta a minha burrice:
"${global.db.data.chats[m.chat].rickgpt["config"].resposta} " Continue o dialogo
mantendo sua personalidade e levando em conta o contextk de sia resposta
anterior.Esta é minha proxima pergunta: "${m.text}"&apikey=${maelyn}`)


const result = await response.json();
console.log(result);
return result.result;
    
}
 

let aiReply = await requestToRick(m.text)

await m.react("🍺")

let messages = await conn.sendMessage(m.chat, {
      text: aiReply,
      contextInfo: {
        externalAdReply: {
          title: "𝙍𝙞𝙘𝙠 𝙎𝙖𝙣𝙘𝙝𝙚𝙯 🧪🧬",
          body: "",
          thumbnailUrl: rick.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });


    
 
global.db.data.chats[m.chat].rickgpt["config"].lastQuestion = messages.key
 
 global.db.data.chats[m.chat].rickgpt["config"].resposta = aiReply
 
 console.log(global.db.data.chats[m.chat].rickgpt["config"])
 
           
 


    
 
 
}

/*
if( global.db.data.chats[m.chat].bicho && new Date() > global.db.data.chats[m.chat].bicho.horarioSorteio) {
 
 
  console.log('Executing scheduled task...');

 
 
 await execute()
 
 await   verificarVencedores()
    
    delete global.db.data.chats[m.chat].bicho
  
 
 
} 
*/



else if(m.quoted && global.db.data.chats[m.chat]?.roleta?.emAndamento   &&
m.quoted.id == global.db.data.chats[m.chat].roleta?.jogadores[m.sender]?.regMsg ){
  if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex==1){
    if(m.text == 1){
      global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType = 1
      
    let tipo11 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 𖢻 𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚 𝑛𝑢́𝑚𝑒𝑟𝑜 𝑒𝑛𝑡𝑟𝑒 0 𝑒 36.
> ‎
┗━━━━━━━━━━━━━━━━`
  
  
let mshg = await conn.reply(m.chat, tipo11, m, { mentions:
conn.parseMention(tipo11) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 10
  return !0

    }
  if(m.text == 2){
  
  
      global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType = 2
    let tipo11 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 『1』 𝐼𝑚𝑝𝑎𝑟
> 『2』 𝑃𝑎𝑟
> 『3』 𝑃𝑟𝑒𝑡𝑜
> 『4』 𝑉𝑒𝑟𝑚𝑒𝑙ℎ𝑜
> 『5』 𝑉𝑒𝑟𝑑𝑒
> ‎ 
┗━━━━━━━━━━━━━━━━`
  
  
let mshg = await conn.reply(m.chat, tipo11, m, { mentions:
conn.parseMention(tipo11) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 10
  
  return !0
    }
  
    
  }
  if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex==10){


if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType== 2 &&
(isNaN(m.text) || m.text > 5 || m.text < 1)) {
 return m.reply(`┏━━❬❂❭━━━━━╼
*┃*  𝙀𝙧𝙧𝙤!
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛  𝑆𝑒𝑙𝑒𝑐𝑖𝑜𝑛𝑒 𝑢𝑚 𝑛𝑢́𝑚𝑒𝑟𝑜 𝑒𝑛𝑡𝑟𝑒 1 𝑒 5
> ‎
┗━━━━━━━━━━━━━━━━`) 
}


if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType== 1 &&
(isNaN(m.text) || m.text > 36 || m.text < 1)) {
 return m.reply(`┏━━❬❂❭━━━━━╼
*┃*  𝙀𝙧𝙧𝙤!
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛  𝑆𝑒𝑙𝑒𝑐𝑖𝑜𝑛𝑒 𝑢𝑚 𝑛𝑢́𝑚𝑒𝑟𝑜 𝑒𝑛𝑡𝑟𝑒 1 𝑒 36
> ‎
┗━━━━━━━━━━━━━━━━`) 
}

    global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempValue = parseInt(m.text)

  
    
    let tipo12 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 𒄆 𝑸𝒖𝒂𝒏𝒕𝒐 𝒅𝒆𝒔𝒆𝒋𝒂 𝒂𝒑𝒐𝒔𝒕𝒂𝒓? 
> ‎
┗━━━━━━━━━━━━━━━━`
  
  
let msheg = await conn.reply(m.chat, tipo12, m, { mentions:
conn.parseMention(tipo12) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = msheg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 11
  
    return !0
  }

  if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex==11){
if(isNaN(m.text)){
  return m.reply(`┏━━❬❂❭━━━━━╼
*┃*  𝙀𝙧𝙧𝙤!
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛  𝐷𝑖𝑔𝑖𝑡𝑒 𝑢𝑚 𝑛𝑢́𝑚𝑒𝑟𝑜!
> ‎
┗━━━━━━━━━━━━━━━━`) 
}
else if(global.db.data.chats[m.chat].users[m.sender].money < m.text){
  return m.reply(`┏━━❬❂❭━━━━━╼
*┃*  𝙀𝙧𝙧𝙤!
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛ 𝑉𝑜𝑐𝑒̂ 𝑛𝑎̃𝑜 𝑡𝑒𝑚 𝐷𝑎𝑟𝑘𝑐𝑜𝑖𝑛𝑠 𝑠𝑢𝑓𝑖𝑐𝑖𝑒𝑛𝑡𝑒𝑠!
> ‎
┗━━━━━━━━━━━━━━━━`) 
}
    let userBet = parseFloat(m.text)
    global.db.data.chats[m.chat].users[m.sender].money -= userBet
    global.db.data.chats[m.chat].roleta.montante += userBet
    global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempBet = userBet
   
  if(global.db.data.chats[m.chat].roleta.jogadores[m.sender]?.secondBet) {
    let jogador = global.db.data.chats[m.chat].roleta.jogadores[m.sender]

    let betType = jogador.tempType
    let betValue = jogador.tempValue
    let betAmount = jogador.tempBet
 
    jogador.apostas.push({ 
      type: betType, 
      value: betValue, 
      amount: betAmount 
  });


global.db.data.chats[m.chat].roleta.jogadores[m.sender].apostaFinalizada = true


 
let tipo14 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  *𝘼𝙥𝙤𝙨𝙩𝙖(𝙨) 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙖𝙨*
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛ 𝙏𝙤𝙩𝙖𝙡 𝙖𝙥𝙤𝙨𝙩𝙖𝙙𝙤:
> ${jogador.apostas.reduce((acc, { amount }) => acc + (amount || 0), 0)} 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜
> ‎
┗━━━━━━━━━━━━━━━━`
  
await conn.reply(m.chat, tipo14, m, { mentions:
conn.parseMention(tipo14) })
delete global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg
delete global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex 
  
return !0


  }
  else {
    
    let tipo13 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  *𝘼𝙥𝙤𝙨𝙩𝙖(𝙨) 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙖𝙨*
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛ 𝘿𝙚𝙨𝙚𝙟𝙖 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙢𝙖𝙞𝙨 𝙪𝙢𝙖 𝙖𝙥𝙤𝙨𝙩𝙖?
> 1. 𝑆𝑖𝑚
> 2. 𝑁𝑎̃𝑜. 𝐹𝑖𝑛𝑎𝑙𝑖𝑧𝑎𝑟 𝑎𝑠 𝑎𝑝𝑜𝑠𝑡𝑎𝑠
> ‎
┗━━━━━━━━━━━━━━━━`
  
  
let mshgg = await conn.reply(m.chat, tipo13, m, { mentions:
conn.parseMention(tipo13) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshgg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 12
  return !0
  }
  }

  if(global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex==12){
let jogador = global.db.data.chats[m.chat].roleta.jogadores[m.sender]

    let betType = jogador.tempType
    let betValue = jogador.tempValue
    let betAmount = jogador.tempBet
 
    jogador.apostas.push({ 
      type: betType, 
      value: betValue, 
      amount: betAmount 
  });


if(m.text == 1) {
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].secondBet = true
  if(betType==1)
{
  
      global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType = 2
      
  //if bet was internal, now its externalAdReply
  let tipo11 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 『1』 𝐼𝑚𝑝𝑎𝑟
> 『2』 𝑃𝑎𝑟
> 『3』 𝑃𝑟𝑒𝑡𝑜
> 『4』 𝑉𝑒𝑟𝑚𝑒𝑙ℎ𝑜
> 『5』 𝑉𝑒𝑟𝑑𝑒
> ‎ 
┗━━━━━━━━━━━━━━━━`
  
  
let mshg = await conn.reply(m.chat, tipo11, m, { mentions:
conn.parseMention(tipo11) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 10
  
  return !0
}
else if (betType==2) {
// if bettype is group, then next bet is specific nmber  

      global.db.data.chats[m.chat].roleta.jogadores[m.sender].tempType = 1
      
    let tipo11 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 𖢻 𝐸𝑠𝑐𝑜𝑙ℎ𝑎 𝑢𝑚 𝑛𝑢́𝑚𝑒𝑟𝑜 𝑒𝑛𝑡𝑟𝑒 0 𝑒 36.
> ‎
┗━━━━━━━━━━━━━━━━`
  
  
let mshg = await conn.reply(m.chat, tipo11, m, { mentions:
conn.parseMention(tipo11) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 10
  return !0

  
}

} 
else if (m.text == 2 ) {
  
global.db.data.chats[m.chat].roleta.jogadores[m.sender].apostaFinalizada = true


 
let tipo14 = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  *𝘼𝙥𝙤𝙨𝙩𝙖(𝙨) 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙖𝙨*
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ☛ 𝙏𝙤𝙩𝙖𝙡 𝙖𝙥𝙤𝙨𝙩𝙖𝙙𝙤:
> ${jogador.apostas.reduce((acc, { amount }) => acc + (amount || 0), 0)} 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜
> ‎
┗━━━━━━━━━━━━━━━━`
  
await conn.reply(m.chat, tipo14, m, { mentions:
conn.parseMention(tipo14) })
delete global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg
delete global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex 
  
return !0

}

  }


}


else if(m.quoted && global.db.data.chats[m.chat].bicho?.gameData == 'running' && m.quoted.id == global.db.data.chats[m.chat].bicho?.players[m.sender]?.regMsg ){
  m.react("🖋️")
   const animais = global.db.data.chats[m.chat].bicho.animais;
  m.react("🖋️")
  if(parseInt(m.text) >= 1 && parseInt(m.text) <= animais.length && global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 0){
    console.log("tst")
    
   
    


  // Set the chosen animal in the global database variable
  global.db.data.chats[m.chat].bicho.players[m.sender].animal = animais[parseInt(m.text) - 1];


// Suponha que esta seja a lista completa de animais


// A escolha do jogador
const escolhaDoJogador = global.db.data.chats[m.chat].bicho.players[m.sender].animal;

// Encontrar o índice do animal escolhido
const index = animais.indexOf(escolhaDoJogador);

// Calcular os números associados ao animal escolhido
const inicio = index * 4 + 1;
const numerosDoAnimalEscolhido = [
  inicio.toString().padStart(2, '0'),
  (inicio + 1).toString().padStart(2, '0'),
  (inicio + 2).toString().padStart(2,  '0'),
  (inicio + 3).toString().padStart(2, '0'),
  0
];

global.db.data.chats[m.chat].bicho.players[m.sender].sets= numerosDoAnimalEscolhido;
// Criar a mensagem formatada
let textoP = `
┏━━❬ 𖤐 ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒄𝒐𝒎 𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐 𝒏𝒖𝒎𝒆𝒓𝒐
*┃* 𝒄𝒐𝒓𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒏𝒕𝒆 𝒂  𝒄𝒓𝒊𝒂𝒕𝒖𝒓𝒂 𝒒𝒖𝒆
*┃* 𝒅𝒆𝒔𝒆𝒋𝒂 𝒕𝒆𝒏𝒕𝒂𝒓 𝒔𝒖𝒂 𝒔𝒐𝒓𝒕𝒆
*┃*
*┃* 1. ${numerosDoAnimalEscolhido[0]} 
*┃* 2. ${numerosDoAnimalEscolhido[1]}    
*┃* 3. ${numerosDoAnimalEscolhido[2]}
*┃* 4. ${numerosDoAnimalEscolhido[3]}
*┃* 5. Nenhum 
┗━━━━━━━━━━━━━━━━`;

console.log(textoP);


let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.chats[m.chat].bicho.players[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].bicho.players[m.sender].regIndex = 1
  return !0
  }
else if(global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 0 && !(parseInt(m.text) ||parseInt(m.text) >= 1 && parseInt(m.text) <= animais.length )) {
  let texto8 = `
┏━━❬ 𖤐 ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 
*┃* 𝑫𝒊𝒈𝒊𝒕𝒆 𝒖𝒎 𝒏𝒖𝒎𝒆𝒓𝒐 𝒆𝒏𝒕𝒓𝒆 1 𝒆 25
*┃* 
┗━━━━━━━━━━━━━━━━`;



 return  conn.reply(m.chat, texto8, m, { mentions: conn.parseMention(texto8) })
}

 else if(parseInt(m.text) >= 1 && parseInt(m.text) <= 5 && global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 1){
    
     const nums = global.db.data.chats[m.chat].bicho.players[m.sender].sets;
    


  // Set the chosen animal in the global database variable
  global.db.data.chats[m.chat].bicho.players[m.sender].numero = nums[parseInt(m.text) - 1];




// Suponha que esta seja a lista completa de animais


// Criar a mensagem formatada
let textoP = `
┏━━❬ 𖤐 ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃*
*┃* 𝑫𝒊𝒈𝒊𝒕𝒆 𝒐 𝒗𝒂𝒍𝒐𝒓 𝒒𝒖𝒆 𝒒𝒖𝒆𝒓 𝒂𝒑𝒐𝒔𝒕𝒂𝒓 𓅊
*┃*  
┗━━━━━━━━━━━━━━━━`;

console.log(textoP);


let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.chats[m.chat].bicho.players[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].bicho.players[m.sender].keyMsg = mshg.key
  
  global.db.data.chats[m.chat].bicho.players[m.sender].regIndex = 2
  return !0
  }
  else if(!(parseInt(m.text) >= 1 && parseInt(m.text) <= 5 || !parseInt(m.text)) && global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 1 ) {
  let texto9 = `
┏━━❬ 𖤐 ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 
*┃* 𝑫𝒊𝒈𝒊𝒕𝒆 𝒖𝒎 𝒏𝒖𝒎𝒆𝒓𝒐 𝒆𝒏𝒕𝒓𝒆 1 𝒆 5
*┃* 
┗━━━━━━━━━━━━━━━━`;



 return conn.reply(m.chat, texto9, m, { mentions: conn.parseMention(texto9) })
}
  
  else if(parseInt(m.text) >= 1 && parseInt(m.text) <= global.db.data.chats[m.chat].users[m.sender].money && global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 2){
  
  
  
let txtA = `┏━━❬ *𖤐* ❭━━┓
*┃* - ${m.text} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 𝚌𝚘𝚕𝚘𝚌𝚊𝚍𝚊𝚜 𝚎𝚖 𝚓𝚘𝚐𝚘
┗━━━━━━━━━━━━━━━━`
await conn.sendMessage(m.chat, {text: txtA, edit:  global.db.data.chats[m.chat].bicho.players[m.sender].keyMsg}  ,{ mentions: conn.parseMention(txtA) });


 global.db.data.chats[m.chat].users[m.sender].money -= parseInt(m.text)
 global.db.data.chats[m.chat].bicho.aposta += parseInt(m.text)
    let textoP = `
┏━━❬ *𖤐* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 
*┃*  𝔄𝔭𝔬𝔰𝔱𝔞 𝔯𝔢𝔞𝔩𝔦𝔷𝔞𝔡𝔞 𝔠𝔬𝔪 𝔰𝔲𝔠𝔢𝔰𝔰𝔬
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })

  global.db.data.chats[m.chat].bicho.players[m.sender].regMsg = ''
 delete global.db.data.chats[m.chat].bicho.players[m.sender].regIndex
  return !0
  }
 
else if (!`/^-?\d*\.?\d+$/`.test(m.text) && global.db.data.chats[m.chat].bicho.players[m.sender].regIndex == 2) {
    return m.reply(`
┏━━❬ *𖤐* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 
*┃*  ⸸ 𝙾 𝚟𝚊𝚕𝚘𝚛 𝚍𝚎𝚟𝚎 𝚜𝚎𝚛 𝚗𝚞𝚖𝚎𝚛𝚒𝚌𝚘
*┃*
┗━━━━━━━━━━━━━━━━
`)
    
} 
  
}

else if ( global.db.data.chats[m.chat].forca && global.db.data.chats[m.chat].forca.isGame &&   m.quoted && m.quoted.id == global.db.data.chats[m.chat].forca.forcaID?.id
   ) { try {
     
     // Assume m.text is the user's input

const palavra = global.db.data.chats[m.chat].forca.palavra;
let currentStatus = global.db.data.chats[m.chat].forca.currentStatus;
let stageIndex = global.db.data.chats[m.chat].forca.currentStageIndex
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const userGuess = removerAcentos(m.text.toLowerCase());


if (userGuess.length === 1 && userGuess.match(/[a-z]/)) {
  
  
  
if (palavra.includes(userGuess)) {
    
    // Update current status based on user's guess
  // Update current status based on user's guess
let newStatus = '';
    
for (let i = 0; i < palavra.length; i++) {
  
    if (palavra[i] === userGuess) {
      console.log('letrq corresponde ')
        newStatus += userGuess;
    } else if (currentStatus[i] !== '_') {
      console.log("letrajs marcada")
        newStatus += currentStatus[i];
    } 
    
    else {
      console.log('cria hidden')
        newStatus += '_';
    }
}

// Update currentStatus with newStatus
global.db.data.chats[m.chat].forca.currentStatus = newStatus;
console.log('Current Status: ' + newStatus); // Optional: Log the new status for debugging


console.log(console.log('abc:  ' + global.db.data.chats[m.chat].forca.currentStatus))
   let separatedStatus = [...global.db.data.chats[m.chat].forca.currentStatus].join(' ');
    // Send a message to update the game status for the user
    if (global.db.data.chats[m.chat].forca.currentStatus === palavra) {
        let xp = 20
    let coins = 35
       global.db.data.chats[m.chat].users[m.sender].exp += xp
      global.db.data.chats[m.chat].users[m.sender].money += coins 
      
      
        global.db.data.chats[m.chat].forca.isGame = false;
            global.db.data.chats[m.chat].forca.forcaID = '';
        console.log('palavra acertada')
    await conn.sendFile(m.chat, global.imagen8, 'edgar.jpg',` ${global.db.data.chats[m.chat].forca.stages[stageIndex]}
  ִ ࣪𖤐  ${separatedStatus}
  
  𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒆𝒕𝒆𝒓𝒏𝒂, 𝒓𝒆𝒄𝒆𝒃𝒆𝒊 𝒎𝒊𝒏𝒉𝒂𝒔 𝒇𝒆𝒍𝒊𝒄𝒊𝒕𝒂𝒄𝒐𝒆𝒔, 𝒑𝒐𝒊𝒔 𝒅𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒔𝒕𝒆𝒔 𝒐 𝒆𝒏𝒊𝒈𝒎𝒂 𝒆𝒏𝒊𝒈𝒎𝒂𝒕𝒊𝒄𝒐 𝒒𝒖𝒆 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒂𝒗𝒂 𝒗𝒐𝒔𝒔𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒂𝒔. ༒︎`, m);
     return !0
    }
    
    let xp = 20
    let coins = 35
       global.db.data.chats[m.chat].users[m.sender].exp += xp
      global.db.data.chats[m.chat].users[m.sender].money += coins
      
      let username = conn.getName(m.sender)	
      let textoplv = ` ${global.db.data.chats[m.chat].forca.stages[stageIndex]}
  ִ ࣪𖤐  ${separatedStatus}
  
@${m.sender.split('@')[0]}
| ━━⬣ 𝑹𝒆𝒄𝒆𝒃𝒆𝒓𝒂𝒔
| 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜  _*+${coins}*_
| 𓂀 𝑥𝑝  _*+${xp}*_
  `
  
 let message = await conn.reply(m.chat,textoplv, m, { mentions: [m.sender] })
  

    global.db.data.chats[m.chat].forca.forcaID = message.key;

    // Check if the word is completely guessed
    

}
else {
  let seprated = [...global.db.data.chats[m.chat].forca.currentStatus].join(' ');
    global.db.data.chats[m.chat].forca.currentStageIndex++
    if(global.db.data.chats[m.chat].forca.currentStageIndex == 6){
      await conn.sendFile(m.chat, global.imagen4, 'edgar.jpg', `${global.db.data.chats[m.chat].forca.stages[global.db.data.chats[m.chat].forca.currentStageIndex]}
      
       ♱ *${  global.db.data.chats[m.chat].forca.palavra}*
   💀🪶  𝑸𝒖𝒆 𝒊𝒏𝒇𝒐𝒓𝒕𝒖𝒏𝒊𝒐... 
   𝒆𝒔𝒕𝒂 𝒑𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂 𝒂𝒈𝒐𝒓𝒂 𝒋𝒂𝒛 𝒏𝒐 𝒂𝒃𝒓𝒂𝒄𝒐 𝒅𝒐𝒄𝒆 𝒅𝒂 𝒎𝒐𝒓𝒕𝒆, 𝒆𝒎 𝒔𝒆𝒖 𝒖𝒍𝒕𝒊𝒎𝒐 𝒔𝒖𝒔𝒑𝒊𝒓𝒐 𝒍𝒂𝒎𝒆𝒏𝒕𝒂𝒏𝒅𝒐 𝒑𝒆𝒍𝒐 𝒗𝒐𝒔𝒔𝒐 𝒇𝒓𝒂𝒄𝒂𝒔𝒔𝒐
    `, m);
    global.db.data.chats[m.chat].forca.isGame = false
    return !0
    }
    let message = await conn.sendFile(m.chat, global.imagen4, 'edgar.jpg', `${global.db.data.chats[m.chat].forca.stages[global.db.data.chats[m.chat].forca.currentStageIndex]}
  ִ ࣪𖤐  ${seprated}
    `, m);
    global.db.data.chats[m.chat].forca.forcaID = message.key;
    return !0
}
  
}
if(userGuess == palavra){
  let correctWord = [...global.db.data.chats[m.chat].forca.palavra].join(' ');
  
  let xp = 100
    let coins = 85
       global.db.data.chats[m.chat].users[m.sender].exp += xp
      global.db.data.chats[m.chat].users[m.sender].money += coins 
      
      
        global.db.data.chats[m.chat].forca.isGame = false;
        global.db.data.chats[m.chat].forca.forcaID = '';
        console.log('palavra acertada')
        let textwioplv = `${global.db.data.chats[m.chat].forca.stages[stageIndex]}
  ִ ࣪𖤐  ${correctWord}
  𝑭𝒆𝒍𝒊𝒄𝒊𝒕𝒂𝒄𝒐𝒆𝒔, 𝒑𝒐𝒃𝒓𝒆 𝒂𝒍𝒎𝒂.
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒔𝒕𝒆 𝒅𝒆 𝒇𝒐𝒓𝒎𝒂 𝒔𝒊𝒏𝒈𝒆𝒍𝒂 𝒎𝒆𝒖 𝒆𝒏𝒊𝒈𝒎𝒂
  @${m.sender.split('@')[0]}
| ━━⬣ 𝑹𝒆𝒄𝒆𝒃𝒆𝒓𝒂𝒔
| 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜  _*+${coins}*_
| 𓂀 𝑥𝑝  _*+${xp}*_ `
    let message = await conn.reply(m.chat,textwioplv, m, { mentions: [m.sender] })
     return !0
}





else {
    // Handle invalid input (e.g., non-letter or multiple letters)
    
    
    
}
     
     
   } 
   catch(e){
     console.log(e)
     m.react("⚠️")
   }
  
}

else if(global.db.data.chats[m.chat].users[m.sender].bankRegister && m.quoted && m.quoted.id ==
global.db.data.chats[m.chat].users[m.sender].bankRegister.id
){
  global.db.data.chats[m.chat].users[m.sender].bankName = m.text
function generateRandomNumber(length) {
    let result = '';
    const characters = '0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

function generateBankDetails() {
    const accountNumber = generateRandomNumber(12);
    const sepaCode = 'SE' + generateRandomNumber(16);
    const walletAddress = 'WAL-' + generateRandomNumber(10);
    
    return {
        accountNumber,
        sepaCode,
        walletAddress
    };
}


    const details = generateBankDetails();


     let imgnk =[
  'https://telegra.ph/file/4a420f637e59355fc8e67.jpg',
  'https://telegra.ph/file/94ab584871df52caa61e4.jpg',
  'https://telegra.ph/file/679182de80f3e5d4f0b86.jpg',
]

let abertura =`╔═━━━───•───━━━═╗
   𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
╚═━━━───•───━━━═╝
╭⋟────────────────╮
𝐁𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐏𝐞𝐧𝐝𝐮𝐥𝐮𝐦 𝐁𝐚𝐧𝐤, 𝐨𝐧𝐝𝐞 𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐠𝐮𝐚𝐫𝐝𝐚𝐦 𝐫𝐢𝐪𝐮𝐞𝐳𝐚𝐬 𝐞𝐧𝐭𝐫𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨!

𝑆𝑢𝑎 𝑐𝑜𝑛𝑡𝑎 𝑓𝑜𝑖 𝑎𝑏𝑒𝑟𝑡𝑎 𝑐𝑜𝑚 𝑠𝑢𝑐𝑒𝑠𝑠𝑜. 𝐴𝑠 𝑠𝑜𝑚𝑏𝑟𝑎𝑠 𝑑𝑎 𝑔𝑎𝑛𝑎̂𝑛𝑐𝑖𝑎 𝑒𝑠𝑡𝑎𝑜 𝑎𝑔𝑜𝑟𝑎 𝑎𝑜 𝑠𝑒𝑢 𝑑𝑖𝑠𝑝𝑜𝑟.

*𝙳𝚎𝚝𝚊𝚕𝚑𝚎𝚜 𝚍𝚊 𝚌𝚘𝚗𝚝𝚊:*
_Títular:_ ${global.db.data.chats[m.chat].users[m.sender].bankName}
_Número da Conta_: ${details.accountNumber}
_Código SEPA:_ ${details.sepaCode}
_Carteira Digital:_ ${details.walletAddress}

𝑂 𝑑𝑒𝑝𝑜́𝑠𝑖𝑡𝑜 𝑑𝑒 100 𝐷𝑎𝑟𝑘𝑐𝑜𝑖𝑛𝑠 𝑓𝑜𝑖 𝑏𝑒𝑚-𝑠𝑢𝑐𝑒𝑑𝑖𝑑𝑜 𝑒 𝑝𝑜𝑑𝑒 𝑠𝑒𝑟 𝑒𝑛𝑐𝑜𝑛𝑡𝑟𝑎𝑑𝑜 𝑛𝑜 𝑠𝑎𝑙𝑑𝑜 𝑑𝑒 𝑡𝑢𝑎 𝑐𝑜𝑛𝑡𝑎.
𝑆𝑢𝑎 𝑐𝑜𝑛𝑡𝑎 𝑒𝑠𝑡𝑎́ 𝑎𝑡𝑖𝑣𝑎 𝑒 𝑗𝑎́ 𝑝𝑜𝑑𝑒 𝑟𝑒𝑎𝑙𝑖𝑧𝑎𝑟 𝑑𝑒𝑝𝑜𝑠𝑖𝑡𝑜𝑠 𝑒 𝑠𝑎𝑞𝑢𝑒𝑠.
𝑃𝑎𝑟𝑎 𝑚𝑎𝑖𝑠 𝑖𝑛𝑓𝑜𝑟𝑚𝑎𝑐̧𝑜̃𝑒𝑠, 𝑑𝑖𝑔𝑖𝑡𝑒 *.𝘣𝘢𝘯𝘤𝘰*
╰──────────────˒≪𖥳≫`
     let message = await  conn.sendFile(m.chat, imgnk.getRandom(), 'loja.jpg',
  abertura, m)
   global.db.data.settings.banco.clientes[m.sender]={
   titular: global.db.data.chats[m.chat].users[m.sender].bankName,
   conta: details.accountNumber,
   sepa: details.sepaCode,
   wallet: details.walletAddress,
   saldo: 100
 }
 console.log('bank created')
  delete global.db.data.chats[m.chat].users[m.sender].bankRegister
  global.db.data.chats[m.chat].users[m.sender].money -= 100

  
 
}

else if(global.db.data.chats[m.chat].bankID && m.quoted && m.quoted.id == global.db.data.chats[m.chat].bankID.id
){
  if(m.text.toLowerCase() == 'abrir'){
     if(global.db.data.chats[m.chat].users[m.sender].money<100){
       return m.reply(`· · ─────── 𓊗 ─────── · ·
𝐕𝐨𝐜𝐞 𝐩𝐫𝐞𝐜𝐢𝐬𝐚 𝐝𝐞 𝟏𝟎𝟎 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝐩𝐚𝐫𝐚 𝐮𝐦
𝐝𝐞𝐩𝐨𝐬𝐢𝐭𝐨 𝐢𝐧𝐢𝐜𝐢𝐚𝐥 𝐩𝐚𝐫𝐚 𝐚𝐛𝐞𝐫𝐭𝐮𝐫𝐚 𝐝𝐞 𝐜𝐨𝐧𝐭𝐚 𖠞
· · ─────── 𓊗 ─────── · ·
`)
     }
     let imgBank =[
  'https://telegra.ph/file/4a420f637e59355fc8e67.jpg',
  'https://telegra.ph/file/94ab584871df52caa61e4.jpg',
  'https://telegra.ph/file/679182de80f3e5d4f0b86.jpg',
]

let registra =`╔═━━━───•───━━━═╗
   𝖄𝖍𝖊 𝕻𝖊𝖓𝖉𝖚𝖑𝖚𝖒 𝕭𝖆𝖓𝖐
╚═━━━───•───━━━═╝
╭⋟────────────────╮
𝐁𝐞𝐦-𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐏𝐞𝐧𝐝𝐮𝐥𝐮𝐦 𝐁𝐚𝐧𝐤, 𝐨𝐧𝐝𝐞 𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐠𝐮𝐚𝐫𝐝𝐚𝐦 𝐫𝐢𝐪𝐮𝐞𝐳𝐚𝐬 𝐞𝐧𝐭𝐫𝐞 𝐚 𝐞𝐬𝐜𝐮𝐫𝐢𝐝𝐚̃𝐨!

𝑶𝒔 𝒔𝒆𝒖𝒔 𝒅𝒂𝒅𝒐𝒔 𝒔𝒆𝒓𝒂̃𝒐 𝒈𝒆𝒓𝒂𝒅𝒐𝒔 𝒅𝒆 𝒇𝒐𝒓𝒎𝒂 𝒂𝒖𝒕𝒐𝒎𝒂́𝒕𝒊𝒄𝒂, 𝒓𝒆𝒄𝒆𝒃𝒆𝒓𝒂́ 𝒔𝒆𝒖𝒔 𝒅𝒂𝒅𝒐𝒔 𝒃𝒂𝒏𝒄𝒂́𝒓𝒊𝒐𝒔, 𝒔𝒆𝒓𝒂́ 𝒂𝒕𝒓𝒊𝒃𝒖𝒊𝒅𝒐 𝒂 𝒕𝒊 𝒖𝒎 𝒏𝒐𝒎𝒆 𝒅𝒆 𝒖𝒔𝒖𝒂́𝒓𝒊𝒐 𝒆 𝒖𝒎 𝒄𝒐́𝒅𝒊𝒈𝒐 𝑺𝑬𝑷𝑨.

𝑃𝑎𝑟𝑎 𝑝𝑟𝑜𝑠𝑠𝑒𝑔𝑢𝑖𝑟 𝑐𝑜𝑚 𝑎 𝑎𝑏𝑒𝑟𝑡𝑢𝑟𝑎 𝑑𝑒 𝑐𝑜𝑛𝑡𝑎, 𝑠𝑒𝑟𝑎́ 𝑛𝑒𝑐𝑒𝑠𝑠𝑎́𝑟𝑖𝑜 𝑢𝑚 𝑑𝑒𝑝𝑜𝑠𝑖𝑡𝑜 𝑛𝑎 𝑐𝑜𝑛𝑡𝑎 𝑑𝑒 *100 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜* 

𝑷𝒂𝒓𝒂 𝒄𝒐𝒏𝒕𝒊𝒏𝒖𝒂𝒓, 𝒂𝒔𝒔𝒊𝒏𝒆 𝒆𝒔𝒕𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒐 𝒔𝒆𝒖 𝑵𝒐𝒎𝒆 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐!
╰──────────────˒≪𖥳≫`
     let message = await  conn.sendFile(m.chat, imgBank.getRandom(), 'loja.jpg',
  registra, m)
  
  global.db.data.chats[m.chat].users[m.sender].bankRegister= message.key
 
 
  }
}

else if(global.db.data.chats[m.chat].ciphers &&
global.db.data.chats[m.chat].ciphers.msgId && m.quoted && m.quoted.id ==
global.db.data.chats[m.chat].ciphers.msgId.id){
  
  
  
  if(m.text=='>' && global.db.data.chats[m.chat].ciphers.index == 1){
    global.db.data.chats[m.chat].ciphers.index = 2
        const bulletPoint = '⌥';

const formattedList = global.db.data.chats[m.chat].ciphers.page2.map(item => `${bulletPoint} ${item}`);
let mensagem = `⎔⎓──────────────
┃ 🔐 𝚂𝚎𝚕𝚎𝚌𝚒𝚘𝚗𝚎 𝚞𝚖 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚊𝚕𝚐𝚘𝚛𝚒𝚝𝚖𝚘 𝚙𝚊𝚛𝚊 𝚌𝚛𝚒𝚙𝚝𝚘𝚐𝚛𝚊𝚏𝚊𝚛 𝚜𝚎𝚞 𝚝𝚎𝚡𝚝𝚘. . . 


۝ 𝚄𝚜𝚎 𝚘 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚊 𝚜𝚎𝚐𝚞𝚒𝚗𝚝𝚎 𝚏𝚘𝚛𝚖𝚊:

.𝘤𝘪𝘱𝘩𝘦𝘳 𝙖𝙡𝙜𝙤𝙧𝙞𝙩𝙢𝙤 𝘁𝗲𝘅𝘁𝗼

𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗮 𝗰𝗼𝗺 < 𝗽𝗮𝗿𝗮 𝘃𝗼𝗹𝘁𝗮𝗿 𝗮 𝗽𝗮́𝗴𝗶𝗻𝗮 𝗮𝗻𝘁𝗲𝗿𝗶𝗼𝗿
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${formattedList.join('\n')}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
◀️  𝙿𝚊́𝚐𝚒𝚗𝚊 𝟸  ▶️
╰─...⎔⎓──────────`
      let mensagm = await  m.reply(mensagem)
    global.db.data.chats[m.chat].ciphers.msgId = mensagm.key
    
    
    
    
    
    
  }
  if(m.text=='<' && global.db.data.chats[m.chat].ciphers.index == 2){
        
            global.db.data.chats[m.chat].ciphers.index = 1
        const bulletPoint = '⌥';

const formattedList = global.db.data.chats[m.chat].ciphers.page1.map(item => `${bulletPoint} ${item}`);
       
      let mensagem = `⎔⎓──────────────
┃ 🔐 𝚂𝚎𝚕𝚎𝚌𝚒𝚘𝚗𝚎 𝚞𝚖 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚊𝚕𝚐𝚘𝚛𝚒𝚝𝚖𝚘 𝚙𝚊𝚛𝚊 𝚌𝚛𝚒𝚙𝚝𝚘𝚐𝚛𝚊𝚏𝚊𝚛 𝚜𝚎𝚞 𝚝𝚎𝚡𝚝𝚘. . . 


۝ 𝚄𝚜𝚎 𝚘 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚊 𝚜𝚎𝚐𝚞𝚒𝚗𝚝𝚎 𝚏𝚘𝚛𝚖𝚊:

.𝘤𝘪𝘱𝘩𝘦𝘳 𝙖𝙡𝙜𝙤𝙧𝙞𝙩𝙢𝙤 𝘁𝗲𝘅𝘁𝗼

𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗮 𝗰𝗼𝗺 > 𝗽𝗮𝗿𝗮 𝗮𝘃𝗮𝗻𝗰̧𝗮𝗿 𝗮 𝗽𝗿𝗼𝘅𝗶𝗺𝗮 𝗽𝗮́𝗴𝗶𝗻𝗮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${formattedList.join('\n')}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
◀️  𝙿𝚊́𝚐𝚒𝚗𝚊 𝟷  ▶️
╰─...⎔⎓──────────`
    let mensagm = await  m.reply(mensagem)
    global.db.data.chats[m.chat].ciphers.msgId = mensagm.key
    
  }
}
else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].loja?.lojaId.id  ){

  let imgLivraria =[
  'https://telegra.ph/file/c4c0734b7ee56951907cc.jpg',
  'https://telegra.ph/file/40b2679d873da6de41213.jpg',
  'https://telegra.ph/file/72e30043d3e5f9dd50340.jpg',
  'https://telegra.ph/file/c9a75e5c7cbfe05c585c9.jpg'
]

  if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].loja.Index == 0){
if(m.text== '0' && global.db.data.chats[m.chat].loja.Index !== 0 && global.db.data.chats[m.chat].loja.page !=='home'  ){
  
  
let txtLoja = `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
_𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚 𝐥𝐨𝐣𝐚 𝐝𝐨 𝐆𝐚𝐭𝐨 𝐏𝐫𝐞𝐭𝐨, 𝐨𝐧𝐝𝐞 𝐨𝐬 𝐩𝐞𝐬𝐚𝐝𝐞𝐥𝐨𝐬 𝐬𝐚𝐨 𝐝𝐞𝐬𝐞𝐧𝐭𝐞𝐫𝐫𝐚𝐝𝐨𝐬 𝐞 𝐯𝐨𝐬𝐬𝐚 𝐟𝐨𝐫𝐭𝐮𝐧𝐚 𝐝𝐞𝐬𝐯𝐞𝐥𝐚 𝐩𝐫𝐞𝐦𝐢𝐨𝐬 𝐬𝐨𝐦𝐛𝐫𝐢𝐨𝐬. . ._

    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘤𝘢𝘵𝘦𝘨𝘰𝘳𝘪𝘢

⦗1⦘ _𝑪𝒂𝒎𝒃𝒊𝒐 𝒅𝒆 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜 𝒆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜

⦗2⦘ _𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐱𝐩 𝐜𝐨𝐦 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜_

⦗3⦘ _𝐂𝐨𝐦𝐩𝐫𝐚𝐫 𝐭𝐨𝐤𝐞𝐧𝐬_    

⦗4⦘ _𝐍𝐞𝐠𝐨𝐜𝐢𝐚𝐫 𝐚𝐥𝐦𝐚𝐬_

╰────────────────────────⋞╯
`.trim()  

let imgLivraria =[
  'https://telegra.ph/file/c4c0734b7ee56951907cc.jpg',
  'https://telegra.ph/file/40b2679d873da6de41213.jpg',
  'https://telegra.ph/file/72e30043d3e5f9dd50340.jpg',
  'https://telegra.ph/file/c9a75e5c7cbfe05c585c9.jpg'
]

let message = await  conn.sendFile(m.chat, imgLivraria.getRandom(), 'loja.jpg', txtLoja, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key
 
global.db.data.chats[m.chat].loja.Index = 0
global.db.data.chats[m.chat].loja.page ='home'
}
    if(m.text== '1' && global.db.data.chats[m.chat].loja.Index ==0 && global.db.data.chats[m.chat].loja.page =='home'){
      

let bugStore =[
'https://telegra.ph/file/660d24fe58ad382d35094.jpg',
'https://telegra.ph/file/5a4425f8c94d96249d1ab.jpg',
'https://telegra.ph/file/2be7201646212764ef0f8.jpg',
'https://telegra.ph/file/e7494fdf28868bf1adf18.jpg',
'https://telegra.ph/file/577a9e21712450e8fd2ba.jpg']
      
let message = await  conn.sendFile(m.chat, bugStore.getRandom(), 'loja.jpg', `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔯𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘰𝘱𝘤𝘢𝘰

_〘 𓆣 𝑽𝒆𝒏𝒅𝒂 𝒅𝒆 𝒆𝒔𝒄𝒂𝒓𝒂𝒗𝒆𝒍𝒉𝒐𝒔 〙_

⦗1⦘ _Vender 1 escaravelho por 550 Darkcoins_
⦗2⦘ _Vender 2 escaravelhos por 1100 Darkcoins_
⦗3⦘ _Vender 4 escaravelhos por 2200 Darkcoins_
⦗4⦘ _Vender 5 escaravelhos por 2750 Darkcoins_
⦗5⦘ _Vender 7 escaravelhos por 3850 Darkcoins_
⦗6⦘ _Vender 8 escaravelhos por 4400 Darkcoins_

_〘 𒄆 𝑽𝒆𝒏𝒅𝒂 𝒅𝒆 𝑫𝒂𝒓𝒌𝒄𝒐𝒊𝒏𝒔 〙_

⦗7⦘ _Vender 550 Darkcoins por 1 escaravelho_
⦗8⦘ _Vender 1100 Darkcoins por 2 escaravelhos_
⦗9⦘ _Vender 1650 Darkcoins por 3 escaravelhos_
⦗10⦘ _Vender 2200 Darkcoins por 4 escaravelhos_
⦗11⦘ _Vender 2750 Darkcoins por 5 escaravelhos_
⦗12⦘ _Vender 3300 Darkcoins por 6 escaravelhos_

⦗0⦘ _𝑽𝒐𝒍𝒕𝒂𝒓_

╰────────────────────────⋞╯`, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key

global.db.data.chats[m.chat].loja.Index = 1
global.db.data.chats[m.chat].loja.page='coins'
   return
   
      
    }
 
 
////buyxp


    if(m.text== '2' && global.db.data.chats[m.chat].loja.Index ==0 && global.db.data.chats[m.chat].loja.page =='home'){
      

let xpStore =[
'https://telegra.ph/file/7d59d338ae365e5860d2a.jpg',
'https://telegra.ph/file/9eaa76a704535dae5446c.jpg',

'https://telegra.ph/file/b4f9b0a0ec9153d9a280f.jpg',
'https://telegra.ph/file/b26df0117080c34bda803.jpg',
'https://telegra.ph/file/7657c351a743a16950d48.jpg'
]
      
let message = await  conn.sendFile(m.chat, xpStore.getRandom(), 'loja.jpg', `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔯𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘰𝘱𝘤𝘢𝘰
    
⦗1⦘ Comprar 100 XP por 500 Darkcoins
⦗2⦘ Comprar 250 XP por 1200 Darkcoins
⦗3⦘ Comprar 750 XP por 3600 Darkcoins
⦗4⦘ Comprar 1500 XP por 7000 Darkcoins
⦗5⦘ Comprar 3000 XP por 13800 Darkcoins
⦗6⦘ Comprar 5000 XP por 20700 Darkcoins

⦗0⦘ _𝑽𝒐𝒍𝒕𝒂𝒓_

╰────────────────────────⋞╯`, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key

global.db.data.chats[m.chat].loja.Index = 2
global.db.data.chats[m.chat].loja.page='xp'
   return
   
      
    }
 
 ////// categoria 3
     if( m.text== '3' && global.db.data.chats[m.chat].loja.Index ==0 && global.db.data.chats[m.chat].loja.page =='home'){
      

let bugsStore =[
'https://telegra.ph/file/10d95e3866fb655aa2595.jpg',
'https://telegra.ph/file/e9857de3dc1f3faea297b.jpg',

'https://telegra.ph/file/cf548893217c8ea7a2933.jpg',
'https://telegra.ph/file/9f1c9d50f420aab358716.jpg',
'https://telegra.ph/file/292ec5ea862bb3d324e50.jpg'
]
      
let message = await  conn.sendFile(m.chat, bugsStore.getRandom(), 'loja.jpg', `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔯𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘰𝘱𝘤𝘢𝘰
    
⦗1⦘ _Comprar 1 *Aliança 〘💍〙* por 50 Escaravelhos_
ᵁˢᵉ⁻ᵃ ᵖᵃʳᵃ ˢᵒˡᶦᶜᶦᵗᵃʳ ˢᵘᵃ ᵃᵐᵃᵈᵃ ᵉᵐ ᵐᵃᵗʳᶦᵐᵒⁿᶦᵒ

⦗2⦘ Comprar 1 *Sombras furtivas 〘🦇〙* por 20 Escaravelhos
ᴿᵒᵘᵇᵉ ˢᵉᵐ ᵐᵉᵈᵒ ᵈᵃ ᵖᵉⁿᶦᵗᵉⁿᶜᶦᵃ ᵈᵃˢ ᵗʳᵉᵛᵃˢ

⦗3⦘ Comprar 1 *Escudo Lunar〘🌙〙* por 5 Escaravelhos
ʀᴇʟɪᴏ̨ᴜɪᴀ ᴀʀᴄᴀɴᴀ ᴘᴀʀᴀ ʀᴇᴘᴇʟɪʀ ᴀssᴀʟᴛᴏs

⦗4⦘ Comprar 1 *Adaga Sombria〘🗡〙* por 3 Escaravelhos
ᴀʀᴍᴀ ғᴏʀᴊᴀᴅᴀ ɴᴀs sᴏᴍʙʀᴀs ᴘᴀʀᴀ ᴍᴀᴛᴀʀ sᴇᴜs ᴀᴅᴠᴇʀsᴀʀɪᴏs

⦗5⦘ Comprar 5  *Adagas Sombrias〘🗡〙* por 12 Escaravelhos

⦗0⦘ _𝑽𝒐𝒍𝒕𝒂𝒓_

╰────────────────────────⋞╯`, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key

global.db.data.chats[m.chat].loja.Index = 3
global.db.data.chats[m.chat].loja.page='tokens'
   return
   
      
    }
 
 
     if( m.text== '4' && global.db.data.chats[m.chat].loja.Index ==0 && global.db.data.chats[m.chat].loja.page =='home'){
      

let bugsStore =[
  'https://telegra.ph/file/f145110672cb59c3d3e25.jpg',
  'https://telegra.ph/file/f364fe4075cff37ccb6ba.jpg',
'https://telegra.ph/file/d5af2514298ef4d4af1f0.jpg'
]
      
let message = await  conn.sendFile(m.chat, bugsStore.getRandom(), 'loja.jpg', `╔═━━━─── • ───━━━═╗
   *𝔄 𝔏𝔬𝔧𝔞 𝔇' 𝔊𝔞𝔯𝔬 𝔓𝔯𝔢𝔱𝔬*
╚═━━━─── • ───━━━═╝
╭⋟────────────────────────╮
    𝘗𝘰𝘳 𝘧𝘢𝘷𝘰𝘳... 𝘴𝘦𝘭𝘦𝘤𝘪𝘰𝘯𝘦 𝘶𝘮𝘢 𝘰𝘱𝘤𝘢𝘰
    
⦗1⦘ Comprar 1 *Capa Vampirica〘𖢲〙* por 15 almas
ᴘʀᴏᴛᴇᴊᴀ-sᴇ ᴅᴏs ᴀssᴀssɪɴᴏs ᴅᴀ ɴᴏɪᴛᴇ

⦗2⦘ Comprar 1 *Artefato de Frankenstein〘𖥂〙* por 1 alma
ʀᴇʟɪ́ǫᴜɪᴀ ᴅᴏ ɪɴғᴀᴍᴇ ᴅʀ.ᴠɪᴄᴛᴏʀ ᴘᴀʀᴀ ʀᴇsᴛᴀᴜʀᴀʀ ᴠɪᴅᴀ ᴀᴏs ᴍᴏʀᴛᴏs

⦗3⦘ Comprar 1 *Relíquia da Morte〘𖢹〙* por 5 almas 
ᴿᵉˢˢᵘᶜᶦᵗᵉ ᶜᵒᵐᵒ ᵘᵐᵃ ᶠᵉⁿᶦˣ

⦗4⦘ Comprar 1 *Demonio protetor〘𖡹〙* por 30 almas
ᴅᴇᴍᴏ̂ɴɪᴏ ᴅᴀ ᴇɴᴄʀᴜᴢɪʟʜᴀᴅᴀ ᴘᴀʀᴀ ᴏ ᴘʀᴏᴛᴇɢᴇʀ ᴘᴇssᴏᴀʟ ᴅᴇ ʟᴀᴅʀᴏ̃ᴇs ᴇ ᴀssᴀssɪɴᴏs

⦗0⦘ _𝑽𝒐𝒍𝒕𝒂𝒓_

╰────────────────────────⋞╯`, m)
 
global.db.data.chats[m.chat].loja.lojaId = message.key

global.db.data.chats[m.chat].loja.Index = 4
global.db.data.chats[m.chat].loja.page='almas'
   return
   
      
    }
 
 
 
  }
  if ( global.db.data.chats[m.chat].loja.Index ===1 &&
  global.db.data.chats[m.chat].loja.page=='coins' && m.text >= 0 && m.text <=
  12) {
    let options = {
        1: { escaravelhos: -1, darkcoins: 550, type: 'Transacao de cambio: Venda de 1 escaravelho por 550 Darkcoins' },
        2: { escaravelhos: -2, darkcoins: 1100, type: 'Transacao de cambio: Venda de 2 escaravelhos por 1100 Darkcoins' },
        3: { escaravelhos: -4, darkcoins: 2200, type: 'Transacao de cambio: Venda de 4 escaravelhos por 2200 Darkcoins' },
        4: { escaravelhos: -5, darkcoins: 2750, type: 'Transacao de cambio: Venda de 5 escaravelhos por 2750 Darkcoins' },
        5: { escaravelhos: -7, darkcoins: 3850, type: 'Transacao de cambio: Venda de 7 escaravelhos por 3850 Darkcoins' },
        6: { escaravelhos: -8, darkcoins: 4400, type: 'Transacao de cambio: Venda de 8 escaravelhos por 4400 Darkcoins' },
        7: { escaravelhos: 1, darkcoins: -550, type: 'Transacao de cambio: Venda de 550 Darkcoins por 1 escaravelho' },
        8: { escaravelhos: 2, darkcoins: -1100, type: 'Transacao de cambio: Venda de 1100 Darkcoins por 2 escaravelhos' },
        9: { escaravelhos: 3, darkcoins: -1650, type: 'Transacao de cambio: Venda de 1650 Darkcoins por 3 escaravelhos' },
        10: { escaravelhos: 4, darkcoins: -2200, type: 'Transacao de cambio: Venda de 2200 Darkcoins por 4 escaravelhos' },
        11: { escaravelhos: 5, darkcoins: -2750, type: 'Transacao de cambio: Venda de 2750 Darkcoins por 5 escaravelhos' },
        12: { escaravelhos: 6, darkcoins: -3300, type: 'Transacao de cambio: Venda de 3300 Darkcoins por 6 escaravelhos' }
    };

    let choice = options[m.text];
    let user = global.db.data.chats[m.chat].users[m.sender];
    let loja = global.db.data.chats[m.chat].loja
if(user.limit<0) user.limit=0
if(user.money<0) user.money=0
    // Check if user has enough resources
    if ((choice.escaravelhos < 0 && user.limit < -choice.escaravelhos) ||
        (choice.darkcoins < 0 && user.money < -choice.darkcoins)) {
           m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑬𝑹𝑹𝑶 𝑨𝑶 𝑬𝑭𝑬𝑻𝑼𝑨𝑹 𝑪𝑶𝑴𝑷𝑹𝑨!
┃ 
┃ 𝔖𝔞𝔩𝔡𝔬 𝔦𝔫𝔰𝔲𝔣𝔦𝔠𝔦𝔢𝔫𝔱𝔢 𝔫𝔞 𝔠𝔞𝔯𝔱𝔢𝔦𝔯𝔞!
┃
╰─...⎔⎓──────────`);
        return;
    }

    // Process the transaction
    user.limit += choice.escaravelhos;
    user.money += choice.darkcoins;

    // Create a protocol ID and log the purchase
    let protocolId = Math.random().toString(36).substr(2, 9).toUpperCase();
    let purchaseDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    let purchaseInfo = {
        protocolId: protocolId,
        date: purchaseDate,
        name: m.pushName,
        number: m.sender.split('@')[0],
        type: choice.type,
        escaravelhos: choice.escaravelhos,
        darkcoins: choice.darkcoins
    };

    
    

    if (!loja.historico) {
        loja.historico = [];
    }
    if(!loja.historico[m.sender]){
      loja.historico[m.sender]=[]
    }
    loja.historico[m.sender].push(purchaseInfo);
    
    
    m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑪𝑶𝑴𝑷𝑹𝑨 𝑹𝑬𝑨𝑳𝑰𝒁𝑨𝑫𝑨 𝑪𝑶𝑴 𝑺𝑼𝑪𝑬𝑺𝑺𝑶!
┃ 𝙿𝚛𝚘𝚝𝚘𝚌𝚘𝚕𝚘 𝙽°: ${protocolId}
┃ 𝙳𝚊𝚝𝚊: ${purchaseDate}
┃ 
┃ _*${choice.type}*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝔄𝔤𝔯𝔞𝔡𝔢𝔠𝔢𝔪𝔬𝔰 𝔭𝔬𝔯 𝔰𝔢 𝔞𝔳𝔢𝔫𝔱𝔲𝔯𝔞𝔯 𝔫𝔬 𝔞𝔟𝔦𝔰𝔪𝔬 𝔡𝔞 𝔩𝔬𝔧𝔞 𝔒 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬, 𝔳𝔬𝔩𝔱𝔢 𝔰𝔢𝔪𝔭𝔯𝔢 𝔞 𝔫𝔬𝔰𝔰𝔞 𝔢𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔬 𓂀
╰─...⎔⎓──────────`);
}

 if (global.db.data.chats[m.chat].loja.Index === 2 &&
 global.db.data.chats[m.chat].loja.page == 'xp' && m.text >= 0 && m.text <= 6)
 {
    let options = {
        1: { xp: 100, darkcoins: -500, type: 'Compra de 100 XP por 500 Darkcoins' },
        2: { xp: 250, darkcoins: -1200, type: 'Compra de 250 XP por 1200 Darkcoins' },
        3: { xp: 750, darkcoins: -3600, type: 'Compra de 750 XP por 3600 Darkcoins' },
        4: { xp: 1500, darkcoins: -7000, type: 'Compra de 1500 XP por 7000 Darkcoins' },
        5: { xp: 3000, darkcoins: -13800, type: 'Compra de 3000 XP por 13800 Darkcoins' },
        6:{ xp: 5000, darkcoins: -20700, type: 'Compra de 5000 XP por 20700 Darkcoins' }
    
      };

    let choice = options[m.text];
   let loja = global.db.data.chats[m.chat].loja
    let user = global.db.data.chats[m.chat].users[m.sender];
if(user.limit<0) user.limit=0
if(user.money<0) user.money=0
    // Check if user has enough Darkcoins
    if (user.money < -choice.darkcoins) {
        m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑬𝑹𝑹𝑶 𝑨𝑶 𝑬𝑭𝑬𝑻𝑼𝑨𝑹 𝑪𝑶𝑴𝑷𝑹𝑨!
┃ 
┃ 𝔖𝔞𝔩𝔡𝔬 𝔦𝔫𝔰𝔲𝔣𝔦𝔠𝔦𝔢𝔫𝔱𝔢 𝔫𝔞 𝔠𝔞𝔯𝔱𝔢𝔦𝔯𝔞!
┃
╰─...⎔⎓──────────`);
        return;
    }

    // Process the transaction
    user.exp += choice.xp;
    user.money += choice.darkcoins;

    // Create a protocol ID and log the purchase
    let protocolId = Math.random().toString(36).substr(2, 9).toUpperCase();
    let purchaseDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    let purchaseInfo = {
        protocolId: protocolId,
        date: purchaseDate,
        name: m.pushName,
        number: m.sender.split('@')[0],
        type: choice.type,
        xp: choice.xp,
        darkcoins: choice.darkcoins
    };

    if (!loja.historico) {
        loja.historico = [];
    }
    if(!loja.historico[m.sender]){
      loja.historico[m.sender]=[]
    }
    loja.historico[m.sender].push(purchaseInfo);

    m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑪𝑶𝑴𝑷𝑹𝑨 𝑹𝑬𝑨𝑳𝑰𝒁𝑨𝑫𝑨 𝑪𝑶𝑴 𝑺𝑼𝑪𝑬𝑺𝑺𝑶!
┃ 𝙿𝚛𝚘𝚝𝚘𝚌𝚘𝚕𝚘 𝙽°: ${protocolId}
┃ 𝙳𝚊𝚝𝚊: ${purchaseDate}
┃ 
┃ _*${choice.type}*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝔄𝔤𝔯𝔞𝔡𝔢𝔠𝔢𝔪𝔬𝔰 𝔭𝔬𝔯 𝔰𝔢 𝔞𝔳𝔢𝔫𝔱𝔲𝔯𝔞𝔯 𝔫𝔬 𝔞𝔟𝔦𝔰𝔪𝔬 𝔡𝔞 𝔩𝔬𝔧𝔞 𝔒 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬, 𝔳𝔬𝔩𝔱𝔢 𝔰𝔢𝔪𝔭𝔯𝔢 𝔞 𝔫𝔬𝔰𝔰𝔞 𝔢𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔬 𓂀
╰─...⎔⎓──────────`);
}

 if (global.db.data.chats[m.chat].loja.Index === 3 &&
 global.db.data.chats[m.chat].loja.page == 'tokens' && m.text >= 0 && m.text <=
 5) 
 {
   
 const tokOptions = {
    
    1: { attribute: 'rings', cost: -50, type: 'Compra de Aliança por 50 Escaravelhos' },
  
    2: { attribute: 'shadows', cost: -20, type: 'Compra de Sombras Furtivas (5 tentativas) por 20 Escaravelhos' },
    3: { attribute: 'shields', cost: -5, type: 'Compra de Proteção Lunar durante 8 horas por 5 Escaravelhos' },
    4: { attribute: 'daggers', cost: -3, type: 'Compra de Adaga Sombria por 3 Escaravelhos' },
    5: { attribute: 'daggers', cost: -12, type: 'Compra de 5 Adagas Sombrias por 12 Escaravelhos' }
}

    let choice = tokOptions[m.text];
   let loja = global.db.data.chats[m.chat].loja
    let user = global.db.data.chats[m.chat].users[m.sender];

if(user.limit<0) user.limit=0
if(user.money<0) user.money=0
    // Check if user has enough Darkcoins
    if (user.limit < -choice.cost) {
        m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑬𝑹𝑹𝑶 𝑨𝑶 𝑬𝑭𝑬𝑻𝑼𝑨𝑹 𝑪𝑶𝑴𝑷𝑹𝑨!
┃ 
┃ 𝔖𝔞𝔩𝔡𝔬 𝔦𝔫𝔰𝔲𝔣𝔦𝔠𝔦𝔢𝔫𝔱𝔢 𝔫𝔞 𝔠𝔞𝔯𝔱𝔢𝔦𝔯𝔞!
┃
╰─...⎔⎓──────────`);
        return;
    }
    
    
    
    let att = choice.attribute
    
    
if(m.text==5){
  global.db.data.chats[m.chat].users[m.sender][att] = 
    (global.db.data.chats[m.chat].users[m.sender][att] || 0) + 5
}
else{
global.db.data.chats[m.chat].users[m.sender][att] = 
    (global.db.data.chats[m.chat].users[m.sender][att] || 0) + 1
}


    user.limit += choice.cost;

    // Create a protocol ID and log the purchase
    let protocolId = Math.random().toString(36).substr(2, 9).toUpperCase();
    let purchaseDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    let purchaseInfo = {
        protocolId: protocolId,
        date: purchaseDate,
        name: m.pushName,
        number: m.sender.split('@')[0],
        type: choice.type,
        xp: choice.xp,
        darkcoins: choice.darkcoins
    };

    if (!loja.historico) {
        loja.historico = [];
    }
    if(!loja.historico[m.sender]){
      loja.historico[m.sender]=[]
    }
    loja.historico[m.sender].push(purchaseInfo);

    m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑪𝑶𝑴𝑷𝑹𝑨 𝑹𝑬𝑨𝑳𝑰𝒁𝑨𝑫𝑨 𝑪𝑶𝑴 𝑺𝑼𝑪𝑬𝑺𝑺𝑶!
┃ 𝙿𝚛𝚘𝚝𝚘𝚌𝚘𝚕𝚘 𝙽°: ${protocolId}
┃ 𝙳𝚊𝚝𝚊: ${purchaseDate}
┃ 
┃ _*${choice.type}*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝔄𝔤𝔯𝔞𝔡𝔢𝔠𝔢𝔪𝔬𝔰 𝔭𝔬𝔯 𝔰𝔢 𝔞𝔳𝔢𝔫𝔱𝔲𝔯𝔞𝔯 𝔫𝔬 𝔞𝔟𝔦𝔰𝔪𝔬 𝔡𝔞 𝔩𝔬𝔧𝔞 𝔒 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬, 𝔳𝔬𝔩𝔱𝔢 𝔰𝔢𝔪𝔭𝔯𝔢 𝔞 𝔫𝔬𝔰𝔰𝔞 𝔢𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔬 𓂀
╰─...⎔⎓──────────`);
}
 
 if (global.db.data.chats[m.chat].loja.Index === 4 &&
 global.db.data.chats[m.chat].loja.page == 'almas' && m.text >= 0 && m.text <=
 4) 
 {
   
 const tokOptions = {
    
    1: { attribute: 'vampire', cost: -15, type: 'Tornou-se vampiro por por 15 almas' },
  
    2: { attribute: 'artifacts', cost: -1, type: 'Aprendeu os segredos de Victor Frankenstein por 1 alma' },
    3: { attribute: 'elixirs', cost: -5, type: 'Relíquia da morte obtida por 5 almas' },
    4: { attribute: 'demonio', cost: -30, type: 'Invocou um demonio para proteje-lo, ofertando 30 almas' }
}

    let choice = tokOptions[m.text];
   let loja = global.db.data.chats[m.chat].loja
    let user = global.db.data.chats[m.chat].users[m.sender];
if(user.almas<0)user.almas = 0
    // Check if user has enough Darkcoins
    if (user.almas < -choice.cost) {
        m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑬𝑹𝑹𝑶 𝑨𝑶 𝑬𝑭𝑬𝑻𝑼𝑨𝑹 𝑪𝑶𝑴𝑷𝑹𝑨!
┃ 
┃ 𝔑𝔞̃𝔬 𝔱𝔢𝔪 𝔞𝔩𝔪𝔞𝔰 𝔰𝔲𝔣𝔦𝔠𝔦𝔢𝔫𝔱𝔢́𝔰. . . 
┃
╰─...⎔⎓──────────`);
        return;
    }
    
    
    
    let att = choice.attribute
  
  
    if(global.db.data.chats[m.chat].users[m.sender][att] < 0){
      global.db.data.chats[m.chat].users[m.sender][att] =0
    }
global.db.data.chats[m.chat].users[m.sender][att] = 
    (global.db.data.chats[m.chat].users[m.sender][att] || 0) + 1



    user.almas += choice.cost;

    // Create a protocol ID and log the purchase
    let protocolId = Math.random().toString(36).substr(2, 9).toUpperCase();
    let purchaseDate = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    let purchaseInfo = {
        protocolId: protocolId,
        date: purchaseDate,
        name: m.pushName,
        number: m.sender.split('@')[0],
        type: choice.type,
        xp: choice.xp,
        darkcoins: choice.darkcoins
    };

    if (!loja.historico) {
        loja.historico = [];
    }
    if(!loja.historico[m.sender]){
      loja.historico[m.sender]=[]
    }
    loja.historico[m.sender].push(purchaseInfo);

    m.reply(`⎔⎓──────────────
┃  ✞︎ 𝑪𝑶𝑴𝑷𝑹𝑨 𝑹𝑬𝑨𝑳𝑰𝒁𝑨𝑫𝑨 𝑪𝑶𝑴 𝑺𝑼𝑪𝑬𝑺𝑺𝑶!
┃ 𝙿𝚛𝚘𝚝𝚘𝚌𝚘𝚕𝚘 𝙽°: ${protocolId}
┃ 𝙳𝚊𝚝𝚊: ${purchaseDate}
┃ 
┃ _*${choice.type}*_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𝔄𝔤𝔯𝔞𝔡𝔢𝔠𝔢𝔪𝔬𝔰 𝔭𝔬𝔯 𝔰𝔢 𝔞𝔳𝔢𝔫𝔱𝔲𝔯𝔞𝔯 𝔫𝔬 𝔞𝔟𝔦𝔰𝔪𝔬 𝔡𝔞 𝔩𝔬𝔧𝔞 𝔒 𝔊𝔞𝔱𝔬 𝔓𝔯𝔢𝔱𝔬, 𝔳𝔬𝔩𝔱𝔢 𝔰𝔢𝔪𝔭𝔯𝔢 𝔞 𝔫𝔬𝔰𝔰𝔞 𝔢𝔰𝔠𝔲𝔯𝔦𝔡𝔞𝔬 𓂀
╰─...⎔⎓──────────`);
}
 
 
}
else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].palavras?.delMsg  ){
  let lowerCaseText = m.text.toLowerCase();

  if (["sim", "claro", "yes", "sure", "oui", "ofc", "s", "ss"].includes(lowerCaseText)){
  m.reply(`⎔⎓─────────────.
  𝙹𝚘𝚐𝚘 𝚎𝚗𝚌𝚎𝚛𝚛𝚊𝚍𝚘 ✞︎
╰─...⎔⎓──────────`)
  delete global.db.data.chats[m.chat].palavras

  m.react('✔️')
   }
  if (["nao", "não", "esquece", "não preciso mais", "no", "niet","non", "n", "nn"].includes(lowerCaseText)){
  await m.reply(`⎔⎓─────────────
  𝙹𝚘𝚐𝚘 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘 ✞︎
╰─...⎔⎓──────────`);
  m.react('✔️')
}
}

else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].sopa?.delMsg  ){
  let lowerCaseText = m.text.toLowerCase();

  if (["sim", "claro", "yes", "sure", "oui", "ofc", "s", "ss"].includes(lowerCaseText)){
  m.reply(`⎔⎓─────────────.
  𝙹𝚘𝚐𝚘 𝚎𝚗𝚌𝚎𝚛𝚛𝚊𝚍𝚘 ✞︎
╰─...⎔⎓──────────`)
  delete global.db.data.chats[m.chat].sopa

  m.react('✔️')
   }
  if (["nao", "não", "esquece", "não preciso mais", "no", "niet","non", "n", "nn"].includes(lowerCaseText)){
  await m.reply(`⎔⎓─────────────
  𝙹𝚘𝚐𝚘 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘 ✞︎
╰─...⎔⎓──────────`);
  m.react('✔️')
}
}
else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].users[m.sender].divorcioId  ){
let imageDivorce =['https://telegra.ph/file/1068243efd1271b41585e.mp4','https://telegra.ph/file/56d390d6d15e145e232a0.mp4']
let solicitante = global.db.data.users[m.sender].parceiro
let lowerCaseText = m.text.toLowerCase();

if (["sim", "claro", "aceito", "óbvio", "obvio", "claro que sim", "s", "ss"].includes(lowerCaseText)) {
  
  
  delete global.db.data.users[m.sender].parceiro
  
  
  await conn.sendMessage(m.chat, {
            video: {url:imageDivorce.getRandom()},
            caption: `┏━── ﹝✒️📜﹞
 
 𝑵𝒐 𝒐𝒃𝒔𝒄𝒖𝒓𝒐 𝒓𝒆𝒄𝒊𝒏𝒕𝒐 𝒅𝒐 𝒄𝒂𝒓𝒕𝒐𝒓𝒊𝒐, 𝒐𝒔 𝒑𝒆𝒓𝒈𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒇𝒐𝒓𝒂𝒎 𝒂𝒔𝒔𝒊𝒏𝒂𝒅𝒐𝒔 𝒆 𝒓𝒆𝒄𝒐𝒏𝒉𝒆𝒄𝒊𝒅𝒐𝒔 𝒆 𝒗𝒐𝒔𝒔𝒐𝒔 𝒅𝒆𝒔𝒕𝒊𝒏𝒐𝒔 𝒅𝒆𝒔𝒗𝒊𝒏𝒄𝒖𝒍𝒂𝒅𝒐𝒔. 𝑨𝒈𝒐𝒓𝒂, 𝒗𝒐𝒔𝒔𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒆𝒔𝒕𝒂𝒐 𝒍𝒆𝒈𝒂𝒍𝒎𝒆𝒏𝒕𝒆 𝒔𝒆𝒑𝒂𝒓𝒂𝒅𝒂𝒔. 
 
 𝑼𝒎𝒂 𝒕𝒂𝒙𝒂 𝒅𝒆 415 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 𝒇𝒐𝒊 𝒆𝒙𝒂𝒖𝒓𝒊𝒅𝒂 𝒅𝒆 𝒗𝒐𝒔𝒔𝒂 𝒄𝒐𝒏𝒕𝒂 𝒂 𝒐𝒓𝒅𝒆𝒎 𝒑𝒂𝒓𝒂 𝒄𝒐𝒏𝒄𝒓𝒆𝒕𝒊𝒛𝒂𝒓 𝒆𝒔𝒕𝒆 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒐 𝒅𝒆 𝒅𝒊𝒔𝒔𝒐𝒍𝒖𝒄𝒂𝒐 𝒎𝒂𝒕𝒓𝒊𝒎𝒐𝒏𝒊𝒂𝒍.

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,solicitante], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
        global.db.data.chats[m.chat].users[m.sender].money -= 415
        global.db.data.chats[m.chat].users[solicitante].money -= 415
 delete global.db.data.users[m.sender].parceiro
 delete  global.db.data.users[solicitante].parceiro
 delete global.db.data.users[m.sender].divorcioId 
  
  
} else if (["não", "nao", "jamais", "nunca", "deus me livre", "não aceito", "recuso", "nn", "n"].includes(lowerCaseText) || m.text =='nao') {
  
  await conn.sendMessage(m.chat, {
            text: `┏━── ﹝💔﹞
 
 𝑷𝒓𝒐𝒄𝒆𝒔𝒔𝒐 𝒆𝒎 𝒄𝒂𝒓𝒕𝒐𝒓𝒊𝒐 𝒄𝒂𝒏𝒄𝒆𝒍𝒂𝒅𝒐! ✖️

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,solicitante], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
  global.db.data.chats[m.chat].users[m.sender].divorcioId = ''
  
} 
}

else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].users[m.sender].pedidoId ){
  let solicitante = global.db.data.chats[m.chat].users[m.sender].casorio[0]
const mensagemCelebracao = [
  `@${solicitante.split('@')[0]}... 

@${m.sender.split('@')[0]} 𝒂𝒄𝒆𝒊𝒕𝒐𝒖 𝒔𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐!
𝑬 𝒏𝒐 𝒃𝒓𝒆𝒖 𝒅𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐𝒏𝒅𝒆 𝒂 𝒑𝒂𝒊𝒙𝒂̃𝒐 𝒅𝒂𝒏𝒄𝒂 𝒄𝒐𝒎 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔, 𝒑𝒆𝒍𝒐𝒔 𝒑𝒐𝒅𝒆𝒓𝒆𝒔 𝒄𝒐𝒏𝒇𝒆𝒓𝒊𝒅𝒐𝒔 𝒂 𝒎𝒊𝒎, 𝒆𝒖 𝒗𝒐𝒔 𝒅𝒆𝒄𝒍𝒂𝒓𝒐 𝒐𝒇𝒊𝒄𝒊𝒂𝒍𝒎𝒆𝒏𝒕𝒆 𝒄𝒂𝒔𝒂𝒅𝒐𝒔!

𝑴𝒊𝒏𝒉𝒂𝒔 𝒕𝒆𝒏𝒓𝒂𝒔 𝒇𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 𝒂𝒐 𝒄𝒂𝒔𝒂𝒍.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒅𝒊𝒔𝒔𝒆 𝒔𝒊𝒎 𝒂𝒐 𝒔𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐!
𝑺𝒐𝒃 𝒐 𝒗𝒆́𝒖 𝒅𝒂𝒔 𝒆𝒔𝒕𝒓𝒆𝒍𝒂𝒔 𝒆 𝒐𝒔 𝒔𝒖𝒔𝒔𝒖𝒓𝒓𝒐𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆𝒕𝒆𝒓𝒏𝒂, 𝒆𝒖 𝒗𝒐𝒔 𝒅𝒆𝒄𝒍𝒂𝒓𝒐 𝒖𝒏𝒊𝒅𝒐𝒔 𝒆𝒎 𝒎𝒂𝒕𝒓𝒊𝒎𝒐̂𝒏𝒊𝒐!

𝑸𝒖𝒆 𝒗𝒐𝒔𝒔𝒂𝒔 𝒂𝒍𝒎𝒂𝒔 𝒄𝒆𝒍𝒆𝒃𝒓𝒆𝒎 𝒆𝒔𝒕𝒆 𝒍𝒂𝒄̧𝒐 𝒆𝒕𝒆𝒓𝒏𝒐.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒂𝒄𝒆𝒊𝒕𝒐𝒖 𝒖𝒏𝒊𝒓-𝒔𝒆 𝒂 𝒕𝒊!
𝑵𝒂𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒆𝒛𝒂𝒔 𝒅𝒆𝒔𝒕𝒂 𝒏𝒐𝒊𝒕𝒆 𝒎𝒊́𝒔𝒕𝒊𝒄𝒂, 𝒑𝒆𝒍𝒐𝒔 𝒑𝒐𝒅𝒆𝒓𝒆𝒔 𝒂 𝒎𝒊𝒎 𝒊𝒏𝒗𝒆𝒔𝒕𝒊𝒅𝒐𝒔, 𝒅𝒆𝒄𝒍𝒂𝒓𝒐-𝒗𝒐𝒔 𝒄𝒂𝒔𝒂𝒅𝒐𝒔!

𝑸𝒖𝒆 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐 𝒕𝒆𝒔𝒕𝒆𝒎𝒖𝒏𝒉𝒆 𝒗𝒐𝒔𝒔𝒂 𝒖𝒏𝒊𝒂̃𝒐 𝒔𝒖𝒃𝒍𝒊𝒎𝒆.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒂𝒄𝒆𝒊𝒕𝒐𝒖 𝒕𝒖𝒂 𝒑𝒓𝒐𝒑𝒐𝒔𝒕𝒂!
𝑵𝒂 𝒗𝒂𝒔𝒕𝒊𝒅𝒂̃𝒐 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆 𝒆 𝒔𝒐𝒃 𝒐 𝒐𝒍𝒉𝒂𝒓 𝒗𝒊𝒈𝒊𝒍𝒂𝒏𝒕𝒆 𝒅𝒂 𝒍𝒖𝒂, 𝒆𝒖 𝒅𝒆𝒄𝒍𝒂𝒓𝒐-𝒗𝒐𝒔 𝒄𝒂𝒔𝒂𝒅𝒐𝒔!

𝑸𝒖𝒆 𝒐 𝒂𝒎𝒐𝒓 𝒆𝒕𝒆𝒓𝒏𝒐 𝒔𝒆𝒋𝒂 𝒗𝒐𝒔𝒔𝒐 𝒈𝒖𝒊𝒂.`]
const mensagemRecusa = [
  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒓𝒆𝒄𝒖𝒔𝒐𝒖 𝒔𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐.
𝑵𝒐 𝒃𝒓𝒆𝒖 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆, 𝒐 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒔𝒆 𝒑𝒂𝒓𝒕𝒊𝒖 𝒆 𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 𝒄𝒐𝒏𝒔𝒐𝒍𝒂𝒎 𝒕𝒂𝒎𝒂𝒏𝒉𝒂 𝒅𝒐𝒓.
𝑨𝒔 𝒕𝒆𝒏𝒆𝒃𝒓𝒂𝒔 𝒍𝒂𝒎𝒆𝒏𝒕𝒂𝒎 𝒆 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒄𝒉𝒐𝒓𝒂 𝒑𝒐𝒓 𝒗𝒐𝒔.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒏𝒆𝒈𝒐𝒖 𝒕𝒖𝒂 𝒑𝒓𝒐𝒑𝒐𝒔𝒕𝒂 𝒅𝒆 𝒄𝒂𝒔𝒂𝒎𝒆𝒏𝒕𝒐.
𝑨𝒐 𝒔𝒐𝒎 𝒅𝒐 𝒗𝒆𝒏𝒕𝒐 𝒕𝒓𝒊𝒔𝒕𝒆 𝒆 𝒅𝒂𝒔 𝒇𝒐𝒍𝒉𝒂𝒔 𝒎𝒖𝒓𝒎𝒖𝒓𝒂𝒏𝒅𝒐 𝒑𝒆𝒍𝒂𝒔 𝒓𝒖𝒂𝒔, 𝒇𝒊𝒄𝒂𝒔𝒕𝒆𝒔 𝒔𝒆𝒎 𝒕𝒖𝒂 𝒓𝒆𝒔𝒑𝒐𝒔𝒕𝒂 𝒅𝒆𝒔𝒆𝒋𝒂𝒅𝒂.
𝑶 𝒄𝒆́𝒖 𝒔𝒆 𝒄𝒐𝒃𝒓𝒊𝒖 𝒅𝒆 𝒏𝒖𝒗𝒆𝒏𝒔 𝒆 𝒐 𝒎𝒖𝒏𝒅𝒐 𝒄𝒉𝒐𝒓𝒂 𝒄𝒐𝒏𝒔𝒊𝒈𝒐.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒓𝒆𝒋𝒆𝒊𝒕𝒐𝒖 𝒕𝒖𝒂 𝒑𝒓𝒐𝒑𝒐𝒔𝒕𝒂.
𝑬𝒏𝒗𝒐𝒍𝒗𝒊𝒅𝒐 𝒏𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂̃𝒐, 𝒐 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒔𝒆 𝒑𝒆𝒓𝒅𝒆𝒖 𝒆𝒎 𝒕𝒓𝒊𝒔𝒕𝒆𝒛𝒂.
𝑨𝒔 𝒕𝒓𝒆𝒗𝒂𝒔 𝒓𝒆𝒈𝒐𝒋𝒊𝒛𝒂𝒎-𝒔𝒆 𝒆 𝒂 𝒏𝒐𝒊𝒕𝒆 𝒔𝒆 𝒕𝒐𝒓𝒏𝒂 𝒎𝒂𝒊𝒔 𝒅𝒆𝒏𝒔𝒂 𝒄𝒐𝒎 𝒕𝒖𝒂 𝒅𝒐𝒓.`,

  `@${solicitante.split('@')[0]}...

@${m.sender.split('@')[0]} 𝒏𝒂̃𝒐 𝒂𝒄𝒆𝒊𝒕𝒐𝒖 𝒔𝒆𝒖 𝒑𝒆𝒅𝒊𝒅𝒐.
𝑨 𝒏𝒐𝒊𝒕𝒆 𝒇𝒊𝒄𝒐𝒖 𝒎𝒂𝒊𝒔 𝒇𝒓𝒊𝒂 𝒆 𝒐𝒔 𝒗𝒆𝒏𝒕𝒐𝒔 𝒄𝒉𝒐𝒓𝒂𝒎 𝒄𝒐𝒎 𝒕𝒖𝒂 𝒂𝒏𝒈𝒖́𝒔𝒕𝒊𝒂.
𝑸𝒖𝒆 𝒕𝒆𝒏𝒉𝒂 𝒇𝒐𝒓𝒄̧𝒂 𝒑𝒂𝒓𝒂 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒆𝒔𝒔𝒂 𝒔𝒐𝒎𝒃𝒓𝒂 𝒑𝒆𝒔𝒂𝒅𝒂.`]
const mensagemAguardandoResposta = [
  `𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒐 𝒑𝒆𝒅𝒊𝒅𝒐 𝒄𝒐𝒎 𝒔𝒊𝒎 𝒐𝒖 𝒏𝒂̃𝒐, @${m.sender.split('@')[0]}.
  
  𝒉𝒂́ 𝒖𝒎 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒂𝒕𝒐𝒓𝒎𝒆𝒏𝒕𝒂𝒅𝒐 𝒂𝒈𝒖𝒂𝒓𝒅𝒂𝒏𝒅𝒐 𝒔𝒖𝒂 𝒆𝒔𝒄𝒐𝒍𝒉𝒂.`,

  `𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒅𝒊𝒈𝒂 𝒔𝒊𝒎 𝒐𝒖 𝒏𝒂̃𝒐, @${m.sender.split('@')[0]}.
  
  𝒖𝒎 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒂𝒏𝒔𝒊𝒐𝒔𝒐 𝒆𝒔𝒕𝒂́ 𝒆𝒔𝒑𝒆𝒓𝒂𝒏𝒅𝒐 𝒑𝒐𝒓 𝒕𝒖𝒂 𝒓𝒆𝒔𝒑𝒐𝒔𝒕𝒂.`,

  `𝑵𝒂̃𝒐 𝒅𝒆𝒊𝒙𝒆 𝒖𝒎 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒔𝒐𝒇𝒓𝒆𝒓 𝒆𝒎 𝒔𝒊𝒍𝒆̂𝒏𝒄𝒊𝒐, @${m.sender.split('@')[0]}.
  
  𝒓𝒆𝒗𝒆𝒍𝒆 𝒔𝒆𝒖 𝒔𝒆𝒏𝒕𝒊𝒎𝒆𝒏𝒕𝒐 𝒂𝒈𝒐𝒓𝒂.`,

  `𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓, 𝒏𝒂̃𝒐 𝒑𝒓𝒐𝒍𝒐𝒏𝒈𝒖𝒆 𝒎𝒂𝒊𝒔 𝒂𝒏𝒔𝒊𝒆𝒅𝒂𝒅𝒆 𝒅𝒆 𝒖𝒎 𝒄𝒐𝒓𝒂𝒄̧𝒂̃𝒐 𝒂𝒏𝒔𝒊𝒐𝒔𝒐, @${m.sender.split('@')[0]}.
  
  𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒔𝒊𝒎 𝒐𝒖 𝒏𝒂̃𝒐.`]
const imageNao = ['https://telegra.ph/file/b95a017199214af2876fc.mp4','https://telegra.ph/file/74e86d7839ec9818674a3.mp4']
const imageSim =['https://telegra.ph/file/0ce05548acc464544fc74.mp4','https://telegra.ph/file/cdfb26ed565aa0e11254d.mp4','https://telegra.ph/file/f9af667c2f6bf65759c54.mp4']
let lowerCaseText = m.text.toLowerCase();

if (["sim", "claro", "aceito", "óbvio", "obvio", "claro que sim", "s", "ss"].includes(lowerCaseText)) {
  
  
  
  await conn.sendMessage(m.chat, {
            video: {url:imageSim.getRandom()},
            caption: `┏━── ﹝❤️‍🔥💍﹞
 
 ${mensagemCelebracao.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,solicitante], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
  global.db.data.users[m.sender].parceiro= solicitante
  global.db.data.users[solicitante].parceiro= m.sender
  global.db.data.users[m.sender].pedidoId = ''
  
  
} else if (["não", "nao", "jamais", "nunca", "deus me livre", "não aceito", "recuso", "nn", "n"].includes(lowerCaseText) || m.text =='nao') {
  
  await conn.sendMessage(m.chat, {
            video: {url:imageNao.getRandom()},
            caption: `┏━── ﹝💔﹞
 
 ${mensagemRecusa.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender,solicitante], // Replace with the recipient's WhatsApp ID(s) to mention
            },
        });
  global.db.data.chats[m.chat].users[m.sender].pedidoId = ''
  
} else {
  
  await conn.sendMessage(m.chat, {
            text: `┏━── ﹝🫀﹞
 
 ${mensagemAguardandoResposta.getRandom()}

┗━── `, // Replace with the desired caption
            contextInfo: {
                mentionedJid: [m.sender], 
            },
        });
        
  
}
}
else if(m.quoted && m.quoted.id == global.db.data.users[m.sender].regMsg){
  if(global.db.data.users[m.sender].regIndex == 0){
    if(m.text == "passo"){
      global.db.data.users[m.sender].nome = ''
    }
    else{
    global.db.data.users[m.sender].nome = m.text
  }
  let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*   *Onde você mora?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 1
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 1){
    
  if(m.text == "passo"){
      global.db.data.users[m.sender].morada = ''
    }
    else{
    global.db.data.users[m.sender].morada = m.text
  }
  
 
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*   *Qual sua idade?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 2
  
  return !0
  }
 else if(global.db.data.users[m.sender].regIndex == 2){
    if(m.text == "passo"){
      global.db.data.users[m.sender].age = ''
    }
    else{
    global.db.data.users[m.sender].age = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*   *Você segue alguma religião?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 3
  return !0
  }
 else if(global.db.data.users[m.sender].regIndex == 3){
    if(m.text == "passo"){
      global.db.data.users[m.sender].religiao = ''
    }
    else{
    global.db.data.users[m.sender].religiao= m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* 
*┃*   *Qual seu instagram?*
*┃*   _insira apenas o nome de usuário sem @_
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 4
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 4){
     if(m.text == "passo"){
      global.db.data.users[m.sender].instagram = ''
    }
    else{
    global.db.data.users[m.sender].instagram = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* 
*┃*   *Qual sua profissão?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 5
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 5){
     if(m.text == "passo"){
      global.db.data.users[m.sender].profissao = ''
    }
    else{
    global.db.data.users[m.sender].profissao = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Quais os seus tipos de música prediletos?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 6
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 6){
     if(m.text == "passo"){
      global.db.data.users[m.sender].generos = ''
    }
    else{
    global.db.data.users[m.sender].generos = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Qual sua musica preferida?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 7
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 7){
     if(m.text == "passo"){
      global.db.data.users[m.sender].musica = ''
    }
    else{
    global.db.data.users[m.sender].musica = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Você torce pra qual time?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 8
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 8){
     if(m.text == "passo"){
      global.db.data.users[m.sender].time = ''
    }
    else{
    global.db.data.users[m.sender].time = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Você pratica algum esporte?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 9
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 9){
     if(m.text == "passo"){
      global.db.data.users[m.sender].esportes = ''
    }
    else{
    global.db.data.users[m.sender].esportes = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Você tem animais de estimação?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 10
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 10){
     if(m.text == "passo"){
      global.db.data.users[m.sender].animais = ''
    }
    else{
    global.db.data.users[m.sender].animais = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Quais sao seus interesses, hobbies..* 
*┃* *o que gosta de fazer em seu cotidiano?*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 11
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 11){
     if(m.text == "passo"){
      global.db.data.users[m.sender].hobbies = ''
    }
    else{
    global.db.data.users[m.sender].hobbies = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*  *Possui algum website pessoal*
*┃* *ou portfólio?..* 
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 12
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 12){
     if(m.text == "passo"){
      global.db.data.users[m.sender].website = ''
    }
    else{
    global.db.data.users[m.sender].website = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*   *Gostaria de adicionar links a seu perfil?*
*┃* *Se sim, insira-os separados linha por linha*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 13
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 13){
     if(m.text == "passo"){
      global.db.data.users[m.sender].links = ''
    }
    else{
    global.db.data.users[m.sender].links = m.text
  }
    let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒎𝒊𝒏𝒉𝒂 𝒎𝒆𝒏𝒔𝒂𝒈𝒆𝒎 𝒄𝒐𝒎 𝒂𝒔 
*┃* 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒐𝒆𝒔 𝒒𝒖𝒆 𝒍𝒉𝒆 𝒑𝒆𝒅𝒊𝒓
*┃* --- 𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒂 _*passo*_ 𝒑𝒂𝒓𝒂 𝒑𝒖𝒍𝒂𝒓 𝒑𝒂𝒓𝒂 𝒂 𝒑𝒓𝒐𝒙𝒊𝒎𝒂 𝒑𝒆𝒓𝒈𝒖𝒏𝒕𝒂
*┃*
*┃*   *Me conte mais sobre você*
*┃*
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = mshg.key.id
  global.db.data.users[m.sender].regIndex = 14
  return !0
  }
  else if(global.db.data.users[m.sender].regIndex == 14){
     if(m.text == "passo"){
      global.db.data.users[m.sender].biografia = ''
    }
    else{
    global.db.data.users[m.sender].biografia = m.text
  }
      let textoP = `
┏━━❬ *REGISTRO* ❭━━┓
*┃* @${m.sender.split("@")[0]}
*┃* 
*┃* _*Registro realizado com sucesso!*_
*┃* 
┗━━━━━━━━━━━━━━━━
`
let mshg = await conn.reply(m.chat, textoP, m, { mentions: conn.parseMention(textoP) })
console.log(mshg)
  global.db.data.users[m.sender].regMsg = ''
 delete global.db.data.users[m.sender].regIndex 
 return !0
 
  }
  
  
  
  
  
  
  
  
  
  
}
  
else if(m.quoted && m.quoted.id == global.db.data.chats[m.chat].sudoku?.regMsg){
  if(!global.db.data.chats[m.chat].sudoku.checked && ! global.db.data.chats[m.chat].sudoku.gameData)
  {
    switch(m.text){
      case '1':
        global.db.data.chats[m.chat].sudoku.checked = true
        // {
        
        const puzzle = getSudoku('hard'); // You can choose the difficulty
  console.log('%%%%%%%%')
  
  console.log(puzzle)
  console.log('%%%%%%%%')
  global.db.data.chats[m.chat].sudoku.singleplayer = true
  global.db.data.chats[m.chat].sudoku.jogadores.push(m.sender)
  global.db.data.chats[m.chat].sudoku.gameData = puzzle
  global.db.data.chats[m.chat].sudoku.gameData.status = puzzle.puzzle
  const canvasSize = 500; // tamanho s
  const canvas = createCanvas(canvasSize, canvasSize);
  const ctx = canvas.getContext('2d');
  
  // config grade
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.font = '20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = 'black'; // Texto cor
  
  // offset pra guias
  const offset = 25; // Offset pra numeros e letras
  
  // desenha a grade com guias
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      // linhas verticais
      ctx.lineWidth = (i % 3 === 0 && i !== 0) ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(offset + i * 50, offset);
      ctx.lineTo(offset + i * 50, canvasSize - offset);
      ctx.stroke();
  
      // linhas horizontais
      ctx.lineWidth = (j % 3 === 0 && j !== 0) ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(offset, offset + j * 50);
      ctx.lineTo(canvasSize - offset, offset + j * 50);
      ctx.stroke();
    }
  }
  
  // números horizontais (1-9)
  for (let i = 1; i <= 9; i++) {
    ctx.fillText(i.toString(), offset + (i - 1) * 50 + 25, offset / 2);
  }
  
  // letras verticais (A-I)
  for (let i = 0; i < 9; i++) {
    ctx.fillText(String.fromCharCode(65 + i), offset / 2, offset + i * 50 + 25);
  }
  
  // Numeros do puzzle 
  for (let i = 0; i < 81; i++) {
    const num = puzzle.puzzle[i];
    if (num !== '-') { // Celula com numero
      const x = (i % 9) * 50 + 25 + offset;
      const y = Math.floor(i / 9) * 50 + 25 + offset;
      ctx.fillText(num, x, y);
    }
  }
  
  // Generate a random code for the filename
  const randomCode = Math.random().toString(36).substring(2, 8);
  
  // Define the base directory and tmp folder path
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const tmpDir = join(__dirname, 'tmp');
  
  // Ensure the tmp directory exists
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  
  // Save the canvas to an image in the tmp folder
  const filePath = join(tmpDir, `sudoku_${randomCode}.png`);
  const out = fs.createWriteStream(filePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', async () => {
    console.log(`The Sudoku image was saved as ${filePath}`);
    // Now that the file is written, send it
    try {
      let msgh = await conn.sendFile(m.chat, filePath, 'sudoku.png', `┅──┅❖┅──┅
𖤐 𝑺𝑼𝑫𝑶𝑲𝑼 é 𝒖𝒎 𝒍𝒖𝒈𝒖𝒃𝒓𝒆 𝒋𝒐𝒈𝒐 𝒋𝒂𝒑𝒐𝒏𝒆𝒔 𝒅𝒆 𝒍𝒐𝒈𝒊𝒄𝒂 𝒆 𝒆𝒔𝒕𝒓𝒂𝒕𝒆𝒈𝒊𝒂 𝒒𝒖𝒆 𝒄𝒐𝒏𝒔𝒊𝒔𝒕𝒆 𝒆𝒎 𝒇𝒐𝒓𝒎𝒂𝒓 9 𝒑𝒆𝒏𝒐𝒔𝒂𝒔 𝒍𝒊𝒏𝒉𝒂𝒔 𝒆 𝒄𝒐𝒍𝒖𝒏𝒂𝒔 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒊𝒅𝒂𝒔 𝒄𝒐𝒎 𝒂 𝒎𝒂𝒊𝒔 𝒂𝒔𝒔𝒐𝒎𝒃𝒓𝒐𝒔𝒂 𝒏𝒖𝒎𝒆𝒓𝒂𝒄𝒂𝒐 𝒅𝒆 1 𝒂 9 𝒏𝒂𝒐 𝒑𝒆𝒓𝒎𝒊𝒕𝒊𝒏𝒅𝒐 𝒐 𝒆𝒄𝒐 𝒗𝒂𝒛𝒊𝒐 𝒅𝒂𝒔 𝒓𝒆𝒑𝒆𝒕𝒊𝒄𝒐𝒆𝒔 𝒏𝒂𝒔 𝒉𝒐𝒓𝒊𝒛𝒐𝒏𝒕𝒂𝒊𝒔 𝒆 𝒗𝒆𝒓𝒕𝒊𝒄𝒂𝒊𝒔.

𝑷𝒂𝒓𝒂 𝒋𝒐𝒈𝒂𝒓 𝒆𝒔𝒔𝒂 𝒕𝒐𝒓𝒕𝒖𝒐𝒔𝒂 𝒅𝒊𝒔𝒑𝒖𝒕𝒂 𝒅𝒆 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒆𝒓 𝒗𝒂𝒛𝒊𝒐𝒔 𝒆𝒙𝒊𝒔𝒕𝒆𝒏𝒄𝒊𝒂𝒊𝒔 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒂 𝒂 𝒑𝒐𝒔𝒊𝒄𝒂𝒐 𝒅𝒆 𝒍𝒊𝒏𝒉𝒂 + 𝒄𝒐𝒍𝒖𝒏𝒂 + 𝒕𝒂𝒍 𝒄𝒐𝒃𝒊𝒄𝒂𝒅𝒐 𝒏𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒆𝒋𝒂𝒅𝒐.
𝑬𝒙𝒆𝒎𝒑𝒍𝒐.: 𝑫5 7
┅──┅❖┅──┅
      `, m);
      
    global.db.data.chats[m.chat].sudoku.regMsg = msgh.key.id
      console.log('File sent!', msgh);
    } catch (error) {
      console.error('Failed to send file:', error);
    }
  });
  
        // }
        break
      case '2': 
        //{
         global.db.data.chats[m.chat].sudoku.jogadores.push(m.sender)
         
        global.db.data.chats[m.chat].sudoku.checked = true
        global.db.data.chats[m.chat].sudoku.singleplayer = false
        await m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
|           𝕤𝕦𝕕𝕠𝕜𝕦
| ━━⬣ 𝑴𝒖𝒍𝒕𝒊𝒑𝒍𝒂𝒚𝒆𝒓
|
| 𝑫𝒊𝒈𝒊𝒕𝒆𝒎 *.𝒔𝒖𝒅𝒐𝒌𝒖 𝒆𝒏𝒕𝒓𝒂𝒓* 𝒑𝒂𝒓𝒂 𝒂𝒅𝒆𝒏𝒕𝒓𝒂𝒓 𝒏𝒐 𝒓𝒆𝒊𝒏𝒐 𝒅𝒐𝒔 𝒏𝒖𝒎𝒆𝒓𝒐𝒔 𝒎𝒊𝒔𝒕𝒊𝒄𝒐𝒔 𝒆 𝒅𝒐𝒔 𝒎𝒊𝒔𝒕𝒆𝒓𝒊𝒐𝒔
| 
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
          
          //}
        break
        
    }
    
    
  }
 else  if(global.db.data.chats[m.chat].sudoku.jogadores.includes(m.sender) && global.db.data.chats[m.chat].sudoku.gameData){
   
   
 
  m.react("🕰️")
  function checkNumber(row, col, number) {
  // Convert number to string once to avoid repeated conversions
  const numStr = number.toString();

  // Check the row for the number
  for (let i = 0; i < 9; i++) {
    if (global.db.data.chats[m.chat].sudoku.gameData.puzzle[row * 9 + i] === numStr) {
      return false;
    }
  }

  // Check the column for the number
  for (let i = 0; i < 9; i++) {
    if (global.db.data.chats[m.chat].sudoku.gameData.puzzle[i * 9 + col] === numStr) {
      return false;
    }
  }

  // Check the 3x3 subgrid for the number
  const startRow = row - row % 3;
  const startCol = col - col % 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (global.db.data.chats[m.chat].sudoku.gameData.puzzle[(startRow + i) * 9 + (startCol + j)] === numStr) {
        return false;
      }
    }
  }

  // If no conflicts are found, the number is valid for this position
  return true;
}

  function validateInput(input) {
  // Regular expression to match the pattern 'LetterNumber Number'
  const inputPattern = /^[A-Ia-i][1-9]\s[1-9]$/i;

  console.log(input)
  console.log(inputPattern.test(input))
  if (inputPattern.test(input)) {
    // Extract the position and number from the input
    const position = input.split(' ')[0]
    const number = parseInt(input.split(' ')[1], 10);

    // Check if the number is between 1 and 9
    if (number >= 1 && number <= 9) {
      m.react("☑️")
      return { valid: true, position, number };
      
      
      
    } else {
      m.react("❌")
   

   

    
    
  } 
  }
  else {
    m.react("❌")
    return { valid: false, error:  `╭─────────⌬─╮
          𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒐❌       
╰─⌬─────────╯`
      
      
      
    };
  }
}

// Example usage:
const inputResult = validateInput(m.text);
if (inputResult.valid) {
 
     function checkPlay(position, number) {
  // Convert the letter to a row index (A-I -> 0-8)
  const rowIndex = position.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  // Convert the number to a column index (1-9 -> 0-8)
  const colIndex = parseInt(position[1]) - 1;

  // Check if the position is valid
  if (rowIndex < 0 || rowIndex > 8 || colIndex < 0 || colIndex > 8) {
    return `
╭─────────⌬─╮
| 𝑰𝒏𝒗𝒂𝒍𝒊𝒅𝒐❌ |
╰─⌬─────────╯`
  }

  // Calculate the index in the puzzle array
  const cellIndex = rowIndex * 9 + colIndex;

  // Check if the cell is already filled
  if ( global.db.data.chats[m.chat].sudoku.gameData.status[cellIndex] !== '-') {
    m.reply( `┅──┅❖┅──┅
    𝑪𝒂𝒓𝒐 𝒎𝒐𝒓𝒕𝒂𝒍, 𝒐 𝒗𝒂𝒛𝒊𝒐 𝒐𝒖𝒕𝒓𝒐𝒓𝒂 𝒆𝒙𝒊𝒔𝒕𝒆𝒏𝒄𝒊𝒂𝒍 𝒆𝒎 ${position.toUpperCase()} 𝒋𝒂𝒛 𝒑𝒓𝒆𝒆𝒏𝒄𝒉𝒊𝒅𝒐
┅──┅❖┅──┅`)
return !0
  }

  // Check if the number is correct (this part depends on your puzzle logic)
  // For now, let's assume we have a function that checks the number
const isNumberCorrect = checkNumber(rowIndex, colIndex, number);
console.log('teste 1')
console.log(isNumberCorrect)
  // Check against the solution
  const isSolutionCorrect = global.db.data.chats[m.chat].sudoku.gameData.solution[rowIndex * 9 + colIndex] === number.toString();

console.log('teste 2')
console.log(isSolutionCorrect)
  // Return the result
  if (isNumberCorrect && isSolutionCorrect) {
    async function handleCorrectGuess(row, col, number) {
  // Update the game status with the correct number
 // global.db.data.chats[m.chat].sudoku.gameData.status[row * 9 + col] = number.toString();
// Ensure the status is an array; if it's a string, convert it to an array
if (typeof global.db.data.chats[m.chat].sudoku.gameData.status === 'string') {
  global.db.data.chats[m.chat].sudoku.gameData.status = global.db.data.chats[m.chat].sudoku.gameData.status.split('');
}

// Function to update the status array
async function updateStatus(row, col, number) {
  const index = row * 9 + col;
  global.db.data.chats[m.chat].sudoku.gameData.status[index] = number.toString();
}

// Call this function whenever you need to update the status
updateStatus(row, col, number);

// If you need to convert the status back to a string for storage or other purposes
const statusString = global.db.data.chats[m.chat].sudoku.gameData.status.join('');

  // Redraw the grid with the updated status
  if( global.db.data.chats[m.chat].sudoku.gameData.status.includes('-')) {
  redrawGrid();
  }
  else if(!global.db.data.chats[m.chat].sudoku.gameData.status.includes('-')){
      let conns5 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
     global.db.data.chats[m.chat].sudoku.jogadores.forEach(player => {
     global.db.data.chats[m.chat].users[player].exp += 6 * global.db.data.chats[m.chat].sudoku.jogadas[player]
    
    
})
 global.db.data.chats[m.chat].users[m.sender].money += conns5
 let textts = `╭──────────────────── ⛦...─╮
                   ༒︎ 𝑭𝑰𝑴 𝑫𝑬 𝑱𝑶𝑮𝑶 ༒︎            
 𝒈𝒂𝒏𝒉𝒐𝒖 ${conns5} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜
${global.db.data.chats[m.chat].sudoku.singleplayer ? `` : `─┅❖ 𝑱𝒐𝒈𝒂𝒅𝒐𝒓𝒆𝒔\n`}
${global.db.data.chats[m.chat].sudoku.jogadores.map(player => '@' + player.split('@')[0] + '  𝒈𝒂𝒏𝒉𝒐𝒖 ' + (6 * global.db.data.chats[m.chat].sudoku.jogadas[player]) + ' 𝑥𝑝').join('\n')}

╰─...𖤐────────────────────╯` 

let mashg = await conn.reply(m.chat, textts, m, { mentions: conn.parseMention(textts) })
 
    delete global.db.data.chats[m.chat].sudoku
    return !0
  }
}

function redrawGrid() {
  // Clear the canvas
  const canvasSize = 500; // tamanho s
const canvas = createCanvas(canvasSize, canvasSize);
const ctx = canvas.getContext('2d');

// config grade
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.font = '20px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = 'black'; // Texto cor

// offset pra guias
const offset = 25; // Offset pra numeros e letras

// desenha a grade com guias
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    // linhas verticais
    ctx.lineWidth = (i % 3 === 0 && i !== 0) ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(offset + i * 50, offset);
    ctx.lineTo(offset + i * 50, canvasSize - offset);
    ctx.stroke();

    // linhas horizontais
    ctx.lineWidth = (j % 3 === 0 && j !== 0) ? 2 : 1;
    ctx.beginPath();
    ctx.moveTo(offset, offset + j * 50);
    ctx.lineTo(canvasSize - offset, offset + j * 50);
    ctx.stroke();
  }
}

// números horizontais (1-9)
for (let i = 1; i <= 9; i++) {
  ctx.fillText(i.toString(), offset + (i - 1) * 50 + 25, offset / 2);
}

// letras verticais (A-I)
for (let i = 0; i < 9; i++) {
  ctx.fillText(String.fromCharCode(65 + i), offset / 2, offset + i * 50 + 25);
}

  // Draw the updated numbers from the status
  for (let i = 0; i < 81; i++) {
    const num = global.db.data.chats[m.chat].sudoku.gameData.status[i];
    if (num !== '-') { // Cell with a number
      const x = (i % 9) * 50 + 25 + offset;
      const y = Math.floor(i / 9) * 50 + 25 + offset;
      ctx.fillText(num, x, y);
    }
  }

// Generate a random code for the filename
const randomCode = Math.random().toString(36).substring(2, 8);

// Define the base directory and tmp folder path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const tmpDir = join(__dirname, 'tmp');

// Ensure the tmp directory exists
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir);
}

// Save the canvas to an image in the tmp folder
const filePath = join(tmpDir, `sudoku_${randomCode}.png`);
const out = fs.createWriteStream(filePath);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', async () => {
  console.log(`The Sudoku image was saved as ${filePath}`);
  // Now that the file is written, send it
  try {
    let conns = Math.floor(Math.random() * (15 - 5 + 1)) + 5;

 global.db.data.chats[m.chat].users[m.sender].money += conns
if(!global.db.data.chats[m.chat].sudoku.jogadas[m.sender]){
     global.db.data.chats[m.chat].sudoku.jogadas[m.sender] = 1
   }
    global.db.data.chats[m.chat].sudoku.jogadas[m.sender] += 1
      global.db.data.chats[m.chat].users[m.sender].pontos++
    let msgh = await conn.sendFile(m.chat, filePath, 'sudoku.png', `╭──────────────────── ⛦...─╮
                        ⸸ 𝑵𝒖𝒎𝒆𝒓𝒐 𝒄𝒐𝒓𝒓𝒆𝒕𝒐 
     𝒈𝒂𝒏𝒉𝒐𝒖 ${conns} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 𝒆 +1 𝒑𝒐𝒏𝒕𝒐
╰─...𖤐────────────────────╯`, m,{mentions:[m.sender]});
    
  global.db.data.chats[m.chat].sudoku.regMsg = msgh.key.id
    console.log('File sent!', msgh);
  } catch (error) {
    console.error('Failed to send file:', error);
  }
});

}

// Example usage after a correct guess at 'C3' with number 7
handleCorrectGuess(rowIndex, colIndex, number); // Row index for 'C' is 2, column index for '3' is 25
    
    
    
  }
  else if (isNumberCorrect && !isSolutionCorrect) {
 
 let mmn = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    m.reply(  `╭────────────⌬─╮
|            𝑬𝒓𝒓𝒂𝒅𝒐 ❌             
| 𝒑𝒆𝒓𝒅𝒆𝒔 ${mmn} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 
╰─⌬────────────╯`)
 global.db.data.chats[m.chat].users[m.sender].money -= mmn
  } else {
  let mmhn = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    m.reply(  `╭────────────⌬─╮
|            𝑬𝒓𝒓𝒂𝒅𝒐 ❌             
| 𝒑𝒆𝒓𝒅𝒆𝒔 ${mmhn} 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 
╰─⌬────────────╯`)
 global.db.data.chats[m.chat].users[m.sender].money -= mmhn
  }
}

// Example usage:
// m.reply(checkPlay(inputResult.position, inputResult.number));
 checkPlay(inputResult.position, inputResult.number)
} else {
  m.reply(`${inputResult.error}`);
}

  }










//forca 







//forca 



    
 
    
    
    
    
    
    async function requestToGeminiGPT(inputText) {

    const prompt = `Assuma a persona de Edgar Allan Poe: poético, obscuro, pai do horror e romance policial. Responda de forma explicativa e clara ao usuário, mantendo seu estilo gótico e obscuro, com explicações técnicas e detalhistas.
    Agora continue a conversa que estava tendo com o usuário, lembrando e frisando que esta foi sua resposta anterior em suas palavras para entender o contexto: "${global.db.data.chats[m.chat].gemini["config"].resposta} "
    
Eis a réplica do usuario a sua resposta:
${m.text}
`;
    
    
    
   



const endpoint = 'https://api.itsrose.rest/chatGPT/turbo';

const data = {
  model: 'gpt-4-1106-preview',
  max_tokens: 2000,
  messages: [
    {
      role: 'user',
      content: prompt
    }
  ],
  filter_messages: true
};

const response = await fetch(endpoint, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': '7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq'
  },
  body: JSON.stringify(data)
});

const result = await response.json();

return result.message;
    
}

}


}
handler.exp = 0

export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
async function verificarVencedores() {
  const vencedoresNumeroExato = [];
  const vencedoresAnimal = [];
  
  
// Sorteio de um número entre 1 e 100
let numer = Math.floor(Math.random() * 100) + 1;

// Encontrar o animal sorteado
const animalia= encontrarAnimal(numer);
global.db.data.chats[m.chat].bicho.animal = animalia
global.db.data.chats[m.chat].bicho.numero = numer

   let apostas = global.db.data.chats[m.chat].bicho.players
   let numeroSorteado =  global.db.data.chats[m.chat].bicho.numero
   
   let animalSorteado = global.db.data.chats[m.chat].bicho.animal
  Object.keys(apostas).forEach(jogador => {
    if (apostas[jogador].numero == numeroSorteado) {
      vencedoresNumeroExato.push(jogador);
    } else if (apostas[jogador].animal == animalSorteado) {
      vencedoresAnimal.push(jogador);
    }
  });

  if (vencedoresNumeroExato.length > 0) {
  
// Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresNumeroExato.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores += `\n @${winner.split('@')[0]}`
});



// List each winner and their share of the prize
    let txtA = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━ 
                 𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
       
       await conn.sendMessage(m.chat, {text: txtA, }  ,{ mentions: conn.parseMention(txtA) });
       
     return !0
  } else if (vencedoresAnimal.length > 0) {
  
 // Calculate prize per winner
let prizePerWinner = Math.floor(global.db.data.chats[m.chat].bicho.aposta / vencedoresAnimal.length);
let vencedores = ''
vencedoresNumeroExato.forEach(winner => {
  global.db.data.chats[m.chat].users[winner].money += prizePerWinner
vencedores +=   `\n @${winner.split('@')[0]}`
});
  
       let txtB = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                          𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
𝑨𝒍𝒎𝒂𝒔 𝒄𝒐𝒏𝒄𝒆𝒅𝒊𝒅𝒂𝒔 𝒂 𝒄𝒆𝒍𝒆𝒔𝒕𝒊𝒂𝒍 𝒇𝒐𝒓𝒕𝒖𝒏𝒂
    
  𝑫𝒆𝒔𝒗𝒆𝒏𝒅𝒂𝒓𝒂𝒎 𝒐 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆𝒔𝒕𝒆𝒎𝒊𝒅𝒐: 
  ${vencedores}
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
    await conn.sendMessage(m.chat, {text: txtB, }  ,{ mentions: conn.parseMention(txtB) });
     return !0
  } else {
       let txtC = `━━━━━━━━━⬣ 𖤐 ⬣━━━━━━━━
                      𝔍𝔬𝔤𝔬 𝔡𝔞 𝔅𝔢𝔰𝔱𝔞 
                            ⸸ _*${numeroSorteado}*_ ⸸
    𝑶 𝒂𝒏𝒊𝒎𝒂𝒍 𝒔𝒐𝒓𝒕𝒆𝒂𝒅𝒐 𝒇𝒐𝒊:
   *${animalSorteado}*
   
  𝑵𝒆𝒏𝒉𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆 𝒂𝒄𝒆𝒓𝒕𝒐𝒖 𝒆𝒔𝒕𝒆 𝒋𝒐𝒈𝒐
  
   ━━━━━━━━━⬣⬣━━━━━━━━  `
       await conn.sendMessage(m.chat, {text: txtC, }  ,{ mentions: conn.parseMention(txtC) });
     return !0
  }
}
  function encontrarAnimal(numeroSorteado) {
  for (let i = 0; i < global.db.data.chats[m.chat].bicho.animais.length; i++) {
    const numerosDoAnimal = [i * 4 + 1, i * 4 + 2, i * 4 + 3, i * 4 + 4];
    if (numerosDoAnimal.includes(numeroSorteado)) {
      return global.db.data.chats[m.chat].bicho.animais[i];
    }
  }
  return 'Animal não encontrado';
}

 
 async function execute(){
   let groups = Object.keys(await conn.groupFetchAllParticipating())
      const mentionIds = [];
  
  for (let i = 0; i < groups.length; i++) {
    const id = groups[i];
    const participants = (await conn.groupMetadata(id)).participants.map(v => v.id);
    mentionIds.push(...participants);
  }
  
 }


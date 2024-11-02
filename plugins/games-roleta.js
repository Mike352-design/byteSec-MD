
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

import fetch from 'node-fetch'
import schedule from 'node-schedule'

let handler = async (m, { conn, text,groupMetadata, usedPrefix, command, participants,isAdmin, args }) => {


    
    if(!(isAdmin || isOwner|| m.sender==global.cocriador) && global.db.data.chats[m.chat].jogos===false){
        m.react("❌")
        
        return !0;
      } 
      

if(!global.db.data.chats[m.chat].roleta)
{
    global.db.data.chats[m.chat].roleta = {
jogadores: [],
emAndamento: false,
montante: 0,
startTime: null,

    }
}


let users = global.db.data.chats[m.chat].roleta.jogadores
// Armazena informações dos usuários

// Variáveis globais do jogo
let gameActive = global.db.data.chats[m.chat]?.roleta?.emAndamento;
let timer;
let startTime = global.db.data.chats[m.chat]?.roleta?.startTime;
let gameDuration = 30 * 60 * 1000; // 30 minutos em milissegundos
let result;

// Função para iniciar o jogo
async function startGame() {
  global.db.data.chats[m.chat].roleta.startTime = new Date()
  let textoP = `┏━━❬❂❭━━┓
*┃* ⛁⛂⛃
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖
*┃* 
*┃* 𝘖 𝘳𝘦𝘴𝘶𝘭𝘵𝘢𝘥𝘰 𝘴𝘢𝘪𝘳𝘢 𝘦𝘮 30 𝘮𝘪𝘯𝘶𝘵𝘰𝘴!
*┃* 𝘍𝘢𝘤𝘢𝘮 𝘴𝘶𝘢𝘴 𝘢𝘱𝘰𝘴𝘵𝘢𝘴 𝘶𝘴𝘢𝘯𝘥𝘰
*┃* 𝘰 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 .𝐫𝐨𝐥𝐞𝐭𝐚 𝐚𝐩𝐨𝐬𝐭𝐚𝐫
*┃* 
┗━━━━━━━━━━━━━━━━`

await conn.sendFile(m.chat, 'https://itzpire.com/file/d1829ee382f1.jpg','err.jpg', textoP,m)

  global.db.data.chats[m.chat].roleta.emAndamento = true;
  users[m.sender] = { apostas: [] }; // Inicializa as apostas do usuário
  console.log(`Jogo de roleta iniciado! Você tem 30 minutos para apostar.`);

  // Inicia o timer para girar a roleta após 30 minutos
  timer = setTimeout(async () => {
  await  spinRoulette();
  }, gameDuration);
}

// Função para coletar apostas
async function placeBet() {
  let tipoAposta = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  𝐐𝐮𝐚𝐥 𝐬𝐞𝐫𝐚́ 𝐨 𝐭𝐢𝐩𝐨 𝐝𝐞 𝐬𝐮𝐚 𝐚𝐩𝐨𝐬𝐭𝐚?
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 『1』 𝐼𝑛𝑡𝑒𝑟𝑛𝑎 ⁅ 𝑁𝑢́𝑚𝑒𝑟𝑜 𝑒𝑠𝑝𝑒𝑐𝑖́𝑓𝑖𝑐𝑜 ⁆
> 『2』 𝐸𝑥𝑡𝑒𝑟𝑛𝑎 ⁅ 𝐼𝑚𝑝𝑎𝑟/𝑝𝑎𝑟/𝑝𝑟𝑒𝑡𝑜/𝑣𝑒𝑟𝑚𝑒𝑙ℎ𝑜/𝑣𝑒𝑟𝑑𝑒 ⁆
> ‎ 
┗━━━━━━━━━━━━━━━━`

if(!global.db.data.chats[m.chat].roleta.jogadores[m.sender]){
  global.db.data.chats[m.chat].roleta.jogadores[m.sender] = {
    apostas: [], 
    tempType: null,
    tempBet: null,
    tempValue: null,
    regMsg: null,
    dateAposta: null,
    regIndex: 0
  }
}


let mshg = await conn.reply(m.chat, tipoAposta, m, { mentions:
conn.parseMention(tipoAposta) })


  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regMsg = mshg.key.id
  global.db.data.chats[m.chat].roleta.jogadores[m.sender].regIndex = 1
  
  /*
  const betType = parseInt(prompt("Selecione 1 ou 2:"));

  if (betType !== 1 && betType !== 2) {
    console.log("Selecione uma opção válida: 1 ou 2.");
    return;
  }

  if (betType === 1) {
    // Aposta em número específico
    const number = parseInt(prompt("Qual número você irá apostar? (0 a 36):"));
    if (isNaN(number) || number < 0 || number > 36) {
      console.log("Número inválido. Deve estar entre 0 e 36.");
      return;
    }
    
    const amount = parseFloat(prompt("Quanto você deseja apostar?"));
    users[m.sender].apostas.push({ type: 'numero', value: number, amount: amount });

  } else if (betType === 2) {
    // Aposta em grupo
    console.log("Qual tipo de aposta você fará?");
    console.log("1. Números ímpares");
    console.log("2. Números pares");
    console.log("3. Números vermelhos");
    console.log("4. Números pretos");
    console.log("5. 00 e 0 (verdes)");

    const groupType = parseInt(prompt("Selecione uma opção entre 1 e 5:"));
    if (groupType < 1 || groupType > 5) {
      console.log("Opção inválida. Deve estar entre 1 e 5.");
      return;
    }

    const amount = parseFloat(prompt("Quanto você deseja apostar?"));
    users[m.sender].apostas.push({ type: 'grupo', value: groupType, amount: amount });
  }

  const moreBets = prompt("Você deseja fazer mais uma aposta? (sim/não)");
  if (moreBets.toLowerCase() === 'sim') {
    placeBet(); // Chama novamente para mais apostas
  } else {
    console.log("Suas apostas foram registradas:", users[m.sender].apostas);
  } */
  return !0
}

function menu() {

  let texthelp = `┏━━❬❂❭━━━━━╼
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> ᴺᵒ ˢᶦⁿᶦˢᵗʳᵒ ᶜᵃˢˢᶦⁿᵒ ᵈᵒ ᶜᵒʳᵛᵒ, ᵃ ʳᵒˡᵉᵗᵃ ᵃᵐᵉʳᶦᶜᵃⁿᵃ ᵍᶦʳᵃ, ˢᵘˢˢᵘʳʳᵃⁿᵈᵒ ᵖʳᵒᵐᵉˢˢᵃˢ ᵈᵉ ᶠᵒʳᵗᵘⁿᵃ ᵉ ᶦⁿᶠᵒʳᵗᵘⁿᵒ. ᴬ ᵇᵒˡᵃ, ᵛᵉʳᵐᵉˡʰᵃ ᶜᵒᵐᵒ ᵒ ˢᵃⁿᵍᵘᵉ ᵈᵃ ⁿᵒᶦᵗᵉ, ᵈᵉᶜᶦᵈᵉ ᵒˢ ᵈᵉˢᵗᶦⁿᵒˢ ᵈᵒˢ ᵃᵘᵈᵃᶻᵉˢ ᑫᵘᵉ ᵒᵘˢᵃᵐ ᵃᵖᵒˢᵗᵃʳ. ᶜᵃᵈᵃ ᵍᶦʳᵒ ᵉ ᵘᵐ ᶜᵒⁿᵛᶦᵗᵉ ᵃᵒ ᵈᵉˢᶜᵒⁿʰᵉᶜᶦᵈᵒ, ᵒⁿᵈᵉ ᵉˢᵖᵉʳᵃⁿᶜᵃ ᵉ ᵐᵉᵈᵒ ᵉⁿᵗʳᵉˡᵃᶜᵃᵐ⁻ˢᵉ ᵉᵐ ᵘᵐᵃ ᵈᵃⁿᶜᵃ ᵐᵃᶜᵃᵇʳᵃ. ⱽᵉⁿʰᵃᵐ, ᵃᵐᵃⁿᵗᵉˢ ᵈᵒ ʳᶦˢᶜᵒ, ᵉ ᵈᵉᶦˣᵉᵐ ᑫᵘᵉ ᵒ ᶜᵒʳᵛᵒ ʳᵉᵛᵉˡᵉ ᵒˢ ˢᵉᵍʳᵉᵈᵒˢ ᵉˢᶜᵒⁿᵈᶦᵈᵒˢ ⁿᵃˢ ˢᵒᵐᵇʳᵃˢ ᵈᵒ ᵃᶜᵃˢᵒ. ᴬ ˢᵒʳᵗᵉ ᵖᵒᵈᵉ ᵐᵘᶦᵗᵒ ᵇᵉᵐ ˢᵒʳʳᶦʳ ᵖᵃʳᵃ ᵛᵒˢ, ᵒᵘ ˢᵉʳ ᵃᵖᵉⁿᵃˢ ᵘᵐ ᵉᶜᵒ ᵈᵉ ˡᵃᵐᵉⁿᵗᵒˢ ᵖᵉʳᵈᶦᵈᵒˢ.
> ‎ 
> 𝙲𝚘𝚖𝚊𝚗𝚍𝚘𝚜:
> .𝐫𝐨𝐥𝐞𝐭𝐚 𝐧𝐨𝐯𝐨
> .𝐫𝐨𝐥𝐞𝐭𝐚 𝐚𝐩𝐨𝐬𝐭𝐚𝐫
┗━━━━━━━━━━━━━━━━`

conn.sendFile(m.chat, `https://itzpire.com/file/4c678b01bdc7.jpg`, 'image.png', texthelp, m);
  return m.reply(texthelp)
}


async function spinRoulette() {
  global.db.data.chats[m.chat].roleta.gameActive = false
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
let winnerMessages = [];
let winnersIDS = []

// Payout ratios
const exactBetMultiplier = 3.5;   // 3x for exact number bet
const groupBetMultiplier = 1.35; // 1.5x for group bets (red/black, odd/even)

// Calculate the total bet amount and classify winners
Object.entries(users).forEach(([userId, user]) => {
  console.log('inside object entries')
  console.log(userId)
  console.log(user)
  console.log('------------')
    user.apostas.forEach(bet => {
      console.log('inside bets')
      console.log(bet)
        // Check if it's a specific number bet (internal bet)
        if (bet.type === 1 && bet.value == result) {
          let winning = bet.amount * exactBetMultiplier
          global.db.data.chats[m.chat].users[userId].money += winning
           winnerMessages.push(`> @${userId.split('@')[0]} 𝑔𝑎𝑛ℎ𝑜𝑢 ${winning.toFixed(2)} 𝘋𝘢𝘳𝘬𝘤𝘰𝘪𝘯𝘴 𝑒𝑚 𝑎𝑝𝑜𝑠𝑡𝑎 𝑖𝑛𝑡𝑒𝑟𝑛𝑎`);
           winnersIDS.push(userId)
            exactWinners.push({ userId, amount: winning });
        }
        // Check if it's a group bet (external bet like red/black, odd/even)
        else if (bet.type === 2) {
          let winning2 = bet.amount * groupBetMultiplier


            // Atualizando o valor 4 para ser vermelho e 3 para preto
            if ((bet.value === 1 && result % 2 !== 0) ||  // Odd numbers
                (bet.value === 2 && result % 2 === 0) ||  // Even numbers
                (bet.value === 4 && redNumbers.includes(result)) ||  // Red numbers (corrigido para valor 4)
                (bet.value === 3 && blackNumbers.includes(result))) {  // Black numbers (corrigido para valor 3)
                  global.db.data.chats[m.chat].users[userId].money += winning2
                  winnerMessages.push(`> @${userId.split('@')[0]} 𝑔𝑎𝑛ℎ𝑜𝑢 ${winning2.toFixed(2)} 𝘋𝘢𝘳𝘬𝘤𝘰𝘪𝘯𝘴 𝑒𝑚 𝑎𝑝𝑜𝑠𝑡𝑎 𝑒𝑥𝑡𝑒𝑟𝑛𝑎`);
                  winnersIDS.push(userId)
                groupWinners.push({ userId, amount: winning2 });
            }
        }
    });
});


// Distribute the winnings
if (winnerMessages.length > 0) {

    
    

        const winnerList = winnerMessages.join('\n');
        let winMessage = `┏━━❬❂❭━━━━━╼
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> 𝐴 ⨀ 𝑐𝑎𝑖𝑢 𝑒𝑚 ${result} ❰${color}
> ‎
> 𝕍𝕖𝕟𝕔𝕖𝕕𝕠𝕣𝕖𝕤: 
> ‎ - - 
${winnerList}
┗━━━━━━━━━━━━━━━━`;


m.reply(winMessage, null, { mentions: conn.parseMention(winMessage) })
   delete global.db.data.chats[m.chat].roleta;
   
      } else {
        let noWinMessage = `┏━━❬❂❭━━━━━╼
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> 𝐴 ⨀ 𝑐𝑎𝑖𝑢 𝑒𝑚 ${result} ❰${color}
> 𝙽𝚒𝚗𝚐𝚞𝚎́𝚖 𝚘𝚋𝚝𝚎𝚟𝚎 𝚜𝚘𝚛𝚝𝚎 𝚗𝚎𝚜𝚝𝚎 𝚕𝚊𝚗𝚌𝚎... 
┗━━━━━━━━━━━━━━━━`;

        conn.sendFile(m.chat, 'https://itzpire.com/file/09de544b9d81.jpg', 'err.jpg', noWinMessage, m);
    delete global.db.data.chats[m.chat].roleta;
        
      }

    
}

if (!text) {
menu()

return !0
}


else if (text === 'novo') {
  
  if(gameActive) {

let currentTime = new Date();
let minutesPassed = Math.floor((currentTime - startTime) / 60000);

if (minutesPassed >= 30) {
    await startGame()
} else {
  
    let texthelp = `┏━━❬❂❭━━┓
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖 ⛁⛂⛃
╰╾╼╾╼╾╼╾╼╾╼╾
> ‎ 
> 𝙅𝙖 𝙚𝙭𝙞𝙨𝙩𝙚 𝙪𝙢 𝙟𝙤𝙜𝙤 𝙚𝙢 𝙖𝙣𝙙𝙖𝙢𝙚𝙣𝙩𝙤, 𝙖𝙜𝙪𝙖𝙧𝙙𝙚 ${30 - minutesPassed} 𝙢𝙞𝙣𝙪𝙩𝙤𝙨!
> ‎
┗━━━━━━━━━━━━━━━━`
    
    return conn.sendFile(m.chat, 'https://itzpire.com/file/40bff0476065.jpg',
    'error.jpg', texthelp, m)

    
  
}


  }
  

else {
await   startGame();
}
  
} else if (text === 'apostar') {
  
  
  if(global.db.data.chats[m.chat]?.roleta?.jogadores[m.sender]?.apostaFinalizada)
  {
    let msgg = `┏━━❬❂❭━━━━━╼
*┃*  @${m.sender.split("@")[0]}
*┃━╼*  *𝗩𝗼𝗰𝗲̂ 𝗷𝗮 𝗳𝗲𝘇 𝘀𝘂𝗮 𝗮𝗽𝗼𝘀𝘁𝗮*
╰╾╼╾╼╾╼╾╼╾╼╾
> 𝐴𝑔𝑢𝑎𝑟𝑑𝑒 𝑜 𝑓𝑖𝑛𝑎𝑙 𝑑𝑜 𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜!
┗━━━━━━━━━━━━━━━━`

await conn.reply(m.chat,msgg, m, { mentions:
conn.parseMention(msgg) })
return !0
  }
  if (!global.db.data.chats[m.chat]?.roleta?.emAndamento) {
    let textoP = `┏━━❬❂❭━━┓
*┃* ⛁⛂⛃
*┃* 𝔸𝕞𝕖𝕣𝕚𝕔𝕒𝕟 𝕣𝕠𝕦𝕝𝕖𝕥𝕥𝕖
*┃* 
*┃*  𝙽𝚎𝚗𝚑𝚞𝚖𝚊 𝚙𝚊𝚛𝚝𝚒𝚍𝚊 𝚎𝚖 𝚊𝚗𝚍𝚊𝚖𝚎𝚗𝚝𝚘!
*┃* 𝙳𝚒𝚐𝚒𝚝𝚎 .𝐫𝐨𝐥𝐞𝐭𝐚 𝐧𝐨𝐯𝐨 𝚙𝚊𝚛𝚊
*┃*  𝚒𝚗𝚒𝚌𝚒𝚊𝚛 𝚞𝚖 𝚓𝚘𝚐𝚘
*┃* 
┗━━━━━━━━━━━━━━━━`

await conn.sendFile(m.chat, 'https://itzpire.com/file/1e887e07103f.jpg','err.jpg', textoP,m)
return !0
}
  
  placeBet();
  

} else {
  menu()
  return !0
}
 

}
 
handler.command = ['roleta'] 

export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}




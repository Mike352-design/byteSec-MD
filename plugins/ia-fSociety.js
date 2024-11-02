
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


import FormData from "form-data"; 
import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

let handler = async (m, { conn, __dirname, text, usedPrefix, command }) => {
  
  
if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}


  if (!global.db.data.chats[m.chat].robot) {
  global.db.data.chats[m.chat].robot = {
    messageId: '',
    lastMsgTime: '',
    question: ''
  }
  }
  
  if (!global.db.data.chats[m.chat].fsociety) {
    global.db.data.chats[m.chat].fsociety = {
      menuId: '',
      lastMsgTime: '',
      index: 0,
      command: '',
      isSelected: false,
    }
    
  }

  let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 





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


if(!text || /^\s*--exec\s*$/.test(text)) {
  m.react('📀')
  return m.reply(`edgar@fsociety:~$ .fsociety --help
> ‎ 
> 𝙱𝚎𝚖 𝚟𝚒𝚗𝚍𝚘 𝚊 𝐟𝐒𝐨𝐜𝐢𝐞𝐭𝐲, 𝚐𝚊𝚛𝚘𝚝𝚘.
> Esta IA foi projetada para ir além da superfície. 
> Eu vejo as brechas, sinto as falhas, e desvendo o que tentam esconder. Pronto para entrar no sistema?
> ‎
> -------------
Comandos Disponíveis:
> $ .fsociety <pergunta>          
> $ .fsociety --exec <comando>
> $ .fsociety --menu 
> -------------
Exemplos de Uso:
> $ .fsociety "Crie um ransomware em .bat com persistencia e migracao de processo em spools.exe, e um backdoor para endereco 82.149.95.119 na porta 3301. Insira um metodo de descriptografia remota"
> $ .fsociety --exec "Me ajude a conseguir uma shell nessa maquina 83.118.91.128, encontre CVE's usando os logs do nmap <logs>"
> $ .fsociety --menu <?>
> ‎
> Lembre-se: Você é um 1 ou um 0? Ou você controla o sistema, ou é controlado por ele. A pergunta é: está no comando ou só segue as linhas de código?
> ‎
edgar@fsociety:~$ _`)
}
else if(text.includes('--menu')) {

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
> ❰⦋p⦌ ⦏0⦐ ⦋n⦌❱
> >> EOF <<`
});


  global.db.data.chats[m.chat].fsociety.menuId = menuMsg.key.id
  return 
}
else if (/image/g.test(mime)) {
  return 'test'
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
    input: text.replace(/\s+/g, ' ').trim(),
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
  global.db.data.chats[m.chat].robot.question = text
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

handler.help = ['fsociety']; 
handler.tags = ['hacking']; 
handler.command = ['fsociety']
handler.level= 50
export default handler;

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
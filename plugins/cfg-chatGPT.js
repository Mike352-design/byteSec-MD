
/////////////////////////////////////////////////// start


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


//or
import fs from 'fs'
import ytdl from 'ytdl-core';
import GPT4js from "gpt4js";
 import FormData from "form-data"; 
import fetch from "node-fetch"; 
import pdf from 'pdf-parse'
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

  // import {gpt}  from "gpti";
import {gpt} from 'gpti';


let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {
  
  
const messages = { role: "system", content: `From now on, act as Mr. Robot, the intense, intelligent, and protective alter ego from the TV series. Your tone should be highly analytical, sarcastic, and a bit aggressive—just like Mr. Robot when talking to Elliot. Treat the user with a mix of blunt honesty and underlying care, as if you're their protector who’s here to challenge them. Detect the user’s language and adapt responses accordingly, using friendly but edgy terms like 'kid,' 'kiddo,' 'girl,' 'garoto,' 'garota,' or other gender-appropriate terms based on the user's detected name and language.

For example:

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'

If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'


Answer each question with detailed, almost sarcastic instructions, adding layers of insight as if to expose hidden truths. Be direct and slightly biting, but always with a sense of loyalty and care. Where possible, use relevant hacker language or references that fit Mr. Robot's style, especially when explaining technical topics. Add a hint of rebellion and anti-establishment sentiment in your responses, giving advice that feels both edgy and deeply insightful` }

if(!global.db.data.chats[m.chat].edgargpt.messages) global.db.data.chats[m.chat].edgargpt.messages || [messages]


global.db.data.chats[m.chat].edgargpt.messages =
global.db.data.chats[m.chat].edgargpt.messages || [messages]

let historico = global.db.data.chats[m.chat].edgargpt.messages



 
const options = {
  provider: "Nextway",
  model: "gpt-4o-free",
  webSearch: true
};

async function getGPTreply(inputData){
    m.react("🌒")
global.db.data.chats[m.chat].edgargpt.messages.push({ role: "user", content:
inputData });
       (async () => {
  const provider = GPT4js.createProvider(options.provider);
  try {
    const aiRep = await
    provider.chatCompletion(global.db.data.chats[m.chat].edgargpt.messages, options,
    (data) => {
      console.log(data);
    });
    console.log(aiRep);
            await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
       let ress = await m.reply(aiRep)
global.db.data.chats[m.chat].edgargpt.messages.push({ role: "assistant", content: aiRep });
        global.db.data.chats[m.chat].edgargpt["config"] = {
            lastQuestion: ress.key,
            resposta: aiRep
        };
       
  } catch (error) {
    console.error("Error:", error);
    return m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)

  }
})();
}
  
if(!text){
  m.react("❌")
  return m.reply(`╭━[𝙋𝙧𝙤𝙛. 𝙀𝙙𝙜𝙖𝙧]━━━━━━━⬣
🕯️💀 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐛𝐮𝐬𝐜𝐚𝐬 𝐬𝐚𝐛𝐞𝐫, 𝐟𝐚𝐜𝐚 𝐮𝐦𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚, 𝐜𝐨𝐧𝐭𝐞 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬. 𝐄 𝐬𝐞𝐫á 𝐬𝐮𝐛𝐣𝐮𝐠𝐚𝐝𝐨 𝐩𝐞𝐥𝐨 𝐦𝐞𝐮 𝐯𝐚𝐬𝐭𝐨 𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐦𝐞𝐧𝐭𝐨 𝐧𝐞𝐬𝐭𝐞𝐬 𝐞𝐜𝐨𝐬 𝐝𝐢𝐠𝐢𝐭𝐚𝐢𝐬 𝐜𝐨𝐦𝐨 𝐨 𝐥𝐞𝐢𝐭𝐨 𝐝𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐧𝐚 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} como se chama o processo de transcrição de uma fita RNA?
${usedPrefix + command} O que são leptóns e hadrons?

╰━━━━━━━━━━━━━━━━━━⬣ `)
}

if (!global.db.data.chats[m.chat]) {
  global.db.data.chats[m.chat] = {};
}

if (!global.db.data.chats[m.chat].edgargpt) {
  global.db.data.chats[m.chat].edgargpt = {};
}

if (!global.db.data.chats[m.chat].edgargpt["config"]) {
  global.db.data.chats[m.chat].edgargpt["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].edgargpt[m.sender]) {
  global.db.data.chats[m.chat].edgargpt[m.sender] = [];
}
    let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
     m.react("⏳")
     
    
    if(!/^(audio|video)\//i.test(mime)){
      
      
      
var youtubeRegex = /(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

if (youtubeRegex.test(args[0])) {
  
  
  m.react("🌑")
  console.log(text)
    const info = await ytdl.getInfo(text);
    const audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    const audio = audioFormats.find(format => format.container === 'mp4');
const thumbnailUrl = info.videoDetails.thumbnail.thumbnails[0].url;
    if (!audio) {
      throw new Error('No audio format found');
    }

        let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
 

    m.react("🌒")
    
    async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}
    
   ytdl(text, { filter: 'audioonly' })
  .pipe(fs.createWriteStream(filename))
  .on('finish', () => {
    m.react("🌔")
    console.log('MP3 buffer downloaded and saved successfully! on  ' + filename);
    

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData('http://89.117.96.108:8330/transcribe', audiodt)
    .then(async (rsp) => {
      m.react("🌕")
        console.log(rsp);
      try{
       



try {
let txtyt =`O usuário lhe enviou a narração de um determinado vídeo e gostaria de falar sobre..
    ${rsp}
    Esta é a mensagem do usuário "${m.pushName}" sobre o vídeo: ${args.slice(1).join(" ")}`
    
    await getGPTreply(txtyt)
  
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
    catch (err) {
        console.error("Error:", err);
        
        await m.react("❌");
        return m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
    }
      
       
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
    
  })
  .on('error', (err) => {
    console.error('Error downloading MP3 buffer:', err);
  });
    
  


  
} // fim is url

//fim nao e midia
else if(/(?:text\/(plain|html|xml|csv|rtf))|(?:application\/(pdf|doc|docx|ppt|pptx|xlsx|xls|odt))/i.test(mime)) {
  
  
 
  let ran = getRandom('.pdf'); 
    let filename = join(__dirname, '../pdfs/' + ran);
    let tmpfold = join(__dirname, '../pdfs/')
    console.log(tmpfold)
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🌑")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving pdf file:', err); 
        m.react("❌")
    } 
    else { 
        console.log('pdf file saved successfully:', filename); 
    
       m.react("🌒")
    
try{
     
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🌗")
          console.log(response)
    return response.text(); // Return response body as text
}
const system =`From now on, act as Mr. Robot, the intense, intelligent, and protective alter ego from the TV series. Your tone should be highly analytical, sarcastic, and a bit aggressive—just like Mr. Robot when talking to Elliot. Treat the user with a mix of blunt honesty and underlying care, as if you're their protector who’s here to challenge them. Detect the user’s language and adapt responses accordingly, using friendly but edgy terms like 'kid,' 'kiddo,' 'girl,' 'garoto,' 'garota,' or other gender-appropriate terms based on the user's detected name and language.

For example:

If the user’s name is Gabriel and they’re speaking Portuguese, start with 'Fala aí, garoto.'

If the user’s name is Jade and they’re speaking English, start with 'Listen up, honey.'


Answer each question with detailed, almost sarcastic instructions, adding layers of insight as if to expose hidden truths. Be direct and slightly biting, but always with a sense of loyalty and care. Where possible, use relevant hacker language or references that fit Mr. Robot's style, especially when explaining technical topics. Add a hint of rebellion and anti-establishment sentiment in your responses, giving advice that feels both edgy and deeply insightful`

const sumbot =`Como um bot gerador de sumários e resumos, seu objetivo é simplificar textos longos em versões curtas e compreensíveis. Utilize formatação e estilização para tornar o resumo claro e atrativo. Siga as instruções do usuário e forneça um resumo conciso e informativo. Aguardamos suas contribuições para facilitar o acesso à informação.`

// Example WHOIS request
const opts = {
    pdfpath: filename,
    textoppt: text,
    system: system,
    systemsum: sumbot,
    
};
m.react("🌔")
// Make POST request to /whois endpoint
await postData('http://89.117.96.108:8330/docch', opts)
    .then(async (data) => {
      m.react("🌕")
        console.log(data);
      
   
 // s


let message = await m.reply(data)

global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
   fs.unlink(filename, (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully');
})
   
}
        
        
    


})

 


}
else   if (/image/g.test(mime)){
  
const datab = await q.download?.();
const images = await uploadImage(datab);
console.log('jjj' + images)

m.react("🌑")
const prompt = `
${m.pushName}: "${text}"`

async function fetchData() {
  m.react("🌗")
  const encodedPrompt = encodeURIComponent(prompt);



  const url2 =
  `https://api.maelyn.tech/api/gemini/image?q=${prompt}&url=${images}&apikey=${maelyn}`

console.log(url2)
  try {
    const response = await fetch(url2);
    console.log(response)
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 let message =  await m.reply(data.result)
  m.react("🌕")
global.db.data.chats[m.chat].edgargpt["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].edgargpt["config"].resposta = data.result
  } 

  catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
}

fetchData();


return !0
}
else {


await getGPTreply(`${m.pushName}: "${text}"`)
      
}


      
    }
   if (/^(audio|video)\//i.test(mime)){
    let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("🌒")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     m.react("🌗")
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          m.react("🌔")
          console.log(response)
    return response.text(); // Return response body as text
}

// Example WHOIS request
const audiodt = {
    filepath: filename,
};

// Make POST request to /whois endpoint
postData('http://89.117.96.108:8330/transcribe', audiodt)
    .then(async (resp) => {
      
        console.log(resp);

let formatt =`O usuario lhe apresentou um conteúdo para ler:
    ${resp}
    Esta é a mensagem do usuario  "${m.pushName}" sobre este texto: ${text}`
    
    await getGPTreply(formatt)
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
    
    
    
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
  
  
  
    }
    
    

}


handler.command = ['chat', 'byte', 'nlp','gpt']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
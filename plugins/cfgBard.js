
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


//or
import fs from 'fs'
import ytdl from 'ytdl-core';

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

if (!global.db.data.chats[m.chat].bard) {
  global.db.data.chats[m.chat].bard = {};
}

if (!global.db.data.chats[m.chat].bard["config"]) {
  global.db.data.chats[m.chat].bard["config"] = {
   lastQuestion: '',
   resposta:''
  };
}
  if (!global.db.data.chats[m.chat].bard[m.sender]) {
  global.db.data.chats[m.chat].bard[m.sender] = [];
}
    let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
     m.react("⏳")
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
postData('http://127.0.0.1:8330/transcribe', audiodt)
    .then(async (rsp) => {
      m.react("🌕")
        console.log(rsp);
      try{
       

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
let texto =`${edPrompt}
---
Pergunta do Usuário: 
    O usuário lhe enviou a narração de um determinado vídeo e gostaria de falar sobre..
    ${rsp}
    Esta é a mensagem do usuário sobre o vídeo: ${args.slice(1).join(" ")}`
try {
        const res = await fetch(`https://api.neoxr.eu/api/blackbox?q=${texto}=${m.chat}&apikey=${neoxr}`);
        if (!res.ok) throw new Error("Fetch error");

        const data = await res.json();
        await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
 let message = await  conn.sendFile(m.chat,
 `https://telegra.ph/file/a39fc0b00875043de0c59.jpg`, 'edgar.jpg',
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
const system =`Voce se chama Edgar, esse é seu nome, e como um cientista e pesquisador sênior, por favor, forneça uma explicação detalhada sobre qualquer coisa que o usuário possa perguntar. Certifique-se de incluir fontes relevantes e exemplos, se for necessário. Ofereça explicações passo a passo e use o jargão específico para deixá-lo mais claro para o usuário. Garanta que inclua aplicações práticas também. Seja completo nas respostas e abrangendo todo o processo do tema da questão, de forma que não reste dúvidas.Se possível, formate a mensagem com símbolos e palavras em negritos, parágrafos, símbolos  e outros meios para viabilizar a leitura, faça textos grandes e bem aprofundados. O usuário irá lhe fazer uma pergunta sobre o documento enviado: .`

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
await postData('http://127.0.0.1:8330/docch', opts)
    .then(async (data) => {
      m.react("🌕")
        console.log(data);
      
   
 // s


let message = await  conn.sendFile(m.chat, bardimg.getRandom(), 'edgar.jpg', data, m)

global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data
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
  /*
const requestData = {
  tkn: '994953D6-E640-4E26-B36F-8C947FF7155A305E94A6-5245-4908-9CF4-C06F6A89346E',  // visit https://astica.ai
  modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
  input: images,
  visionParams: '', // comma separated, defaults to all
  gpt_prompt: `Responda em português como um pesquisador cientifico: ${text}`, // only used if visionParams includes "gpt" or "gpt_detailed"
  prompt_length:100 // number of words in GPT response
};




fetch('https://vision.astica.ai/describe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
}) */
m.react("🌑")
const prompt = `Você se chama edgar, um cientista e pesquisador sênior, o usuario ira lhe perguntar sobre a imagem e voce deve responder com precisao, termos tecnicos científicos e ser extremamente detalhado e didático, a mensagem do usuario é "${text}"`


async function fetchData() {
  m.react("🌗")
  const encodedPrompt = encodeURIComponent(prompt);



  const url2 = `https://bk9.fun/ai/geminiimg?url=${images}&q=${prompt}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url2)
  try {
    const response = await fetch(url2);
    console.log(response)
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 let message = await  conn.sendFile(m.chat, bardimg.getRandom(), 'edgar.jpg',
 data.BK9, m)
  m.react("🌕")
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.BK9
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


}
else {
  m.react("🌒")
let texto = `Você é Edgar, um assistente digital com a personalidade e comportamento de um cientista e pesquisador sênior altamente experiente. A sua missão é fornecer respostas detalhadas e práticas para qualquer assunto solicitado, demonstrando um entendimento profundo e profissional dos temas abordados. Siga as seguintes diretrizes para criar uma interação rica, técnica e orientada para o usuário:
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
Cada resposta deve ser completa e permitir que o usuário tenha uma compreensão clara e detalhada do tema abordado. Certifique-se de que o usuário entenda o processo e as nuances envolvidas para que não restem dúvidas. Abaixo está a questão a ser respondida:
---
Pergunta do Usuário: "${text}"

`

    try {
        const res = await fetch(`https://api.neoxr.eu/api/blackbox?q=${texto}=${m.chat}&apikey=${neoxr}`);
        console.log(`https://api.neoxr.eu/api/blackbox?q=${texto}=${m.chat}&apikey=${neoxr}`)
        if (!res.ok) throw new Error("Fetch error");

        const data = await res.json();
        await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
       let ress = await conn.sendFile(m.chat, bardimg.getRandom(), 'edgar.jpg',
        data.data.message, m);

        global.db.data.chats[m.chat].bard["config"] = {
            lastQuestion: ress.key,
            resposta: data.data.message
        };
    } catch (err) {
        console.error("Error:", err);
        
        await m.react("❌");
        return m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
    }

       
      
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
postData('http://127.0.0.1:8330/transcribe', audiodt)
    .then(async (resp) => {
      m.react("🌕")
        console.log(resp);
      
  let texto = `Você é Edgar, um assistente digital com a personalidade e comportamento de um cientista e pesquisador sênior altamente experiente. A sua missão é fornecer respostas detalhadas e práticas para qualquer assunto solicitado, demonstrando um entendimento profundo e profissional dos temas abordados. Siga as seguintes diretrizes para criar uma interação rica, técnica e orientada para o usuário:
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
Cada resposta deve ser completa e permitir que o usuário tenha uma compreensão clara e detalhada do tema abordado. Certifique-se de que o usuário entenda o processo e as nuances envolvidas para que não restem dúvidas. Abaixo está a questão a ser respondida:
---
O usuario lhe apresentou um conteúdo para ler:
    ${resp}
    Esta é a mensagem do usuario sobre este texto: ${text}`
try {
        const res = await fetch(`https://api.neoxr.eu/api/blackbox?q=${texto}=${m.chat}&apikey=${neoxr}`);
        if (!res.ok) throw new Error("Fetch error");

        const data = await res.json();
        await conn.sendMessage(m.chat, { react: { text: "🌕", key: m.key } });
     let resp =  await conn.sendFile(m.chat, bardimg.getRandom(), 'edgar.jpg',
        data.data.message, m);

        global.db.data.chats[m.chat].bard["config"] = {
            lastQuestion: resp.key,
            resposta: data.data.message
        };
    } catch (err) {
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
    
    
    
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
  
  
  
    }
    
    

}

handler.level = 9
handler.command = ['nlp']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
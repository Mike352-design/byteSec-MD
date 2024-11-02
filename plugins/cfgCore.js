
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  const apiKey = 'uaxjboqGrX63On79gMPc8zd5iKUtFYLI';
  const apiUrl = `https://api.core.ac.uk/v3/search/works?q=${text}`;

  try {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
let results = jsonData.results

const filteredResults = results.map(obj => {
  const { fullText, abstract, ...rest } = obj;
  return rest;
});


let pdfs_ = { 
from: m.sender,
name: [],
urls: [] 
}
if (!global.artigosLista) {
global.artigosLista = {};
}
if (!global.artigosLista[m.chat]) {
global.artigosLista[m.chat] = {
  urls: [],
  name: [],
  
}
}
global.artigosLista[m.chat] = {
  urls: [],
  name: [],
  
}


let textoInfo = `
╭────────────────────⌬...─╮
       𝙰𝚁𝚃𝙸𝙶𝙾𝚂
╰─...⌬────────────────────╯
╭──────────────────── ⛦...─╮
┃ 📜 𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐨 𝐚𝐫𝐭𝐢𝐠𝐨 
┃ 𝐚𝐜𝐚𝐝𝐞𝐦𝐢𝐜𝐨 𝐪𝐮𝐞 𝐥𝐡𝐞 𝐝𝐞𝐬𝐩𝐞𝐫𝐭𝐚 𝐨
┃ 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐬𝐞 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐫𝐞𝐠𝐚𝐫
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ *.artigo 2* 
╰─...⌬────────────────────╯`.trim()  
const formatDate = (isoDateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
  const date = new Date(isoDateString);
  return date.toLocaleString('pt-BR', options);
};
  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const teks = results.map((v, i) => {
  let link = v.downloadUrl
  
  global.artigosLista[m.chat].urls.push(link);
  global.artigosLista[m.chat].name.push(v.title)
   const contributorsString = v.contributors
    ? `┃ ➥ _*Contribuidores:*_\n${v.contributors.map(contributor => `${contributor}`).join(', ')}
┃━━━━━━━━━⬣⬣━━━━━━━━`
    : ''
    
    const editora = v.publisher
    ? `\n┃ ➥ _*Editora:*_ ${v.publisher}
┃━━━━━━━━━⬣⬣━━━━━━━━`
    : ''
    
  const authorNames = v.authors ? v.authors.map(author => author.name).join(', ') : '';
    const formattedDate = v.publishedDate ? formatDate(v.publishedDate) : '';
    
  return `╭━━━⬣『${i}』
┃ ➥ _*TÍTULO:*_  ${v.title}
┃━━━━━━━━━⬣⬣━━━━━━━━
┃ ➥ _*AUTORES:*_ ${authorNames}
┃━━━━━━━━━⬣⬣━━━━━━━━
${contributorsString}
┃ ➥ _*DATA DE PUBLICAÇÃO:*_  ${formattedDate}
┃━━━━━━━━━⬣⬣━━━━━━━━${editora}
`;
}).join('\n\n─┅──┅❖ ❖─┅──┅\n\n');

await m.reply(textoInfo + '\n'+ teks)
  
  console.log(global.artigosLista[m.chat])
  } catch (error) {
    console.error('Erro:', error);
    // Handle the error appropriately
  }
};

handler.command = ['core']
handler.level = 25
export default handler;
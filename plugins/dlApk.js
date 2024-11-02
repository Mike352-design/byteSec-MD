
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner }) => {
  

const url = `https://api.neoxr.eu/api/apkmod?q=${text}&apikey=${global.neoxr}`

if(!global.apkLista){
  global.apkLista =[]
}
if(!global.apkLista[m.chat]){
  global.apkLista[m.chat]={}
}


if(global.apkLista[m.chat]){
delete	global.apkLista[m.chat]
}
try {
	const response = await fetch(url);
	const results = await response.json();
	console.log(results);

    
let apks = { 
from: m.sender,
query:text,
nmb: [],
name: [],
urls: [] ,
sizes:[],
mods,
version: [],
}
if (!global.apkLista) {
global.apkLista = {};
}
if (!global.apkLista[m.chat]) {
global.apkLista[m.chat] = {
  query: text,
from: m.sender,
nmb: [],
name: [],
urls: [] ,
sizes:[],
mods:[],
version: [],
  
  
}
}
global.apkLista[m.chat] = {
  from: m.sender,
  query: text,
nmb: [],
name: [],
urls: [] ,
mods:[],
version: [],
  
}


let textoInfo = `
╭────────────────────⌬...─╮
         𝙰𝙿𝙺'𝚜
╰─...⌬────────────────────╯
╭──────────────────── ⛦...─╮
┃ 📜 𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐨 𝙰𝙿𝙺
┃ 𝐪𝐮𝐞 𝐥𝐡𝐞 𝐝𝐞𝐬𝐩𝐞𝐫𝐭𝐚 𝐨
┃ 𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐬𝐞 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐜𝐚𝐫𝐫𝐞𝐠𝐚𝐫
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ *Exemplo:* *.apkdl 2* 
╰─...⌬────────────────────╯`.trim()  

  // Extract the first 10 objects from the results array and remove 'fulltext' and 'abstract' keys
const teks = results.data.map((v, i) => {
  
  
  global.apkLista[m.chat].nmb.push(v.no);
  global.apkLista[m.chat].name.push(v.name)
  global.apkLista[m.chat].version.push(v.version )
  global.apkLista[m.chat].urls.push(v.url)
  global.apkLista[m.chat].mods.push(v.mod)
    
  return `
  ━━━⬣『${i+1}』
 ➥ _*Nome:*_  ${v.name}  ${v.version}
 ➥ _*Descrição*_ ${v.mod}
`}).join('╰━━━━━━━⬣\n');

await m.reply(textoInfo + '\n'+ teks)
  
  console.log(global.apkLista[m.chat])
  } catch (error) {
    console.error('Erro:', error);
    // Handle the error appropriately
  }
  
  
};

handler.command =['apks']
handler.level =7
export default handler;
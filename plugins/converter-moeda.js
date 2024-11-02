
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


//or
import isCurrencyCode from 'is-currency-code'

import JSON5 from 'json5'
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
/*
  import gpt from "gpti";
import  {gpt.web} from "gpti";
*/
import axios from 'axios'
import  cheerio from 'cheerio'
import {gpt} from 'gpti';
 


 import { Convert } from "easy-currencies";
let handler = async (m, { conn,__dirname, text, usedPrefix, command, isOwner, args }) => {
  
  m.react("⏳")
    let txtt = ()=> {
    m.react("❌")
    m.reply(`⎔⎓────────────
┃     $ 𝔠𝔬𝔫𝔳𝔢𝔯𝔰𝔞̃𝔬 𝔡𝔢 𝔪𝔬𝔢𝔡𝔞𝔰
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ᴜsᴇ ᴇsᴛᴀ ғᴜɴᴄ̧ᴀ̃ᴏ ᴅᴇᴘʟᴏʀᴀ́ᴠᴇʟ ᴘᴀʀᴀ ᴄᴏɴᴠᴇʀᴛᴇʀ ᴇ ᴅᴇsᴠᴇʟᴀʀ ᴏ ᴠᴀʟᴏʀ ᴅᴇ sᴇᴜ ᴅᴇsᴇᴊᴏ ᴇᴍ ᴍᴏᴇᴅᴀs ᴅᴇ ᴏᴜᴛʀᴀs ᴛᴇʀʀᴀs ᴅɪsᴛᴀɴᴛᴇs... 
┃
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
𓊈 *.converter _USD | 5.60 R$_*
𓊈 *.converter _Pesos | 10 Euros_*
╰─...⎔⎓──────────`)
  }
  try{
  if(!text){
    txtt()
  }
let input = text

const [sourceCurrency, amountInput] = input.split('|').map(part => part.trim());

const [valor, moeda] = amountInput.split(' ')

const amount = parseFloat(valor.match(/\d+(\.\d+)?/)[0]);




gpt.web({
    prompt: `Voce deve agir como um assistente financeiro para conversao de
    siglas
    moedas. Voce deve receber um input e transforma-lo em seubresoectivo codigo
    ISO pra moeda
   
   voce deve retornar dados em um objeto json
    
    {
      source: source,
      target: target
    }
 
 troque source por ${moeda} e target por ${sourceCurrency} nao esquevendo de
 converter no codigo ISO da moeda
 retorne o json final E APENAS O JSON, SEM MAIS NADA  
 "𖠇 𝙴𝚛𝚛𝚘 𖠇
   (moeda) 𝚗𝚊̃𝚘 𝚌𝚘𝚗𝚑𝚎𝚌𝚒𝚍𝚊
𖡟 𝚀𝚞𝚒𝚜 𝚍𝚒𝚣𝚎𝚛
{sugestoes semelhantes}    ?"


`,
    markdown: false
}, async (err, dttp) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        
        let aiReply =  dttp.gpt
        console.log('tst')
console.log(aiReply)
         
       aiReply = JSON5.parse(aiReply)
       
      console.log(aiReply)

   
         
        
        
       try{ 
         
         const value = await Convert(amount).from(aiReply.source).to(aiReply.target)
         
         m.reply(`${value +' '+ aiReply.target} `)
         
       }
       catch(e)
       {
         console.log()
            return   m.reply(`━━━━━━ ◦ ❖ ◦ ━━━━━━
 𒈞  _𝐌𝐨𝐞𝐝𝐚 𝐝𝐞𝐬𝐜𝐨𝐧𝐡𝐞𝐜𝐢𝐝𝐚! 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐮𝐦𝐚 𝐦𝐨𝐞𝐝𝐚 𝐞𝐱𝐢𝐬𝐭𝐞𝐧𝐭𝐞 𝐞 𝐟𝐚𝐫𝐞𝐢 𝐚 𝐜𝐨𝐧𝐯𝐞𝐫𝐬𝐚̃𝐨_
━━━━━━ ◦ ❖ ◦ ━━━━━━`)
         
       }



    
}
})


}
catch(e){
 console.log(e)
    m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
  𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.
  
  𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
  *╰┅─❖ ⸸ ❖─┅*`)
  }

  
}


handler.level = 11
handler.command = ['converter']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
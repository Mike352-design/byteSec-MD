
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import schedule from 'node-schedule'
import { exec } from 'child_process'
let handler = async (m, { conn, text, usedPrefix, isAdmin,participants, isOwner,command, args}) => {
  
  try{
    
    m.react("💻")
    
const bashScript = './fetch';

exec(bashScript, (error, stdout, stderr) => {
  if (error) {
    m.react("❌")
    console.error(`Error executing the script: ${error}`);
    return;
  }
  console.log('ok');
  conn.sendFile(m.chat, 'fetch.png','kk.png',null,m)
});
    
    
    
  }
  catch(e){
    console.log(e)
    m.react("❌")
  }
}
handler.command = /^neofetch|fetch|sysinfo/i
handler.rowner = false

export default handler


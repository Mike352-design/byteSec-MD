
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
import { exec } from 'child_process'; 
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `${eg} *♱ 𝑨𝒓𝒒𝒖𝒊𝒗𝒐𝒔 𝒕𝒆𝒎𝒑𝒐𝒓𝒂𝒓𝒊𝒐𝒔 𝒓𝒆𝒎𝒐𝒗𝒊𝒅𝒐𝒔*`, m)
const tmp = [tmpdir(), join(__dirname, '../tmp')];
let tmpfold = join(__dirname, '../pdfs/')
const clearPdfsFolder = () => {
    exec(`rm -rf ${tmpfold}*`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error clearing the pdfs folder:`, err);
            return;
        }
        if (stderr) {
            console.error(`Error:`, stderr);
            return;
        }
        console.log(`All files in ${tmpfold} have been erased.`);
    });
};
clearPdfsFolder();
const filename = [];

tmp.forEach(dirname => {
  readdirSync(dirname).forEach(file => {
    const filePath = join(dirname, file);
    const stats = statSync(filePath);

    if (stats.isFile()) {
      filename.push(filePath);
    }
  });
});

filename.forEach(file => unlinkSync(file));
  
  
} //NO USAR ESTE COMANDO EN HEROKU | DO NOT USE THIS COMMAND ON HEROKU
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp|borrartmp|eliminartmp|borrartemp|borrartemp)$/i
handler.exp = 500
handler.rowner = true
export default handler








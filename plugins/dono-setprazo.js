
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  if(!isOwner && m.sender != global.cocriador ){
    return m.react("🦇")
  }
  function convertDate(inputDate) {
    // Regular expression to match DD/MM/YYYY format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    // Check if the input date matches the expected format
    if (!dateRegex.test(inputDate)) {
        console.error('data nao esta no formato (DD/MM/YYYY)');
        m.react("❌")
        return null;
    }

    // Split the input date into day, month, and year
    const [day, month, year] = inputDate.split('/');

    // Parse day, month, and year as integers
    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);
    const yearInt = parseInt(year, 10);

    // Check if month is above 12 or day is above 31
    if (monthInt > 12 || dayInt > 31) {
        console.error('Invalido mes ou dia')
        m.react("❌")
        return null;
    }

    // Create a new Date object with the given date
    const convertedDate = new Date(`${year}-${month}-${day}`);

    // Return the converted date in the desired format
    return convertedDate.toISOString();
}


function compareDates(scheduledDate) {
    // Check if scheduledDate is null (indicating incorrect format)
    if (scheduledDate === null) {
        return;
    }

    // Convert scheduledDate to Date object
    const scheduledDateTime = new Date(scheduledDate);

    // Get the current date and time
    const currentDate = new Date();

    // Compare the current date and time with the scheduled date and time
    if (currentDate >= scheduledDateTime) {
        // Do something if the current date and time is equal to or after the scheduled date and time
        console.log('expirou');
    } else {
        // Do something else if the current date and time is before the scheduled date and time
        console.log('prazi');
    }
}
// Example usage:

const convertedDate = convertDate(text);
if (convertedDate !== null) {
    console.log(convertedDate); // Output: "Invalid month or day"
    m.react("✅")
//    m.reply(convertedDate)
    global.db.data.chats[m.chat].expira = convertedDate
    
}
  
  
}

handler.command = /^(limite|prazo|expiry)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

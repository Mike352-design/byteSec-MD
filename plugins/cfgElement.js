
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//CREADO POR @gata_diosimport translate from '@vitalets/google-translate-api'
import translate from '@vitalets/google-translate-api' 
let handler = async (m, { conn, text, usedPrefix, command}) => {
 if (!text) throw 'Please provide an element symbol or name';
let result = await translate(`${text}`, { to: "en", autoCorrect: true })


  try {
    let res = await fetch(`https://api.popcat.xyz/periodic-table?element=${result.text}`);

    if (!res.ok) {
      throw new Error(`API status ${res.status}`);
    }

    let buffer = await res.arrayBuffer();
    let json = JSON.parse(Buffer.from(buffer).toString());

    console.log('JSON response:', json);
let nome = await translate(json.name, { to: "pt", autoCorrect: true })

let summ = await translate(json.summary, { to: "pt", autoCorrect: true })

console.log(summ)
console.log(nome)
   let elementInfo = 
   
    `             ⛧°。 ⋆༺♱༻⋆。 °⛧
    ⚝ _*Informações do elemento*_ ⚝
     ⌬ *Nome:* ${nome.text}\n
     ⌬ *Símbolo:* ${json.symbol}\n
     ⌬ *Número Atômico:* ${json.atomic_number}\n
     ⌬ *Massa Atômica:* ${json.atomic_mass}\n
     ⌬ *Período:* ${json.period}\n
     ⌬ *Fase:* ${json.phase}\n
     ⌬ *Descoberto Por:* ${json.discovered_by}\n
     ⌬ *Resumo:* ${summ.text}
             ⛧°。 ⋆༺☥༻⋆。 °⛧`;



    conn.sendFile(m.chat, json.image, 'element.jpg', elementInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }

}
handler.level= 25
handler.command = ['elemento']
export default handler

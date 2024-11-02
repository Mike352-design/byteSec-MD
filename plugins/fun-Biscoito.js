
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//CREADO POR @gata_diosimport translate from '@vitalets/google-translate-api'
import translate from '@vitalets/google-translate-api' 
import {gpt} from 'gpti';
let handler = async (m, { conn, text, usedPrefix, command}) => {


const url = 'https://fortune-cookie4.p.rapidapi.com/slack';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5d5bc622a0msh2ccc53929ee80c5p1d5115jsn48fc9f744a85',
    'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.text)
	console.log("🔮🔮🔮🔮")
	
	
	gpt.web({
    prompt: `${result.text}
    
    Traduza esta frase para português e retorne APENAS a tradução seguindo o formato original com emoji. Nao forneca texto ou fale nada, aoenas retorne a tradução em português. Se atente a gírias e palavras denteo do contexto da frase`,
    markdown: false
}, async (err, dtta) => {
    if(err != null){
        console.log(err);
        m.react("💀")
    } 
    else {
        console.log(dtta);
        let aiReply =  dtta.gpt
        await conn.sendMessage(m.chat, {react: {
        text: "🌕", // use an empty string to remove the reaction
        key: m.key}
    },
    m  )
    
 	m.reply(`━━━━━━━━━⬣ 🍀 ⬣━━━━━━━━
${aiReply}
━━━━━━━━━⬣𖤍⬣━━━━━━━━`)
    }
})

	
} catch (error) {
	console.error(error);
	m.react("❌")
}
  

}
handler.level = 7
handler.command = ['sorte']
export default handler


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async(m, { conn, usedPrefix, command, text ,args}) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

try{
let plvra = args.slice(1).join(' ');
    
  
if (!args[1] && m.quoted && m.quoted.text) plvra= m.quoted.text

let selected = text.toLowerCase().split(" ")[0] + " "
if(selected == "code ") {
  let resposta = plvra
console.log(resposta);

let res = '';
res = plvra.split('').map(char => {
  return char.charCodeAt(0).toString(2);
}).join(' ');

console.log(res);
await m.reply(res);
} 

else if(selected == "decode ")
{
  
  var newBin = plvra.split(" ")
var binCode = []
for (let i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
let result = binCode.join("")
  console.log(result)
  await m.reply(result)
} else {
return conn.reply(m.chat, `*─┅──┅❖ 𓄿 ❖─┅──┅*
𝑪𝒐𝒏𝒗𝒆𝒓𝒔𝒐𝒓 𝒃𝒊𝒏𝒂𝒓𝒊𝒐 𒌐

𝑷𝒂𝒓𝒂 𝒄𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒓 𝒖𝒔𝒆:
*${usedPrefix}${command} 𝒄𝒐𝒅𝒆 𝑴𝒆𝒏𝒔𝒂𝒈𝒆𝒎*

𝑷𝒂𝒓𝒂 𝒅𝒆𝒄𝒐𝒅𝒊𝒇𝒊𝒄𝒂𝒓 𝒖𝒔𝒆:
*${usedPrefix}${command} 𝒅𝒆𝒄𝒐𝒅𝒆 11010101*

*─┅──┅❖ ❖─┅──┅*`, fkontak, m)
}}

catch(e){
  console.log(e)
  
  await m.reply("⸸ 𝙴𝚛𝚛𝚘 𝚎𝚖 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 ")
}
}

handler.help = ["binary"].map(v => v + " <encode|decode>")
handler.tags = ["tools"]

handler.command = ['bin']
handler.level = 20

export default handler


/*
async function dBinary(str) {

}

async function eBinary(str = ''){    

}

module.exports = { dBinary, eBinary }

*/
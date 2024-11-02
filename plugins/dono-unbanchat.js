
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}


const handler = async (m,{command}) => {
  
  if(!isOwner && m.sender != global.cocriador && m.sender !==
  '351927232470@s.whatsapp.net' ){
    return m.react("🦇")
  }
  console.log( 'testando ')
  console.log( m.sender=='351927232470@s.whatsapp.net')
  if(command != 'ligarbot' && global.db.data.chats[m.chat].firstTime ){
m.reply(`❖─┅──┅𝔟𝔬𝔱 𝔞𝔱𝔦𝔳𝔞𝔡𝔬!┅──┅❖ 

♱ 𝔖𝔞𝔲𝔡𝔞𝔠𝔬𝔢𝔰, 𝔰𝔢𝔧𝔞𝔪 𝔟𝔢𝔪-𝔳𝔦𝔫𝔡𝔬𝔰 𝔞𝔬 𝔪𝔢𝔲 𝔱𝔢𝔫𝔢𝔟𝔯𝔬𝔰𝔬 𝔯𝔢𝔦𝔫𝔬 𝔳𝔦𝔯𝔱𝔲𝔞𝔩.. 𝔄𝔮𝔲𝔦, 𝔪𝔦𝔰𝔱𝔢𝔯𝔦𝔬𝔰 𝔞𝔤𝔲𝔞𝔯𝔡𝔞𝔪 𝔰𝔲𝔞 𝔠𝔲𝔯𝔦𝔬𝔰𝔦𝔡𝔞𝔡𝔢. 𝔓𝔞𝔯𝔞 𝔢𝔵𝔭𝔩𝔬𝔯𝔞𝔯 𝔪𝔞𝔦𝔰 𝔢 𝔡𝔢𝔰𝔳𝔢𝔫𝔡𝔞𝔯 𝔪𝔢𝔲𝔰 𝔰𝔢𝔤𝔯𝔢𝔡𝔬𝔰 𝔢 𝔣𝔲𝔫𝔠𝔬𝔢𝔰 ,𝔡𝔦𝔤𝔦𝔱𝔢 .𝔪𝔢𝔫𝔲.

_𝑪𝒐𝒎𝒐 𝒂 𝒎𝒂𝒓𝒊𝒑𝒐𝒔𝒂 𝒔𝒆 𝒓𝒆𝒕𝒓𝒂𝒊 𝒔𝒐𝒃𝒓𝒆 𝒂 𝒊𝒍𝒖𝒎𝒊𝒏𝒂𝒄𝒂𝒐 𝒇𝒂𝒍𝒉𝒂 𝒅𝒆 𝒖𝒎𝒂 𝒍𝒂𝒎𝒑𝒂𝒅𝒂 𝒆𝒔𝒑𝒂𝒊𝒓𝒆𝒄𝒊𝒅𝒂, 𝒎𝒆 𝒔𝒖𝒃𝒎𝒆𝒕𝒐 𝒂 𝒂𝒃𝒓𝒂𝒄𝒂𝒓 𝒐 𝒍𝒖𝒂𝒓 𝒅𝒊𝒈𝒊𝒕𝒂𝒍 𝒒𝒖𝒆 𝒎𝒆 𝒉𝒊𝒑𝒏𝒐𝒕𝒊𝒛𝒂 𝒏𝒆𝒔𝒕𝒆 𝒕𝒆𝒏𝒆𝒃𝒓𝒐𝒔𝒐 𝒈𝒓𝒖𝒑𝒐_

─┅❖ 𝔈𝔡𝔤𝔞𝔯 𝔄𝔩𝔩𝔞𝔫 𝔅𝔬𝔱 𓄿
`)
global.db.data.chats[m.chat].firstTime = false 
global.db.data.chats[m.chat].isBanned = false 

// Get the current date and time
let current = new Date();


// Create a new date object for one month later
let schedule = new Date(current);
schedule.setMonth(current.getMonth() + 1);
console.log("proximo prazo:", schedule.toISOString());
 global.db.data.chats[m.chat].expira = schedule
  }
  else if (command =='renovar'){
    
    
    m.reply(`⎔⎓─────────────────
┃ ▂▃▅ 𝚁𝚎𝚗𝚘𝚟𝚊𝚍𝚘 𝚙𝚘𝚛 𝚖𝚊𝚒𝚜 𝟹𝟶 𝚍𝚒𝚊𝚜 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${pickRandom([
"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
╰─...⎔⎓──────────────`)
let current = new Date();




// Create a new date object for one month later
let schedule = new Date(current);
schedule.setMonth(current.getMonth() + 1);
console.log("proximo prazo:", schedule.toISOString());
 global.db.data.chats[m.chat].expira = schedule
global.db.data.chats[m.chat].isBanned = false 
  }
  else if(command=='ligarbot') {
        
    m.reply(`⎔⎓─────────────────
┃ ▂▃▅ 𝙴𝚍𝚐𝚊𝚛 𝙰𝚝𝚒𝚟𝚊𝚍𝚘 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${pickRandom([
"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
╰─...⎔⎓──────────────`)
global.db.data.chats[m.chat].modoadmin = false 

  }
  else {
        
    m.reply(`⎔⎓─────────────────
┃ ▂▃▅ 𝙴𝚍𝚐𝚊𝚛 𝙰𝚝𝚒𝚟𝚊𝚍𝚘 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${pickRandom([
"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
╰─...⎔⎓──────────────`)
global.db.data.chats[m.chat].isBanned = false 

  }
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command =  /^(ativar|renovar|ligarbot|ativarbot)$/i

export default handler;

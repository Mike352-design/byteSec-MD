

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────



let handler = async (m, { conn, text, usedPrefix, command}) => {
  
  m.react("🖥")
 if (!text) {
   
   m.react("❌")
   return m.reply(`╭━[𝘽𝙡𝙖𝙘𝙠𝙗𝙤𝙭]━━━━━━━⬣
💻 𝐴 𝐼𝐴 𝐵𝑙𝑎𝑐𝑘𝐵𝑜𝑥 𝑜𝑓𝑒𝑟𝑒𝑐𝑒 𝑠𝑢𝑝𝑜𝑟𝑡𝑒 𝑒𝑚 𝑝𝑟𝑜𝑔𝑟𝑎𝑚𝑎𝑐̧𝑎̃𝑜, 𝑟𝑒𝑓𝑎𝑡𝑜𝑟𝑎𝑐̧𝑎̃𝑜 𝑑𝑒 𝑐𝑜́𝑑𝑖𝑔𝑜, 𝑠𝑜𝑙𝑢𝑐̧𝑎̃𝑜 𝑑𝑒 𝑑𝑢́𝑣𝑖𝑑𝑎𝑠 𝑑𝑒 𝑠𝑜𝑓𝑡𝑤𝑎𝑟𝑒, 𝑝𝑒𝑛𝑡𝑒𝑠𝑡𝑖𝑛𝑔 𝑒 𝑐𝑜𝑛𝑓𝑖𝑔𝑢𝑟𝑎𝑐̧𝑎̃𝑜 𝑑𝑒 𝑟𝑒𝑑𝑒𝑠. 𝐹𝑎𝑐̧𝑎 𝑠𝑢𝑎 𝑝𝑒𝑟𝑔𝑢𝑛𝑡𝑎 𝑒 𝑑𝑒𝑖𝑥𝑒 𝑞𝑢𝑒 𝑎 𝐵𝑙𝑎𝑐𝑘𝐵𝑜𝑥 𝑜 𝑔𝑢𝑖𝑒, 𝑐𝑜𝑚𝑜 𝑢𝑚𝑎 𝑠𝑜𝑚𝑏𝑟𝑎 𝑜𝑐𝑢𝑙𝑡𝑎, 𝑛𝑎 𝑟𝑒𝑠𝑜𝑙𝑢𝑐̧𝑎̃𝑜 𝑑𝑜𝑠 𝑝𝑟𝑜𝑏𝑙𝑒𝑚𝑎𝑠 𝑞𝑢𝑒 𝑠𝑢𝑟𝑔𝑒𝑚 𝑛𝑎𝑠 𝑝𝑟𝑜𝑓𝑢𝑛𝑑𝑒𝑧𝑎𝑠 𝑑𝑜 𝑠𝑒𝑢 𝑝𝑟𝑜𝑗𝑒𝑡𝑜

𖠁 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Como faço para implementar uma estrutura de dados como uma árvore binária em C++?
${usedPrefix + command} Como faço para identificar e explorar falhas de configuração no Active Directory?
${usedPrefix + command} Como configuro VLANs em um switch Cisco?

╰━━━━━━━━━━━━━━━━━━⬣ `)
 }

let images=[
  'https://itzpire.com/file/02dfd5ed43c8.jpg',
  'https://itzpire.com/file/9f88699e36dc.jpg',
  'https://itzpire.com/file/c1969acaefe0.jpg',
  'https://itzpire.com/file/48ee1680e6a1.jpg',
  'https://itzpire.com/file/ebcc3215e285.jpg'
  ]

  try {
    let ress = await
    fetch(`https://api.botcahx.eu.org/api/search/blackbox-chat?text=Responda em
    português: ${text}&apikey=${botcahx}`);
   let res = await ress.json()
   
   console.log(res)
let msg = res.message
msg = msg.startsWith("$@$v=undefined-rv1$@$") ? msg.slice(20) : msg


    conn.sendFile(m.chat, images.getRandom(), 'element.jpg',`━━━━━━༺༻ ━━━━━━
     ᴮˡᵃᶜᵏᵇᵒˣ ᴵᴬ
     ${msg}` , m)
    
    
    
    
    
  } catch (error) {
    console.log(error)
    
  }

}
handler.level= 25
handler.command = ['box']
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
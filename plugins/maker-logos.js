
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import axios from "axios";
import cheerio from "cheerio";
import FormData from "form-data";
  import mumaker from 'mumaker'

const split = '|';
const handler = async (m, { conn, args, text, usedPrefix, command, name,isAdmin,isOwner }) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].midia===false){
   m.react("❌")
   
   return !0;
 } 

 
 

const effectsDictionary = {
  'dragonball': 'https://ephoto360.com/tao-hieu-ung-chu-phong-cach-dragon-ball-truc-tuyen-1000.html',
  'naruto': 'https://ephoto360.com/hieu-ung-chu-phong-cach-logo-naruto-shippuden-1001.html',
  'glitch1': 'https://ephoto360.com/tao-hieu-ung-chu-neon-glitch-an-tuong-939.html',
  'amongus': 'https://ephoto360.com/tao-cover-anh-bia-game-among-us-online-932.html',
  'matrix': 'https://ephoto360.com/tao-hieu-ung-anh-phim-ma-tran-truc-tuyen-907.html',
  'rascunho': 'https://ephoto360.com/tao-logo-truc-tuyen-phong-cach-phac-thao-chi-856.html',
  'trooper': 'https://ephoto360.com/tao-logo-mascot-nhan-vat-star-wars-online-840.html',
  'work': 'https://ephoto360.com/hieu-ung-chu-cat-giay-nghe-thuat-online-824.html',
  'emblema': 'https://ephoto360.com/tao-avatar-video-theo-cac-bieu-tuong-online-629.html',
  'tiktok': 'https://ephoto360.com/hieu-ung-chu-tik-tok-truc-tuyen-511.html',
  'black': 'https://ephoto360.com/tao-logo-chu-truc-tuyen-499.html',
  'glitch2': 'https://ephoto360.com/tao-hieu-ung-chu-digital-glitch-truc-tuyen-941.html',
  'pixel': 'https://ephoto360.com/tao-hieu-ung-chu-pixel-glitch-truc-tuyen-940.html',
  'bp': 'https://ephoto360.com/tao-hieu-ung-chu-logo-blackpink-neon-online-841.html',
  'scifi': 'https://ephoto360.com/hieu-ung-chu-anh-sang-theo-phong-cach-cong-nghe-tuong-lai-769.html',
  'cemiterio': 'https://ephoto360.com/viet-ten-len-cong-nghia-trang-halloween-kinh-di-698.html',
  'ouro': 'https://ephoto360.com/tao-banner-hieu-ung-chu-hoa-van-ma-vang-sang-trong-691.html',
  'montanha': 'https://ephoto360.com/tao-logo-avatar-du-lich-phong-cach-den-trang-643.html',
  'games': 'https://ephoto360.com/tao-logo-team-logo-gaming-phong-cach-mascot-mien-phi-633.html',
  'pornhub': 'https://ephoto360.com/tao-logo-phong-cach-pornhub-612.html',
  '1917': 'https://ephoto360.com/tao-hieu-ung-chu-phong-cach-phim-1917-573.html',
  'games2': 'https://ephoto360.com/tao-logo-mascot-phong-cach-galaxy-462.html',
  'marvel': 'https://ephoto360.com/tao-logo-phong-cach-marvel-419.html',
  'emblema2': 'https://ephoto360.com/tao-logo-video-intro-truc-tuyen-mien-phi-676.html',
  'chuva': 'https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html',
  'papel': 'https://ephoto360.com/hieu-ung-chu-phong-cach-cat-giay-3d-nhieu-mau-778.html',
  'minions': 'https://ephoto360.com/tao-hieu-ung-chu-minions-ngo-nghinh-605.html',
  'retro1': 'https://ephoto360.com/tao-hieu-ung-chu-retro-neon-truc-tuyen-597.html',
  'lobo': 'https://ephoto360.com/hieu-ung-ve/mau-logo-avatar-galaxy-wolf-cuc-chat-366.html',
  'lava': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-kim-loai-nung-onine-341.html',
  'classe': 'https://ephoto360.com/hieu-ung-chu/tao-logo-lop-truc-tuyen-phong-cach-den-trang-324.html',
  'polygon': 'https://ephoto360.com/hieu-ung-chu/tao-logo-avatar-online-theo-phong-cach-logo-polygon-320.html',
  'ramos': 'https://ephoto360.com/hieu-ung-chu/tao-chu-galaxy-mam-cay-an-tuong-288.html',
  'lampada': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-day-toc-bong-den-dien-219.html',
  'metal': 'https://ephoto360.com/hieu-ung-chu/chu-graffiti-3d-208.html',
  'neon': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-neon-anh-sang-200.html',
  'neon2': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-neon-mau-xanh-117.html',
  'graffiti': 'https://ephoto360.com/hieu-ung-chu/viet-chu-graffiti-4-178.html',
  'matrix': 'https://ephoto360.com/hieu-ung-chu/viet-chu-ma-tran-online-154.html',
  'metal2': 'https://ephoto360.com/hieu-ung-chu/tao-chu-ngoi-sao-kim-loai-109.html',
  'metal2': 'https://ephoto360.com/hieu-ung-ve/hieu-ung-chu-noi-kim-loai-110.html',
  'agua': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-giot-nuoc-106.html',
  'neve': 'https://ephoto360.com/hieu-ung-chu/tao-chu-bang-tuyet-107.html',
  'metal3': 'https://ephoto360.com/hieu-ung-chu/tao-logo-kim-loai-108.html',
  'madeira': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-go-104.html',
  'pixel2': 'https://ephoto360.com/hieu-ung-chu/tao-chu-khoi-3d-88.html',
  'oceano': 'https://ephoto360.com/hieu-ung-chu/tao-chu-duoi-nuoc-73.html',
  'lua': 'https://ephoto360.com/hieu-ung-ve/viet-chu-sao-truc-tuyen-84.html',
  'natureza': 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html',
  'bloco': 'https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html',
  'pelo': 'https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html',
  'chrome': 'https://photooxy.com/logo-and-text-effects/create-a-crisp-chromed-text-effect-196.html',
  'cafe': 'https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html',
  'tech': 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html',
  'graffiti2': 'https://ephoto360.com/hieu-ung-chu/tao-hieu-ung-chu-nghe-thuat-tren-tuong-72.html',
  'neon3': 'https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-neon-68.html',
  'retro2': 'https://ephoto360.com/hieu-ung-chu/tao-chu-phong-cac-retro-67.html',
  'toxic': 'https://ephoto360.com/hieu-ung-chu/tao-chu-anh-sang-xanh-doc-dao-63.html',
  'aestethic': 'https://photooxy.com/create-online-reflected-neon-light-text-effect-421.html',
  'fogo': 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html',
  'potter': 'https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html',
  'metalglow': 'https://photooxy.com/other-design/create-metallic-text-glow-online-188.html',
  'tech': 'https://photooxy.com/logo-and-text-effects/text-under-web-matrix-effect-185.html',
  'graffiti3': 'https://photooxy.com/banner-cover/graffiti-text-cover-222.html',
  'lol': 'https://photooxy.com/league-of-legends/make-your-logo-pentakill-lol-128.html',
  'lol2': 'https://photooxy.com/league-of-legends/create-lol-cover-with-a-pentakill-frame-154.html',
  'cemiterio2': 'https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html',
  '3dblack': 'https://textpro.me/create-an-online-3d-embossed-text-effect-1154.html',
  'glossy': 'https://textpro.me/create-a-colorful-glossy-3d-text-effect-online-1150.html',
  'thunder': 'https://textpro.me/create-thunder-text-effect-online-881.html',
  'magma': 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html',
  'sombras': 'https://textpro.me/create-artistic-typography-online-1086.html',
  'batman': 'https://textpro.me/make-a-batman-logo-online-free-1066.html',
  'frozen': 'https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html',
 
  // Add more predefined effects here
};

const effectsList = Object.keys(effectsDictionary);

// Create a string of available effects
const listaEf= '*꧁EFEITOS DISPONÍVEIS꧂:*\n⛦ ' + effectsList.join('\n⛦ ');


let infomsg = `╭━━━━━━━━━⬣
🥀 𝐍𝐨 𝐜𝐫𝐞𝐩𝐮𝐬𝐜𝐮𝐥𝐨 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞, 𝐚𝐠𝐮𝐚𝐫𝐝𝐨 𝐨 𝐬𝐞𝐮 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐩𝐚𝐫𝐚 𝐝𝐞𝐬𝐯𝐞𝐥𝐚𝐫 𝐮𝐦 𝐞𝐟𝐞𝐢𝐭𝐨 𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐫.
𝐃𝐢𝐠𝐚-𝐦𝐞 𝐨 𝐞𝐟𝐞𝐢𝐭𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐭𝐢𝐧𝐚𝐬 𝐣𝐮𝐧𝐭𝐨 𝐜𝐨𝐦 𝐨 𝐭𝐞𝐱𝐭𝐨
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
❖─┅ .logos magma texto1 | texto2
╰━━━━━━━━━━━━━━━━━━⬣

${listaEf}` 
if(!args[1] || !text) return m.reply(infomsg)
let efeito = args[0]?.toLowerCase()
let url = effectsDictionary[efeito];
  if (!url) {
    return m.reply(infomsg);
  }
// To access an effect URL, you simply use the effect name as the key
// const magmaUrl = effectsDictionary['magma']; // effect.me/magma

 



let prompt = args.slice(1).join(" "); // Join the words starting from the second 
m.react("⏳")


  if(prompt.includes(split)){
// with 1 text 

const parts = prompt.split(" | ");

const txt1 = parts[0];
const txt2 = parts[1];

// with 2 or more text
mumaker.textpro(url, [txt1, txt2])
.then(async (data) =>{
  let message = await  conn.sendFile(m.chat,data.image, 'edgar.jpg','', m)
})
.catch(e=>{
  console.log(e)
  m.react("❌")
})

}
else {
  mumaker.textpro(url,prompt)
.then(async (data) =>{
  let message = await  conn.sendFile(m.chat,data.image, 'edgar.jpg','', m)
})
.catch(e=>{
  console.log(e)
  m.react("❌")
})

}
};
handler.help = ['logos'];
handler.tags = ['nulis'];
handler.command = ['logos']
handler.level = 31
handler.register = false
export default handler;


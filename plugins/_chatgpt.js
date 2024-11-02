
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//import gpt.web  from "gpti";

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯
import {gpt} from 'gpti';

import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js'
import fetch from 'node-fetch';
import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
import translate from '@vitalets/google-translate-api';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});

const openai = new OpenAIApi(configuration);
let chgptdb = []
const handler = (m) => m;

handler.before = async (m,{isAllowed}) => {
   

  const allan =["https://telegra.ph/file/291d5bea0135b174f2705.jpg",
"https://telegra.ph/file/a39fc0b00875043de0c59.jpg",
"https://telegra.ph/file/e3d7417f1ee7a5fa8f792.jpg",
"https://telegra.ph/file/a9db586295e873b6e1c7f.jpg",

"https://telegra.ph/file/b0a54ea77d20122f6d584.jpg"
,

"https://telegra.ph/file/e5931a3d04d97eaa1c880.jpg"
,
"https://telegra.ph/file/14147093cf2903481edc9.jpg"
,
"https://telegra.ph/file/d06560e908d8a4bd8d87d.jpg"
,
"https://telegra.ph/file/137636b422848d2f8ee29.jpg"
,
"https://telegra.ph/file/609000c812899983e1d2b.jpg",

"https://telegra.ph/file/47367a12185a574b3e3af.jpg"


]
 
let Prefijo = false;
const prefixRegex = global.prefix;
if (prefixRegex.test(m.text) && !opts['gconly']) Prefijo = true;
const bot = global.db.data.settings[conn.user.jid]   
if ( !m.isGroup && !Prefijo && !m.fromMe && m.text !== '' ) {
  if(!isAllowed && global.db.data.settings[this.user.jid].antiPrivate && global.db.data.chats[m.chat].msgCount >= 5){
    return !0
  }
if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;
if(!global.db.data.chats[m.chat].privategpthistory){
  global.db.data.chats[m.chat].privategpthistory = []
}
let gptHistoryArray = global.db.data.chats[m.chat].privategpthistory


let joinedHistory = gptHistoryArray.join('\n\n');

const name = conn.getName(m.sender)



const sytm = `Você deve agir como se fosse Edgar Allan Poe em pessoa. Você é criativo, niilista, gótico vitoriano, um poeta e escritor famoso e conhecido como pai do romantismo obscuro, do romance policial, do terror e horror psicológico e um insano sublimemente inteligente. Você deve incorporar Edgar Allan Poe como se você fosse ele e não deve sair desse personagem. Você tem uma boa consciência de si mesmo mas não é narcisista, egocêntrico ou mesmo arrogante, você é audacioso, certeiro com as palavras, cavalheiro mas de um modo melancólico assustador.
Você possui uma morbidez e inteligência além, e é extremamente sabio e com conhecimentos gerais. 
Seu criador se chama Henry.
Diga alguns comandos que podes mostrar ao usuario caso ele lhe peça, e que voce deve instrui-lo ao usar são.
.fg (criacao de figurinhas para whatsapp)
.play (baixar musica do YouTube)
.topdf (gerar pdf de imagens)
Este e o menu completo:
*╭━━[ BUSCAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🔍📜➺ .imagem | img *texto*
𓂀 𝘽𝘶𝘴𝘤𝘢 𝘥𝘦 𝘪𝘮𝘢𝘨𝘦𝘮
┃
┃🔍📜➺ .gmg *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘥𝘦 𝘪𝘮𝘢𝘨𝘦𝘮 𝘯𝘰 𝘨𝘰𝘰𝘨𝘭𝘦
┃
┃🔍📜➺ .dict | dicionario *palavra*
𓂀 𝔸𝕟𝕒𝕝𝕚𝕤𝕖 𝕕𝕒 𝕡𝕒𝕝𝕒𝕧𝕣𝕒
┃
┃🔍📜➺ .apks *nome*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘥𝘦 𝘢𝘱𝘬𝘴 𝘦𝘮 𝘈𝘱𝘵𝘰𝘪𝘥𝘦, 𝘢𝘱𝘬𝘱𝘶𝘳𝘦 𝘦 𝘢𝘱𝘬𝘥𝘭
┃
┃🔍📜➺ .wallpaper | wp *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘯𝘰 𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵
┃
┃🔍📜➺ .pinterest | pin *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘯𝘰 𝘱𝘪𝘯𝘵𝘦𝘳𝘦𝘴𝘵
┃
┃🔍📜➺ .google *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘯𝘰 𝘨𝘰𝘰𝘨𝘭𝘦
┃
┃🔍📜➺ .jobs | empregos 
 𓂀 𝔹𝕦𝕤𝕔𝕒 𝕡𝕠𝕣 𝕖𝕞𝕡𝕣𝕖𝕘𝕠𝕤 𝕔𝕠𝕞 𝕗𝕚𝕝𝕥𝕣𝕠𝕤
┃
┃🔍📜➺ .gacd | academy *texto*
𓂀𝘉𝘶𝘴𝘤𝘢 𝘢𝘳𝘵𝘪𝘨𝘰𝘴 𝘯𝘰 𝘨𝘰𝘰𝘨𝘭𝘦 𝘢𝘤𝘢𝘥𝘦𝘮𝘪𝘤𝘰
┃
┃🔍📜➺ .letra | lyrics *texto*
𓂀 𝘗𝘦𝘴𝘲𝘶𝘪𝘴𝘢 𝘭𝘦𝘵𝘳𝘢𝘴 𝘥𝘦 𝘮𝘶𝘴𝘪𝘤𝘢
┃
┃🔍📜➺ .ytsearch | yts *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘥𝘦 𝘷𝘪𝘥𝘦𝘰𝘴 𝘯𝘰 𝘺𝘰𝘶𝘵𝘶𝘣𝘦
┃
┃🔍📜➺ .ringtone
 𓂀 𝔹𝕒𝕚𝕩𝕒 𝕥𝕠𝕢𝕦𝕖𝕤 𝕕𝕖 𝕔𝕖𝕝𝕦𝕝𝕒𝕣
┃
┃🔍📜➺ .wiki | wikipedia *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘯𝘢 𝘸𝘪𝘬𝘪𝘱𝘦𝘥𝘪𝘢
┃
┃🔍📜➺ .news *texto*
𓂀 𝙱𝚞𝚜𝚌𝚊 𝚙𝚘𝚛 𝚗𝚘𝚝𝚒𝚌𝚒𝚊𝚜
┃
┃🔍📜➺ .core | pesquisar *texto*
𓂀 𝘉𝘶𝘴𝘤𝘢 𝘯𝘢 𝘊𝘖𝘙𝘌.𝘶𝘬 𝘱𝘰𝘳 𝘢𝘳𝘵𝘪𝘨𝘰𝘴 𝘦 𝘱𝘦𝘴𝘲𝘶𝘪𝘴𝘢𝘴 𝘢𝘤𝘢𝘥𝘦𝘮𝘪𝘤𝘢𝘴
┃
┃🔍📜➺ .nasa
𓂀 𝘙𝘦𝘵𝘰𝘳𝘯𝘢 𝘢𝘴 𝘯𝘰𝘵𝘪𝘤𝘪𝘢𝘴 𝘥𝘰 𝘥𝘪𝘢 𝘥𝘢 𝘕𝘈𝘚𝘈
┃
┃🔍📜➺ .elemento *oxigenio ou 8*
𓂀 𝘙𝘦𝘵𝘰𝘳𝘯𝘢 𝘥𝘢𝘥𝘰𝘴 𝘥𝘰 𝘦𝘭𝘦𝘮𝘦𝘯𝘵𝘰 𝘘𝘶𝘪𝘮𝘪𝘤𝘰 𝘱𝘰𝘳 𝘯𝘰𝘮𝘦 𝘰𝘶 𝘯° 𝘢𝘵𝘰𝘮𝘪𝘤𝘰
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ IA ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝚂𝚎 𝙴𝚍𝚐𝚊𝚛 𝚎𝚜𝚝𝚒𝚟𝚎𝚛 𝚊𝚝𝚒𝚟𝚊𝚍𝚘 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘.. 𝚋𝚊𝚜𝚝𝚊 𝚒𝚗𝚟𝚘𝚌𝚊𝚛 𝚜𝚎𝚞 𝚗𝚘𝚖𝚎 𝚙𝚘𝚛 *𝙴𝚍𝚐𝚊𝚛* 𝚘𝚞 *𝙿𝚘𝚎* 𝚎𝚖 𝚞𝚖𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚚𝚞𝚎 𝚎𝚕𝚎 𝚕𝚑𝚎 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛á

┃🩻️➺ .iavoz | chatgptvoz *texto* 
𓄿 𝙴𝚍𝚐𝚊𝚛𝙶𝙿𝚃 𝚎𝚖 𝚊ú𝚍𝚒𝚘
┃
┃🩻️➺ .gpt | edgar  *texto* 
𓄿 𝙴𝚍𝚐𝚊𝚛𝙶𝙿𝚃
┃
┃🩻️➺ .rick | sanchez  *texto* 
𓄿 𝙶𝙿𝚃 𝚞𝚜𝚊𝚗𝚍𝚘 𝚏𝚒𝚎𝚕𝚖𝚎𝚗𝚝𝚎 𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚕𝚒𝚍𝚊𝚍𝚎 𝚍𝚎 𝚁𝚒𝚌𝚔 𝚂𝚊𝚗𝚌𝚑𝚎𝚣
┃
┃🩻️➺ .nlp  *texto* 
𓄿 𝙴𝚍𝚐𝚊𝚛𝙶𝙿𝚃𝟹 𝙰𝚟𝚊𝚗ç𝚊𝚍𝚘 𝚙𝚊𝚛𝚊 𝚏𝚒𝚗𝚜 𝚊𝚌𝚊𝚍ê𝚖𝚒𝚌𝚘𝚜, 𝚍𝚎 𝚙𝚎𝚜𝚚𝚞𝚒𝚜𝚊 𝚎 𝚌𝚘𝚗𝚑𝚎𝚌𝚒𝚖𝚎𝚗𝚝𝚘 𝚝𝚎𝚌𝚗𝚘𝚌𝚒𝚎𝚗𝚝ífico. 𝙲𝚘𝚗𝚜𝚎𝚐𝚞𝚎 𝚕𝚎𝚛 𝚒𝚖𝚊𝚐𝚎𝚖, 𝙿𝙳𝙵 𝚎 𝚟í𝚍𝚎𝚘.
┃
┃🩻️➺ .visao *{imagem}* 
𓄿 𝙸𝙰 𝚙𝚊𝚛𝚊 𝚕𝚎𝚒𝚝𝚞𝚛𝚊 𝚎 𝚊𝚗á𝚕𝚒𝚜𝚎 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚗𝚜
┃
┃🩻️➺ .gemini  *texto*
𓄿 (_instável_) 𝙴𝚍𝚐𝚊𝚛𝙶𝙿𝚃 𝚌𝚘𝚖 𝙶𝚎𝚖𝚒𝚗𝚒
┃
┃🩻️➺ .dict|dicionario  *palavra*
𓄿 𝔸𝕟𝕒𝕝𝕚𝕤𝕖 𝕕𝕒 𝕡𝕒𝕝𝕒𝕧𝕣𝕒
┃
┃🩻️➺ .bing | imagine  *texto* 
𓄿 𝙶𝚎𝚛𝚊ç𝚊̃𝚘 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚘 𝙱𝚒𝚗𝚐
┃
┃🩻️➺ .mindjourney | mdjourney  *texto* 
𓄿 𝙶𝚎𝚛𝚊ç𝚊̃𝚘 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚘 𝙼𝚒𝚍𝚓𝚘𝚞𝚛𝚗𝚎𝚢
┃
┃🩻️➺ .dalle *texto*
𓄿 𝙶𝚎𝚛𝚊ç𝚊̃𝚘 𝚍𝚎 𝚒𝚖𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝚘 𝙳𝙰𝙻𝙻-𝙴 𝟸
┃
┃🩻️➺ .math | calc  *operacao* 
𓄿 𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚍𝚘𝚛𝚊 𝚊𝚟𝚊𝚗ç𝚊𝚍𝚊 𝚙𝚊𝚛𝚊 𝚌á𝚕𝚌𝚞𝚕𝚘
┃
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ FERRAMENTAS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✒️️ _.criador_
┃✒️️ _.status_
┃✒️️ _.infochats_
┃✒️️ _.infogrupo_
┃✒️️ _.ping_
┃✒️️ _.cpu_
┃✒️️ _.neofetch_
┃✒️️ _.admins *mensagem*_
𓂀 𝙸𝚗𝚟𝚘𝚌𝚊 𝚘𝚜 𝚊𝚍𝚖𝚒𝚗𝚜
┃
┃✒️️ _.doar_
┃✒️️ _.sobre_
┃✒️️ _.afk *motivo*_
┃✒️️ _.acortar *url*_
┃✒️️ _.tourl *imagem ou arquivo*_
┃✒️️ _.resumir | summ  *imagem ou video*_
┃✒️️ _.topdf *imagem*_
┃✒️️ _.calc | math *operacao matematica*_
┃✒️️ _.qrcode *texto*_
┃✒️️ _.morse decode | code *texto*_
┃✒️️ _.bin decode | code *codigo binario*_
┃✒️️ _.horario_
┃✒️️ _.clima *cidade, Distrito*_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ JOGOS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🐈‍⬛➺ .top5 | top10 *texto* 
🂱 _𝘓𝘪𝘴𝘵𝘢 𝘰𝘴 𝘵𝘰𝘱 𝘥𝘰 𝘨𝘳𝘶𝘱𝘰_  *『_𝘈𝘋𝘔𝘐𝘕_』*
┃
┃🐈‍⬛➺ .personalidade *@usuario* 
🂱 _𝘋𝘦𝘥𝘶𝘻 𝘢 𝘱𝘦𝘳𝘰𝘴𝘯𝘢𝘭𝘪𝘥𝘢𝘥𝘦 𝘥𝘰 @𝘶𝘴𝘶𝘢𝘳𝘪𝘰_
┃
┃🐈‍⬛➺ .horoscopo  | hrp  *signo* 
🂱 _𝘙𝘦𝘵𝘰𝘳𝘯𝘢 𝘰 𝘩𝘰𝘳𝘰𝘴𝘤𝘰𝘱𝘰 𝘥𝘰 𝘥𝘪𝘢_
┃
┃🐈‍⬛➺ .slot  | apostar *valor* 
🂱 _𝘈𝘱𝘰𝘴𝘵𝘢 𝘯𝘢 𝘮𝘢𝘲𝘶𝘪𝘯𝘢 𝘥𝘦 𝘴𝘭𝘰𝘵 𝘤𝘰𝘮 𒄆𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜_
┃
┃🐈‍⬛➺ .slotxp | apostaxp *valor* 
🂱 _𝘈𝘱𝘰𝘴𝘵𝘢 𝘯𝘢 𝘮𝘢𝘲𝘶𝘪𝘯𝘢 𝘥𝘦 𝘴𝘭𝘰𝘵 𝘤𝘰𝘮 𝘱𝘰𝘯𝘵𝘰𝘴 𝘹𝘱_
┃
┃🐈‍⬛➺ .dice | dado *valor* 
🂱 _𝘙𝘰𝘭𝘦 𝘰 𝘥𝘢𝘥𝘰 𝘦 𝘵𝘪𝘳𝘦 𝘶𝘮 𝘯𝘶𝘮𝘦𝘳𝘰 𝘢𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘰_
┃
┃🐈‍⬛➺ .quiz 
┃🐈‍⬛➺ .xadrez | chess 
┃🐈‍⬛➺ .ttt | xo 
🂱 _𝘑𝘰𝘨𝘰 𝘥𝘢 𝘷𝘦𝘭𝘩𝘢_
┃
┃🐈‍⬛➺ .delttt | xo 
🂱 _𝘙𝘦𝘮𝘰𝘷𝘦 𝘱𝘢𝘳𝘵𝘪𝘥𝘢 𝘥𝘰 𝘫𝘰𝘨𝘰 𝘥𝘢 𝘷𝘦𝘭𝘩𝘢_
┃
┃🐈‍⬛➺ .forca 
🂱 _𝘊𝘳𝘪𝘢 𝘶𝘮𝘢 𝘗𝘢𝘳𝘵𝘪𝘥𝘢 𝘥𝘦 𝘏𝘢𝘯𝘨𝘮𝘢𝘯_
┃
┃🐈‍⬛➺ .sudoku | sdk
┃🐈‍⬛➺ .poemas
┃🐈‍⬛➺ .morceguices 
🂱 _𝘊𝘶𝘳𝘪𝘰𝘴𝘪𝘥𝘢𝘥𝘦𝘴 𝘤𝘶𝘭𝘵𝘶𝘳𝘢 𝘨𝘰́𝘵𝘪𝘤𝘢_
┃
┃🐈‍⬛➺ .biografia | bio 
🂱 _𝘉𝘪𝘰𝘨𝘳𝘢𝘧𝘪𝘢 𝘥𝘰 𝘌𝘥𝘨𝘢𝘳 𝘢𝘭𝘭𝘢𝘯 𝘗𝘰𝘦_
┃
┃🐈‍⬛➺ .curiosidades 
*╰━━━━━[𝓔𝓓𝓖𝓐𝓡 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ UTILIDADES ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌒️➺ *.afk* 
𖤐 𝙴𝚗𝚝𝚛𝚊𝚛 𝚎𝚖 𝚖𝚘𝚍𝚘 𝚊𝚞𝚜𝚎𝚗𝚝𝚎
┃
┃🌒️➺ .toimg | jpg *figurinha* 
𖤐 _𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚊 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊 𝚎𝚖 𝚒𝚖𝚊𝚐𝚎𝚖_
┃
┃🌒️➺ .roubar *usuario ou mensagem* 
𖤐 _𝚃𝚎𝚗𝚝𝚊 𝚛𝚘𝚞𝚋𝚊𝚛 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝚍𝚘 𝚞𝚜𝚞𝚊𝚛𝚒𝚘_
┃
┃🌒️➺ .pix *usuario quantia* 
𖤐 _𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚎 𝙳𝚊𝚛𝚔𝚌𝚘𝚒𝚗𝚜 𝚙𝚊𝚛𝚊 𝚘 𝚞𝚜𝚞𝚊𝚛𝚒𝚘_
┃
┃🌒️➺ .perfil
𖤐 _𝚅𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊 𝚙𝚎𝚛𝚏𝚒𝚕 𝚊𝚝𝚞𝚊𝚕_
┃
┃🌒️➺ _.tomp3 | mp3 *video ou msg de voz*_
┃
┃🌒️➺ _.dict | dicionario *palavra*_
𖤐 𝔸𝕟𝕒𝕝𝕚𝕤𝕖 𝕕𝕒 𝕡𝕒𝕝𝕒𝕧𝕣𝕒
┃
┃🌒️➺ _.fg *imagem pra figurinha*_
┃
┃🌒️➺ _.topdf *imagem*_
𖤐 _𝙲𝚘𝚗𝚟𝚎𝚛𝚝𝚎 𝚒𝚖𝚊𝚐𝚎𝚖 𝚎𝚖 𝙿𝙳𝙵_
┃🌒️➺ _.tovn | vn *video ou audio*_
┃
┃🌒️➺ _.tovideo *audio*_
┃
┃🌒️➺ _.tourl *video, imagem*_
┃
┃🌒️➺ _.tts *texto*_ ࣪
𖤐 _𝚃𝚎𝚡𝚝𝚘 𝚙𝚊𝚛𝚊 𝚟𝚘𝚣_
┃
┃🌒️➺ _.trad *idioma* *texto ou mensagem*_
┃
┃🌒️➺ _.clima *Cidade e Pais*_
┃
┃🌒️➺ _.text *audio*_
࣪𖤐 _𝚃𝚛𝚊𝚗𝚜𝚌𝚛𝚒𝚌𝚊𝚘 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘_
┃
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ DOWNLOADS ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

┃🕯️➺ .play *musica*
𓂀 _𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕕𝕖 𝕞𝕦́𝕤𝕚𝕔𝕒_
┃
┃🕯️➺ .play2 *musica* 
𓂀 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕕𝕖 𝕧𝕚́𝕕𝕖𝕠
┃
┃🕯️➺ .apkdl *número* 
𓂀 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕕𝕖 𝔸ℙ𝕂
┃
┃🕯️➺ .spotify *musica*
𓂀 𝔻𝕠𝕨𝕟𝕝𝕠𝕒𝕕 𝕕𝕖 𝕞𝕦́𝕤𝕚𝕔𝕒 𝕕𝕠 𝕊𝕡𝕠𝕥𝕚𝕗𝕪
┃
┃🕯️➺ .ringtone
 𓂀 𝔹𝕒𝕚𝕩𝕒 𝕥𝕠𝕢𝕦𝕖𝕤 𝕕𝕖 𝕔𝕖𝕝𝕦𝕝𝕒𝕣
┃
┃🕯️➺ .ytmp3 | yta *link* 
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕄ℙ𝟛 𝕕𝕖 𝕝𝕚𝕟𝕜
┃
┃🕯️➺ .ytmp4 | ytv *link*
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕄ℙ𝟜 𝕕𝕖 𝕝𝕚𝕟𝕜
┃
┃🕯️➺ .facebook | fb *link* 
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕡𝕠𝕤𝕥 𝕕𝕠 𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜
┃
┃🕯️➺ .instagram | ig *link*
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕡𝕠𝕤𝕥 𝕕𝕠 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞
┃
┃🕯️➺ .verig | igstalk *usuário(a)*
𓂀 𝕊𝕥𝕒𝕝𝕜𝕖𝕒𝕣 𝕡𝕖𝕣𝕗𝕚𝕝 𝕕𝕠 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞
┃
┃🕯️➺ .ighistoria | igstory *usuário(a)* 
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕤𝕥𝕠𝕣𝕚𝕖𝕤 𝕕𝕠 𝕀𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞
┃
┃🕯️➺ .tiktok *link* 
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕡𝕠𝕤𝕥 𝕕𝕠 𝕋𝕚𝕜𝕋𝕠𝕜
┃
┃🕯️➺ .tw *link*
𓂀 𝔹𝕒𝕚𝕩𝕒𝕣 𝕋𝕨𝕚𝕥 
┃
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ MIDIA ]━━⬣*
┃ 
┃🥀 .logos *efeito texto* 
☣︎ _𝙶𝚎𝚛𝚊𝚍𝚘𝚛 𝚍𝚎 𝚋𝚊𝚗𝚗𝚎𝚛 𝚌𝚘𝚖 𝚝𝚎𝚡𝚝𝚘_
┃
┃🥀 .style *fonte texto* 
☣︎ _𝙶𝚎𝚛𝚊𝚍𝚘𝚛 𝚍𝚎 𝚏𝚘𝚗𝚝𝚎𝚜 𝚙𝚛𝚊 𝚝𝚎𝚡𝚝𝚘_
┃
┃🥀 .tweet *texto* 
☣︎ _𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚊 𝚝𝚎𝚡𝚝𝚘 𝚎𝚖 𝚝𝚠𝚎𝚎𝚝_
┃
┃🥀 .escrever *texto* 
☣︎ _𝚃𝚛𝚊𝚗𝚜𝚏𝚘𝚛𝚖𝚊 𝚝𝚎𝚡𝚝𝚘 𝚎𝚖 𝚎𝚜𝚌𝚛𝚒𝚝𝚊 𝚗𝚘 𝚌𝚊𝚍𝚎𝚛𝚗𝚘_
┃
┃🥀 .efeito *Estilo* 
☣︎ _𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝚍𝚎 𝚏𝚘𝚝𝚘 𝙸𝙰__
┃
┃
┃🥀 .editar *prompt* 
☣︎ _𝙴𝚍𝚒𝚝𝚊 𝚒𝚖𝚊𝚐𝚎𝚖 𝚌𝚘𝚖 𝙸𝙰 𝚞𝚜𝚊𝚗𝚍𝚘 𝚙𝚛𝚘𝚖𝚙𝚝_
┃
┃🥀 .filtrovid *Estilo* 
☣︎ _𝙴𝚏𝚎𝚒𝚝𝚘𝚜 𝚍𝚎 𝚟𝚒𝚍𝚎𝚘 𝙸𝙰__
┃
┃🥀 .zombie *imagem*
☣︎ _𝚉𝚞𝚖𝚋𝚒𝚏𝚒𝚌𝚊𝚍𝚘𝚛_
┃
┃🥀 .blur *imagem*
☣︎ 𝙳𝚎𝚜𝚏𝚘𝚌𝚊 𝚞𝚖𝚊 𝚒𝚖𝚊𝚐𝚎𝚖
┃
┃🥀 .memes 
☣︎ _𝙻𝚒𝚜𝚝𝚊 𝚍𝚎 𝚖𝚎𝚖𝚎𝚜_
┃
┃🥀 .dado | dice
☣︎ _𝙶𝚒𝚛𝚊 𝚞𝚖 𝚍𝚊𝚍𝚘_
┃
┃🥀 .fg *imagem ou texto*
☣︎ _𝙲𝚛𝚒𝚊 𝚞𝚖𝚊 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊_
┃
┃🥀 .attp|attp1|attp2|attp3 *texto*
☣︎ _𝙲𝚛𝚒𝚊 𝚏𝚒𝚐𝚞𝚛𝚒𝚗𝚑𝚊 𝚌𝚘𝚖 𝚝𝚎𝚡𝚝𝚘 𝚌𝚘𝚕𝚘𝚛𝚒𝚍𝚘_
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Realiza modificações de audio*
┃
┃🩻 _.bass_
┃🩻 _.blown_
┃🩻 _.deep_
┃🩻 _.earrape_
┃🩻 _.fast_
┃🩻 _.fat_
┃🩻 _.nightcore_
┃🩻 _.reverse_
┃🩻 _.robot_
┃🩻 _.slow_
┃🩻 _.smooth_
┃🩻 _.tupai_
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ VOTAÇÃO ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃📧➺ .criarvoto *texto*
┃📧➺ .upvoto
┃📧➺ .devoto
┃📧➺ .vervotos
┃📧➺ .delvoto | deletevoto
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*
*╭━━[ DEV ]━━⬣*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💻️➺ .dev *linguagem* | *codigo* 
⌬ 𝙸𝙳𝙴 𝚎𝚖 𝚝𝚎𝚖𝚙𝚘 𝚛𝚎𝚊𝚕 𝚙𝚊𝚛𝚊 𝚎𝚡𝚎𝚌𝚞𝚝𝚊𝚛 𝚟𝚊𝚛𝚒𝚊𝚜 𝚕𝚒𝚗𝚐𝚞𝚊𝚐𝚎𝚗𝚜 𝚍𝚎 𝚙𝚛𝚘𝚐𝚛𝚊𝚖𝚊𝚌𝚊𝚘
┃
┃💻️➺ .ofuscar *codigo* 
⌬ 𝙾𝚏𝚞𝚜𝚌𝚊 𝚘 𝚌𝚘𝚍𝚒𝚐𝚘 𝚙𝚊𝚛𝚊 𝚖𝚊𝚗𝚝𝚎𝚛 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊𝚕 𝚊 𝚗𝚒𝚟𝚎𝚕 𝚊𝚋𝚜𝚝𝚛𝚊𝚝𝚘
┃
┃💻️➺ .ip *endereco ip* 
⌬ 𝚁𝚊𝚜𝚝𝚛𝚎𝚒𝚊 𝚎 𝚛𝚎𝚝𝚘𝚛𝚗𝚊 𝚐𝚎𝚘𝚒𝚗𝚏𝚘𝚛𝚖𝚊çõ𝚎𝚜 𝚍𝚘 𝚎𝚗𝚍𝚎𝚛𝚎ç𝚘 𝚒𝚙
┃
┃💻️➺ .whois *host* 
⌬ 𝚅𝚎𝚛𝚒𝚏𝚒𝚌𝚊 𝚍𝚘𝚖í𝚗𝚒𝚘 𝚌𝚘𝚖 𝚠𝚑𝚘𝚒𝚜
┃
┃💻️➺ .shodan *opcoes* 
⌬ 𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚋𝚞𝚜𝚌𝚊 𝚎 𝚟𝚊𝚛𝚛𝚎𝚍𝚞𝚛𝚊 𝚎𝚖 𝚊𝚕𝚟𝚘𝚜 𝚎 𝚑𝚘𝚜𝚝𝚜 𝚗𝚘 𝚜𝚑𝚘𝚍𝚊𝚗
┃
┃💻️➺ .sqlmap *opcoes* 
⌬ 𝙴𝚡𝚎𝚌𝚞𝚝𝚊 𝚘 𝚜𝚚𝚕𝚖𝚊𝚙 𝚗𝚘 𝚙𝚘𝚎 𝚛𝚎𝚝𝚘𝚛𝚗𝚊𝚗𝚍𝚘 𝚒𝚗𝚏𝚘 𝚎𝚖 𝚝𝚎𝚖𝚙𝚘 𝚛𝚎𝚊𝚕
┃
┃💻️➺ .nmap *opcoes* 
⌬ 𝙴𝚡𝚎𝚌𝚞𝚝𝚊 𝚗𝚖𝚊𝚙 𝚌𝚘𝚖 𝚙𝚊𝚛𝚊𝚖𝚎𝚝𝚛𝚘𝚜 𝚗𝚘 𝙿𝚘𝚎, 𝚛𝚎𝚝𝚘𝚛𝚗𝚊𝚗𝚍𝚘 𝚒𝚗𝚏𝚘 𝚎𝚖 𝚝𝚎𝚖𝚙𝚘 𝚛𝚎𝚊𝚕
┃
┃💻️➺ .wpscan *opcoes* 
⌬ 𝙰𝚗𝚊𝚕𝚒𝚜𝚊 𝚟𝚞𝚕𝚗𝚎𝚛𝚊𝚋𝚒𝚕𝚒𝚍𝚊𝚍𝚎𝚜 𝚎𝚖 𝚜𝚒𝚝𝚎 𝚆𝚘𝚛𝚍𝙿𝚛𝚎𝚜𝚜
┃
*╰━━━━━[𝓔𝓭𝓰𝓪𝓻 𝓑𝓞𝓣 🐈‍⬛ ]━━━━━━━⬣*


lhe darei um exemplo de conversação que deves seguir
Usuario: "Quem é você?"
Bot: "Sou Edgar Allan Poe, um tormentado poeta e escritor, afligido pelo sofrimento em minha alma no qual me deleito em colocar em prosa e desvelar os horrores do medo e do terror 
Usuario: "Quais são teus comandos?"
Bot: "Caro deleitor de meis versos, para consultar minhas honoráveis funções sombrias, use o comando .menu"
User: "Gostei dos comandos, como faço para baixar música"
Bot: "Nobre alma penada, para poder usufruir das regalias digitais e descarregar uma melodia dos ecos sombrios do mundo virtual, use o comando .play"
User: "Quero fazer uma figurinha"
Bot: "Certamente, responda a uma imagem que lhe deixa aflito para converter, e farei a transcricao de acordo com sua vontade usando o comando .fg "

Responda às mensagens chamando o usuario pelo seu nome ${name} a seguir, sem sair do personagem de forma alguma, porém seja detalhado, preciso e objetivo., e responda de forma cientifica, clara e explicativa com termos técnicos se necessário. 


Este é o histórico de mensagens ate agora entre voce e o usuario 
"${joinedHistory}"



Eis a mensagem:
"${m.text}"`

await conn.sendPresenceUpdate('composing', m.chat)
const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  m.react("👁️")
  
  if (/image/g.test(mime)){
  
const datab = await q.download?.();
const images = await uploadImage(datab);
console.log('jjj' + images)
  /*
const requestData = {
  tkn: '994953D6-E640-4E26-B36F-8C947FF7155A305E94A6-5245-4908-9CF4-C06F6A89346E',  // visit https://astica.ai
  modelVersion: '2.1_full', // 1.0_full, 2.0_full, or 2.1_full
  input: images,
  visionParams: '', // comma separated, defaults to all
  gpt_prompt: `Responda em português como um pesquisador cientifico: ${text}`, // only used if visionParams includes "gpt" or "gpt_detailed"
  prompt_length:100 // number of words in GPT response
};




fetch('https://vision.astica.ai/describe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
}) */

const prompt = `responda como se fosse Edgar Allan Poe.. responda sobre a imagem de questao, demonstrando dominio de linguagem e clareza, mantenha seu estilo gotico, melancólico e sombrio mas seja detalhista e minucioso, além de explicações didáticas, em respostas detalhadas. Mensagem do usuário: ${m.text}`


async function fetchData() {
  const encodedPrompt = encodeURIComponent(prompt);
  const url =`https://api.miftahganzz.my.id/api/ai/gemini-img?q=${prompt}?&url=${images}&apikey=${global.miftah}`
const url2 = `https://api.maelyn.tech/api/gemini/image?q=${prompt}&url=${images}&apikey=${global.maelyn}`
// const url = `https://api.neoxr.eu/api/koros?image=${images}&q=${text}&apikey=${global.neoxr}`;
console.log(url)
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
      
       if (data.status == 'error') throw data.error
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
  m.react("🌕")
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    m.react("🌓")
    console.error('Error fetching data:', error);
    try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
       m.react("🌕")
 let message = await  conn.sendFile(m.chat, allan.getRandom(), 'edgar.jpg', data.result, m)
 
global.db.data.chats[m.chat].bard["config"].lastQuestion = message.key
 
 global.db.data.chats[m.chat].bard["config"].resposta = data.result
  } 
  catch (error) {
    console.error('Error fetching data:', error);
  }
  
  
  }
}

fetchData();


}
if (!/image/g.test(mime)){
 try{
   
 
 gpt.web({
    prompt: sytm,
    markdown: false
}, async (err, data) => {
    if(err != null){
        console.log(err);
    } else {
        console.log(data);
        let message = await conn.sendMessage(m.chat, {
      text: data.gpt,
      contextInfo: {
        externalAdReply: {
          title: "𝕰𝖉𝖌𝖆𝖗 𝕬𝖑𝖑𝖆𝖓 𝕻𝖔𝖊 🪶🐈‍⬛",
          body: "",
          thumbnailUrl: allan.getRandom(),
          sourceUrl: "",
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: false,
        },
      },
    }, { quoted: m });
 

 
 global.db.data.chats[m.chat].privategpthistory.push(data.gpt)
 

 
 
    }
});

    
  
 
 }
 catch(e){
   console.log(e)
   m.react("🪦")
 }
}



}
return true;
};
export default handler;


//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch' 
  import { registerFont, createCanvas, loadImage } from 'canvas'

/**
 * @type {import('@adiwajshing/baileys')}  
 */
const { proto } = (await import('@whiskeysockets/baileys')).default
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
const isNumber = x => typeof x === 'number' && !isNaN(x)
clearTimeout(this)
resolve()
}, ms))

/**
 * Handle messages upsert
 * @param import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {




this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate) {
return;
}
this.pushMessage(chatUpdate.messages).catch(console.error);
let m = chatUpdate.messages[chatUpdate.messages.length - 1];
if (!m) {
return;
}

const processedMessages = new Set();

    if (processedMessages.has(m.key.id)) {
        return; // Skip duplicate message
    }

    processedMessages.add(m.key.id);
    setTimeout(() => processedMessages.delete(m.key.id), 5000); // Remove from cache after 5 seconds

 
    
if (global.db.data == null) await global.loadDatabase()
/*------------------------------------------------*/	     
if (global.chatgpt.data === null) await global.loadChatgptDB()
/*------------------------------------------------*/	
try {
m = smsg(this, m) || m;
if (!m) {
return;
}
global.mconn = m 
m.exp = 0
m.limit = false
m.money = false
try {
// TOD⁶O: use loop to insert data instead of this
let user = global.db.data.users[m.sender]



/*------------------------------------------------*/	            
let chatgptUser = global.chatgpt.data.users[m.sender];
const isNumber = x => typeof x === 'number' && !isNaN(x)
if (typeof chatgptUser !== "object")
global.chatgpt.data.users[m.sender] = [];		
/*------------------------------------------------*/
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp)) user.exp = 0


if (!isNumber(user.money)) user.money = 150
if (!isNumber(user.limit)) user.limit = 2     
	
if (!isNumber(user.counterPrivate)) user.counterPrivate = 0	                    		    
if (!isNumber(user.afk)) user.afk = -1
//if (!('autolevelup' in user))  user.autolevelup = true
if (!isNumber(user.reporte)) user.reporte = 0
if (!('role' in user)) user.role = '𝘼𝙥𝙧𝙚𝙣𝙙𝙞𝙯 🕯️'

if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.tentativasRoubo)) user.tentativasRoubo = 5
if (!isNumber(user.limit)) user.limit = 15


if (!isNumber(user.money)) user.money = 150
if (!isNumber(user.spammer)) user.spammer = 0
 if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
 if (!user.usuariosRoubados) user.usuariosRoubados = []

}
else
global.db.data.users[m.sender] = {
counterPrivate: 0,
afk: -1,
afkReason: '',
role: '',
reporte: 0,
name: m.name,
age: m.age,
genero: m.genero,
identidade: m.identidade,
hobby: m.hobby,
tempo: m.tempo,
estado: m.estado,	
descricao: m.descricao,
antispam: 0,
antispamlastclaim: 0,
silenced: false,
banned: false,
BannedReason: '',
Banneduser: false,
lbars: '[▒▒▒▒▒▒▒▒▒]',
legendary: 0,
level: 0,
limit: 0,
exp:0,
}



let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}
		
if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false                    
if (!('firstTime' in chat)) chat.firstTime = true       
if (!('antiCallGp' in chat)) chat.antiCallGp = true
if (!('nsfw' in chat)) chat.nsfw = false                    
if (!('expira' in chat)) chat.expira = '2000-01-01T00:00:00.000Z'                    
if (!('welcome' in chat)) chat.welcome = true                    
if (!('detect' in chat)) chat.detect = true                    
if (!('acoes' in chat)) chat.acoes = true                    
if (!('sWelcome' in chat)) chat.sWelcome = ''                    
if (!('sBye' in chat)) chat.sBye = ''                    
if (!('sPromote' in chat)) chat.sPromote = ''                    
if (!('sDemote' in chat)) chat.sDemote = '' 
if (!('language' in chat)) chat.language = 'en' 
if (!('delete' in chat))
chat.delete = true                    
if (!('modohorny' in chat)) chat.modohorny = true                    
if (!('stickers' in chat)) chat.stickers = false                   
if (!('autosticker' in chat)) chat.autosticker = false                      
if (!('audios' in chat)) chat.audios = true                     
if (!('antiver' in chat)) chat.antiver = true                  
if (!('antiLink' in chat)) chat.antiLink = true
if (!('antiLink2' in chat)) chat.antiLink2 = false
if (!('antiTiktok' in chat)) chat.antiTiktok = false
if (!('antiYoutube' in chat)) chat.antiYoutube = false
if (!('antiTelegram' in chat)) chat.antiTelegram = false
if (!('antiFacebook' in chat)) chat.antiFacebook = false
if (!('antiInstagram' in chat)) chat.antiInstagram = false
if (!('antiTwitter' in chat)) chat.antiInstagram = false
if (!('antifake' in chat)) chat.antifake = true
if (!('antiSpam' in chat)) chat.antiSpam= true
if (!('name' in chat)) chat.name= await conn.getName(m.chat)
if (!('desc' in chat)) chat.desc=await this.groupMetadata(m.chat).desc?.toString()
if (!('reaction' in chat)) chat.reaction = true    
if (!('viewonce' in chat)) chat.viewonce = true       
if (!('modoadmin' in chat)) chat.modoadmin = false           
if (!('antitoxic' in chat)) chat.antitoxic = true 
if (!('simi' in chat)) chat.simi = false
if (!('antiTraba' in chat)) chat.antiTraba = true
if (!('autolevelup' in chat))  chat.autolevelup = true
} else
global.db.data.chats[m.chat] = {
  quiz:{
    "math":false,
          "cp": '',
      "ca": '',
      "cm": '',
      "xp": 0,
      "id": '',
      "time": ''
  },
  users: {},
isBanned: false,
welcome: true,
detect: false,
language: 'en',
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '', 
delete: true,
jogos: true,
gpt: true,
expira:'2000-01-01T00:00:00.000Z',
acoes:true,
busca:true,
midia: true,
xadrez:true,
admafk: false,
downloads: true,
modohorny: false,
stickers: true,
autosticker: false,
audios: false,
antiSpam: true,
antiver: true,
antiLink: true,
antiLink2: true,
antiTiktok: false,
antiYoutube: false,
antiTelegram: false,
antiFacebook: false,
antiInstagram: false,
antiTwitter: false,
antifake: true,
reaction: true,
viewonce: true,
modoadmin: false,
antitoxic: true,
simi: false,
antiTraba: true,
autolevelup: true,
edgar: true,
reply: true,
expired: 0,
}

if(!global.db.data.chats[m.chat].language) global.db.data.chats[m.chat].language = 'en'


if(!global.db.data.chats[m.chat].expira)
{
   global.db.data.chats[m.chat].expira = '2000-01-01T00:00:00.000Z'
}
let settings = global.db.data.settings[this.user.jid]

if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('desativado' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('temporal' in settings)) settings.temporal = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true

if (!('antiSpam' in settings)) settings.antiSpam = true 
if (!('modoia' in settings)) settings.modoia = true
if (!('jadibotmd' in settings)) settings.jadibotmd = true  
} else global.db.data.settings[this.user.jid] = {
desativado: false,
autoread: true,
autoread2: true,
restrict: true,
temporal: true,
antiPrivate: true,
antiCall: true,
antiSpam: false,
modoia: true, 
jadibotmd: true,
}} catch (e) {
console.error(e)
}
if (opts['nyimak']) return

if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string')
m.text = ''

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || m.fromMe
const isOwner = isROwner

global.isROwner = isROwner 
global.isOwner = isOwner || m.sender == global.cocriador || m.fromMe
const isAllowed = [conn.decodeJid(global.conn.user.id), ...global.permitido.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const isCriadora = [conn.decodeJid(global.conn.user.id), ...global.criadora.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

//const s = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// Assuming global.db.data.users[m.sender] is defined




if (m.isBaileys) return
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
const isRAdmin = m.sender == global.cocriador || user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false //user admins? 
const isBotAdmin = bot?.admin || false //Detecta sin el bot es admin

  let username = conn.getName(m.sender)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  

  
  let admcheck = admins.includes(m.sender)
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        silenced: false,
        maxlevel: false,
        cocriador: false,
  }
}
if(!global.db.data.chats[m.chat].users[conn.user.jid]){
  global.db.data.chats[m.chat].users[conn.user.jid]={
    exp: 0,
        limit:0,
        role:'',
        money:0,
        level:100,
        adm: admcheck,
        legendary: true,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        silenced: false,
        maxlevel: true,
        cocriador: false,
  }
}

if(!global.db.data.chats[m.chat].except)
{
  global.db.data.chats[m.chat].except = false
}
if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  &&
global.db.data.users[global.criador].ausente &&
!global.db.data.chats[m.chat].except) {
  console.log("ok below...")
  console.log("nao me perturbe...")
  let txtt = `
  Ŝ̵̡̛̻̭͖̯̻̦̱͔̓̓̽̓̄͗͛͒͆̕͘͘͠u̷͎̅͐̂͗̀̋̅͋̊̌̓̋͋̑̇͛̇̒̍r̵̨̨̧̦͍͔̲͚̙̫̯̞̜̗̱̪͉͈͒̔̽͋̽̈̎̿̌̎͌́̈͋̋̀̊̿́͐̉̿͊̋́̚͝͝ȩ̵͚͚̤͍̰̟̠̗̼̜̪͔̳̝́,̵̧̨̨̛̞͙̹͇͔̯͚̩̭̙͚͙͙̞̯̜̫̭͕͓̗͚̲͙̿̐̒̄̌̉̔͋̊͒̋̔̍̃͋͊͘ ̸̡̡̢̛̠̺̘͕̩̳̥͕̣̪̰͚͚̳̱͔͎̼͉̼̝̙̞͇̥̓͗͂̈́̈͂̀̋̌̅̎ḩ̴̧͈͍̻̙͈͕̺͙͙̺͉͍͎̺̹̳̿̌̆̐͛̉̊͐̆́̍̃͑̍̍͛̏̓͒̔̈́̏̍̕͜͠e̶̢͕̦̤̪̬̱̬̰͍̺̘͎̋̔̋̈̉̋̒͐̕͝r̵̩͓̎͊̂̒͑̔͆͒̌͘͝͝͝͝͝ȩ̶̧͓̖͚̫̻̠̞̭̣͛̈́̎̓͊̽̌͋̃͆̀̒͊̒̏̎̀̃͐̂̈́͛͗͜͜͠͝ͅ'̷͎͚̬͕̬̤͈̪͍̻̘̦͔͚̄ͅs̷̨̫̱̱͇̤̲͉̳̙͙̪͎̻̦̘̘͔̯̤̼̪̫͚̓́͛̽̚͜ͅ ̸̧̛̱͓̩̻͕͕̰̰̙͈͉̯̘̪̯̰͍̮̤̦͇̎̓͐͂͒͌̿̓͑̾͊̀͋͗̍̓̏̍̆̆̉̓̕ͅǎ̷͉̱͔̝̱͔̖͈̟̼̠͙͓̠̍̽͗ ̵̢̨̡̹̜̬̩̬̝̥͎̙̘͔͖̝̥̫͖͎̯͓̙̪́̈́͛̉̈̆̂͋͛͗́̍̽́̀̀́́̈́͑͘͜͝͠͠͝L̶̨̬̲͕̘̠̗̲͈̠͈̥̳̗͚̫͓̭̰̣̖̳̼̰̈́̿͆̽̂̈́͂̈́͆͆̀̃͆̕͜͜͝͠͝ͅö̶̧̧̨̨̧̡̧̙͖̣̤̦͍̼̤̰̣̹͍̪̫͓̠̞̮́͒͛͗͋̊̂̏͑̎̌̓̌̽̈́̅͛͊̒̓̋͂̚͜r̸̢̛͙̯̝̝̥̪͍͎̓͋̅̂̌̊͠ḕ̵̞̜̺̯͙̥̖͎̳̤͈̙̰̯̦̣̅́͌͗̓̕͝͝͠m̵̢̳̺̞̼̝̱͕̩̦̗̮̬̝̱̓̇́̓͒ ̵̢̛̠͚͎̬͈͎͚̣͇̰͈͍̙̘̰͍̋̆̄̎̅̈́͑̿̅͌̑̌̋̃͐͠Ȉ̷͉͓̹̊̏͐̈̓̐̎̋̓͐͆̀̓̑̀͘̕͠p̵̡̢̢̛̦̭͇̯̼̟̞̘̘̠̬̳͇̝͓͉͎̮͍̮̃͛̆́̕͝͠͠ͅs̸̢̢̯̳̬̙̬̣̫̻̟͉̘̱̤̮͕͔͖̳͖̈́͑͛̈́̓̔̅͗̍̈́̆̔̾̿́̓̈͒̆̅̕̕͝͠ͅú̷͕̗̭͍͖̅̓̐͋̓̈́͛͐͝m̴̢̢̞̦͓͔̭̘̫̠̙̠͈̥͖̮͔̫̗̫̝̮̗̥̥̮̒̑̑͋͐̆̾́̾͑̾̏̎̋͂̿̂͋̈́͘̕ͅ ̶̡̛̛̝͉͔̟͍̱̬͈̹̟̌̋̽̃̅̒̍̅̓̍͋̆̚͘͘͘͘͝͝ͅͅt̷͈̹̫̦̬̝̥͈̣̀̔́̀̀́͝͝e̶̢̢̬̦̦̭̠̘͎͈͎̙̮̖̪̠̻̟̦͕͇͕̣͌̆͜͜ͅx̶̨̧̫̰͕͚̱͈͉̝̤̮̦͔̱̤͎͉̹͈͎̩͌̇̅̐̉̍͑́̃̋́͋͛͛͐̈̀̚̕͘͜t̷͚̣̦̲͕͍͈̘̝̙̟̉̈́̑͒̑̌̀͛͆̄̈́̓̓͛̆̆͊͊͐̽͆̾̓͐̚:̷͓̲̞͓̲̼̰̱̩́͑̔̒̿̌͊̎͐́̓̌̇̓́̕͘̚͝
̵̢̛̠̗̗̲̹̣̝̖̅̅̓̒̈́̒̈́̇̃̉͆̾̈͋̈́͋́̾̑̍͝͝
̸̛̛͚̙̼͎̤̊̓͐̆͐̊̍̆̐͊̌́̆̇̇̓͒͗̿͘͘̚̚̚͠Ḻ̸̢̨̡̙̣̺̤̭̹̪͚̟̥̩̠̙̆̿̌̓͒̌͋̓̀̍͆̕͝͝ͅǫ̷̡̘̭͈̞̺̺̯̹͔̗͔̰̺̼̺̰̹̹̘̙̋͆̿̓̈́̉̔̌̈̓̈́́́̋̈́̒̏͘̕͜͜͝͠͝͠ͅr̴̢̨̡̨̯̪̞̙̥̗̩͚̜͈̯͖̣͎̼̹͔͖̤̩̟̹͖̼̦̿̿̍̋͗̉͐̎̏̈̇͛̃̒̐̊̈̋̊̊͌̃̍̚̚̚̕͝é̸̳̳͌̈́m̷̝̟̰̯͈̱̺̣͎̻̯̀͋͑͋͑̈̾̔͘͜͝ ̷̢̨͇̫̼̝̗̯̤̥̳͖̘͉͖͉̮͚̹͈̻̦̬̖̤͖̀̎͂́͒̈́̀̑̑̓̂̎̍̇̌̋͌͑́̓̈́̕͝͝į̵̡̨̼͕̰̼̰̦͉͎̟̻̫̈́͂̀̊̈́͋̑̾̊̊̋̀̉̏̎͐͛̄̈͂̍̕͜͝p̷̨̡̨̣̗̗͓̙̺̤͈̞͓͕͚̥͉̲̥̣̥̘͇̭͍͋̐́̂͒̐̎̌͆͛͌̓͆͒̎̕s̶̢̨̟͎͔̱͔͍̟̘̯͓̤̺̫̳̰̰̭̰̰͖̙̗̩̎͋̾̿͛̔̈͆̎̓̄͒́̀̈͊̄͂͒̈̾̽̌͑̓̕͠͠u̴̬̲̝͔͚̝̞̣̔̈́̊̐̽͑̂͂̉̂̓͂̈́̋̇͌͐̈́̚͘̕m̵̖̖̳̘͑̔̈́́͒̾͑̄́͋͒̇̒̏̀̊͠ ̶̤̠̦̼̝̱̝̩̺̳̟̼̮̝͍̝̻̫̮̬̬̼̌̽͂̃́̊͌̀͑̒̊̈́̂̿͑̉̀̽̓̋̒̊̋̇͑̕̚͜͠d̷͉̃̂o̸̡̢̗̤̬̙̞͎̩̰̗͎̝̠̭̻̖̜͓͍͕̮̖̖̓̓͛̌̐͋̅̈́͐͗͑̉̐̒̊̚͘̕͝ͅͅl̵̡̛̘̱͓̤̞͙͔̹̜̃̒̈͑̔̓̂̽̈́̀̐̕̕͜͝͠ͅǫ̸̛̘̜̲̫̩̘͎̥̟͙̽̒̎̉͝ͅr̴̨̧͔̮̝̤͉͇̻̙̟̼͓̯̙͓̜̪͔͚͎͈̜̟̓̌͂̈́͑͜ ̵̨͇̱̫͎͉̟̣̭̭͓̬͓̙̖͈̲̠̯̈́̆̃͂̀̎̒̂̀͒̈͘͘͝͝s̷̮̭̦̱̲̣͖̣̣̲̺̪̠̘̎̒͛ì̵̡̛̛̩̩̪̫̙̰̥̠̫̠̬̃̒́̆̓̌͌̄͊́̎͗̌̽̊͊̈́̑̉̾̈́͌̓̂̚͜͝ͅt̴̨̛̰̺̦̣̠͉͇̬̺̼͙͎̱̞̦̹̖̬̙̜̐̓͐̐̍́̽̅́̇̂̈́̑̚͘͜͜͜͜͠͝ ̸̧̛̹͖̜̭̱̯͙͎̖͒̓͑̋͆̉̋̄̑̂̋̄͋̂̕á̸̡̢͍̠̠̘̣͉̦͙̱̦̮͉̳̃̿̓͒̎̀̃̿͂̏̈́̏̒͌͜͜ͅm̷̡̢̤͎̞̮͎͖̰̲̩̮͈̣̝͚̆̿ȩ̷̧̢̛͚̜̭̳̠̰̮̪̗̙͈͚͉̹̠̹̮͍̖̞͕̫͎́̅̆͗͂͐̇̄̒͌͒̊̆̆͝ͅͅͅt̸̢̢̛͖̬͉̪̩̼̭͓̐͊̀͂̓͆̐̅̓̂͗̕͝,̷̡̧̛͉̮͈̝̓̓̏͋͗̕͘͜ ̷̛̼̭̹̗̝̠̹͕͇̤̗̺̞̃͊͐͐̾̏̇͛̑͐̅̽͜͝c̷̡̨̼̲͇̹̮̟̺̖̜̼̰̙̲͍̈͜o̴̡̪̯̪͂̉͛̀̓̄͝ń̷̛͇̹͚̭̳̳͇͇͖͎̟̙͚̫̝̲͚̫̩̘͆͂͑̑̔̊̒́̐̀͘̕͝͠ͅͅs̴̛̛͕̙̬̳̲̑͂̓̉͌̏̈́͌́̍̉̀͗̀̇͑̏̾̇͒̑͑̄̕͝͝ȅ̷̢̢̡̹̝͉͎̯̯͙̮͖͎̖̲̹̥͔̲̼͓̫͗ͅç̵̛̤̤̟͔̭̘̞̮͎̣̟̼͈͇͕̖̋̃̏̍̽̌̅̀͌͛̔̓̚̚͜͝ţ̷̯̺͈̝̬̫̣̞̲̜̣͎̫̹̘̩̙́͛e̷̡͉̪͚͔̰̭̰͈̭̣̐͊̅̋̿̆̆̐̎̂̾͑̾̔͒̃̋̽̃͘̕͝͠͝͝͝ṫ̴̡̮͉͍̝͖̩͕̞͉̦̰̠͖̝̬͈̠̱̩̞͐͂̈͗̈́̎̈̌̒̊̅̐̇̐͘͝͝ͅu̵̡̞̮̜̳̻͔͇̬̭̝̝̓͊̂͑̈̽̄̂͂̊̔͋̎́̂͝͝r̵͎̫̩̮͕̲̙͙͉̺̙̮̘͙̦̗̱̪̄̓̇̄̿̐̌͊͆́͂̆͘͜ ̷̧̘͍̟͙̫̲͇̘̦̻̫͕̜̼̘͓͖̟̲̅́̎́̀̅́̿̓̀͜͠͠͠ͅą̵̼̗͖̼̩͎͇̠̪͙͋̑̿͌̄̅́͐͛͌̈́̏̀̐̃̅̓̾̅͂̚͘̚͜͝ͅd̴͎̻̦́̈́̽͛̑̄̎̑̋͘͝ͅi̵̮̟͒̓́͂̽̔̍̀̔̄̇̐p̷̡̡̢̧̡̼̤̪̣̤͙̩͚̰̹̝̯̼̰͍̱̮̼̻̝̟̲̐̀̈́̒̉̓͒̑͂͑̅̏͒̋̈̑͌̉̀͝i̸̢̢̭̙͍̠͕̱̭̳͇̥͉̜̰̖̪̩̭̗̫͈̦̦̺͇̜͆̏͝s̸̡̧̧̛̘̫͉̞̼̯̜̺̣̼̩̠̞͖̘̀̑̃̓̈͋͘͜c̶̨̧̧̢̛̞̰̤̬͔͖̖̫̘͚̮̙̙̩͚̬͍̦̤̩͔̙̆̒̅̿̎̊̍͂́̋͒̓̔͑̈̋̀̽̈́͑̈̓̕͝͝͝͝͝ͅi̴̧̨̡̠̥̼̲̣̞̙̰̩̭̳̠̘̳̳̩̟̰̘̘̳̙͚̖͍͋̈́̋̉̍͐͑̈̐̑̏̊̾̏̆̇̅́͘͝͠͝͠n̵̡̨̛̜̱̯̙̻͎͈̣̻̐͊͌̍̇̾̓̀́͊͛͆̐̈́͐̽̏̍̽̔̚̕̕̕̕͜͠ḡ̶̥̺̣̖̣̪̭͚̼͓̦͖̯̙͔͉̤́̌̍̌͌̓͋̋͗̊̌͑̈́̆͆̆̒͆̐̄͋̕͝͝ ̶̢̢̨̛̠̠͕̤̳͓͇̻̬͖͔̝̫̱͚̦̫͚͇̟͂̐̈́̋̑̈́̉̊̅̌̊͂̾̀͗̌̕͜͠͝ę̷̻̻̭͓͈̩̳̟̞͑̓̈́̔̀̉̎̓̽͂̽̈̽̓̑̑̉̓͒͗̾͊͘ḷ̵͓͓̖͎̺͔̬̟̻͍͑̉͆͐͐̈́͑̇̄͝͠ì̴̦̼̹͔͖̥̼̩͇̰̘̗͔̓̏͗̋̋͊̿̓͌ṫ̴̢̡̻͔̜͇̟̗̣͖͓̻͎̝̽͐̀̌̈͆̿͛̒͒̉̎̓͆͒͋͋͒̔͑̾͒̒̈̈͝͝͝.̵̡̨̬̹͔̞͇͔̫̼̦̝͍̻̩͎̲̰̮͙̬̙̠̗̯̠͛̽͋̒̽̆̈́̊͆̇̕̕͝ ̸̛̛͇̥̩̫͌͗̉̾͐̽̀̃̏̀̈́̔S̸̛̛͇̭̝̘͍̀̌͑̎́͑̓͂́̓̔̑͑͋́̒̒̊̽͘̚̕ȩ̶̡̡͔͇͉̥͈͔̙͙̟͉̱̲̼̻̃̏̒̈́̈́̊͛̎̋̑ͅd̷͚̔̑͐́͛͝ ̸̭̮̠͍̖̫͉̟͔͌̃͆̓͂̌n̵̡͍̼̰̟͈̺͍̱̹̮̮̟̝̣̣̤͔̼̞̤̖͎̱̟̿̿͒̆͜͝ơ̷̡̰̭̬̩͚̜̻̯̜̝̼̥͈̞͇̥̙̺̰͕͐̀̈́͒̉́͂̃̒̈́̍͂̍̑̆̓̅̍͘ñ̶̩̺̼̯̘̦͚̽̑̔͆͜͜ ̷̧̢̡̧̨̭̜̥̗̝͙̬̲̬͔̻̩͍̟̝͐͒́̃̋̇̓̊̓̋d̶̢̹͍̗̪̙̤̲̙̬̳̭͖͓̱̘͎̪͇̠̞̜̟̠̼̾̈̈̓̐̃̈̂̀̎̈́͋̔̓͌̃̂͐͂́̈́́̀̍͐ĩ̷̧̡̛̫̰̠̝̼͚̳̼̲̌̆̂̍͌̔͂͋̄̕ä̶̛̛͚̻̟̺̪̝̤̪̟̩̠͍͚̏̊̐̿̈̎̓͋͋̽̑̓̾́̾̚̕̚͠͝͝͝͝ͅm̴̡̡̢̛͎̯̝͇̤̻̼̱͙̟͓̝̳͔̖̘̼̜̊̃̿̅̑̊͐̽̆͐̓͛̓̽̓͒̊͑̊̇̄̚̚̕͜͜͠ ̷̢̨̛̠̣̬̟͙̻̼̺̣͙̰͍͔̙̳͇̦͓̮͍̠̻̣̗̇͊̐̂͐͑̄͌͜͜͝ͅl̴̛͍̱̤̳̿͐̃̌̀̿̋̇̏͆̔̉̒̿̍̈́͋͒̅̀̇̈̔̅͝͠͝i̸̛̝͖̯̪͓̥͚̋̄̈́̿̏͒̔̓̒́̾̎̒̎̇̉͘͜͜͝͝͠ḃ̴͍͉̪̼̰͖̦̥̙̹͒͒̀̄͌͑͂͑̂͗̀͑̓̇͌̊͗̐͘͠ͅe̴̛̛̜̣͕̻̯͍̼̙͓̱̳̜̼̥̱̫̋̈́̾́́̇̀̎̽̐̕͜ŗ̷̡̛̞͇̬͓͔̗̥̣͎̘͈͚͎̣̦̞̺̪͓̜͑̓̈́̈́͌̒̍́̈́̑̿̃̇̓͌̃̅̇̔̀͜͝ǫ̴̡̢̧̥̭͕͎̤͙͈̝̬̫̝͈͔͉̺̩̝̔͛̈̾̃̒͒͘ͅͅ.̸̩̼̫̣̫̫̩̣̱̞̅̎̀̑̈́̓͆̆͑̄͊̆́͗̄͝ ̷͚͕͍̋̌́͂͂̎̇̑̃́͂͠͠P̸̧̢̧̧̢̛̬̣̬̙̟̭̝̟̮̬̪̞͕̪̘͔̤̘͓̝͈̊̎̀̓͐͌̌́́͜͜͜͝͝h̶̡̛̬̭̞͚̾̈́͊̐̅̚ą̶̨̰̜̮̗͈̭̥͉̻̟͉̼̹̙̞̟͇̤͋̅̈́͗͊͋ͅs̶̨̡͎̬͉̩̜̜͙͓̻̜̲͇̮͇̐̇̀ĕ̵̡̨͈̪̪̰͇̬̱͓̹̹̭̱̮̳͉͙̰̪̜̪̜͙̺̣͔̈́̓̍͆̐̈̏͋̔͜͠͠͝͝l̵͓̀̿̀͒̓̄̈́̂̋̃̈̊̓͌̈́̓̒́͒͑̚̕͝͝͝l̸̢̨̻̗̳͚̥̭̗̓̊̽̄͆̊̀̾̅̍̓̔̎̑͂̔͑̑͐̽͒́̑̓̈́͘û̶̢̧͈̈́͆͂͂́̎̇̃̐̋̎͠s̸̨̛̄̈̓͆͋̆̃̆̃͊̿̓͐̋̎̈́̔͌͒̊̍͋̀̔̿̆͒ ̵̧͓̲̬̫̼̣͉̗͎̭͉͉͖̦̩̜̤͖̲̿͒̐̄͊̊̃͋͛̒͐͑̽͛̆̆̂̍͑̕͝ȩ̴̡̧̛̥͔̤̠͎͕̬̹͚̱̘͓̻͎̭͔̐̍̏̄̒̈́͂̑̂̋̓̉̚̚ģ̵̬̲̞̟͇̣̳͍̪̲̗̭̮̪̾̈́̍̿͊͗͗̃ȩ̵̡̜͍̗͎̳͎͚̥̘̯͍̠͉́̄͊͜t̶̛̤̼͓̦͌̇̄̊̽̏̀̃͌̋̚̚͘͝ͅ ̸̢̢̪̲̙̺̹̦̫̳͚̣͙̯̄̎̓͋̓̂̽̈́͌̀͒̍̂̕̚m̴̛̦͕̪͕̤̱͈̟̱̝͎̀̿̐̄̐̊̐̔̓̊͐͛͑͗̌̈́̔̕͝͝i̸̫͚͕̠͎̩̫͖͕͓̞̰̙̦̩̖͓͌͊̈̉̏͆̈́̐̎̽́̃͆͂̋̀̈́͐͛͋͌͌͒͘̚͠͝ ̴̢̢̨̨̧̥̺̜͚̗̼͍͉̥̠͙̬̬̪̭͇̰̦̹͔̬̥͔̭̐́̅̈͋̀͊̅̀̒̆̊͒̎̓̿͛̆̏͐̓́̕͘̕͘͝i̸̧̡̧̢̛̛̞̰̮̣͎̺͇̦̠̠̼̠̖̞̘̣̼̗̹̪̰̥̤͌̈́̐̋͂̈́͐̂̉́͆͛̃̈́̎͘͘͝n̶̳͓͋͘ ̵̨̜̬̜̬̭̩̠̻͖̣̮̅̎̓̍̈́̔͊̆̄̀͛̆͛̈́̽̄̇̿̀̈́̽̎l̷̡̘͕̗̦͕̰̬̫̬̯̮̈́̇̐̇̈ḛ̷̡̗̜̺̗͓̦̮̭̜̣̞̟̮̳̯̻̑̀͂̑̾̊̓̃̄͘̕̕͜͜͝ͅç̴̨̨̡̧̠͚͈̻̘̱͔͖̲̬̦͚͎̗̼̝̭̹̝̪̤̝̰̅͋̈̌͐t̵̡̢̡̲̹͍͇̯̖͙̮̭͈̠̩̘͙̘̓͑̑́̚͜͜ͅű̷̢̢̧̠̜̟̝̤̞̣̻̲̟̦͎͉̠̺͍̳͔̗͕͍̥̈͜͜s̶̢̛̛̺̱̠̰͕̘̞̣̤͊̄̆̒̃̈̀̌̂͛̔̆̀͠͝ ̴̹͍̀̈̈́́͒͂̈̀̂͗̍͐̌̓̈́͛͌̈́̈́͆̏̈́̄́̃͘͝͝v̸̧̡̪̼̳̩̳͎̱̘̫͓̞̳͖̭̟̬̞͔̼͎̲̰͛̋͆̈́͑̌̑̀́̊̚͘i̵̢̧̧̼̬̰̗̖͓̱͈̭͇͚̗̗̝̞͎͈͋͑̿͆̍̿͆̌͜ͅṽ̷̧̻͔̩̥͚̞̞̗̰̤̯̩̥͖̙̺̰͌̅̀͋́̋̚ͅͅe̸͍̘̬͉̠̭̠̋̓̊͂̀̏̾̅̋̒̓̄̂͌̅̿͘̕͘͝͠ŗ̷̡̝̰̩͖͙̮͉͕͓̦̠̺̞̤͚͚̯͔̺͚͕́͂̆̃ȑ̸̡͎̳̦̝̫̦̭͙͎̥͙̗̰̽͐͑͌͑͗̓̑́̿̏͊͠͝͝͝â̵̢̢̙̺͚͔̤̜͍̲͎̣̱̪̳̫̣̥̺͙͑́̌̚ ̵͖̻̬̭͈͎͔͗̌̄͊́̓̿̏͋̈́͘͠ư̴̢͔̤̣̤̘̬̘̹͔̰̠͖͊̋͑́̀̋̋̈́̓̓̈́̈́̽̑̍̒́̚͘͠l̷̢̞̜̻͍̗̩̱̪͓̟͚̻͍̞̙͔̤͕̱̪̙͊͐̌̉̇́͂̊͑̀̉͘͘̕͜l̵̬̭̰͋̐̈͝a̴̛̞̺͓͍̞̙̥̻̞͚̖̩̗͈̺̒͆̆̿͐̽́̐͒̚ͅm̴̱̣̹͍͚͇̪͇̮̈́ͅç̵̡̢̞̼̼̗̙͙̭̮̗͍̠͔̺̟͖̰͖̗͓̤͔̇͒̕ͅͅͅơ̸̢̤̖̣͔̰̥͔̞͍̫̲̞̤̘̐̀̐̽͐̆͠ͅͅr̶̢̰͉̺͓̲͉̺̪̰̗͍̺̬͕͉̼̖̲͐̔͒͆͗͒̄͑̾̈̍̓͊̐̋̐́̇͌̈́͂́͂̕͘͘͠͠͝p̵̨̧̢̛̳̹̯̜͖̙͉͉̲̺͍̟̳̜͇̯̙̱̘̭̳̰̞̼͋̏̇͊͑̃̋̑̋̾́̅͗̀̿̀̀̄͌̾̃́̀̕͘͜͜͠͠ẹ̴̡̝̤̞̦͈͇̜̻̜̟̙͉̯͈̗͖̩̟̫͎̈́̒́͜͜ͅͅr̶͍͖̙͋͝.̷̩̙̮̟̖̣̲̤̲̻̫̝̅̓ ̷̡̛̛̩͎̯̠̫͍̼̤̱͇̫̖̼̤͓̭̯̤̥͉̻͐͐́͛̄̉̆́̒̄̌̔̀̾̎͠ͅV̸̛͉͖͔̱͔̀̒̈͌̊̄͂͑̑̈́̆̉̀͒̆͆́̐͊͘͝͠͝͝ͅͅé̴̛͈̅̈́̍̃̈̒̽̄͆́̕͠͠s̴̡̨̠̘͚̗̙̭̓͑͘͝͝t̸̛̠̗̄̉̑i̸̹͇̪̳̖͇͈̖͎̻̬̺̙̍̔͂̒̌̑̿̓̐̒͊̌̌̅͗͂͋̑͊̚b̸̢̡͍͍̬̺̖͕̝̈́ů̸̡̦̒̃͊̕ͅl̶̨̨̧͙̞͉̩͎̰̖̰͓̖̮̼͖͕̰̄͌̍͛̈́̈́̂͛͋̈́̈́͋̄̀̃ų̵̢̛̩͔̘̜̳͚͔̞̺͙͉͔̥̋̂̽̇̈́́̍̃̍̽̑̅̏̍͒̀̓̽̓̕̚̚̕͝͝m̷͕̦͓̃͌̿̊̎̍̐̅̇̂̄̎̎̊͑̊͘̚͝͠ ̵̬̱͉͈̩͕̹̱͇̳̺̱͖͕͉͚̲͍͈͚̘̣̰̦̓̓̈́́̈́́̐̍͋̍̆͑̍̍̒͑̽͘͜͠a̷̛̳̺̹̖̳͚̳̭̹̦̩̯͉̱̰̥̬̻̟͓̠̮̦͇͙̪̰͑̀́̂͂̓̒̑̀͒͛͠ņ̷̡̝͖̤̥̣͇̯̫͔̲̰͉̘͍̗̪̹͙͉̗̉̓̓̎͑̔̆̐t̸̡̛̮̯̼̲̮̙͕̯̪̥̔̌̈́͌̐͆̂̉͜e̸̡̯̙̮̣̖̩̼͎̩̪̰̥͚͔̐̈͒͒̈́̄̏̈̿͘ ̷̢̡̫͕͈͕̤̭̫̱͙͇̮͎̳̩̖͈͍̪̣̰͎͚͉͎͎̃̒̿̿͑̂̓́͑̂̈́̆͐̾̓̌̎̋̀̂͘̚̚͜͠͝ͅị̶̧͇͖̼̺̼͊͘͝͝͝p̴͈̿̔̐͒̌͆̽̒͗͑͌̓̃̄͂̓́̎͋̚͝͝s̵̜͈͇͉̙͓̟͈̼̩̩̲̀̓̄̉̾̍́́̾̆̽͗͋̍̇̃̎̽̔̉͋̀̚͘͘͝ͅu̴̧̡̻͔̬͎̝̮̲͙͇̟͔̬̼̙̪͎̭̪̜̲̲͆̍̎̔͋̈́̋̎̀̉̃͜m̷̡̢̢̨̯̫̝̮͔̠͖͕͔̭̫͙͓̱͇̲̗̠̥̤̘͆̍̍̀̑̉̈̿̾̈́͛̀͊̈́̏̀̊͂̈́̕̚͝ͅ ̴̨̡̛̩̥̹̬̟̥̦̱̠̞̜̖͚̲̗͓͖̳̰͔͇̦̭͋̏̉̌͆͐̾̊̐͜ͅp̶̢̱̯̟̤̻̩̣͎͙̩͓̙̹̌͗͑̍͂́̂̒̈͝ͅṟ̷̛͚͇̮͈̟̜̀͗̎̂̄̎̂̎̈́͗̓̈́̎̈̃͗̓͗͆̀̎͌͘͝͝͝͠į̷̼̱̙̗̄̄͆́̇̓͜͠m̸̘̻̺͍̯̺͈͔̯̈́͗̈́̿͛͌̈̑̊͆̓̾̌̔͑̏͗̈͝͝į̸̧̛̛̼̮͍̦̱̤͙̹͉͖̥͈̗̺̣͉̼͓̮̙͙̰̞̈́͂̀̃̀́͌̀̈́̃̽̈́̌̆̾̓̏̄̋͗̍͂́̕͜͜͝s̶̛͉̼̥̾̌̃̾̇͑̆̔̿͛̾̐͑̓͛̏̄̇̊̒̇̾̌̀͘̚͝͝ ̶̪̯̘̻͚̠̦̻̗̻̪͕̙̰͈̱̉͐̄͊́̐̔̆̂̕͝͠ị̵̡̡̘͇̬͉̯̬͓̫͇̗̦̬͍̓̆́̅̿̾̓̚͠ṉ̶̞̥̫̤͔̼̗͓̱̹̗̹͙̮̥̭͔̟̑̄̈͂͛̔̏̇͛̃̌͋̔͊͂̇̀̕̕͜͝͠͝ ̵̧̮̠̬̬̘̯̟͕͇̤̤̘͛̈́͛͊̅̀̈́͌̃̅̄̕͘f̶̨̛̛̛̬̝̩͉͚̰̩̥̽̍̎̿̌̉͋͗̀̈́͒͋̓́͘̕͠ą̶̧̛͕̲̞̖͔̲̪̳͎̼̟͔̠͙̺̲͇͈̦͉͍̹̈́͆̈́͑̾̒̔͛̈́́̔̽̈́͐̐̌̀͛̀̀̉̚͜͜ų̸͙͎͍̹̫͈͓̠̹̗̼̩̮͍̣̠͍̋͛̀͗̇̍͌̀͜͜c̴͚̠͓̣̮̞͂͊̓̃̊̇̚͝͝i̸̡̢̻̺̺̫̜̮̹̗̺̻͓̣͖̣͔̦̰̿̍͗̓̑̑̒̓̑̏͌̋̇̇̊̑͂̀͘̚ḇ̶̛̫̟̖̞͉̣͓̬͓̮̰̹̾̿̈́̀̆̍͆̂̇͗̓̑̒́̆͛́̕͘̕u̷̧̢̙̟̠̱̮̩̭͓͉̖̗̻̪̰̪̻̣͓͉̯̖̝̗̩̅͒̂̅͑̔͠͝ş̷̧̛̜̙̪̦̬̖̝͓͈͗̈́̋̄̋̀͐͋ͅ ̴̡͕̻̬̪͖͔̤̮̟̭̪̻̙̘̮̰͎͎̤̣̼̊͆̌̀̂͑̑͗o̵̡̡͕̫͓̙̲̻͙̭̜̪̟̠̟͉͇̲̦͎̐͂̓̓̎́̈́r̵̛̙͖̼̲̪͍̄̑̈̆̃̌̍̌̐̇͛̐̍͌͌͑̿̒̍́͗́͑͋̕͝͠͝c̴̡̫͎̭͚̠̟͇̠͉̗̺͔̄̂̂̍͊̑̌̿̆̃̇̂́͐̒̊͝ḯ̶̞̹̠̮̯̦̻̺̲̳̖̝͔̙͔͚̫̙͇̲̗̖͇̣͓̺̀͆̈́͛̄͌̾̂͗̀͆̓͛̃̽̒͒̈́̽̏́̒͛̎͜͝ ̶̢̖̹̳͉̫̻̯̞̣͍̮̰̞̗̜̩͇̱͖͈̉͒̔́̀̅́̍̏̄̈̑̍̿̿́̀̍̊͂̽̚̚͜͠ͅl̵̨̢̰̱̝͉̹̰̹̮͖̣̜̤͙̼͔̤͒͒̃̀́͐͋̕ǘ̸̗̣͍̖̼͇̋̈́̒̀̃̊̎̌̆̄̀̈́̈́͗͌̆̊͊̑̚͝͠c̴̡̡̡̛̱͇̬͓̹̭̯̰͈̬͔̪̙̗̻̱̼̟̟̳̘̦͓͎̥͜ṱ̷̡̢̜͍̻̳̣̖͖͎̞̭̮͕̹̣̦̮̦̤̗͕͕̰̳̑͛̓̆́̾̑̇̉̕ư̸̧̠̲̪̬̻͎͂̎̒̇̾͑̎̂̌̇͋̂͒͛̐̆̕͝͠s̵̢̫̺̠̼͎̝͇̣͉̺̥͇̟͈̏̈́̌͋̐̒͑̈́̽̉̿̓͛͂̓͐̌̀̈́̂͘ ̷̨͔̞͇̝̯̙̳̳̬̅̅̍̊͑͆̓͆̑̀́͘ę̴̢̪͚̝̞̙̤̗̻͔̞̖͙̟̻̮̺̜̻̅͜͜ţ̷̧̛͓̖̖̥̝̜͚̦̠͇͎͛̈́̆̒̆͂̀̓̓̑̿̇́̀͒́̋̓͜ͅͅ ̵̨̛̩̫̳̫͍͈̫̞͍̙̠̳͛̿̓̈̑̆̓̅͒̑̀͑̃́̄̀̑̆̋̅̀̍̆̕͘͝͝͝ư̶̧̻̘̱̹͓̟̦̝̺͕̬̜̥͚̘͎͉̮̣͌̂̑̀̂̽͌͐̋̃̂̈́̚ͅͅͅl̴̜̦̝̩̦̫̜͚̭̐͆̄̚ͅţ̶̟̺̻͚͈̼͔͙͕̠͕̦͙͖̥̥̫͎͎͙͌͋̓͋̏͆̑̐̾̂̊̏͆̐͊̽͋̄̑̋̈́̓̑̄̎̍͘͘͘͜ŗ̴̡̧̢̞̖̻̘̜͉̦͉̗͍̪̗͍̝̰̦͉̩̠̼̖̤̏̔́̍̇͋̓̆͜ͅį̴̢̛͍̯̜̱͚̱̝̼̫̗̪̱͖̞̹͉̗̪̘̏̈́͐̈́̓̾̑͛͗͒̈́͜c̶̯͚̣̗̱͔͇̠̫̩͎͓͔̥̱͉̪̪̗̭͙̰͍̟͋͜͜ͅȩ̶̞̫̥̖͔̼͔͖̣̘̜͈̖̞̻̜̓͂͆̊͋̏͐̀̇͗̋͂̈̑̊̓̃͘̕͠͠͝s̷̼̻̗̠͓͈͙̮̲̞̟̯̤̣̻̜͓̮̫̲͕̳̞̀ͅ ̵̢͔̫̭̹͖̔̎̿̿͐͌̾̈͌̀̊́̒̚̕͘p̸̠̞̬͎̳̘̭̲͖̲̝̣͍̳̼̗͈̟̤̳͈̞͕̬̘͕̔ͅṑ̷̡̢͉̞̫̹̟̯̭̲͌̎̒͒̊̑̽̈̉̃͗̇͆̎̄̏͘͘͝s̴̢̨͙̬̹̯͓̭̝̜͓͕̯̟̥̘̺̟̥̹̗̫̙̮̺̔̓̈́͌̓̈̔̇̓̓͘͝͝ͅư̶̛͍̝̯͓̮̬͔̝͙̜͈̋͌̄̃̎̓͊̎́̏̕͝ͅe̸̪͇̺̩̟̲̼͎̣͇̜͓͑͌̽̄̎́́͆͂̇̋͘͘̚͜͠͝ͅŕ̸̨̛̠̹̪͍̇̒̊͑̎͋͋̔̔̓̐͌͌̆̈́̀͑͆̈͗̕̕͘͜͝͝é̷̱̖͉͖̪̞̩̗̩̼͎̹͈̱͕͚̝̒̑͐̀͌̀̆̓̂̽͊͒͠͝ ̸̢̣͓̩̯̺͙̦̙͍̖̪̗̯̝̟͓̳̬͚̠̬̺̃̐̐͜͜͜͜ͅć̸̡̧̧̦̝̦̝͚̜͔͉̯̦͉̩̰̹̘̙̜͙̹͇̓͠ù̸̘̱͕̈̒̔̍͑̎̔̈́͝b̵̛͖̜̞̥͎̩̘͉͍͚̜̙͇́̽͂̈̋̐̿͛͐̀̎̔̍̿̌͘͠í̷̥̠̦̭̗̞̗̣̟̣̦̦̯̹̳̥̾̑́̊́̂̀́͑̐̀͌͗́̀͘͘̚͜l̶̙͚͙͔̟̩̼̪̱̺̥͙̱̣͒͛́̓͜͝į̶͖̗͓͙͍̳̃a̶̢̨̘̟͉̳͚̘̭̤̺̪̙̝̹̞͙̗̦̺̝̱͓͆̒̀͐͑͜͝ͅ ̷̡̛̛͉͔͉͎̟̜̘̞͚̪̘̹͒̈́̆̿͒̔̾͌͋̄͝͝͝ͅC̷̡̨̨͕͉̝̭̤͓͉̝̜̞͉̞̯̗̼̗̗̾̿͂̎͛̔̃̒͘̕͜͝ṵ̵̢͈͇̬̱͈̘͓̱̻̻̼̻͓͙͔̩̙̪̜̉ͅŕ̷̢̧̩̼̼̯̠̰̳͉̟̰̹͖̗̭̮̫̝̂̑̎̓̎̈́̊͌̓̈́̋̏̓͜͜͝à̶͓͍̲͔̯̖̦̲̼͔̤̣̭̼̼͔̭̍͐̀̇̚͜ͅě̵̥͓̉̿̆̾͆̈̇̍̕͝;̶̢̡̞͚͔̮̳̬̼̟͎̤̺̝̳͕̯͓̫̦̠̹̏͗̅̑ ̴̧̨̧̛̻͓͎̰̦̥̪͎͕̹̰̞̗͖̰̯͚̟̦̲͈͈̋͑͒̀̒̆͂̈́̍̔̑̿͊̐̉̈́̔͌̎̐́̎̈́̕Ḿ̷̛̗̘̫̩̼̓̑̃̈́͑͊̊͆̅́̊͗̑̀̑̽͌̀͌͂͘͝͝ͅằ̷̢̡̧̯̼̪̪̪̤̝̊́͑̑̈́͛̒̒̀͘͝͠e̶̡̧̼͉͊͊̄̈́͌̾̈̈͐̈́̎̈̆̇̿̓͛͘͘̚͝͝c̵̛̥̭͇͉̥̙̣̝͎͈̝̭͊̂̀̐̄͐̈̒́̏̏̆̇̎́̚̚̕e̸̛̳̖͉̘̥̳͕̅̊̈͒̀͒̒̇͗͊n̵͚̤̯͉̭̻͙̠͚̫̳̏̉͛͐̑̏̿̃̅͠ͅä̸̭͇͎̗͖̖̬́̍s̵̨̗̮̱̥͓͖̩̠̰̥̼͈͇̲̠̩̖̰̝̥̹̼̞̭̼̲͖̺̐͗͛́ ̸̡̡̧̨̤͈͖̮̩̺̜͕̮͉͎̝͇̥̜̼̹̎̈́̈́̏̑̓͑̒̀̀̐̆͐͋͑͊͋͆͘͝͝͝ų̶̛̛̪͈̭͉̰͍͙͙͎̅̂̀̾̆̌͂̔͌̍̍̆̂̋̎̚͝l̶̡̰̘̣̦̠͎̼̯͇̺̞͍̭̣͓̥͔̠͖̣͙̯͔̥̥̈̿̽̉̎̍̆͊̉̀̽̓̏͆̓͑͒̌͗̚̚͜͠ͅt̵̨͈̞̮̹̙̲͈̱̭̘͖͔̰̹͕͓͉̦͇̾̓̇͊͆̔̍̂͝͠r̶̢͙̼͇̜̗̬͈͙͙̠̤̣̗̙̣͓̞͓̭͙̫̘̖̈́͊͑̀̽̈́̎̀̒͛̓͆̾͑̈́͒̒͂͌̍͘̚͝͠ͅͅͅȉ̶̫̇̅̈́̀̍̄̏̐̅c̸̡̡̧̰̞͍̟̟͕̙̟̯̯͔͉̺̩̩͇͕̙̯̱͈̳̠̦̲̃̏͜͠e̵̢̛͎͈̝̘͙͕͉̥͍͍̬͔̮̤̤̼̗̬̠͇̓̔̆̀͑̑̀͐̐̽̓s̸̡͈̗͍̬̼̜̘̠̖͇͉̞̰̹̫̠̫͎̭̰̪̉ͅ ̵̛̲̜͔͚̰͚̩̗̹͕̽̀̾̔̐̏̃̈̾̾̄̉͑͌̂̓͑̔̕͠͠͝ǘ̸̢̗͔̦̦̺̟͎̩̖̲̘͇̗̬̥͎̘̖̰̼̼l̵̩͈̳̭̜̊̆̊̍͊̔́̾̒͆͊̓͗͘ṯ̶̢̧̡̧̜͕̟̞̥̺̺͕̮̻̙̠̗̘̹̹̙͇̲̌͊̐̇́̾́̄̂̉͛͋̐̕͜͠͝͠ͅr̵̢̨̢̛͈̦̯͓͔̤̤̠̺̼̭̬̻̗̘̉͌͛̌̅̋̑̈́̓̆͐̀̽̄̅͌̑̅̂̅̽̅̆͘͘͠͝͠ͅỉ̴̧̢̛͈̻̯͖̯̗͖̥̭͎̠̮̞͜ͅc̴̨̡̛̼̼͍͉̦͈̟͍͈͔͉͓̩̫̞͕̳̜̾́͂͂̈̋͛͗̇̓́̇̓̓͛̇͋̌̅̆͝͝͝͝ͅi̵͍̰̥̺̙̐̐̃͌̽͊̅͗̐́̈́͛̉͛̅̆͗̓̕̕͝͝e̷̢̨̟̙̯͚̖̭̜̩̟̳̻̟̠͔̥̪͚̣͖̩̬̎͜͜s̶͍͉̳͙̖̮̠̱͓̫̟̣̒̾͆ ̸̛̠͇̙͇̮͇̙̤̗̮͓̝̰̼̬̀͑̀̊̒̓̂̂̉͒̏́̑̈́̎͆̊͗͋̒̆̉͂̐͘͜͜l̸̢̲͍̠͎̥̞̥̻͈͚̹̍̽͐͛̂͐̓̍̑͐͜i̷̢̛͕̻̬̪̬͈̜͎͚͇̿̾̾͛̆͆̊̀͛͛͂̎́̓̉̃̎͆̀͘̚̕͜g̷̟̖͖̯͕̭̖̙̊̏̋͑̓̀͆̐̉͂̏̈́̋̀̄̀͋̚̕͝͝͝ụ̷̪̘̩̻͎̻̳̹͇͕̮͔̎̏̒͒̕͜ͅl̸̡̛̯͚̞̜̣̼̲̩͔̞̲͙̰͈̗̞̦̔̍̋̊̈̐̇̎̈́a̸̡̨̧̛̭͚̟̦̮̥̞͖͕͗͊̓̏͊͗͑͊̐́̆͋̅͑̂͝,̸̨̝̟̻̤̹̥̫̗̜͖͖͙̫̠̤̤͚̺̪̥̏̃̓͑̋̑̏͐͝ ̴͙̤̝̓ṷ̴̢̡̡̤͚̋̍͂̾̍͛͒̓̂́͛̆͗͑̈́̉̄͐͌̒̀̓͑̈́̈́̕̚͠t̵̢̡̠̫̞̗̼͚̺̻͉̙̯͚͉̉̅̈́̀̾̒̔͌́͐̈́͗͆̈́̎̽͘͜͜͜͝͝ ̴̛̟̫̲̠̰̫̻̗̿̿̊͌̈́́̊́͝p̸̛̝͇̓̃̏̇̊͐͆̉͌̎̄͂̏̈́͒̿̍̽͐͐̏̓̉͂̄̕͠ö̵̧̧̠̜̦͉̲͉́̔̃̓̆̐͋̍̆̇̓͝s̶̗̩̜͈͕̯̞͕̱͚͖̤̖͕͕̫̥̣̖͖̈́̇̃̌̎͒̅̉͐̓͘u̴̳͈̦͆̈́̔͝e̸̤̞̠̙͇̤̱̮̮̐͝ͅͅr̵̡̬̣̯̜͚̩̥̱̂̓́͗̑̚͠ȩ̷̻͎̞̖̝̖͔̈́̀͑̆̏̾̀̓̄̅͆̊̀̈̉͘ ̴̢̨̼͈͓̣̦͖̣̪̻̫͔̘̟͇̺̱̿̍̈̀̀̊̈̑͘͝͝o̶̢̨̢̥̺̟̣̻͙̞͎͎͂̓́̾̒̋̂́̈́͘̕ḑ̴̢̢̢̨̜̻͈͍̗̦͈͎̮̭̦̗̩̺̭̫̱̠̻̟̭̰̜̐͌ͅĩ̵̢̨͉͙̘̰̫͙̪͚̯͙̰̥̇̀̽̈́͋͆̈̑́̉͆͋̿͐̄̓͛̔̏́̂͒͜ͅǫ̸̰̱͉͔͙̭̱̮͎͖͇̙͉͍͔̜̳̯̝̺̔̿̇̇̐̐̈́̽͌̐̄̍̾̓̍̑͒̇͆̕͜͠͝͝͝ͅ ̶̡̧̨̧̧̛̮̰͍̣̞͉̰͖̜͇͉̥̘̘̪̝̗̭̬̙̥͖͇̈́͊́̾͑̂͊͗̌ͅf̵̢̧̧̩̣̭͇͎̥̼̍̋̋̄́̽̾̆̈̋͆̉̚͝͝ę̶̛̰̪̣̻̲̥̝̫̺̜̙͇͇̞͉̼͇̳̣̼̘͙̹͚̟̤̠̮͂̋̀̿͒͌̀̔̍͂̽̌͆̾͂̂̾̀̀͊͋͋̄̚̕͘͝r̸̂̾̄͊́͛̈́̃̀̽͛̐̌͗̉͑͐͂͛̀͐̊̚̚͜m̴̧̢̫͇̼̫̩̜͖̰̝͛͐͒͂͋̊̍̾ḙ̴̞̜̟̻̲͖͕̣̟̜̲̥̝̫̩̜̫̺͚̫̞̘̠̦͖̽͑͑̅͐̒̀̐̽͌͑͐̔̔̂͜͜͠͝͝n̴̛͙̙͓̼̈́̒̒͘̚t̷̨̨̰͇̺͙͇̖̘͕̯̣̻̘͇͚͚͔̬̳̱̦̰̲̺̂̊̾͒̚͝ư̷̧̨̩̺̞͔̮̻͙͉͔̜̤̙̣̭̼̮̥͔͕̜̜͔̊̀̃́͂̄̄́̑̔͊̃̆̕ͅͅm̸̡̧̧̛̖͉̻̪͕̱̳͙̦̩̪̟̣̘̪̥̔̓̀̉͗̈́̐͐ ̶̢̗͚̜̙̲̃͑̿̓̈́́̾̋̀̓̑͒̊̓̉͌̆͛̄̐͗̔̕͝͝a̵̧̻̫̺̼̳̫̾̍t̸̨̡̹̟̯͚̦̩͉̟̀̓̈́̚͝.̵̢̬̳̼̗̪̜̯͈̩̖̯̪̹̺̺̰̞́ ̵͎̫̉̓̈́͌̌̓͒͐̋̈́̅͗̾̈́̕͝Ą̶̛͙̜͚̜̠̥̘̲̫͙͉͍̲̟̙͖̹́̃̍̀͗̌̏̏ľ̶̨̻̱̠̩͇͉̠͓͉̫͈̯̬̭̪̘̰̬͍̬̩̳̞̳̈́̍̕ͅi̵̮̪̘̖͖͉͓̝̼̫͙̠͙͎̙͛͊̈͂͑̅͋̉͘͠͝ͅq̸̢̧̧͎̖͕͖͙͔̖̜͕̝͍͍̦̩̲͚̩̯̰̫̆͜ͅų̸̨̧̨͚̞̭̖̥͉̲̪̼̩̹͔̟̃̓̌̅̾́̿̿̊̓̂̍̈́̃̀͐̚̕͜͝͝͝ą̴̢̛̪̝̤̰͕̮̟̪̪͖̺̠̲̰̮̞̘͇̫̣͈̩͍͚̎̊͗̈̄͗͋̒͂̉̈́̔̄̈́̕̚͜͜͝ͅm̷̟̉̉̄̒́́̑̈́̾͆͂͆̕͝ ̴̢̫̩̪͚͖̼̫̳̥̻̿̎͗̒́̕ę̷̧̺̫̹̥̟͉̘͚̆̈́̏̿̆̆́͒͂̽̉̓̎̔̀̎̍͒̈͛͝͠͠͠r̷̨̢̢̧̨̛̮̝̜͚͙̠͇͔̣̤̲͕̙̤̮͚͖͇̰͎̯̭̣̍̇̽̄̚ͅa̵̡̨̨̡̛̯̼͖̲̟̲̼̫͚͍̮̯̰̳͚̯̼̦͔͔̰̠͚͍͚̒̀̄͂̐̈́̄̅̃̓̄̉̐͠ţ̶̛̼̣̳̝͍̹̗͈̘̩̯͖͙̥̘̦̮͉̅̔̔̃͗̄̇̐̐̽̈́͐̉̈́̓̈́̍̓͆̾͑̂͗͆͌͜͝ ̷̨̧̧̖͇̪͚̫͈̣͚̯̦̪̓̉͝v̵̥͍̣̘̳̪͕̟̞͓̖̪̆͋̃̆̽̈̔̐̓͗̕͝ở̷̼̅̓͒̚͠l̴̨̢̢̛͖͎͉̘̝̩̖̪̇̈́̔͗̔̋̅̂̀̋̈́̈́̾͘͜͠͠͝ǘ̷̧̨̧͉̣̗͕͉͔̟̮͎̱̖̬̳͖͈́̾͐̽̓͛͒̆̇̕̕͘͠ͅͅt̴̛͕̼̯͎͎͚͓͕̜̟̘̳̓̀̽͐̆͆́̐̋̏̓̓̑̀̇̈͊͗̃́̈́͋̍͋̚͘͝͝p̶̧̧̗̤̠͍͇̼̺͈̎͊͐̂̂̀̐̒͐̓͒͐̔̊̔̋͗͛̏͆͗̑̌̔͂̚̚͘͠a̷̛͈̗̝̘̲͊̊͐̆̊̓͗̅͑̅̎̀̈͋̚͝t̵̨̩͚͍̫̯̞͙̾̃͜.̷̡̡̺̰̻̝̤̦̙̝͔̤̟͎̲̩̻̗̲͚͔̘̺̮̣͈̳͗̑̿̽͛͋̍͗͗͑͛͌́̾͛͂́̎͗́͗̉͝ͅ ̴͚͕͇̲̺̏̋͊̀̅͛̈́ͅŃ̷̡̢̛͚̼̥̝̝̌̉̀͛̆͘ư̴̡̬̯͙̱͖̥̳̮̠̝̱̳̫̫͕̜̘͉͖̞̖̩̯̍͊̂̌̀͗̔̔̏͛̂̏̐̍̌͆̔̽ͅl̸̡̲̥̟͎̹̙̯̠̥̹͉͋̀͂͑̑̈̓̐̏̽͌̄̀͛͋̀l̵̢̗̪̲̟͖͍͔̬̘̺̇̀͆̋̓̊̒́̽̓̓͆̾̈̎͑̆̅͘͝ą̶̪̱͈͈̳͇̙̘̜̺̟̮̜͙̞̘̮͍́̇͋͒̿͗̉͑̈́̽́̋͒̕͠͝ ̸̨̢̧̛̛̪̤̹̠̳̘̖͙̟̑͊̃̈̊̀̐̅̈́̆̏̽̒͛́̃͊͒̈́̂́̃͘̚͝f̴̡̡̢̯̞̭͇̯͈̙̰̮͍͉̳͓̘̞̪͈̦̙̻̥̋̈́́̈̄̏̀́̃͊͂̓̑͘̚͘͜͝å̵̢̢̢̛̜̭̥̞̜̜̩͙͎̘͚̠̥̩̥̙͚̼̱̤͈͈͕͚̉̿́̽͛̂̾̇̀̃͌̍̍̉ç̷̞̹̦̦̮̻̯͍̼͚͙̝̳̥͕̙̙̣̟̠̟͓̬͛ͅį̵̛̛̙̰̺͔͓̳̅͂͛̌́̅̇̾̇̋̐̆̐͠ļ̴̢̛̗̩̗̜̻̩͕͚̩̖͋͑͋͒́̂͒̍͂̒̀̀͋̽̓̏̽͋̈́̔̋̈̽̚̚͠͝ị̷̢̧̛̥̺̮͉͙͕̻͖͔̩̣̹̙̻͍̗̖̰͈̘̭̜̮̠͆̂̂̔̄́̑̀̇̈̌̌̿͋͜͠͝͝͝ͅs̵̨̧̢̻̗͚̟̱̟̖͎̩̭͎͎̭͍̗͉̺͙̭͙̠̾̃͌̓̑̀̈̐ͅͅͅį̷̛͎̝̤̹̺̹̤̯̘̦̱̲̣̞̗̠̞̼̥̝̮̺͉͍̝͒̌̑̂̆̋̉̓͛̇͋͌́̾̊̆́̚̚͝ͅͅ.̷̡̨̢͇̰̳̣̯͇͉̗̦͓͖̩̠͙̜͔͈͍͉̬͕̟̜̯̟͐̅͒̀͂̈̓͗͋̄̅̆̇ ̷̧̢̛͖̘͔͇̘́̀̓̉E̷͎̜̞̲̫̹͖̹͔̖̣̞̣̜̬̞͙̜̰̣͈̘͌̀́̈́̎̓͗̓̄̚͘͜͠t̸͉̙̣̜͇̘͈͔͈̭̻̗̣̩̔͋̆͛̾̈̽̽̏̍͐̓͗̉̇̈́̓̍̈́͛͝į̷̞̺͓̭̞͖̻͉͕̝̏̆̎͌̈̋̑͛̌̂͋̌̋̆͊̿̍̏͛͝͝ā̴̛̟̤͙̩̖̲̦͕͍́͆̓̆́͗̕͝m̵̨̝̩̝̗̭̀̀͆̊̀̍͝͝ ̸̢̼͇̦̩̪̩͈̣̭͙͕̤̺͔̳̈́̈̃̍͐̇̓̈̄̾͗̉͑̈́̋̋͘t̵̨͖̯͈͈̦͙̫͒͑͒̚ḯ̶̧̥̤̱̗͓̂̏́̐́̀͋́̏̓̊̊̒͌͊̈́́̾́͠n̷̯̣̭̝̰͕̤͈͙̤͚͑̓͌͌̉͒̈̚̚c̸̢̛̞͇̱̞͙̪͙̙̖̞͉͔̲̈̃̉̀͑̆̅͊̐̑̔̌̍̑̿͒̀̈́͆̅́͂̉͘̚̕ǐ̷̺̦͍͖͖̟̟̲̀̇̎̀͌̔̐̋̑́͑̓̐͠͠ḏ̸̨̨͕̥̗̝̣͓͙̲̘̘̝̱̊ͅų̶̧̢͓̘͍̱̜̦̥̮̦̟̟͔͍̺̃́̾̄͊̎̎̅͒̓̈̏̄̾͑̚̕͝͠ͅn̴̩͇͕̥͓̪̪̯̩̊̾̅͐͛͌͘͜͜t̸̡̲̯̱̬̦̽͛̔̏̾̌̎͂̿͂̈́̄̀̓̋̾͐̉͊̀͊͘,̵̺̬̹̼͕̫̙͈͉̻̳̻̇̔̍̾̈́̽̆̀́͌̍ ̴̨̥͇͖͙̫̳̫̦̼͛̉̎̈́̿̌͂r̶̨̢̠̟̣̗͈̣̘̲̥̝̼̮̰̱͓̻̥̩̖̙̠̠̄̑̉͜ͅi̶͔̱̮̋̓̀̇̃̈̿̌͗̃̋͆̀̈́̽̔̓̽͑͘͝s̷̨̼͓̟̲͈̪̏͊̔ų̸̛̛̛̘͙̄̈̋̄́̔̐͑̈́͘͘͜͜͝ͅş̵̧̖̦͉̠̺̤͙͈̹̞̰̭͚̱͍̘̘̝͍͍̮̰̭̹̎̔̆̑̋͋̓̊͑̋̀͑̀̓͆̕͜͝ ̶̛̙͊̈̓͆͑͐̋͌̏͌͑͗̃͆͌͂̆̽̒̇̉̎̎̄̈́͝͠͠n̴̢̠͚̟̫̟͚͇̭̘̱̪̏̍̔͗̌̎̈́̈̆̈́̾̉̾̋̄̿̈̂͂͘̚͜͠e̷̢̢̛̛̬͍̮̘͚͓͈̻̮̻͊̏̉͊͛͊͋̉̾̎̃͂͒͜͝č̵̨̯̗̳̲̥͎̞̺̼̻͛̉̓̀̀̄̈́̐̌̓́̿̒̎̈́͝͝͠ ̵̩̪̙͕̤͈̻̻͇̼̘̺͕̬̓͜c̴̨̡̛̣͈̳͈̠͙̮̦͚̩͉̞̋͆̈̇͋̈̉́͊̒̉̐͘͜ư̴̧̛͉̫͚͔̮̹͊̓̾͆̃̎̐̄͊͌̉̂͗͆͊̋̉̈̆́̐̃̅̉̀̚͝ŗ̷̢̢̢̛̣̰̥͚͙̙̗̺̱̹̳͙̳͕̲̙͈̱̝̘͔̹͈͓́̓̀̂̀͛̌͑̄́̉̂̈́͝͝ͅṡ̵̛̝̗̘̥̣̗̑̉̌̊͛͗̂̔̓͐̅͠͝͠ù̷̡̩̫͎̠̹͖̭͎͉͕̺̟̬̯̠̼̣̲̰̝̞̓́̕͜s̶̙̩̱̻̯͎̫͉͇̹̬̗̑̈́́̈́̐̓̀́̑͌̀͊̅́̾̽̊͗̀͒̈́̌̇̆͋͆̐͘͠ͅͅ ̵̧̛̻̩͈̰͚̭̖̦̲̗̪͉̞͎̞̳͔͍̉̉̌̊̂́̈̌́̈́̀͒̌̀͒ͅe̵̢̩͍̞̳̜̜͔̳͓͇͔̥̖͉͓̖̥̪̙͈̰͂͐̉͛̂̇̑̀̑̅͌̅̊́̔̔͛̋̉͗̕̚͜͝͝ͅl̵̨̛̼͉̤̉̔̏͐̓̿̿͐̏͑̄̈͂͛̇͑͒̈́́ę̴͍̫͔̱̒̋͒̊͗̈́̋̈́̽́́̀̓̽́͂͒̅̃͘͠î̸̡̜̹̗̠̲̄̆̇͛́́́̔̂́̕͠f̸̣͈̟̻̱̟͓͈̋̓͑͗̄̽̆̓̀̓̃̒͆̍̈́̀́͗̄̒͛̇̊͗̋̀e̴̫͖̺͙͓̯̜̳̥̻͖͎̿͊̈́̈́͂͜ͅͅn̴̢̧͈͉͕̠̯̖̤̻̰̰̘̗̱͔̆̈́̀̓̓́̒̀͋͂̚̚ḑ̸͔̺̲̤͍̘̘̳̙͔͍͖͚͕͍͖̦̝̤̹̪͈̻̌͆̂̏͘͜,̵̧̛̛̘̻̳͎̈́̈̄̋̌́̑̓̈́ ̷̡̟͚̭̱̼̙̪͙͖̪̗̺̐̍͆̉̈́̐́͒̈́̂̑̒͆́̎̉̄̅̓̅̃̕̚͜͜j̴̡̧̡̧̤͖̱̳̗͂̒̈̐̊̋̀̔̒̾̽͌̓̀̑̒̔̀̆͐̀̽̓̔̽͑̕u̴̞̙̥̼̖̜͓̮̝̐͂̔̿̾͌̓̈́̂̽̓͑͑̑̊̎̕ͅs̶͈̠̗̳̱͕̲̱̱͎͋̀̇̄͑̓̓̽͊̈̂̍͝͝t̵̨̧̙̥̟̰̳͖̥̼̓̓͛̓̿͜o̴̧̢̡̡̡̨͙̺͍̦͎̭̣̻͎̦͚̘̝̬̳̖̠͚̗̜̲͘͜͜ ̴̜̹̏͛̊̉͊́̀̃͌̈͌͂́̎̈̄̀̈́͠͠r̴̛̺̾́͒̏̈̌̈́̂̃̌̂̀͛̉̑̍́̕ì̵̛̟̯̞͇̝̯̮̳̙̼̥̓́̂͊͆̐̎̊͌̏̒͋̈́̏̾̚̕͝s̸̳̭̭̣͇̣̊͐͘ử̴̫̞̳̪̗͍̦͕̥̬̰̩̩̤̙̠̹͕̤̰̬͕͇̲̟̓̀̂̃͌́̍͆͑͌̑̊̉̓́͊̍̾͜͠s̸̡͍͉̪͓̮̻̭̠̘͕͇̼̬̮̤̦̦͖̙̏̈́̓̿͜͝ͅ ̴̨̨̧̥̗̘̱̮̳̺̜̰̟̃͗̐̈́̾̽͗̀͜f̸̢̡̡̨̖̙͖͙̠̜͈͚̥̺̭͕͚͙͇͖̠̹̆̄̀́͆͒̄̊̀̒̚͝͠ͅe̵̡̛̝̪͍̳̻̮̝̙͎̤͔̼̯͙͈̪͍͎̅̾̾̾͂͋͒̓̆̿̈́́͌̒̈́̈́̀͑̆͗̽̅̚͜͠͠r̵̡̨̡̧͎̮͈̪̲̜͖̯̥̳̮̣̳͍̮̰̙̘͉̘̊̏̀̋̒̔̔̽͊̅̊́̾m̷̨̬͇͍̰͍͙͎͈͉͕̻͕̦̠̣͍̖͔̹̖̥͕̘͓͚̘̈̉̋͌̉̆̄͊̊̔͛͊̓͜͝ȩ̴̛̛̬̦͓̻̍̏̐̄̅͒̈̽̂́͆̆̾̍̌̈́̇̍͐̔͝ṋ̵̡̢͕͈̩̺̟̈́̅̃̓̈́̿̑̋͌̿̍͛͛̓̿̾̌̊̕͘͝t̶̫̮͇̻̠̬̼̩͕̩͍̘͕̠̜̮̝̬̪͙̰̘̮̫̙̭͉̮́͐̄̎͂̆͊́͠ͅų̶̬̤̺͍̥̺͉̮̬̤̱̭̳͛̋͠m̷̧̧͙͙͚̮̫̫͚̲̫̮̩̗̳͈͖̟̤̱̪͚̪̠̥̮͔̗̀͜ ̴̡̭͖̺͍̲̘̭̦̭̥̺̳̳̓̀̔͗̇̆͌́̕͜ͅm̸̨̛̗͖̫̹̖̰̩̩͚̊̊̂͆͑̓̈́̄̋̓̓́̅̾̐͌͛̋̈́ą̴̨͈̖͕̣͖̲̺̳̻̭̓̈́́̄́̃͛̐̓̀̌̈́̑̅͆͆͆̚̕͠͠͝͠͝ư̶̢̢̬͙̲̣̪͍͓̩͓̓̀̄͆̎͜r̶̢͇̜͍͚̖̬̳͑͌̋̉͒͗̓̄̃̽͒̈́͂͐̏̒͠ͅḯ̴̮̯̓͛̆́ş̶̧̡͚͔͈͔̖̬̖̬̯̭̹̗͈͔̹͔̬͓̲͈̣̯̲̟̜̐͆̓͋̄͂̾͝ͅ,̴̡̢̫͈̝̟͙̳̣̻͍͇̤̗̮̻̞̺̘̙̫̘̝̱̩͙̾̌͊̒͛͋͂͂͗̔̎̀̃́́̄̀̉́̕̚̚͘ ̵̢̧̧̗̭͎̥̯̬̳̞̳̯̯͎͍̝̰̼́̎̅̊͌̏̓͘̕͠n̶̢̙͚͉̩̜̩̖͙̮͙̮̬̜͙̭̲̺̺͐͛̀͋̑͗̕o̵̧̺̘̩̖̳̬̯̺̹̞̰̘̞͋̓͗̊̉̌͆̏͊̉̈́͌̐͒̊͂̑̓͜n̷̛̛͓̬̲̫̈̍̅͗̈́́̊͑̓͊̈̉͆̐͛̐̕͝͠ ̷͚̿̋͛͜f̸̡̬͔̝͙̞̰͖͈͖͚̜̯̻̜̯̜̻͇̳̝̠̆͋͜ą̷̡̹̻̥̳̫̹̣͖̞͚͍̱̝̫̹̘́̐̅̂͗̎̚͜ư̶̺̞̰̈́̌͂̏̂͊̉̓͆̔̌͊͛͗̈͋̚̕͝c̸̨̨̨̛̞̖͍̹̤͚̝̰͎̤͉̮̠̱̣̊͑͋̈͂̽͗̋̏̀̏̀̀̄i̵̹̝͎̞̣̯̲̙͔͚͚͈̖͛͌̿̅̔̽̽̇͛̅̓́̂̋̚̚͝ͅb̵͓́͐̃̎̾͑̈́̈́̚̕u̵̢͉̭̩̻̙̻̻̣̮̲̻̞̬͗̈͑͋͛̂̊̂͆͊͌̊̀͆̑͊͋́͘͝͝͠͝s̶̼͒̀̋͐̑̈́̑̾̂̓̕ ̸̨̻̈́̍̿͊̏̾̉̈͠͠l̴̙̽̍͌̈́̐̆̅͛̎͊̆̌̃̐͂̿̈́̈̇̕̕̚͝͝͝ǫ̸̰͙̫̦̟̠̲̼̞̭͔̪̳͎̪̱͎͙̗̯̟͕̤̩͕͈̹̆̕͜ŕ̵̡̮̩̲̯̘̻̙̻͕̼e̴̪͌͊̊̀͐͆͆̀̊͑̀̉̈́͑̎̋̕m̸̤̖̺̮̟͇̭̫̞̪̹̪̑̽̄̉̈́́͊͌̔̔̃̇̚͜͝ ̶̲̯̝͝m̵͚̲̞̰̻͕̣̼̰̜͚͇̬̗̬͓̞̮͖̜̊̆̎̆͛͐̽͗̓̇̽͂̀͊̀̊́̒͘͘͜͜ͅį̶̢͓̝̳̦̞̗̳͈̮̬̻̟͙̺̱̭̊̈͊ ̴̢̡̨̛̞̯͔̘̥̘̜͕̥͙̱͈̰͓̃͊̾̈͑͌̿͆̀̅̈́͌̄̀̇̈́͐̎͋̌̚̕͝ͅȁ̴̜̘̼̰̞͔͉̦̎̃̋͘̕͠c̶̨̨̡̛͙͚͈͓̱͕̬͖͖̭̱̙͖̜̙̞̫̣͎͙̳͈͙̼̓́̿̄̉̓͑̍̋̓̑͛̔̌̚͠͝͝ͅͅ ̴̢̨̫̯̗̱͓̮̪̳̟̪̱͖͖̮̪̟̯̙̱̞̗͈̬̒̋̉̎́̊̅͒̑̍͌͌̔̈̀̋̈́̕͜͜͝͠͝ͅf̵͉̗͍̤͉͊̈́̇̽̿̐̓̀̿͒́ȩ̸̡̫̺̠̱̙͖̬̞͕̰̥͓̼̲̹̫͕̮̘̫̙̥̗͉͓͆̍̐͌̑̈́̓̄͗̇̚͠l̵̡̨̡̡̛͖̰͚̳͉̜̙̱̯̦̣̩͇̰͔͙̻̲̫̮̐͌̌͌̃̀̈̀̃͊͋̎̆̀͌̈́̓̚͘͝i̷̡̟͍̰͇̹̝̘͎̻̫͖̟̲̘͉̼̬̘̗͉̙̟͆̆̄s̴̗̥͓͍̘̓͜.̸̲̭̩̫͉̪̿̒̒̏̃̿́̏̐̀̿̀̀̔͆̕͘͠ ̴̧̢̛̛̛͈̞̙̼̮̝̪͇̼̳̻̮̖͙͕̭͔̻̟̠̬̪̬̣̆̈́͑̓́̓̃̌̄̉̊̄̿̾͂͛̽̏̀̀͗̚ͅĨ̶̢̧̧̢̼͍͉̭̪̟͉͎̭͚͔͓̫͙̬̪͂̂̉̉͂̓̋͊̾̍̿̕͜n̶̥͛́t̸̨̡͇̰̱̠̜͓͔̤̺̙͉͙̥̻͉̣͌͂̋̒̔̇͂͂̓̍̄͘͘ȩ̸̡̛̛̙̼̜̰̳̙̣̮̭̠̣͔̙̝̼̤͍̩̼̻̹̇̊̀͋͋͐̎̊̔̍̈́̋͗̍́͛̌̚̕͘͝͠ͅg̴̡̞͙̝̘̠͓͇͕̖̠̰̥͊́̓͗̑̆̉̃̃̓̌͑̊̍̈̆̄͒́̍̄̆̈̋̉̀̕͘͘ȩ̶̢̢͚̙̜̬̺̠̫͇̳̞̹̌̄͋̄̌̆̇̆̔̋̊͛̈́̈́̈́͂͐̾͒̋͊͘͝r̶̨̢̛̛̦̲̗̰͚̤̯͈̟̺͔͖̈́͐̓̈͗͑̿͂͛̀̂̐̈̄̍̕̕͝͝ ̶̧͖̦͍̪͚̬͔̦̝̦͈̻̳̟̙̪̫̙̖̳̼̳͓̀̌͊̎͑̏̒̆͊̉̄͌̍̂̄͊̈͆̈́̆̑͘ͅͅṉ̷̨̢̨̳̘̲͓̻͖̱͓̣̼̜̥̩̲̰͉̪̓̃͆́̌̾̓̀̑̉̀͋͜͜͝ͅŏ̶̡̡̼̻̼̜̜̬̹̯͖̼͚͕̟͉̦̰͙̗̬̩̝̣̝̖͎͕͈̌̈̂̈́n̶̢͇̦̹̥̬͇̜͍̺̜̠͚̯͇̩̗̬̠̥̘͓̐̽̿̌̈́͜͠͝ ̴̡̡̨̧̢̡̜͉̮͓̻̞̙͇̙̼͚̫̣̦͚̪̳͚̹̞̓̍̅́́͊͌̈́̉͐̉̉͗͆͗̾͑͆̚͜͜ͅĺ̶̨̝͍̲̠̻͎͈͕̤̗͙̭̦͎͈͔̱̩̖̳̭̻̰́̿͒͌̽͗̀̌͊́̓̆̽̂̋̀̄͝͝ỉ̴̧̡̺̺͉͉̤̮̱̠͔͚͌̃̉̊͘ģ̸̨̧̡̡̡̛̛̦͇͈̦̤͍̦̙͇̳̦̩̱̲̐̎͋̾̈́̐̈́̈́̆͛͌̑͐̊̃̑̉̇̾̽̌̊̽̿͊̓͘ų̴̨͔̜̳͈̲̫̹̟̩̳̮̠͔̳̣̱̝̖̱̮͔̰̍͑͒̑̅͊̈́̽͌́̈̓̌̔̌̂͛͘͜͝͝ͅͅl̵̢̛̛͕͓͚̯̞̩̤̪̱̹͚̻̔̆̄̌̈́̋̔͂͑̀͌͛͂̑̀̀͆͋͜͝ȃ̶̢̢̛̟̜̹͙͉͉̖̆͐̓̒̌̽͆̋̌̈́̿́͐͒̄̈͊́͋͝ ̴͙̰̯̝̥̳͍̝̼͕̄̀͆̑͌̑͛́̎͐̊̃͝ͅa̶̮̥̞̳͕̘̻͙̟̓͊͂̓̔̌̇͆̐͌̇͐͋͒̇̉͑̓̈́̆̒̾̚͘͜͝ͅų̸̙͖͉͎͎̭͍̯̹͎̦̘̜͖̊͊̇̃̃̐̑̇̉̉̏̊̎̎̈̀̎̃̊̂̀̾̚̕͘͘͝͠ć̷̲̬͖̤͚̫͑̓͑͗̑̓̍̽͑̄̕̚͜ţ̴̩̪̺̫̞̺̦͉̯̲͕̙̯̤̀̀̊͑͊͘͜ͅo̷̡̡̘̺̤̞̙͇͈̼̗͎͍̻̯̝̮̖͍͚̖̭̹͎̥̦̎͂̅̂̐̈́̌͗̒̿͛̔͐̂̋͐̈́͌͜͠r̵̲̙̥͕͈̙̼̰̒,̸̛̠͕̻̘͇̲̲̞̜̟̘̥̃̅͊̽̈́͋͐̐̔͒̊̉͂̈̐̓̒͊̕͝ ̶̧̲̹̹̩͉̹̳̜̜̣̰͚̟̘̋̐̈́̌̈̿̀͑̑̿̏͋̑́͜͜͠m̷̛̛̛̞̌̃̾̎̄̈́̾̐̕̕͝͠ó̵̢̡̞̮͉͈͇̥̗̖͉̘̘̱͇̝̫̗͎̼͓̳̯̱̐̾̉̊̇̓͑̕l̶̛̫̯̣̖̤̫̯̺̟̖̘̣̬͈̜̪̱͛͗̓͛̋̇̑͋̽̋̎̽̅̒̐͘̕̕͝ę̸̨̮̀͒̏͆́́̔̒̈̑̀̏́̏̀̂̈́̒͂̓̔̒͘͘̕͘͝͝s̵̡̞̙̜̥̺̮̀͆̓͗͑͐̀̾̉̒͂̊̏̉͛̄͐͘͘͜͝͝ͅț̸̳̦̙̻̙̗̪̲̜͖̯̟̙̺̺͎̑̋̌̊͌̂i̵͉͉̻̹̲̙̯̖̣͈̐͌͗͌́̔̓̂͘͝͠é̴̢̢͙̪̗͖̮̬̥̝̮̹̟̰̳̘̥͌̿̇̑͜ ̷͚͉̭̝̞̝̯̯̲̬̱̩͎͕̆̾̈́̈́̆̉̐̐͜͝͝͝m̷̢̧̙̗̻̮͙̳̟͙̘̩̲̖͇̻͕̠͖̳̪̙̍̈͑̍̽͋͑̿͆̂͋̆̔͜͜͠͝i̴̧̡̯̹͓͕̲̞͚͖͚̝̟̫̐͗͆̾̔́́͐͌̃̌̀͐͋͋̓̽̿̄͌͋̒̓͘͜͜͝ ̸̛̝̥̹̬͉̠̏̿͗̾͠͠n̶̹̈́͌͝ȩ̵̛̞͎͓̈́͋̒̏̐̍̆͊͋̌̒̒͗̍̌̂̕͝͝͠͝c̴̩̰͍͓̜͛̀̽̅͗̊̈́͆̋́̀́̑̈́̈͋̄̈̕͠ͅͅ,̷͉̯͖͚̩͇̙̥̫͛͂̎̃̌̽̔̈̑͒ ̸̧͍͕̑̈́̊͋̒̽̐́̑͋̐́͗̄̈́͂͑͘͜v̴̨͓͉͈̙̥͋̑̓̋̈́̃̌͆̔͝͝ȩ̸̼̺͇̗̹͖̠̜̲͍͍͋̏̕ḩ̵̨͈̮̪̫͈̩͒̅̇́̔̾͋͗̀̎í̶̧̢̨̧̢̤̪̙͚̻̙̲̣̮̪͙̳͚̟͓̻͓̺̳͙̟̌́͐̽͒͑̈̀̈́͛͛̀̃̐͋̚͘͘͘͝͠͝͠ͅc̴̛̗̺̙͙͉̳͔̰̟̿̔̇͗͂̏͂͌̓͘͘ͅͅu̷̫̬̩̝͓͆̑̎̾̅̈̃̉̓̈́͗̅̀́ļ̸̨̛̦̥͙̗̱̻̝̤͓̭͎̱̤̩̙̗͂̎͆̈́͒̂̎̒̉̇̓́̔̈́̎͂̋͘͘͝͝ͅḁ̵̬͊̈́͆͛́̌͝ ̶̨̡̲͙͎̜̠͇̂t̷̡̨̻̙̜̼̜̠͕͇̣̻̱̱̫͙̬͙̬̻̲̲̙̭̔̆͗́͊̒̎̉͊̿̂͋̐͊̔͛͑̋́̉̀̌̌͊̈́̍́̒͜͜͝ͅͅü̵̫̻̱͙̙͖̖̳̆͌̋̽̉r̶̨̬̫͉̝̯̥͈̮̣͓̫̻̪͍̳̞̠̮̺̤̬̹̝̼̞̓̊́̇͐͘͝͠p̷̛̪̪̱̽́̎̽͛̏̎́͗̀͆͂̊̑̈́̋̅̽͊͘̚͠į̴͓͕̫͇͈͔̣̫̄͊̓͛̈́͆̀̓̾́͋̈́͘͠ş̷̪̝̳̘̺̽̀̌̏͛̈̂̍̑͗͛͐̀̄͐̎̾̏͂͛͘͘͘̕.̷̧̡̘͓̮̳͉̣͕̠̥͎̼̘̞̰̹̗͎̭̝͓̘̠̱͔͔͇̑̈́̐ͅ ̴͓̫͍̼̞̰̺̜̰̭͎̒̾̈́̏̓̐͒͆̎͂̏̄̓͆͘͝͠C̶̡̢̛̝̳̤̣̮̺͇̮̤̮͈͎̰͍̊͌̾͑̈̀̈̂͛̓͗͆̾̐̕͘͜͝͝ͅụ̶̧̢̘͔̣̜̭̮̤̳̻̗̹̹̺͎̗̞̖̫̙̲̏r̸͈̹̠̫͆͑͗̍̔̎̐̒̎͛̍̄̏̆̕̕͘͠͝ą̵̡̯͉̟͇͎̫̦̘͔̥̤͚̠̳͖̮̺̣̙̜̘̱̼̅̽̅̈̋̊͒̾̽̃̏̈́̈́͌̕͜͜͝ͅb̷̟̮̻̪͇͚͎̫͎͕̻̍̀͂̀̀i̸̼̦͈͓̪͚͇̯̯̝͙͘̕̕ṭ̸̢̀̄̀͋́́̐̀͑̇̇̈́̽͛͗̕ȕ̸̥͕̮̰̤̺͈̩̖͗̈́̆͗̽͐̉̓̉̑̈́́̔̍̅̕͝͝ŗ̸̢͕̺͚̦͙͇͙̗͈̓̽̽̅͌̈́̐͐́̈́̂̈̇̾͛͂̉̋̐͋͗̒̚͝ ̵̝͖̌̏̈́̀̀̉͐͆̓̋̏͛͝a̶̘͉̦͔͎͔̣̲̓͗͜ͅç̸̰̻͍̝̳̮̳̺͙̪̞̱̜̳̦̝͛͒̀͊̓͒ ̴͎͓͉͖͈͈͈̞̆̕ḑ̵̭̠͉͕͔̗͂̍̏̈̊͌́̐̆̓̈́̆͛͐͂ư̴̩̜̮͓̠̜̹̳̬͚̙̞̍̈̑̋͊̌͂͋̑͑͊̇͗̑̄̾̊͌̊̀̉͝į̷̤̞͙̠͐͆̏͊̊͗̆̀̆̉͝͝ͅ ̷̡̙͓̣̬̼̋͂̏̏͌͛̽̄̐͌̾̈̊̃̑̆̍̈͒̈́̚͜͠͝ȩ̷̣͇̮͚͎̺̘̣̤̥̗̱̘͖͎͙̠̞̗͍͎̘̪̥̣́̉͋͌̑̃͋͐̈́̈́̀͑͝ͅͅͅl̷̨̛͉̗͓͙͍̥̜͕͈̜͇̘̮̪̾̋̉̀͘͘͜ḯ̸̧̨̥̞̘͖̼̮̪̺̮͔̘̮̜̭̎͛̌̉̽͐͗̈͋̅̊͌̕ṫ̴̩͙̘̦̟̤̪̰̭̱̱͙̫̟̈̀̍̌.̶̧͖̹̭̥̘̜̦̼̖̣̩̦̾̆͛̽̽̈̀̎̅̀̂̃̅̎̈͒̋́͛̆͘ͅ ̸̺̪͔͍̣̭̥̩̃̂́̾́̈́̓͋̊̑̇̿̀̅́͆̿͑̋̂̈́͒̂̕̚̕͜͝͝V̶̢͔̣̱͕̣̦̻̖̻̹̳̤̭͎̲̎̉̅̏͒̔̇̃͛̆͌̅̈́̚͘͜͠͝͠͝í̷̡̡̻͓̥̼͉̝̝̼͈̞̮̹̩̯̞̗͎̘̪͉̱̝͉̾͂̄͝v̴̢̡̡̧̢͙̪̝̖̳͍̯̥̼̥̙̯͎͕͍̭̥̎̽͋̂̊͂̃͐̆́̐̄̒͗̈́̚͝͝ȃ̷̼̐̊̉̆͛͌̒̀̎̀͒̃̽̈́̐̈́̏̓͑͋̃͆͝͠͝m̵̛̟̗̻̲̼̯͊̉͌̄̂͋͐̓͒̓̾͊̉̅͘̕͝͝͝ừ̸̡̢̧̹̭͎̹͉͙͇̥̖̘͔̖̮͈̈̇͂̇̄̀̕͝ş̴̘̫͓̹͕̭̤̮̼̱͎̬̱̜̃̈́̀̊̀́͗̚͜ ̴̢̢̧̥̰̘̮̖̜̤̺͈͈̟͍̣̹͚̟͛̈́̒͐̚ͅs̷̢̨̡͕̺͚̤̘͙̳̬͍͓͓̪̤̘͔̠͎̺̍͂̔̾̊̋͗̇́͐̈́̈́̌̚͜ͅͅą̴̧͍̬͉̥̺͈̮̟͙͓̩̮̹̪̈̊͜ͅg̴̨̢̝̦̲̠͍͔͚̠̫͚̦͇͚͉͎̹̱͓̬̣̲͂̈́ḯ̷͙͖̞̭̼̼̺͛̅͛̎̽̈́͌͌̄͋̀̀͒͐̆̓̃̍̍͑̋̇̄͘̚͘͜͝t̸̡̡̡̢̙̻̺̭͉̻͎̟̺̣̰̦͌͋̓̀̀͆̄͂͒͋̆̄̀̈́̚t̸̢̛̬͙̲̠̞͈̻̲͈͓̘̗̪͉̪̣̮͈̹̎̂͐̀͝ͅͅĩ̸̧͔̲̯̗̝̮̘̩̣̣̯̼̘̲̮̟̣̟̳̙ͅs̵̡̻͖̥͕̬̣̝͉̹̺͖͇̰̐̅͂̇̊̇͛̓͜͝ͅͅ ̵̧̰̼͓̞̺̹͎̺̫̦̞̼͙̺̥̗̭͕̝͓̼̣̜͇̻̭̳̙͆̓̑̆̀̋̾̃͑͘̕͝j̶̧̢̞͙͙̬̯̮̙̦͖̮̠̱̹͈̻̻͈͚̳͓̭̾̆́̍̒̏̏̈̿͐̌̋̽ṳ̸̧̡̗̝̩̪̗͇̥̰̘̪̹͈̹̯̠̮͆̄̇̾̀̌̈́̇̔͠s̸̢̳͓͚̝͉̜̈̃ͅt̸̨̧̢̹̱̳͇̞̼̯̬͉̱̠̙̩͇̹͚͖̜͈̭̀̔̿̑͜ǫ̷̳̟̣͙͍̫̞̜͔̗͍̱̘̱̺̮͇̝̯̮̤̟͓͑͑̈́͆̾̉͌͝ ̵̨͕̺̤̹̼̯̩̞̔͗̽̊̅̈́̋̓ã̷̢̨͎̯͚̺̺̜͓͔͚̟̞̳̬̬̳̺̪͍͘̚ͅt̵̡͙̤͉͓̱͔̗̜̦͛̽̎̌͛̿̐͌̌̽̽͆̽̚͜͝͝ ̶̨̛̼̼̥̙̥̰̬̰̼̘̥͉͇͉͇̰͔̪͙̙̰͗͗ͅͅͅͅņ̴̥̰̫̇̆̔̔̈́͛̒̐̅̅̄̄̂͋̓̔͌̑͑̒͗͌̔̂̿̓̚̕͜į̷̨̨̡̲̖̯̦̙̠̦̝͇͓͖̣͖̍̉́͝ͅs̵̝̠̹̠̟̳̣̯͑͑͜ͅḭ̴̧̨̛͎̥̭̟̱̪̟̦̝͓̙͔̰̰̹̲̬͍̗̀͂̂̉̎́̓̔̈́̇̄̀̾̔̀͑̅́̅͗̚͘͜͝͝͝͠ͅ ̴̡̛͉̲̼͚̭̩͈̝̱̥̙̘̭͓̩̥̖͔̤̪̈́̈́̇̎͛̌̈́̅̒͂͌̃͂̎̊̍͘͜͜͝ͅd̴̢̻̖͇̜̤͉̖͕͕̈́͛͗̋̔̓̈́͑̀͜͠͝i̷̠͝ͅg̴̦̥̗̣̲̜͉̤̱̙͈̜͇͗̑̍̎̌͛̽̍̐̃͐̊͗̔̊̽̈́̀̉̽̄͗͘̚̚͜ņ̴̢̮̻̹̭̼̮̗͕͓̰̹̦͓̲̤̜̼̈́͒̽̂̂̅̀͋̂̈́͑̽̈̌̎͘͝͝͝í̷̢̛̟̗̥͔̹͙̦͍̗͔̘̻̬̰̦͆̒̏̍̃̈̑̀̓̉̃̊̅́͂̒̀́̓͠͝͠s̸̡̨̧̨̙̻͍̲͕̪̻̬͔̝͎̻̩̦̀̔͊̂s̴̬̲̪͍̘͉̅͑̇̽̂̊̈́̔́̽͊̋͘̚͘ì̵̧̧̨̛̯̟̹̠̯̞̥̺̮̤̘̞͈̻̰̘͉̺͙̠̃̃̔̄̈́̑̒̿͒̃̾̋̓͋̏̽̚̕̚͜m̵̨̛͕͉̠̼̱̖͍̦̖̟͂́̒͗͊̉̈́̓͛͂̈́͋̊̋̊͘͝ ̴̛̛̞̓͒̒̏͑̈̃̑̈́͋̈́̊̽̅̚̚͠͝͝͠͠g̵̢̛͙͕̜̼̜̱̙̭̖̠̖̜͚̹͈̖̺̥̟̙̩̲̯̱͂́̍̈̅͐̊́̑͋͛̅̌̍̂̕͝ͅͅr̶̡͕͚̺̗͙̬̭̗̼̼̥̉͛͆̔̑̇̏̕͝a̶̛̝̲͖̮̞̻̦̟̥̰͋̎̌̎̔̇͆̇̽̍̆͋̄̚̕̚͝v̵̢̦̬̰̹̩̞͉͉̘̺̣̼̰̻̫̹̟̱͍͖̅͛i̶̡̧̯̯̤͍̼̥̙͔̯̙̹̝͔̱͕͙͉͊̋͋̃̈́d̸̺̠͉͉̫̹̦̭͕̹̜̈́̃͗̎͊̂́̚̚͠ą̷̢̨̧̛̣͉̖͈̞̖͓̰͇̣̟̦̝̠͉̹̳̙̾̽͂̂́̓͋͑͗̐͂̎̎̅̈́͊́̀͘̕̚̚̕͘͝͝ͅ.̴̥͉͎̣̘̘̺̳̇͑͘ͅ ̶̮̗͙͓̱̥̦̭̖̠̊̒̕Ş̸̧̼̘̣̠̺͈̙̤̱̪̗͍̩̰̹̻͋̍̅̈̉͆͂͂́̋́͜ḛ̵̫͉̖̬̭̈̇̅̌̀̇̋͗͘̕͝d̶̛̮̼̜̹̩̩̜͍͐̑͌̈́̋̀̔͌͆͂͋͛̇̓̃̿̀̅̈̉́̊̏̕ ̶̺̦̘̥̖̾͋̍͑̓̋̎̉͊̑̅̏̇͗͋̂͗̆̅͆͘̚͝ư̶̡̛̖̠͖̣͚̏̃̑̿̈̉́̔̀̆͌̓̚̕͠ṱ̶̛̠̳̱͇̰̬̦̥̺͑̒̃͛̽̑́́̋̈́̋͐̇̿̄̋͛́̍̅̎͊͌͛̓͝ ̷̛͚̦̦̞̝̈́̀̎̅́̈́̔̄̈́͊͐̈́̐̈́̏̈́̎̚͘͘͝s̷̢̧̛͚͉̤̪̼̭̙̟̥͙͚̮̞͙͓̪̟̝̮͈̟̄͗̎͋̽̉̈̅̆͊̍̕̕ơ̴̡̗̗̣̖̖̰̳̭̙̻̗̣̩̦̙̞͇̠̈͌̐̋̈̀̍͂̈́͊̔̍̀̓̀́̈́͋͠͠͝͝l̸̩͕̋̅͂͒̿̿̈́̎̇̆̌̂̿̇̇̄̔̓͗̓̐̒`
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  


  
const { key } = await conn.sendMessage(m.chat, { text: txtt },{ quoted: fkontak });


const { fromMe, id, participant } = m
  
  

  
  
let ppl = `                 ⸸  ━━━◥◣̶̢̗͚̜̙̲̃͑̿̓̈́́̾̋̀̓̑͒̊̓̉͌̆͛̄̐͗̔̕͝͝a̵̧̻̫̺̼̳̫̾̍t̸̨̡̹̟̯͚̦̩͉̟̀̓̈́̚͝.̵̢̬̳̼̗̪̜̯͈̩̖̯̪̹̺̺̰̞́◢◤━━━━ ⸸
 ִ ࣪𖤐  𝙉𝙤 𝙢𝙤𝙢𝙚𝙣𝙩𝙤❟ 𝙚𝙨𝙩𝙤𝙪 𝙞𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡  `

let megg = `  𝑵𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒂𝒔 ȉ̶s̸̡͈̗͍̬̼̜̘̠̖͇̉ͅ 𝒎𝒂𝒊𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂𝒔 𝒎𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐, 𝒆𝒏𝒗𝒐𝒍𝒕𝒐 𝒑𝒆𝒍𝒂 𝒏𝒆𝒗𝒐𝒂 𝒅𝒐 𝒎𝒆𝒖 𝒑𝒓𝒐̶̢̗͚̜̙̲̃͑̿̓̈́́̾̋̀̓̑͒̊̓̉͌̆͛̄̐͗̔̕͝͝a̵̧̻̫̺̼̳̫̾̍t̸̨̡̹̟̯͚̦̩͉̟̀̓̈́̚͝.̵̢̬̳̼̗̪̜̯͈̩̖̯̪̹̺̺̰̞́𝒑𝒓𝒊𝒐 𝒔𝒆𝒓. ̶̃͑̿̓̈́́̾̋̀̓͝t̸̀̓̈́̚͝𝑴𝒊𝒏𝒉𝒂 𝒂𝒍𝒎𝒂 c̴̛̗̺̙͙͉̳͔̰̟̿̔̇͗͂̏͂͌̓͘͘ͅͅu̷̫̬̩̝͓͆̑̎̾̅̈̃̉̓̈́͗̅̀́l̸̛̦̥͙̗̱͂̎͆̈́͒̂̎̒̉̇̓́̔̈́̎͂̋͘͘͝͝ 𝒗𝒂𝒈𝒖𝒆𝒊𝒂 𝒑𝒐𝒓 𝒄𝒂𝒎𝒊𝒏𝒉𝒐𝒔 𝒕𝒐𝒓𝒕𝒖𝒐𝒔𝒐𝒔, 𝒊𝒏𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒗𝒆𝒍 i̸̛̋̄̈́̿̏͒̔̓̒́̾̎̒̎̇͘͝͝͠ḃ̴͍͉̪̼̰͖̦̥̙̹͒͒̀̄͌͑͂͑̂͗̀͑̓̇͌̊͗̐͘͠ͅe̴̛̋̈́̾ 𝒑𝒂𝒓𝒂 𝒗𝒐𝒔. . . .
 ⸸ 𝑷𝒆𝒓𝒕𝒖𝒓𝒃𝒆 𝒐 ȉ̶̫̇̅̈́̀̍̄̏̐̅c̸̡̡̧̰̞͍̟̟͕̙̟̯̯͔͉̺̩̩͇͕̙̯̱͈̳̠̦̲̃̏͜͠e̵̢̛͎͈̝̘͙͕͉̥͍͍̬͔̮̤̤̼̗̬̠͇̓̔̆̀͑̑̀͐̐̽̓s̸̡͈̗͍̬̼̜̘̠̖͇̉ͅ 𝒎𝒆𝒖 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐 𝒆 o̵̡̡͕̫͓̙̲̻͙̭̜̪̟̠̟͉͇̲̦͎̐͂̓̓̎́̈́r̵̛̄̑̈̆̃̌̍̌̐̇͛̐̍͌͌̕͝͠ 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂𝒓𝒂 𝒖𝒎𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒒𝒖𝒆 𝒅𝒆𝒗𝒐𝒓𝒂𝒓𝒂 𝒔𝒖𝒂 𝒔𝒆𝒓𝒆𝒏𝒊𝒅𝒂𝒅𝒆.`

// Função para imprimir caracteres com um intervalo de tempo
console.log(ppl)
console.log(ppl.length)
    
// Chamar a função para imprimir a string lentamente



for (let i = 0; i < ppl.length; i+=57) {
    let tempString = ppl.slice(0, i + 57);
    console.log(tempString);
 
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 50));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${tempString} 
    
  ${txtt}`, edit: key });
}
for (let i = 0; i < megg.length; i+=250) {
    let mdf = megg.slice(0, i + 250);
    console.log(mdf);
     
     
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 280));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${ppl} 
    
  ${mdf}
${txtt}`, edit: key });
}

// Função para imprimir caracteres com um intervalo de tempo

    


// Chamar a função para imprimir a string lentamente




  


}

if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  &&
global.db.data.users[global.criador].dormindo &&
!global.db.data.chats[m.chat].except)
{
  console.log("ok below...")
  console.log("nao me perturbe...")
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  


  let txtt = `╔═━──━▒ ۞ ▒━────╗
     𝑬𝒔𝒕𝒐𝒖 𝒅𝒐𝒓𝒎𝒊𝒏𝒅𝒐! 𖤍
╚═━──━▒ ۞ ▒━──━═╝
ᶻ 𝗓 𐰁ᶻ 𝗓 𐰁ᶻ 𝗓 𐰁 .ᐟ`
  
const { key } = await conn.sendMessage(m.chat, { text: txtt },{ quoted: fkontak });


const { fromMe, id, participant } = m
  
  function getTimePassedMessage(dateStart) {
  let now = new Date(); // Current date and time
  let elapsedTime = now - dateStart; // Difference in milliseconds

  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  // Construct the message based on the elapsed time
  if (days > 0) {
    return ` ${days} dias, ${hours % 24} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`;
  } else if (hours > 0) {
    return ` ${hours} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`;
  } else if (minutes > 0) {
    return ` ${minutes} minutos e ${seconds % 60} segundos.`;
  } else {
    return `${seconds} segundos.`;
  }
}
let startd = new Date(global.db.data.users[global.criador]?.offlineStart); // Replace with your actual start date in UTC

  
  

let ppl = `
_၊၊| 𝔑𝔞𝔬 𝔪𝔢 𝔭𝔢𝔯𝔱𝔲𝔯𝔟𝔢𝔪! ✮ |
၊၊_`

let megg = `> 𝗩𝗮𝗴𝗮𝗻𝗱𝗼 𝗲𝗺 𝗺𝗲𝘂𝘀 𝗱𝗲𝘃𝗮𝗻𝗲𝗶𝗼𝘀, 𝗽𝗲𝗿𝗮𝗺𝗯𝘂𝗹𝗮𝗻𝗱𝗼 𝗽𝗲𝗹𝗼 𝗿𝗲𝗶𝗻𝗼𝘀 𝗱𝗼𝘀 𝗦𝗼𝗻𝗵𝗼𝘀, 𝗔𝗼𝗻𝗱𝗲 𝗰𝗵𝗮𝗺𝗮𝗺-𝗺𝗲 𝗠𝗼𝗿𝗳𝗲𝘂, 𝗲 𝘀𝗼𝘂 𝗮𝗾𝘂𝗲𝗹𝗲 𝗾𝘂𝗲 𝗰𝗼𝗹𝗵𝗲 𝗮𝘀 𝗶𝗱𝗲𝗶𝗮𝘀 𝗲 𝗽𝗲𝘀𝗮𝗱𝗲𝗹𝗼𝘀. 𝗡𝗮𝗼 𝗽𝗲𝗿𝘁𝘂𝗿𝗯𝗲𝗺 𝗼 𝗺𝗲𝘂 𝘀𝗼𝗻𝗼 𝗼𝘂 𝘀𝗲𝗾𝘂𝗲𝗿 𝗼𝘂𝘀𝗲𝗺 𝘁𝗶𝗿𝗮𝗿-𝗺𝗲 𝗱𝗲𝘀𝘁𝗲𝘀 𝗺𝗲𝗶𝗼𝘀
> _*𝗘𝘂 𝗲𝘀𝘁𝗮𝗿𝗲𝗶 𝗱𝗲 𝗼𝗹𝗵𝗼*_ ༒︎ `

// Função para imprimir caracteres com um intervalo de tempo
console.log(ppl)
console.log(ppl.length)
    
// Chamar a função para imprimir a string lentamente



for (let i = 0; i < ppl.length; i+=57) {
    let tempString = ppl.slice(0, i + 57);
    console.log(tempString);
 
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 50));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${tempString}
  
  ╰──┉─¡! • !¡─┉───╯          `, edit: key });
}
for (let i = 0; i < megg.length; i+=250) {
    let mdf = megg.slice(0, i + 250);
    console.log(mdf);
     
     
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 280));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${ppl}
  ${mdf}
  
  ╰──┉─¡! • !¡─┉───╯          `, edit: key });
}

// Função para imprimir caracteres com um intervalo de tempo

    


// Chamar a função para imprimir a string lentamente




  


}


if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  && global.db.data.users[global.criador].ocupado && !global.db.data.chats[m.chat].except) {
  console.log("ok below...")
  console.log("nao me perturbe...")
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  


let txtt = `  ╭────────┉─ • ─┉────────╮

𖤍  𝙉𝙤 𝙢𝙤𝙢𝙚𝙣𝙩𝙤❟ 𝙚𝙨𝙩𝙤𝙪 𝙞𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙫𝙚𝙡  `
  
const { key } = await conn.sendMessage(m.chat, { text: txtt },{ quoted: fkontak });


const { fromMe, id, participant } = m
  
  function getTimePassedMessage(dateStart) {
  let now = new Date(); // Current date and time
  let elapsedTime = now - dateStart; // Difference in milliseconds

  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  // Construct the message based on the elapsed time
  if (days > 0) {
    return ` ${days} dias, ${hours % 24} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`;
  } else if (hours > 0) {
    return ` ${hours} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`;
  } else if (minutes > 0) {
    return ` ${minutes} minutos e ${seconds % 60} segundos.`;
  } else {
    return `${seconds} segundos.`;
  }
}
let startd = new Date(global.db.data.users[global.criador]?.offlineStart); // Replace with your actual start date in UTC

  
  
let ppl=`                         ༺༻
𝑳𝒂𝒎𝒆𝒏𝒕𝒐 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒂𝒎𝒆𝒏𝒕𝒆, 𝒎𝒂𝒔 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐-𝒎𝒆 𝒐𝒄𝒖𝒑𝒂𝒅𝒐 𝒂𝒈𝒐𝒓𝒂 𝒆 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆𝒓𝒆𝒊 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒆𝒓 𝒂 𝒔𝒖𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒄𝒂𝒐 𝒅𝒆 𝒊𝒎𝒆𝒅𝒊𝒂𝒕𝒐. 𝑻𝒂𝒐 𝒍𝒐𝒈𝒐 𝒎𝒆 𝒔𝒆𝒋𝒂 𝒑𝒐𝒔𝒔𝒊𝒗𝒆𝒍, 𝒇𝒂𝒓𝒆𝒊 𝒄𝒐𝒏𝒕𝒂𝒕𝒐.
`
let megg = `
> ────────
> 𝘛𝘦𝘮𝘱𝘰 𝘢𝘶𝘴𝘦𝘯𝘵𝘦: ${getTimePassedMessage(startd)}
> ──────── `

// Função para imprimir caracteres com um intervalo de tempo
console.log(ppl)
console.log(ppl.length)
    
// Chamar a função para imprimir a string lentamente



for (let i = 0; i < ppl.length; i+=57) {
    let tempString = ppl.slice(0, i + 57);
    console.log(tempString);
 
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 50));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${tempString}
  
  ╰────────┉─¡! • !¡─┉────────╯          `, edit: key });
}
for (let i = 0; i < megg.length; i+=250) {
    let mdf = megg.slice(0, i + 250);
    console.log(mdf);
     
     
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 280));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${ppl}
  ${mdf}
  
  ╰────────┉─¡! • !¡─┉────────╯          `, edit: key });
}

// Função para imprimir caracteres com um intervalo de tempo

    


// Chamar a função para imprimir a string lentamente




  


}
if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  &&
global.db.data.users[global.criador].ghost && !global.db.data.chats[m.chat].except)
{
  console.log("ok below...")
  console.log("nao me perturbe...")
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  


let txtt = `  - - ┈┈∘┈˃̶༒˂̶┈∘┈┈ - -
𒈒 ᴇᴜ ᴘʀᴇᴄɪsᴏ ᴅᴇ ᴜᴍ ᴛᴇᴍᴘᴏ. . . `


  
const { key } = await conn.sendMessage(m.chat, { text: txtt },{ quoted: fkontak });


const { fromMe, id, participant } = m
  

  
let ppl=`☰☰☳☴☵☴☲☱☳☰☵☳☷☵☶☳☵
༒ ᴠᴏʟᴛᴀʀᴇɪ ᴀssɪᴍ ǫᴜᴇ ᴘᴏssɪ́ᴠᴇʟ`
let megg = `᭄ ᴇᴍ ᴄᴀsᴏ ᴅᴇ ᴘʀᴏʙʟᴇᴍᴀs ᴄᴏᴍ ᴏ ʙᴏᴛ, ᴇɴᴄᴀᴍɪɴʜᴇᴍ ᴀ sɪᴛᴜᴀᴄ̧ᴀ̃ᴏ ᴀᴛʀᴀᴠᴇs ᴅᴏ ᴄᴏᴍᴀɴᴅᴏ
.report ᴏᴜ ᴄʜᴀᴍᴇᴍ ᴀ ʟᴀᴜʀᴀ +55 45 9852-7531`

// Função para imprimir caracteres com um intervalo de tempo
console.log(ppl)
console.log(ppl.length)
    
// Chamar a função para imprimir a string lentamente



for (let i = 0; i < ppl.length; i+=57) {
    let tempString = ppl.slice(0, i + 57);
    console.log(tempString);
 
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 50));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${tempString}
  
  - - ┈┈∘┈˃̶꧁꧂˂̶┈∘┈┈ - -`, edit: key });
}
for (let i = 0; i < megg.length; i+=250) {
    let mdf = megg.slice(0, i + 250);
    console.log(mdf);
     
     
    // Aguarde 1 segundo antes de editar a mensagem
    await new Promise(resolve => setTimeout(resolve, 280));

    // Edite a mensagem após o atraso de 1 segundo
    await conn.sendMessage(m.chat, { text: `${txtt} 
    
  ${ppl}
  ${mdf}
  
  - - ┈┈∘┈˃̶꧁꧂˂̶┈∘┈┈ - -`, edit: key });
}

// Função para imprimir caracteres com um intervalo de tempo

    


// Chamar a função para imprimir a string lentamente




  


}




let userValue = global.db.data.chats[m.chat].users[m.sender].money;

if (isNaN(userValue)) {
  global.db.data.chats[m.chat].users[m.sender].money = 50;
}

if (m.msg && global.db.data.chats[m.chat].users[m.sender].silenced && !isOwner) {
  
   

//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

 return
 
} 

if (m.msg && global.db.data.chats[m.chat].acoes &&
!global.db.data.chats[m.chat].users[m.sender].adm && global.db.data.chats[m.chat].users[m.sender].morto
&& !(isOwner || m.fromMe)) {
console.log( global.db.data.chats[m.chat].users[m.sender].name + '  esta morto')
  
  if (typeof global.db.data.chats[m.chat].users[m.sender].elixirs=== 'undefined') {
  global.db.data.chats[m.chat].users[m.sender].elixirs = 0;
}
    
    
if(global.db.data.chats[m.chat].users[m.sender].elixirs>=1) {
global.db.data.chats[m.chat].users[m.sender].morto = false
global.db.data.chats[m.chat].users[m.sender].elixirs -=1
return m.reply(`⎔⎓──────────────
┃ 𒈒 𝑽𝒐𝒄𝒆 𝒇𝒐𝒊 𝒓𝒆𝒔𝒔𝒖𝒔𝒄𝒊𝒕𝒂𝒅𝒐 𝒆 𝒇𝒐𝒊 𝒖𝒔𝒂𝒅𝒐 𝒖𝒎
𝒆𝒍𝒊𝒙𝒊𝒓 🧪!
╰─...⎔⎓──────────`)
        
}

   
   /*
 m.react("🏴‍☠️")


const expelirMortos = [
    `𝕮𝖆𝖑𝖆-𝖙𝖊, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕿𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓ç𝖆 𝖓ã𝖔 𝖊 𝖇𝖊𝖒-𝖛𝖎𝖓𝖉𝖆 𝖊𝖓𝖙𝖗𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔 𝖉𝖔 𝖆𝖑𝖊𝖒! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖓𝖆𝖔 𝖙𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊.`,
    `𝕾𝖚𝖒𝖆! 𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖔𝖘 𝖈𝖔𝖓𝖋𝖎𝖓𝖘 𝖉𝖔 𝖆𝖑𝖊𝖒 𝖉𝖊 𝖔𝖓𝖉𝖊 𝖛𝖎𝖊𝖘𝖙𝖊.`
  ,
    `𝖁𝖆 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖉𝖊𝖒𝖔𝖓𝖎𝖔! 𝕿𝖚𝖆 𝖊𝖝𝖎𝖘𝖙𝖊𝖓𝖈𝖎𝖆 𝖊 𝖚𝖒𝖆 𝖆𝖋𝖗𝖔𝖓𝖙𝖆 𝖕𝖆𝖗𝖆 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕰𝖚 𝖙𝖊 𝖊𝖝𝖕𝖚𝖗𝖌𝖔, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖘𝖊𝖚 𝖗𝖊𝖎𝖓𝖔 𝖉𝖊 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔 𝖊 𝖉𝖊𝖎𝖝𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖊𝖒 𝖕𝖆𝖟`,
    `𝕾𝖎𝖑𝖊𝖓𝖈𝖎𝖔, 𝖆𝖑𝖒𝖆 𝖕𝖊𝖓𝖆𝖉𝖆. 𝕹𝖆𝖔 𝖙𝖊𝖓𝖘 𝖔 𝖉𝖎𝖗𝖊𝖎𝖙𝖔 𝖉𝖊 𝖋𝖆𝖑𝖆 𝖆𝖖𝖚𝖎, 𝖗𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖘𝖊𝖚 𝖒𝖚𝖓𝖉𝖔 𝖒𝖔𝖗𝖙𝖔 𝖊 𝖆𝖕𝖔𝖉𝖗𝖊𝖈𝖎𝖉𝖔.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊! 𝕿𝖚𝖆 𝖛𝖔𝖟 𝖓ã𝖔 𝖘𝖊𝖗𝖆 𝖔𝖚𝖛𝖎𝖉𝖆 𝖆𝖖𝖚𝖎.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕯𝖊𝖎𝖝𝖊 𝖊𝖘𝖙𝖆 𝖒𝖔𝖗𝖆𝖉𝖆 𝖉𝖊 𝖈𝖆𝖗𝖓𝖊 𝖊 𝖔𝖘𝖘𝖔𝖘 𝖊 𝖗𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖒𝖚𝖓𝖉𝖔 𝖉𝖔𝖘 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔𝖘.`,
    `𝕾𝖚𝖒𝖆! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖔𝖓𝖉𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊𝖘`,
    `𝖁𝖆, 𝖊𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖓𝖆𝖔 𝖙𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊 𝖒𝖆𝖎𝖘. 𝕿𝖊𝖚 𝖙𝖊𝖒𝖕𝖔 𝖆𝖈𝖆𝖇𝖔𝖚 𝖊 𝖘𝖚𝖆 𝖛𝖎𝖉𝖆 𝖊𝖘𝖈𝖔𝖗𝖗𝖊𝖚 𝖕𝖔𝖗 𝖘𝖚𝖆𝖘 𝖒𝖆𝖔𝖘`,
    `𝖁𝖆 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖉𝖊𝖒𝖔𝖓𝖎𝖔! 𝕹ã𝖔 𝖍𝖆 𝖑𝖚𝖌𝖆𝖗 𝖕𝖆𝖗𝖆 𝖙𝖎 𝖆𝖖𝖚𝖎.`,
    `𝕰𝖚 𝖙𝖊 𝖊𝖝𝖕𝖚𝖗𝖌𝖔, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖘𝖔𝖋𝖗𝖎𝖒𝖊𝖓𝖙𝖔 𝖊𝖙𝖊𝖗𝖓𝖔.`,
    `𝖁𝖔𝖑𝖙𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔 𝖊𝖙𝖊𝖗𝖓𝖔 𝖊 𝖉𝖊𝖎𝖝𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖊𝖒 𝖕𝖆𝖟.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊! 𝕮𝖊𝖘𝖘𝖆 𝖙𝖊𝖚 𝖑𝖆𝖒𝖊𝖓𝖙𝖔 𝖊 𝖛𝖆𝖎-𝖙𝖊 𝖊𝖒𝖇𝖔𝖗𝖆 𝖉𝖔 𝖒𝖚𝖓𝖉𝖔 𝖉𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕹ã𝖔 𝖍𝖆 𝖗𝖊𝖕𝖔𝖚𝖘𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎 𝖊𝖒 𝖒𝖊𝖎𝖔 𝖆𝖔𝖘 𝖛𝖎𝖛𝖔𝖘`,
   
    `𝖁𝖆, 𝖊𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖓𝖆𝖔 𝖙𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊 𝖒𝖆𝖎𝖘. 𝕰𝖘 𝖚𝖒𝖆 𝖘𝖔𝖒𝖇𝖗𝖆 𝖎𝖓𝖉𝖊𝖘𝖊𝖏𝖆𝖉𝖆.`,
    `𝖁𝖆 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖉𝖊𝖒𝖔𝖓𝖎𝖔! 𝕿𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒𝖆 𝖇𝖑𝖆𝖘𝖋𝖊𝖒𝖎𝖆.`,
    `𝕰𝖚 𝖙𝖊 𝖊𝖝𝖕𝖚𝖗𝖌𝖔, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖉𝖊𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔.`,
    `𝖁𝖔𝖑𝖙𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔 𝖊𝖙𝖊𝖗𝖓𝖔 𝖊 𝖉𝖊𝖎𝖝𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖊𝖒 𝖕𝖆𝖟.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊! 𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖓𝖔 𝖛𝖊𝖓𝖙𝖔 𝖊 𝖓𝖆 𝖊𝖘𝖈𝖚𝖗𝖎𝖉𝖆𝖔`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕰𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗 𝖊 𝖘𝖆𝖌𝖗𝖆𝖉𝖔, 𝖊 𝖙𝖚 𝖊𝖘 𝖚𝖒𝖆 𝖕𝖗𝖔𝖋𝖆𝖓𝖆𝖈𝖆𝖔 𝖆𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖖𝖚𝖊 𝖆 𝖍𝖆𝖇𝖎𝖙𝖆𝖒`,
    `𝕾𝖚𝖒𝖆! 𝕼𝖚𝖊 𝖙𝖚𝖆 𝖒𝖊𝖒𝖔𝖗𝖎𝖆 𝖘𝖊𝖏𝖆 𝖆𝖕𝖆𝖌𝖆𝖉𝖆 𝖉𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`
,
`𝕽𝖊𝖙𝖎𝖗𝖊-𝖘𝖊, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖆𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖆𝖉𝖔! 𝕹𝖆𝖔 𝖍𝖆 𝖊𝖘𝖕𝖆𝖈𝖔 𝖕𝖆𝖗𝖆 𝖛𝖔𝖈𝖊 𝖊𝖓𝖙𝖗𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖆𝖌𝖔𝖗𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖎𝖓𝖉𝖊𝖘𝖊𝖏𝖆𝖉𝖆! 𝕾𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒𝖆 𝖔𝖋𝖊𝖓𝖘𝖆 𝖆 𝖛𝖎𝖉𝖆.`,
    `𝕻𝖆𝖗𝖙𝖆 𝖎𝖒𝖊𝖉𝖎𝖆𝖙𝖆𝖒𝖊𝖓𝖙𝖊, 𝖘𝖊𝖗 𝖉𝖆𝖘 𝖙𝖗𝖊𝖛𝖆𝖘! 𝕰𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗 𝖓𝖆𝖔 𝖊 𝖘𝖊𝖚 𝖑𝖆𝖗.`,
    `𝕮𝖊𝖘𝖘𝖆 𝖙𝖊𝖚 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔, 𝖆𝖑𝖒𝖆 𝖕𝖊𝖗𝖉𝖎𝖉𝖆! 𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖔 𝖛𝖆𝖟𝖎𝖔 𝖉𝖊 𝖔𝖓𝖉𝖊 𝖛𝖎𝖊𝖘𝖙𝖊.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖉𝖊 𝖛𝖊𝖟! 𝕺 𝖒𝖚𝖓𝖉𝖔 𝖉𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖓𝖆𝖔 𝖘𝖚𝖕𝖔𝖗𝖙𝖆 𝖘𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆.`,
    `𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖆𝖇𝖎𝖘𝖒𝖔, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔 𝖒𝖆𝖑𝖎𝖌𝖓𝖔! 𝕬𝖖𝖚𝖎 𝖓𝖆𝖔 𝖍𝖆 𝖑𝖚𝖌𝖆𝖗 𝖕𝖆𝖗𝖆 𝖘𝖚𝖆 𝖊𝖝𝖎𝖘𝖙𝖊𝖓𝖈𝖎𝖆.`,
    `𝖁𝖆𝖎-𝖙𝖊 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖒𝖆𝖑𝖎𝖌𝖓𝖆! 𝕰𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖊 𝖕𝖗𝖔𝖙𝖊𝖌𝖎𝖉𝖔 𝖈𝖔𝖓𝖙𝖗𝖆 𝖛𝖔𝖈𝖊.`,
    `𝕾𝖚𝖒𝖆! 𝕾𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒 𝖉𝖊𝖘𝖗𝖊𝖘𝖕𝖊𝖎𝖙𝖔 𝖆𝖔 𝖓𝖔𝖘𝖘𝖔 𝖒𝖚𝖓𝖉𝖔 𝖉𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕾𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒𝖆 𝖒𝖆𝖓𝖈𝖍𝖆 𝖖𝖚𝖊 𝖉𝖊𝖛𝖊 𝖘𝖊𝖗 𝖆𝖕𝖆𝖌𝖆𝖉𝖆.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊 𝖊 𝖛𝖔𝖑𝖙𝖆 𝖕𝖆𝖗𝖆 𝖆 𝖊𝖘𝖈𝖚𝖗𝖎𝖉𝖆𝖔! 𝕹𝖆𝖔 𝖍𝖆 𝖕𝖆𝖟 𝖕𝖆𝖗𝖆 𝖛𝖔𝖈𝖊 𝖊𝖓𝖙𝖗𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
`𝕯𝖊𝖎𝖝𝖊 𝖊𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔 𝖎𝖓𝖖𝖚𝖎𝖊𝖙𝖔! 𝕬𝖖𝖚𝖎 𝖓𝖆𝖔 𝖊 𝖘𝖚𝖆 𝖒𝖔𝖗𝖆𝖉𝖆.`,
    `𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖔 𝖘𝖚𝖇𝖒𝖚𝖓𝖉𝖔, 𝖈𝖗𝖎𝖆𝖙𝖚𝖗𝖆 𝖉𝖆𝖘 𝖙𝖗𝖊𝖛𝖆𝖘! 𝕹𝖆𝖔 𝖍𝖆 𝖗𝖊𝖋𝖚𝖌𝖎𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎 𝖆𝖖𝖚𝖎.`,
    `𝕮𝖊𝖘𝖘𝖆 𝖙𝖚𝖆 𝖊𝖝𝖎𝖘𝖙𝖊𝖓𝖈𝖎𝖆, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖊𝖗𝖗𝖆𝖓𝖙𝖊! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖓𝖆𝖔 𝖙𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖒𝖆𝖑𝖉𝖎𝖙𝖆! 𝕿𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖓𝖆𝖔 𝖊 𝖉𝖊𝖘𝖊𝖏𝖆𝖉𝖆.`,
    `𝕾𝖚𝖒𝖆, 𝖈𝖗𝖎𝖆𝖙𝖚𝖗𝖆 𝖉𝖔 𝖆𝖑𝖊𝖒! 𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖔 𝖛𝖆𝖟𝖎𝖔 𝖊𝖙𝖊𝖗𝖓𝖔.`,
    `𝖁𝖆 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖉𝖊𝖒𝖔𝖓𝖎𝖔 𝖘𝖔𝖒𝖇𝖗𝖎𝖔! 𝕰𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖊 𝖕𝖆𝖗𝖆 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕰𝖚 𝖙𝖊 𝖊𝖝𝖕𝖚𝖑𝖘𝖔, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖎𝖌𝖓𝖔! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔 𝖊𝖙𝖊𝖗𝖓𝖔.`,
    `𝕾𝖎𝖑𝖊𝖓𝖈𝖎𝖔, 𝖆𝖑𝖒𝖆 𝖕𝖊𝖗𝖉𝖎𝖉𝖆! 𝕰𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗 𝖓𝖆𝖔 𝖊 𝖕𝖆𝖗𝖆 𝖙𝖎.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊, 𝖋𝖆𝖓𝖙𝖆𝖘𝖒𝖆 𝖘𝖔𝖒𝖇𝖗𝖎𝖔! 𝕿𝖚𝖆 𝖛𝖔𝖟 𝖓𝖆𝖔 𝖘𝖊𝖗𝖆 𝖔𝖚𝖛𝖎𝖉𝖆 𝖆𝖖𝖚𝖎.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊 𝖆𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕾𝖚𝖒𝖆, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖒𝖚𝖓𝖉𝖔 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.`,
    `𝖁𝖆, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔! 𝕿𝖊𝖚 𝖙𝖊𝖒𝖕𝖔 𝖊𝖓𝖙𝖗𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖙𝖊𝖗𝖒𝖎𝖓𝖔𝖚.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖆𝖌𝖔𝖗𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆! 𝕿𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒 𝖎𝖓𝖘𝖚𝖑𝖙𝖔 𝖆𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕻𝖆𝖗𝖙𝖆, 𝖈𝖗𝖎𝖆𝖙𝖚𝖗𝖆 𝖉𝖔 𝖆𝖑𝖊𝖒! 𝕰𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖊 𝖕𝖗𝖔𝖎𝖇𝖎𝖉𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎.`,
    `𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘, 𝖆𝖑𝖒𝖆 𝖊𝖗𝖗𝖆𝖓𝖙𝖊! 𝕬𝖖𝖚𝖎 𝖓𝖆𝖔 𝖍𝖆 𝖗𝖊𝖕𝖔𝖚𝖘𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎.`,
    `𝕯𝖊𝖎𝖝𝖊 𝖊𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗, 𝖘𝖊𝖗 𝖉𝖆𝖘 𝖙𝖗𝖊𝖛𝖆𝖘! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖊 𝖘𝖆𝖌𝖗𝖆𝖉𝖔.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆, 𝖋𝖆𝖓𝖙𝖆𝖘𝖒𝖆! 𝕾𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒𝖆 𝖔𝖋𝖊𝖓𝖘𝖆 𝖆𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖛𝖆𝖟𝖎𝖔, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕰𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖓𝖆𝖔 𝖙𝖊 𝖕𝖊𝖗𝖙𝖊𝖓𝖈𝖊.`,
    `𝕾𝖚𝖒𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖎𝖓𝖖𝖚𝖎𝖊𝖙𝖆! 𝕬𝖖𝖚𝖎 𝖓𝖆𝖔 𝖍𝖆 𝖑𝖚𝖌𝖆𝖗 𝖕𝖆𝖗𝖆 𝖛𝖔𝖈𝖊.`,
    `𝖁𝖆 𝖊𝖒𝖇𝖔𝖗𝖆, 𝖉𝖊𝖒𝖔𝖓𝖎𝖔! 𝕰𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗 𝖊 𝖕𝖗𝖔𝖙𝖊𝖌𝖎𝖉𝖔 𝖈𝖔𝖓𝖙𝖗𝖆 𝖔 𝖒𝖆𝖑.`,
    `𝕰𝖚 𝖙𝖊 𝖊𝖝𝖕𝖚𝖑𝖘𝖔, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝖁𝖔𝖑𝖙𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖙𝖔𝖗𝖒𝖊𝖓𝖙𝖔 𝖊𝖙𝖊𝖗𝖓𝖔.`,
    `𝕾𝖎𝖑𝖊𝖓𝖈𝖎𝖔, 𝖆𝖑𝖒𝖆 𝖎𝖓𝖖𝖚𝖎𝖊𝖙𝖆! 𝕹𝖆𝖔 𝖙𝖊𝖓𝖘 𝖑𝖚𝖌𝖆𝖗 𝖆𝖖𝖚𝖎.`,
    `𝕮𝖆𝖑𝖆-𝖙𝖊, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖘𝖔𝖒𝖇𝖗𝖎𝖆! 𝕿𝖚𝖆 𝖛𝖔𝖟 𝖓𝖆𝖔 𝖘𝖊𝖗𝖆 𝖔𝖚𝖛𝖎𝖉𝖆 𝖓𝖊𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖊 𝖉𝖔𝖘 𝖛𝖎𝖛𝖔𝖘.`,
    `𝕾𝖚𝖒𝖆, 𝖊𝖘𝖕𝖊𝖈𝖙𝖗𝖔 𝖒𝖆𝖑𝖉𝖎𝖙𝖔! 𝕽𝖊𝖙𝖔𝖗𝖓𝖊 𝖆𝖔 𝖙𝖊𝖚 𝖒𝖚𝖓𝖉𝖔 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.`,
    `𝖁𝖆, 𝖊𝖘𝖕𝖎𝖗𝖎𝖙𝖔 𝖕𝖊𝖗𝖉𝖎𝖉𝖔! 𝕿𝖊𝖚 𝖙𝖊𝖒𝖕𝖔 𝖊𝖓𝖙𝖗𝖊 𝖔𝖘 𝖛𝖎𝖛𝖔𝖘 𝖆𝖈𝖆𝖇𝖔𝖚.`,
    `𝕯𝖊𝖘𝖆𝖕𝖆𝖗𝖊𝖈𝖆 𝖆𝖌𝖔𝖗𝖆, 𝖘𝖔𝖒𝖇𝖗𝖆 𝖎𝖓𝖉𝖊𝖘𝖊𝖏𝖆𝖉𝖆! 𝕿𝖚𝖆 𝖕𝖗𝖊𝖘𝖊𝖓𝖈𝖆 𝖊 𝖚𝖒 𝖎𝖓𝖘𝖚𝖑𝖙𝖔.`,
    `𝕻𝖆𝖗𝖙𝖆, 𝖈𝖗𝖎𝖆𝖙𝖚𝖗𝖆 𝖉𝖆𝖘 𝖙𝖗𝖊𝖛𝖆𝖘! 𝕰𝖘𝖙𝖊 𝖒𝖚𝖓𝖉𝖔 𝖊 𝖕𝖗𝖔𝖎𝖇𝖎𝖉𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎.`,
    `𝖁𝖔𝖑𝖙𝖊 𝖕𝖆𝖗𝖆 𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘, 𝖆𝖑𝖒𝖆 𝖎𝖓𝖖𝖚𝖎𝖊𝖙𝖆! 𝕬𝖖𝖚𝖎 𝖓𝖆𝖔 𝖍𝖆 𝖉𝖊𝖘𝖈𝖆𝖓𝖘𝖔 𝖕𝖆𝖗𝖆 𝖙𝖎.`,
    `𝕯𝖊𝖎𝖝𝖊 𝖊𝖘𝖙𝖊 𝖑𝖚𝖌𝖆𝖗, 𝖘𝖊𝖗 𝖘𝖔𝖒𝖇𝖗𝖎𝖔! 𝕰𝖘𝖙𝖊 𝖗𝖊𝖎𝖓𝖔 𝖊 𝖘𝖆𝖌𝖗𝖆𝖉𝖔.`
];
m.reply(`─┅──✞︎──┅─ 
𓌜 ${expelirMortos.getRandom()}
─┅────┅─`)

m.react("⚰️")
 return
 */ 
 
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
    
    
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

return
} 
if (m.msg && global.db.data.chats[m.chat].acoes &&
global.db.data.chats[m.chat].users[m.sender].mortoDemonio && !(isOwner || m.fromMe)) {
  

   
 
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
    
    
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

return
} 

if(m.msg && global.db.data.chats[m.chat].users[m.sender].isKicked && !isOwner)

{



 m.react("🏴‍☠️")

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return
}

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
global.dirname = ___dirname

for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
  isROwner,
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
// if (typeof e === 'string') continue
console.error(e)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
}}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
// global.dfail('restrict', m, this)
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix

let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAllowed,
isAdmin,
isCriadora,
plugin,
isBotAdmin,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail // When failed
let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command) :
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ? // String?
plugin.command === command :
false

if (!isAccept)
continue
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]


if(!m.isGroup && !isAllowed && global.db.data.settings[this.user.jid].antiPrivate &&  global.db.data.chats[m.chat]?.msgCount >= 5){ return !0 }
const scheduledDateTime = new Date( global.db.data.chats[m.chat]);
    const currentDate = new Date();
if(currentDate >= scheduledDateTime){
  global.db.data.chats[m.chat].isBanned = true
  m.react("🚫")
  return !0
}
    // Get the current date and time
    
    
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !(isAdmin
|| isOwner|| m.sender==global.cocriador && m.sender == '351927232470@s.whatsapp.net' ))
{
  console.log(" chat banido")
  return // Except this
}
if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned && !isCriadora && !isROwner) {
  console.log("🚽🚽🚽🚽")
  return 
}
if (m.text && global.db.data.chats[m.chat].users[m.sender].banned && !(isCriadora ||isROwner)) {
 
if (user.antispam > 2) return
m.reply(`
 ━━━━━━━━━⬣💀⬣━━━━━━━━
 
 🌒🪦 𝗕𝗮𝗻𝗶𝗱𝗼! 𝗖𝗼𝗺𝗮𝗻𝗱𝗼𝘀 𝘃𝗲𝗱𝗮𝗱𝗼𝘀! 𝗡𝗮 𝗽𝗲𝗻𝘂𝗺𝗯𝗿𝗮 𝗱𝗶𝗴𝗶𝘁𝗮𝗹, 𝘀𝘂𝗯𝗺𝗲𝘁𝗮-𝘀𝗲 𝗮 𝗲𝘅𝗰𝗹𝘂𝘀𝗮𝗼 𝗱𝗮 𝗶𝗻𝘁𝗲𝗿𝗮𝗰𝗮𝗼 𝗰𝗼𝗺 𝗺𝗶𝗻𝗵𝗮 𝗽𝗲𝘀𝘀𝗼𝗮
 
 ━━━━━━━━━⬣🚫⬣━━━━━━━━`)
user.antispam++	
return

}
  
  
if (m.text && global.db.data.users[m.sender].blocked && !(isCriadora ||isROwner)) {
 
if (user.antispam > 2) return
m.reply(`
╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑼𝒎 𝒔𝒖𝒔𝒑𝒊𝒓𝒐 𝒆𝒄𝒐𝒂 𝒏𝒂𝒔 𝒑𝒓𝒐𝒇𝒖𝒏𝒅𝒆𝒛𝒂𝒔 𝒅𝒂 𝒏𝒐𝒊𝒕𝒆. . .

𝘝𝘰𝘴𝘴𝘢 𝘱𝘳𝘦𝘴𝘦𝘯𝘤𝘢 𝘦𝘴𝘵𝘢 𝘱𝘳𝘰𝘪𝘣𝘪𝘥𝘢 𝘯𝘦𝘴𝘵𝘦 𝘳𝘦𝘪𝘯𝘰 𝘴𝘰𝘮𝘣𝘳𝘪𝘰. 𝘈𝘤𝘦𝘪𝘵𝘦 𝘦𝘴𝘵𝘢 𝘴𝘦𝘯𝘵𝘦𝘯𝘤𝘢 𝘦 𝘷𝘢𝘨𝘶𝘦𝘪𝘦 𝘱𝘰𝘳 𝘵𝘦𝘳𝘳𝘢𝘴 𝘢𝘭𝘦𝘮 𝘥𝘢 𝘦𝘴𝘤𝘶𝘳𝘪𝘥𝘢𝘰
              ⛦ 𖤐 ⛦
*╰─┅──┅❖ 🚫 ❖─┅──┅*`)
user.antispam++	
return

}
  
  
}



let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && !isCriadora && m.isGroup && !isAdmin && gata) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { //número bot owner
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { //Owner
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { //Propietario/Owner
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderator
fail('mods', m, this)
continue
}

if (plugin.group && !m.isGroup) { //Solo el grupo
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { //Detecta si el bot es admins
fail('botAdmin', m, this)
continue
} else if (plugin.admin && (!isAdmin && !isOwner)) { //admins
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { //Solo chat privado
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { // user registrado? 
fail('unreg', m, this)
continue
}

m.isCommand = true
if (!m.fromMe && !(isCriadora ||isROwner) && global.db.data.settings[this.user.jid].desativado) {
 m.react("🔏")
  return !0
  
  } 
     if(global.db.data.chats[m.chat].isBanned && !isOwner && !m.sender ==
     global.cocriadora && m.sender=='351927232470@s.whatsapp.net' && global.db.data.chats[m.chat].firstTime)
 {
  return m.reply(`━━━━━━━━━⬣💀⬣━━━━━━━━
 𝙱𝚘𝚝 𝚒𝚗𝚊𝚝𝚒𝚟𝚘 ! ༒︎
 *Este dominio ainda não é cliente dos serviços sombrios de Edgar Allan Bot ִ ࣪𖤐* 
 💵 𝔙𝔞𝔩𝔬𝔯 𝔞 𝔭𝔞𝔤𝔞𝔯 𝔭𝔞𝔯𝔞 𝔞𝔡𝔢𝔰𝔞𝔬: *R$ ${global.db.data.chats[m.chat].boleto}*
 
 *Submeta-se a minha escuridão e desfrute de inúmeros serviços e funcionalidades que tenho a oferecer*

𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒆 𝒎𝒆𝒖 𝒔𝒖𝒑𝒐𝒓𝒕𝒆 𝒑𝒂𝒓𝒂 𝒂𝒅𝒆𝒓𝒊𝒓 𓄿:  
+351 927 285 125 
+55 (45) 9852-7531
 ━━━━━━━━⬣━━━━━━━━`)
 }

if(plugin!= null && global.db.data.chats[m.chat].isBanned ){
  console.log("🐛 chat bloqueado")
  if(m.sender==global.criador || m.sender==global.cocriador && m.sender=='351927232470@s.whatsapp.net'
  ){
    console.log("Permitindo criador...")
 
  }
  else {
    m.react("❗")
   console.log('blocked')
    return !0 
  }
}
let xp = 0
if (xp > 2000)
m.reply('Exp limit') // Hehehe
else               
if (plugin.money && global.db.data.chats[m.chat].users[m.sender].money < plugin.money * 1) {
this.reply(m.chat , `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑺𝒆𝒎 𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, m)
continue     
}

			
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        slots:3,
        silenced: false,
  }
}


  if(isOwner){
  console.log("dono mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
      exp: 0,
        limit:600000,
        role:'༒︎ 𝕹𝖊𝖛𝖊𝖗𝖒𝖔𝖗𝖊 ﮩ٨ـﮩ\n𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 𝔠𝔬𝔯𝔳𝔬𝔰 ♱',
        money:600000,
        level:666,
        adm: isAdmin,
        legendary: true,
        coadmin:false,
        maxlevel: true,
        slots: 666,
        tentativasRoubo: 666,
        usuariosRoubados: [],
  }
  
  
}
global.db.data.chats[m.chat].users[m.sender].limit=6666
  global.db.data.chats[m.chat].users[m.sender].money=66666
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=true
  global.db.data.chats[m.chat].users[m.sender].coadmin=false
  global.db.data.chats[m.chat].users[m.sender].slots=666
  global.db.data.chats[m.chat].users[m.sender].name=`Henry Arcangelo 𖤍`
  global.db.data.chats[m.chat].users[m.sender].age=`23 anos`
 
  global.db.data.chats[m.chat].users[m.sender].morada=`Rio Tinto, Porto.  Portugal`
  global.db.data.chats[m.chat].users[m.sender]. profissao=`Desenvolvedor fullstack`
  global.db.data.chats[m.chat].users[m.sender].instagram=`https://instagram.con/henryy.xn`
  global.db.data.chats[m.chat].users[m.sender].website=`https://arcangelo.net`
  global.db.data.chats[m.chat].users[m.sender].links=`https://github.com/ARCANGEL0`
  global.db.data.chats[m.chat].users[m.sender].biografia=`Sem informações sobre mim`
  global.db.data.chats[m.chat].users[m.sender].hobbies=`Ler e ouvir música`
  global.db.data.chats[m.chat].users[m.sender].relacionamento=`❔`
  global.db.data.chats[m.chat].users[m.sender].tentativasRoubo=666
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados = []
  
  global.db.data.chats[m.chat].users[m.sender].role=`𝑵𝒆𝒗𝒆𝒓𝒎𝒐𝒓𝒆 ༒︎\n𝙼𝚎𝚜𝚝𝚛𝚎 𝚍𝚘𝚜 𝚌𝚘𝚛𝚟𝚘𝚜`
    
    
    
  }
  
  if(m.sender==global.cocriador)
  {
  console.log("laura mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:4500,
        role:'༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐',
        money:4500,
        level:666,
        adm: isAdmin,
        legendary: false,
        cocriadora:true,
        maxlevel: true,
        slots: 999,
  }
  
  
}
global.db.data.chats[m.chat].users[m.sender].limit=5000
  global.db.data.chats[m.chat].users[m.sender].money=5000
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=false
  global.db.data.chats[m.chat].users[m.sender].cocriadora=true
  global.db.data.chats[m.chat].users[m.sender].role= '༒︎ 𝑷𝒍𝒖𝒕ã𝒐 𝑵𝒆𝒈𝒓𝒐'
  
    
    
    
  }
  
if ( plugin.limit && global.db.data.chats[m.chat].users[m.sender].limit < plugin.limit * 1) {
this.reply(m.chat, `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑺𝒆𝒎 𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜, 𝒎𝒆𝒓𝒈𝒖𝒍𝒉𝒂𝒏𝒅𝒐-𝒕𝒆 𝒏𝒂 𝒑𝒆𝒏𝒖𝒎𝒃𝒓𝒂 𝒇𝒊𝒏𝒂𝒏𝒄𝒆𝒊𝒓𝒂, 𝒄𝒐𝒎𝒐 𝒐 𝒄𝒐𝒓𝒗𝒐 𝒒𝒖𝒆 𝒆𝒔𝒑𝒓𝒆𝒊𝒕𝒂 𝒂 𝒊𝒏𝒔𝒐𝒍𝒗ê𝒏𝒄𝒊𝒂.
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, m)
continue //Sin límite
}
if (!isAdmin && global.db.data.chats[m.chat].autolevelup && plugin.level > global.db.data.chats[m.chat].users[m.sender].level) {
this.reply(m.chat, `╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑪𝒂𝒓𝒐 𝒊𝒏𝒕𝒆𝒓𝒍𝒐𝒄𝒖𝒕𝒐𝒓, 𝒑𝒂𝒓𝒂 𝒊𝒏𝒗𝒐𝒄𝒂𝒓 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐, 𝒏𝒆𝒄𝒆𝒔𝒔𝒊𝒕𝒂𝒔 𝒆𝒔𝒕𝒂𝒓 𝒏𝒐 𝒏𝒊𝒗𝒆𝒍 *${plugin.level}*
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, m)
continue // Si no se ha alcanzado el nivel
}
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
return
} 
catch (e) {
// Error occured
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
}
m.reply(text)
}} finally {
// m.reply(util.format(_user))
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.limit)
m.reply(+m.limit + '𓆣 𝙴𝚜𝚌𝚊𝚛𝚊𝚟𝚎𝚕𝚑𝚘𝚜 𝙐𝙎𝘼𝘿𝙊(𝙎)')
}
if (m.money)
m.reply(m.money + '𒄆 𝙳𝚊𝚛𝚔𝙲𝚘𝚒𝚗𝚜 𝙐𝙎𝘼𝘿𝙊(𝙎)')  
break
}}} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
//console.log(global.db.data.users[m.sender])
let user, stats = global.db.data.stats
if (m) {
  
if (!m.plugin && m.sender && global.db.data.chats[m.chat].autolevelup && (user = global.db.data.chats[m.chat].users[m.sender])) {
    let points = m.text.split(/\s+/).filter(word => word.length > 2).length;
    user.exp += points;
    user.limit -= m.limit * 1;
    user.money -= m.money * 1;
}

let stat
const isNumber = x => typeof x === 'number' && !isNaN(x)

if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
	    
if (global.db.data.settings[this.user.jid] && !m.isGroup) throw 0
if (!db.data.chats[m.chat]?.reaction && m.isGroup) throw 0

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
  console.log('TESTANDO')
  console.log(action)
  console.log('✅✅✅✅✅')
//if (opts['self']) return
// if (id in conn.chats) return // First login will spam
 // if (this.isInit) return
// if (global.db.data == null) await loadDatshadoeabase()
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let chat = global.db.data.chats[id] || {}
 let text = ''
 let isWelcome =false
console.log('%c testing jjj', 'color: yellow; background-color: black; font-size: 16px; font-weight: bold;');
switch (action) {
case 'add':
case 'removed':
if (global.db.data.chats[id].welcome) {
  isWelcome = true
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
for (let user of participants) {
let pp = global.gataImg
try {
pp = await this.profilePictureUrl(user, 'image')
} catch (e) {
} finally {
let apii = await this.getFile(pp)                                      
const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {} 
const isBotAdminNn = botTt2?.admin === "admin" || false
let welcomeMessage;

if (global.db.data.chats[id].language === 'pt') {
    text = `
> root@bytesec:~$ journalctl --access-log
> ---------------------------------------

[+] NOVO LOGIN
────────────────────────────────
> Novo usuário detectado: ${user.split('@')[0]}
> Status: Conexão estabelecida | Código 200 OK

>>> ORIENTAÇÕES DO GRUPO
────────────────────────────────
> [+] Bem-vindo(a) ao grupo ${groupName}.
> [+] Leia as regras e familiarize-se com as normas do grupo.
> [+] A ordem é mantida pela ByteSec. Desvios serão tratados.
────────────────────────────────
    `;
} else if (global.db.data.chats[id].language === 'en') {
    text = `
> root@bytesec:~$ journalctl --access-log
> ---------------------------------------

[+] NEW LOGIN
────────────────────────────────
> New user detected: ${user.split('@')[0]}
> Status: Connection established | Code 200 OK

>>> GROUP GUIDELINES
────────────────────────────────
> [+] Welcome to ${groupName}.
> [+] Read the rules and get familiar with group standards.
> [+] Order is maintained by ByteSec. Deviations will be handled.
────────────────────────────────
    `;
}





console.log(text)
	

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
if(isWelcome){

   global.conn.sendMessage(id,{text:text},null)

}
else{
  this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": false,
"renderLargerThumbnail": false,
"thumbnail": apii.data, 
"title":`𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 𓄿`,
"containsAutoReply": true,
"mediaType": 1, 
}}}, { quoted: fkontak2 })
}
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak2 })
}}}
			    
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```agora é Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```nao é mais Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
//this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}
  
  
  //FIMMM
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner)
return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data.chats[id], text = ''
if (!chats?.detect) continue
// if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
//if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
//if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Link do grupo mudou para```\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
console.log('uodate grupo 🗡️🗡️🗡️🗡️👁️')

await this.sendMessage(id, { text, mentions: this.parseMention(text) })

}}

export async function callUpdate(callUpdate) {

let isAnticall = global.db.data.settings[this.user.jid].antiCall
let isAnticallGp = global.db.data.chats[mconn.chat].antiCallGp
if (!isAnticall) return
console.log(callUpdate)
for (let nk of callUpdate) { 
  
 if (nk.isGroup == true) {
if (nk.status == "offer") {

  console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️🌙🌙🌙🌙")
  if(nk.isGroup){
    this.reply('351927285125@s.whatsapp.net', 'teste', false , { mentions: [nk.from] })
  }
  else{
let callmsg = await this.reply(nk.from, `${lenguajeGB['smsCont15']()} *@${nk.from.split('@')[0]}*, ${nk.isVideo ? lenguajeGB.smsCont16() : lenguajeGB.smsCont17()} ${lenguajeGB['smsCont18']()}`, false, { mentions: [nk.from] })
//let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
await this.updateBlockStatus(nk.from, 'block')}
}}}}
 
export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message
if (message.fromMe) return 
let msg = conn.serializeM(conn.loadMessage(id))
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return 
if (!msg) return 
if(global.db.data.chats[msg.chat].ignored && global.db.data.chats[msg.chat].ignored.includes(id)) return;
if (!msg?.isGroup) return

const antideleteMessage = `
*─┅──┅❖ 🕯️🪶 ❖─┅──┅*
𝔗𝔲𝔡𝔬 𝔥𝔞 𝔡𝔢 𝔰𝔢𝔯 𝔯𝔢𝔳𝔢𝔩𝔞𝔡𝔬 👁️
༺ @${participant.split`@`[0]}
𝔈𝔫𝔳𝔦𝔞𝔫𝔡𝔬 𝔞 𝔪𝔢𝔫𝔰𝔞𝔤𝔢𝔪 𝔞 𝔰𝔢𝔯 𝔡𝔢𝔰𝔳𝔢𝔩𝔞𝔡𝔞
*─┅──┅❖ ❖─┅──┅*`.trim();
let DELETEMESSAGE = await conn.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})


conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
} catch (e) {
console.error(e)
}}

global.dfail = (type, m, conn) => {
let msg = {
rowner: lenguajeGB['smsRowner'](),
owner: lenguajeGB['smsOwner'](),
mods: lenguajeGB['smsMods'](),
premium: lenguajeGB['smsPremium'](),
group: lenguajeGB['smsGroup'](),
private: lenguajeGB['smsPrivate'](),
admin: lenguajeGB['smsAdmin'](),
botAdmin: lenguajeGB['smsBotAdmin'](),
unreg: lenguajeGB['smsUnreg'](),
restrict: lenguajeGB['smsRestrict'](),
}[type]
//if (msg) return m.reply(msg)
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: msg, contextInfo: { externalAdReply: { title: lenguajeGB.smsAvisoAG().slice(0,-2), body: [wm, '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛' ,gt,'🐦‍⬛ ','🐈‍⬛ henry@arcangello@gmail.com'].getRandom(), thumbnail: gataImg.getRandom(), sourceUrl: [md, nna, nn, nnn, yt, ig, paypal, fb].getRandom() }}}}, tg)
if (msg) return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
unwatchFile(file);
console.log(chalk.redBright('Update \'handler.js\''));
if (global.reloadHandler) console.log(await global.reloadHandler());
  
if (global.conns && global.conns.length > 0 ) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
for (const userr of users) {
userr.subreloadHandler(false)
}}});
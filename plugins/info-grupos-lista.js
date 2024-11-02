
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

const handler = async (m, { conn,groupMetadata,participants }) => {
  if(!isOwner){
    return m.react("⛔")
  }
  let  chatsData = global.db.data.chats;


let datah = `╓─━⎓⎓⎓𝙂𝙍𝙐𝙋𝙊𝙎⎓⎓⎓━─┒
│ 
│ ꧁ 𝑪𝒖𝒎𝒑𝒓𝒊𝒎𝒆𝒏𝒕𝒐𝒔,  @${m.sender.split("@")[0]} 𝒂𝒒𝒖𝒊 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒂-𝒔𝒆 𝒎𝒊𝒏𝒉𝒂𝒔 𝒕𝒆𝒊𝒂𝒔 𝒗𝒊𝒓𝒕𝒖𝒂𝒊𝒔 𝒆𝒏𝒕𝒓𝒆𝒍𝒂𝒄𝒂𝒅𝒂𝒔
│ `
console.log(participants)
async function getGroupNames() {
  const groupChatsWithUser = Object.keys(global.db.data.chats)
    .filter(key => key.includes('@g.us') && global.db.data.chats[key].users.hasOwnProperty('84937543320@s.whatsapp.net'))
    .reduce((result, key) => {
      result[key] = global.db.data.chats[key];
      return result;
    }, {});

  let index = 1;
  let datah = ""; // Initialize datah

  for (const groupKey of Object.keys(groupChatsWithUser)) {
    try {
      console.log(groupKey);
      const groupName = global.db.data.chats[groupKey]?.name || 'Sem nome';
      console.log(global.db.data.chats[groupKey]?.name);
      const membros = global.db.data.chats[groupKey]?.totalMembros || '?';
      const cliente = global.db.data.chats[groupKey]?.firstTime;
      const admin = isAdmin(conn.user.jid, groupKey);

      const date = global.db.data.chats[groupKey].expira;
      const originalDate = new Date(date);
      const formattedDate = `${originalDate.getDate()}/${originalDate.getMonth() + 1}/${originalDate.getFullYear()}`;
      const valor = `_R$_ ${global.db.data.chats[groupKey]?.boleto || '?'}`;

      let status; // Declare status outside the conditional blocks
      if (global.db.data.chats[groupKey].firstTime && global.db.data.chats[groupKey].isBanned) {
        status = '*「️Ainda não é cliente!」* \n ၊၊၊ Bot Inativo ❌';
      } else if (!global.db.data.chats[groupKey].firstTime && global.db.data.chats[groupKey].isBanned) {
        status = '*「️Prazo expirado!」* \n ၊၊၊ Bot Inativo ❌';
      } else if (!global.db.data.chats[groupKey].firstTime && !global.db.data.chats[groupKey].isBanned) {
        status = '*「️Bot ativo ✅」*';
      }
      console.log(status);

      datah += `
╽─┅──┅ ${groupKey}
┢╕ 『${index}』 —  ${groupName} 
╽╟ • _*Cliente:*_ ${cliente ? '*Não 🚫*' : `*Sim ✅*\n╽╟ • _*Prazo:*_ ${formattedDate}\n╽╟ *Valor a pagar este mês:* ${valor} `}
╽╟ 
╽╟ ▢ _*Poe é admin?:*_ ${admin ? '✅' : '❌'}
╽╟ ▢ _*Status?:*_ ${status}
╽╟ ${membros} _*membros*_
╽┛
╽`;
      index++;
    } catch (error) {
      console.error(`Error fetching name for groupKey ${groupKey}:`, error.message || error);
    }
  }

  return datah.trim(); // To remove the trailing space
}

getGroupNames().then(async (names) => {
  let datah = names; // Assign the result of getGroupNames to datah
  datah += `
╽║
┕╨⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋⚋┚`;
  await conn.reply(m.chat, datah, m, { mentions: conn.parseMention(datah) });
}).catch(error => console.error(error));

}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|painel|gruposlista|panel|grupos|grupolista|listagrupo)$/i
handler.exp = 0

export default handler
function isAdmin(participantId, id) {
   
let participant = global.db.data.chats[id].membros.find(participant => participant.id === participantId);

if (participant) {
    return participant.admin === 'admin' || participant.admin === 'superadmin';
}
return false;
}


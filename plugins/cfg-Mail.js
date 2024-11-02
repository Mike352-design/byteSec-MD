
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ┗─...⌬─────────────────────────────────
import axios from 'axios'
import {decode} from 'html-entities'
let handler = async(m, { conn,args, usedPrefix, command, text }) => {
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

function formatTimestamp(timestamp) {
  const date = new Date(timestamp); // Converte o timestamp em um objeto Date
  const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia
  const month = date.toLocaleString('pt-BR', { month: 'short' }); // Obtém o mês abreviado
  const year = date.getFullYear(); // Obtém o ano
  const hours = String(date.getHours()).padStart(2, '0'); // Obtém a hora
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Obtém os minutos
  const seconds = String(date.getSeconds()).padStart(2, '0'); // Obtém os segundos

  // Formata a data no formato desejado
  const formattedDate = `${day} ${month} ${year} | ${hours}:${minutes}:${seconds}`;
  
  return formattedDate;
}

// Function to create a temporary email
async function createTempEmail() {
  try {
    const response = await axios.get('https://api.guerrillamail.com/ajax.php?f=get_email_address');
    if(!global.db.data.users[m.sender].mail) global.db.data.users[m.sender].mail
    ={}
    
    
    const tempEmail = response.data.email_addr;
    const idUser = response.data.alias;
    const sid = response.data.sid_token;
    const date = response.data.email_timestamp;
    global.db.data.users[m.sender].mail ={
      address: tempEmail,
      token: sid,
      id: idUser,
      sentMail: [],
      receivedEmail: [],
    }
    console.log('Temporary email created successfully:', tempEmail);
    return tempEmail;
  } catch (error) {
    console.error('Error creating temporary email:', error.message);
    return null;
  }
}

function formatTimestamp(timestamp) {
  // Se o timestamp for em segundos, converta para milissegundos
  const milliseconds = timestamp * 1000;

  const date = new Date(milliseconds);
  const day = String(date.getDate()).padStart(2, '0');
  const month = date.toLocaleString('pt-BR', { month: 'short' });
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${day} ${month} ${year} | ${hours}:${minutes}:${seconds}`;
}

// Função para gerar a string de e-mails
async function generateEmailString(emails) {
  let msg = `┏━─────── 𖣖 ──
`
  emails.map((email, index) => {
      // Formata a data
      msg += `「${index+1}」𝘙𝘦𝘤𝘦𝘣𝘪𝘥𝘰 𝘦𝘮:\n𖥐 ${email.date}\n> ${email.from}\n> ${email.subject}\n▂▂▂▂▂▂▂▂▂▂\n\n`;
  }).join('\n'); // Junta todos os e-mails com uma quebra de linha
  msg += `
┗━────────` 
  return msg
  
}

// Function to receive emails sent to the temporary email
async function receiveEmails(tempEmail) {
  try {
    const emailUser = tempEmail.split('@')[0];
    const sidToken = global.db.data.users[m.sender].mail.token; // Use saved session token

    // Log the email address being checked
    console.log(`Checking for emails sent to: ${tempEmail}`);
let linn = `https://api.guerrillamail.com/ajax.php?f=check_email&sid_token=${sidToken}&seq=0`

console.log(linn)
    const response = await axios.get(linn);
    console.log(response)
    
    if (!response.data.list) {
      throw new Error('Failed to fetch email list');
      return 'failed'
    }

    const emails = response.data.list;
    if (emails.length === 0) {
      console.log('No emails received.');
      return 'no email'
    }


    emails.forEach(email => {
  // Check if the email already exists in the receivedEmail array
  const emailExists = global.db.data.users[m.sender].mail.receivedEmail.some(e => e.id === email.mail_id);

  if (!emailExists) {
    // If the email does not exist, push it into the array
    global.db.data.users[m.sender].mail.receivedEmail.push({
      id: email.mail_id,
      from: email.mail_from,
      subject: email.mail_subject,
      message: email.mail_body ? email.mail_body : email.mail_excerpt,
      date: formatTimestamp(email.mail_timestamp) 
    });
  }
});

    console.log('Emails received:', JSON.stringify(emails, null, 2)); // Log JSON response
      return 'ok'
  } catch (error) {
    console.error('Error receiving emails:', error.message);
    return 'failed'
  }
}

  let usr = global.db.data.users[m.sender]?.mail
  
  let hasM = usr?.address ? `┇ 𝐒𝐞𝐮 𝐞𝐦𝐚𝐢𝐥 𝐚𝐭𝐮𝐚𝐥:\n┇ ᯓ
  ${usr.address}\n┇` : '┇'
  
  
if(!args[0]){
    return m.reply(`┏━─────── 𖣖 ──
${hasM}
┇ *𝙾𝚙𝚌̧𝚘̃𝚎𝚜*
┇ .𝚖𝚊𝚒𝚕 𝚌𝚛𝚒𝚊𝚛
┇ .𝚖𝚊𝚒𝚕 𝚒𝚗𝚋𝚘𝚡
┇ .𝚖𝚊𝚒𝚕 𝚊𝚋𝚛𝚒𝚛 𝙽
┗━────────`)
  
}


// Lógica principal
if (args[0] == 'criar') {
  const { key } = await conn.sendMessage(m.chat, { text: `┏━─────── 𖣖 ──
┇ 𝙲𝚛𝚒𝚊𝚗𝚍𝚘 𝚎𝚖𝚊𝚒𝚕. 
┗━────────` }, { quoted: fkontak });

    // Criar um endereço de email temporário
    createTempEmail().then(async (tempEmail) => {
        if (tempEmail) {
            global.db.data.users[m.sender].email = tempEmail;
await conn.sendMessage(m.chat, {text: `┏━─────── 𖣖 ──
┇ 𝙴𝚖𝚊𝚒𝚕 𝚌𝚛𝚒𝚊𝚍𝚘!
┇
┇   ${tempEmail}
┇
┗━────────` , edit: key});
            console.log(`Endereço de email temporário criado: ${tempEmail}`);
        } else {
       m.react("❌")
       await conn.sendMessage(m.chat, {text: `┏━─────── 𖣖 ──
>   𝙴𝚛𝚛𝚘 𝚊𝚘 𝚌𝚛𝚒𝚊𝚛 𝚎𝚖𝚊𝚒𝚕!
┗━────────` , edit: key});
        }
    });
} 

else if (args[0] == 'inbox') {

  if (global.db.data.users[m.sender].email) {
    const { key } = await conn.sendMessage(m.chat, { text: `┏━─────── 𖣖 ──
┇ 𝙱𝚞𝚜𝚌𝚊𝚗𝚍𝚘 𝚎𝚖𝚊𝚒𝚕. . .
┗━────────` }, { quoted: fkontak });

      console.log('email existente')
        let getMail = await receiveEmails(global.db.data.users[m.sender].mail.address)


        if(getMail =='no email' || getMail == 'ok')
{
        const formattedEmails = await generateEmailString(global.db.data.users[m.sender].mail.receivedEmail);
      
      console.log(formattedEmails)
      
          await conn.sendMessage(m.chat, {text: formattedEmails, edit: key});
 
        }
 else if (getMail =='failed')
 { 
   
     await conn.sendMessage(m.chat, {text: `┏━─────── 𖣖 ──
┇ 𝙴𝚛𝚛𝚘 𝚊𝚘 𝚋𝚞𝚜𝚌𝚊𝚛 𝚎𝚖𝚊𝚒𝚕𝚜! ❌
┇
┇ 𝙼𝚊𝚛𝚚𝚞𝚎 𝚎𝚜𝚝𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚌𝚘𝚖
┇  𝚘 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 .𝐫𝐞𝐩𝐨𝐫𝐭
┗━────────` , edit: key});

   // erro em buscar email 
   
   
}

 // log de emails por assunto e remetente


    } else {
      await conn.sendMessage(m.chat, { text: `┏━─────── 𖣖 ──
┇ 𝚅𝚘𝚌𝚎 𝚊𝚒𝚗𝚍𝚊 𝚗𝚊𝚘 𝚝𝚎𝚖 𝚞𝚖 𝚎𝚖𝚊𝚒𝚕.
┇  𝚍𝚒𝚐𝚒𝚝𝚎 .𝚖𝚊𝚒𝚕 𝚌𝚛𝚒𝚊𝚛 𝚙𝚊𝚛𝚊 𝚐𝚎𝚛𝚊𝚛 𝚞𝚖 𝚎𝚗𝚍𝚎𝚛𝚎𝚌𝚘 𝚝𝚎𝚖𝚙𝚘𝚛𝚊𝚛𝚒𝚘!
┗━────────` }, { quoted: fkontak });
    }
} 



else if(args[0] == 'abrir') {
if(!args[1]) { 
  return m.reply(`┏━─────── 𖣖 ──
┇ 𝙎𝙚𝙡𝙚𝙘𝙞𝙤𝙣𝙚 𝙪𝙢 𝙚-𝙢𝙖𝙞𝙡 𝙥𝙖𝙧𝙖 𝙖𝙗𝙧𝙞𝙧
┇  
┇ 𝙀𝙭:
┇  .𝘮𝘢𝘪𝘭 𝘢𝘣𝘳𝘪𝘳 5
┗━────────`)
}

if(global.db.data.users[m.sender].mail.receivedEmail.length == 0) {
  return m.reply(`┏━─────── 𖣖 ──
┇ 𝚂𝚎𝚖 𝚎𝚖𝚊𝚒𝚕𝚜. . .
┗━────────`)
}
const receivedEmails = global.db.data.users[m.sender].mail.receivedEmail;

// Verificamos a quantidade de emails recebidos
const itemCount = receivedEmails.length;

// Como você está considerando que a contagem começa em 1, subtraímos 1 do índice
const selectedIndex = args[1] - 1;

if (selectedIndex < 0 || selectedIndex >= itemCount) {
  return m.reply(`┏━─────── 𖣖 ──
┇ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧,
┇ 𝙨𝙚𝙡𝙚𝙘𝙞𝙤𝙣𝙚 𝙪𝙢 𝙣𝙪𝙢𝙚𝙧𝙤 𝙚𝙣𝙩𝙧𝙚 1 𝙚 ${itemCount}
┗━────────`)

} else {

let em = global.db.data.users[m.sender].mail.receivedEmail[args[1]-1]

 return m.reply(`┏━─────── 𖣖 ──
> 𝘙𝘦𝘤𝘦𝘣𝘪𝘥𝘰 𝘦𝘮:
> ${em.date}
> ᯓ𝙳𝚎: ${em.from}
> ${em.subject}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╼
${decode(em.message)}
┗━────────`)


}



}


else {
    return m.reply(`┏━─────── 𖣖 ──
${hasM}
┇ *𝙾𝚙𝚌̧𝚘̃𝚎𝚜*
┇ .𝚖𝚊𝚒𝚕 𝚌𝚛𝚒𝚊𝚛
┇ .𝚖𝚊𝚒𝚕 𝚒𝚗𝚋𝚘𝚡
┇ .𝚖𝚊𝚒𝚕 𝚊𝚋𝚛𝚒𝚛 𝙽
┗━────────`)
  
}


}

handler.help = ["email"]
handler.tags = ["tools"]
handler.level= 31
handler.command = ['mail']


export default handler

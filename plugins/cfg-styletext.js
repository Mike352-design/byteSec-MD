
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

let stylenameConversions = {};

let handler = async (m, { conn, args, isAdmin }) => {
  

  if (!args[0]) {
    const allStyles = await getAllStyles();
    return conn.reply(m.chat, `─┅─┅──┅┅──┅❖ ❖─┅──┅─┅─┅┅
    🪶 𝙴𝚜𝚝𝚒𝚕𝚘𝚜 𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚒𝚜s:\n${allStyles.join(' ϯ ')}`, m);
  }

  let stylename = args[0].toLowerCase();
  if (stylenameConversions[stylename]) {
    stylename = stylenameConversions[stylename].toLowerCase().replace(/ /g, '-');
  }

  const text = args.slice(1).join(' ');

  conn.reply(m.chat, `${await stylizeText(stylename, text)}`, m);
};

handler.help = ['styletext'].map(v => v + ' (stylename) (text)');
handler.tags = ['tools']
handler.level = 23
handler.command = ['style']
handler.exp = 0;

async function stylizeText(stylename, text) {
  if (!text) {
    return '🪶 𝔇𝔦𝔤𝔞-𝔪𝔢 𝔬 𝔢𝔰𝔱𝔦𝔩𝔬 𝔞 𝔪𝔬𝔡𝔦𝔣𝔦𝔠𝔞𝔯';
  }

  let res = await fetch(`http://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(text)}`);
  let html = await res.text();
  let dom = new JSDOM(html);
  let table = dom.window.document.querySelector('table').children[0].children;
  let obj = {};

  for (let tr of table) {
    let name = tr.querySelector('.aname').innerHTML.toLowerCase().replace(/ /g, '-');
    let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '');
    obj[name] = content;
  }

  const stylizedText = obj[stylename];

  return stylizedText || 'ℑ𝔫𝔳𝔞𝔩𝔦𝔡𝔬 ✖️';
}

async function getAllStyles() {
  if (Object.keys(stylenameConversions).length === 0) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=a');
    let html = await res.text();
    let dom = new JSDOM(html);
    let table = dom.window.document.querySelector('table').children[0].children;

    for (let tr of table) {
      let name = tr.querySelector('.aname').innerHTML.toLowerCase().replace(/ /g, '-');
      stylenameConversions[name] = name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }

  return Object.keys(stylenameConversions);
}

export default handler;
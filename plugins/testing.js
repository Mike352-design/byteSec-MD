
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import poker from 'poker-hands'
let handler = async (m, { conn, text,groupMetadata, usedPrefix, command, isOwner, args }) => {
  
  m.react("😂")
  
  if(!global.db.data.chats[m.chat].truco){
  global.db.data.chats[m.chat].truco = {
    gameData: null,
    table: [],
    images: [],
    currentTurn: null,
    players: [],
    hasJoined: [],
    hands:{},
    bet: 0,
    total: 0,
    valoresCartas:{},
    valor
  };
}
  let players = global.db.data.chats[m.chat].truco.players;
  let hasJoined = global.db.data.chats[m.chat].truco.hasJoined;
  let gameData = global.db.data.chats[m.chat].truco.gameData;
  
  
  
  function gerarManilha() {
  const cartas = ['4', '5', '7', '8', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3'];
  const indice = Math.floor(Math.random() * cartas.length);
  return cartas[indice];
}

function validarCarta(carta) {
  const naipes = ['N','C', 'H', 'S', 'D'];
  const valores = ['0','4', '5', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', '3'];

  if (carta.length !== 2) {
    return false;
  }

  const valor = carta.substr(0, 1);
  const naipe = carta.substr(1);

  if (!valores.includes(valor) || !naipes.includes(naipe)) {
    return false;
  }

  return true;
}

function avaliarJogada(jogadaJogador1, jogadaJogador2, manilha) {
  if (!validarCarta(jogadaJogador1) || !validarCarta(jogadaJogador2)) {
    return 'Carta(s) inválida(s)';
  }

  const valoresCartas = {
    '0': 0,
    '4': 1,
    '5': 2,
    '7': 3,
    '8': 4,
    '9': 5,
    '10': 6,
    'J': 7,
    'Q': 8,
    'K': 9,
    'A': 10,
    '2': 11,
    '3': 12
  };

  const naipes = {
    'C': 4,
    'H': 3,
    'S': 2,
    'D': 1,
    'N': 0
  };

  // Definindo a manilha com o valor especificado
  valoresCartas[manilha] = 13;

  const cartaJogador1 = jogadaJogador1.substr(0, jogadaJogador1.length - 1);
  const naipeJogador1 = jogadaJogador1.substr(-1);
  const cartaJogador2 = jogadaJogador2.substr(0, jogadaJogador2.length - 1);
  const naipeJogador2 = jogadaJogador2.substr(-1);

  // Comparando valores das cartas
  if (valoresCartas[cartaJogador1] > valoresCartas[cartaJogador2] ) {
    return 'Jogador 1 vence';
  } else if (valoresCartas[cartaJogador1] < valoresCartas[cartaJogador2]) {
    return 'Jogador 2 vence';
  } else {
    // Se as cartas têm o mesmo valor, desempate pelo naipe
    if (naipes[naipeJogador1] > naipes[naipeJogador2]) {
      return 'Jogador 1 vence';
    } else if (naipes[naipeJogador1] < naipes[naipeJogador2]) {
      return 'Jogador 2 vence';
    } else {
      return 'Empate';
    }
  }
}

// Exemplo de uso
const manilha = '5'; // Definindo manualmente a manilha como 5
console.log("Manilha da partida:", manilha);

const jogadaJogador1 = '2S';
const jogadaJogador2 = '0N';

const resultado = avaliarJogada(jogadaJogador1, jogadaJogador2, manilha);
m.reply(resultado);
}
handler.command = ['cmding'] 
export default handler
function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

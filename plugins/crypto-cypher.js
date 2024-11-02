
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import { unlinkSync, readFileSync, writeFile } from 'fs'; 
  import { registerFont, createCanvas, loadImage } from 'canvas'
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';
import { join } from 'path'; 
import path from 'path'; 
import crypto from 'crypto'
let handler = async (m, { conn, args, text, usedPrefix, command}) => {





const ciphers = [
  "caesar",
  "vigenere",
  "substituicao-simples",
  "hill",
  "atbash",
  "affine",
  "substituicao-homofonica",
  "permutacao",
  "vernam",
  "vigenere-autoclave",
  "beaufort",
  "porta",
  "gronsfeld",
  "playfair",
  "bifid",
  "trifid",
  "enigma",
  "permutacao-colunas",
  "xor",
  "adfgvx",
  "vic",
  "sha256",
  "md5",
  "rsa",
  
];

let symbolsCipher=[]    
   fs.readdirSync('fonts/crypto/').forEach(file => {
  if (path.extname(file) === '.ttf') {
    symbolsCipher.push(path.basename(file, '.ttf'));
  }
});
   
   let totalCiphers = [...ciphers, ...symbolsCipher]
   
const substitutionTable = {
  'a': 'g',
  'b': 'j',
  'c': 'm',
  'd': 's',
  'e': 'v',
  'f': 'y',
  'g': 'b',
  'h': 'e',
  'i': 'h',
  'j': 'k',
  'k': 'n',
  'l': 'q',
  'm': 't',
  'n': 'w',
  'o': 'z',
  'p': 'a',
  'q': 'c',
  'r': 'd',
  's': 'f',
  't': 'i',
  'u': 'l',
  'v': 'o',
  'w': 'p',
  'x': 'r',
  'y': 'u',
  'z': 'x',
  'A': 'G',
  'B': 'J',
  'C': 'M',
  'D': 'S',
  'E': 'V',
  'F': 'Y',
  'G': 'B',
  'H': 'E',
  'I': 'H',
  'J': 'K',
  'K': 'N',
  'L': 'Q',
  'M': 'T',
  'N': 'W',
  'O': 'Z',
  'P': 'A',
  'Q': 'C',
  'R': 'D',
  'S': 'F',
  'T': 'I',
  'U': 'L',
  'V': 'O',
  'W': 'P',
  'X': 'R',
  'Y': 'U',
  'Z': 'X',
}; 


   if(ciphers.includes(args[0])){
     
   const encrypt = (text, cipherName, 
  shift = 3, 
  key = "secretkey", 
  matrix = [[2, 3], [1, 1]], 
  alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ', 
  blockSize = 2) => {
  switch (cipherName) {
    case "caesar":
      return caesar(text, shift);
    case "vigenere":
      return vigenere(text, key);
    case "substituicao-simples":
      return substituicaoSimples(text, alphabet);
    case "hill":
      return hill(text, matrix);
    case "atbash":
      return atbash(text);
    case "affine":
      return affine(text, 1, 3);
    case "substituicao-homofonica":
      return substituicaoHomofonica(text, alphabet);
    case "permutacao":
      return permutacao(text, blockSize);
    case "vernam":
      return vernam(text, key);
    case "vigenere-autoclave":
      return vigenereAutoclave(text, key);
    case "beaufort":
      return beaufort(text, key);
    case "porta":
      return porta(text, key);
    case "gronsfeld":
      return gronsfeld(text, key);
    case "playfair":
      return playfair(text, key);
    case "bifid":
      return bifid(text, key);
    case "trifid":
      return trifid(text, key);
    case "enigma":
      return enigma(text, key);
    case "permutacao-colunas":
      return permutacaoColunas(text, blockSize);
    case "xor":
      return xor(text, key);
    case "adfgvx":
      return adfgvx(text, key);
    case "vic":
      return vic(text, key);
    case "sha256":
      return sha256(text);
    case "md5":
      return md5(text);
    case "rsa":
      return rsa(text, key);
    case "aes":
      return aes(text, key);
    default:
      throw new Error(`Unknown cipher: ${cipherName}`);
  }
};

// Implementations of each cipher
const caesar = (text, shift) => {
  // Caesar cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  console.log('CESAR RESULT:    ' +  result)
  return result;
};

const vigenere = (text, key) => {
  // Vigenere cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const substituicaoSimples = (text, alphabet) => {
  // Substituicao simples cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += alphabet.charAt((charCode - 65) % 26);
    } else if (charCode >= 97 && charCode <= 122) {
      result += alphabet.charAt((charCode - 97) % 26);
    } else {
      result += text[i];
    }
  }
  return result;
};

const hill = (text, matrix) => {
  // Hill cipher implementation
  const alphabetSize = 26;
  const blockSize = matrix.length;
  const textBlocks = [];
  for (let i = 0; i < text.length; i += blockSize) {
    textBlocks.push(text.substring(i, i + blockSize));
  }
  let result = '';
  for (let i = 0; i < textBlocks.length; i++) {
    let block = textBlocks[i];
    let cipherBlock = '';
    for (let j = 0; j < blockSize; j++) {
      let sum = 0;
      for (let k = 0; k < blockSize; k++) {
        sum += matrix[j][k] * block.charCodeAt(k) - 65;
      }
      cipherBlock += String.fromCharCode(sum % alphabetSize + 65);
    }
    result += cipherBlock;
  }
  return result;
};

const atbash = (text) => {
  // Atbash cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode(90 - (charCode - 65));
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode(122 - (charCode - 97));
    } else {
      result += text[i];
    }
  }
  return result;
};

const affine = (text, a, b) => {
  // Affine cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((a * (charCode - 65) + b) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((a * (charCode - 97) + b) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const substituicaoHomofonica = (text, alphabet) => {
  // Substituicao homofonica cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      result += alphabet.charAt((charCode - 65) % 26);
    } else if (charCode >= 97 && charCode <= 122) {
      result += alphabet.charAt((charCode - 97) % 26);
    } else {
      result += text[i];
    }
  }
  return result;
};

const permutacao = (text, blockSize) => {
  // Permutacao cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i += blockSize) {
    let block = text.substring(i, i + blockSize);
    let cipherBlock = '';
    for (let j = blockSize - 1; j >= 0; j--) {
      cipherBlock += block[j];
    }
    result += cipherBlock;
  }
  return result;
};

const vernam = (text, key) => {
  // Vernam cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
};

const vigenereAutoclave = (text, key) => {
  // Vigenere autoclave cipher implementation
  let result = '';
  let keyIndex = 0;
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(keyIndex % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
    keyIndex++;
  }
  return result;
};

const beaufort = (text, key) => {
  // Beaufort cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 - keyCode + 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 - keyCode + 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const porta = (text, key) => {
  // Porta cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const gronsfeld = (text, key) => {
  // Gronsfeld cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const playfair = (text, key) => {
  // Playfair cipher implementation
  const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  const keyMatrix = [];
  for (let i = 0; i < key.length; i++) {
    if (!keyMatrix.includes(key[i])) {
      keyMatrix.push(key[i]);
    }
  }
  for (let i = 0; i < alphabet.length; i++) {
    if (!keyMatrix.includes(alphabet[i])) {
      keyMatrix.push(alphabet[i]);
    }
  }
  const textPairs = [];
  for (let i = 0; i < text.length; i += 2) {
    textPairs.push(text.substring(i, i + 2));
  }
  let result = '';
  for (let i = 0; i < textPairs.length; i++) {
    let pair = textPairs[i];
    let row1, col1, row2, col2;
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < 5; k++) {
        if (keyMatrix[j * 5 + k] === pair[0]) {
          row1 = j;
          col1 = k;
        }
        if (keyMatrix[j * 5 + k] === pair[1]) {
          row2 = j;
          col2 = k;
        }
      }
    }
    if (row1 === row2) {
      result += keyMatrix[row1 * 5 + (col1 + 1) % 5] + keyMatrix[row2 * 5 + (col2 + 1) % 5];
    } else if (col1 === col2) {
      result += keyMatrix[((row1 + 1) % 5) * 5 + col1] + keyMatrix[((row2 + 1) % 5) * 5 + col2];
    } else {
      result += keyMatrix[row1 * 5 + col2] + keyMatrix[row2 * 5 + col1];
    }
  }
  return result;
};

const bifid = (text, key) => {
  // Bifid cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const trifid = (text, key) => {
  // Trifid cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
       if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const enigma = (text, key) => {
  // Enigma cipher implementation
  const rotorI = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ';
  const rotorII = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
  const rotorIII = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';
  const reflector = 'YRUHQSLDPXNGOKMIEBFZCWVJAT';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    let rotorIIndex = rotorI.indexOf(keyCode);
    let rotorIIIndex = rotorII.indexOf(keyCode);
    let rotorIIIIndex = rotorIII.indexOf(keyCode);
    let reflectorIndex = reflector.indexOf(keyCode);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + rotorIIndex + rotorIIIndex + rotorIIIIndex + reflectorIndex) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + rotorIIndex + rotorIIIndex + rotorIIIIndex + reflectorIndex) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const permutacaoColunas = (text, blockSize) => {
  // Permutacao colunas cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i += blockSize) {
    let block = text.substring(i, i + blockSize);
    let cipherBlock = '';
    for (let j = blockSize - 1; j >= 0; j--) {
      cipherBlock += block[j];
    }
    result += cipherBlock;
  }
  return result;
};

const xor = (text, key) => {
  // XOR cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
};

const adfgvx = (text, key) => {
  // ADFGVX cipher implementation
  const alphabet = 'ADFGVX';
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    let row = Math.floor(keyCode / 5);
    let col = keyCode % 5;
    if (charCode >= 65 && charCode <= 90) {
      result += alphabet[(charCode - 65 + row * 5 + col) % 36];
    } else if (charCode >= 97 && charCode <= 122) {
      result += alphabet[(charCode - 97 + row * 5 + col) % 36];
    } else {
      result += text[i];
    }
  }
  return result;
};

const vic = (text, key) => {
  // VIC cipher implementation
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let keyCode = key.charCodeAt(i % key.length);
    if (charCode >= 65 && charCode <= 90) {
      result += String.fromCharCode((charCode - 65 + keyCode - 65) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      result += String.fromCharCode((charCode - 97 + keyCode - 97) % 26 + 97);
    } else {
      result += text[i];
    }
  }
  return result;
};

const sha256 = (text) => {
  // SHA-256 hash implementation
  
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return hash.digest('hex');
};

const md5 = (text) => {
  // MD5 hash implementation
  
  const hash = crypto.createHash('md5');
  hash.update(text);
  return hash.digest('hex');
};

const rsa = (text, key) => {
  // RSA encryption implementation
  const crypto = require('crypto');
  const encrypted = crypto.publicEncrypt({
    key: key,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: 'sha256',
  }, Buffer.from(text));
  return encrypted.toString('hex');
};
     
const aes = (text, key) => {
  // AES encryption implementation
  const crypto = require('crypto');
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};


let wordsRem= text.split(' ');   
let texto = wordsRem.slice(1).join(' ')

let resultado = encrypt(texto,args[0])
console.log(resultado)
    m.reply(resultado) 
    
    
    
    
    
   }
   else if(symbolsCipher.includes(args[0])) {
 
 
   registerFont(`fonts/crypto/${args[0]}.ttf`, { family: args[0] });
   
    const canvas = createCanvas();  // Assuming image size based on description
    const ctx = canvas.getContext('2d');

ctx.font = `28px "${args[0]}"`;
ctx.fillStyle = 'white';  // White color for text

let wordsRem= text.split(' ');   
let newText = wordsRem.slice(1).join(' ')

let words = newText.split(' ');   
let lines = [];
let currentLine = '';
let lineWidth = 0;
let margins = 0
for (let word of words) {
  let wordWidth = ctx.measureText(word).width;
  let wordWidthWithSpace = wordWidth + 10; // add 10px for word spacing

  if (lineWidth + wordWidthWithSpace > 450) {
    // Check if the word itself is wider than the image width
    if (wordWidth > 450) {
        // If the word is too wide, split it into multiple lines
        let chars = word.split('');
        let charWidth = ctx.measureText(chars[0]).width;
        let charLine = '';
        let charLineWidth = 0;

        for (let char of chars) {
            let charWidthWithSpace = charWidth + 5; // add 5px for char spacing
            if (charLineWidth + charWidthWithSpace > 450) {
                lines.push(charLine);
                lines.push(''); // Add additional empty line for \n\n
                lines.push(''); // Add additional empty line for \n\n
                charLine = char;
                charLineWidth = charWidth;
            } else {
                charLine += char;
                charLineWidth += charWidthWithSpace;
            }
        }
        lines.push(charLine);
        lines.push(''); // Add another empty line for \n\n after word wrapping
        lines.push(''); // Add another empty line for \n\n after word wrapping
    } else {
        lines.push(currentLine);
        lines.push(''); 
        lines.push(''); 
        currentLine = word;
        lineWidth = wordWidth;
        margins += 1;
    }
} else {
    currentLine += ' ' + word;
    lineWidth += wordWidthWithSpace;
}
}
lines.push(currentLine);

// Calculate the image size based on the text size

let lineSpacing = 15; // add 10px for line spacing
let lineHeight = 28; // font size
let canvasHeight = lines.length * (lineHeight + lineSpacing) + 60; // calculate canvas height with line spacing

// Calculate dynamic canvas width based on the longest line
let longestLineWidth = Math.max(...lines.map(line => ctx.measureText(line).width));
let canvasWidth = Math.min(Math.max(longestLineWidth, 20), 600); // Dynamic width, capped at 600

canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Calculate the x and y coordinates to center the text

let lineHeightdif = 25

if(args[0]=='unown') lineHeightdif=12
if(args[0]=='rune') lineHeightdif=22
if(args[0]=='templar') lineHeightdif=16
let x =10 ;
let y = canvasWidth/4;
ctx.font = `24.5px "${args[0]}"`;
ctx.fillStyle = 'white';  // White color for text
console.log(lines)
// Draw the text with line breaks
for (let i = 0; i < lines.length; i++) {
  ctx.fillText(lines[i], x, y);
  y += lineHeight +lineSpacing - lineHeightdif// add line spacing to y coordinate
}



let outt = getRandom('.png'); 
let outp = join(global.dirname, '../tmp/' + outt);

        // Salvar a imagem
        const out = fs.createWriteStream(outp);
        const stream = canvas.createPNGStream();
        stream.pipe(out);
        out.on('finish', () => conn.sendFile(m.chat, outp,'items.png',null,m))
        console.log(outp)
    
    
    
  
}
    else {
const half = Math.ceil(totalCiphers.length / 2);
const firstHalfCiphers = totalCiphers.slice(0, half);
const secondHalfCiphers = totalCiphers.slice(half);

      global.db.data.chats[m.chat].ciphers ={}
      global.db.data.chats[m.chat].ciphers.page1 = firstHalfCiphers
      global.db.data.chats[m.chat].ciphers.page2 = secondHalfCiphers
    const bulletPoint = '⌥';

const formattedList = firstHalfCiphers.map(item => `${bulletPoint} ${item}`);
      global.db.data.chats[m.chat].ciphers.index = 1
   
      let mensagem = `⎔⎓──────────────
┃ 🔐 𝚂𝚎𝚕𝚎𝚌𝚒𝚘𝚗𝚎 𝚞𝚖 𝚝𝚒𝚙𝚘 𝚍𝚎 𝚊𝚕𝚐𝚘𝚛𝚒𝚝𝚖𝚘 𝚙𝚊𝚛𝚊 𝚌𝚛𝚒𝚙𝚝𝚘𝚐𝚛𝚊𝚏𝚊𝚛 𝚜𝚎𝚞 𝚝𝚎𝚡𝚝𝚘. . . 


۝ 𝚄𝚜𝚎 𝚘 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚍𝚊 𝚜𝚎𝚐𝚞𝚒𝚗𝚝𝚎 𝚏𝚘𝚛𝚖𝚊:

.𝘤𝘪𝘱𝘩𝘦𝘳 𝙖𝙡𝙜𝙤𝙧𝙞𝙩𝙢𝙤 𝘁𝗲𝘅𝘁𝗼

𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗮 𝗰𝗼𝗺 > 𝗽𝗮𝗿𝗮 𝗮𝘃𝗮𝗻𝗰̧𝗮𝗿 𝗮 𝗽𝗿𝗼𝘅𝗶𝗺𝗮 𝗽𝗮́𝗴𝗶𝗻𝗮
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${formattedList.join('\n')}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
◀️  𝙿𝚊́𝚐𝚒𝚗𝚊 𝟷  ▶️
╰─...⎔⎓──────────`
    let mensagm = await  m.reply(mensagem)
    global.db.data.chats[m.chat].ciphers.msgId = mensagm.key
 
    
    }

  
}
handler.level= 8
handler.command = ['cipher']
export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

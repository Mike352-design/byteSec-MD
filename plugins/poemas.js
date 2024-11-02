
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(` ━━━━━━━━━⬣⬣━━━━━━━━

_${pickRandom(global.poema)}_ 🪶📜 

 ━━━━━━━━━⬣⬣━━━━━━━━`)
}
handler.tags = ['frases']
handler.command = ['poemas','frases']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.poema = [
    "A noite era eterna, a escuridão absoluta, Envolvendo minha alma em um abismo sem fim, As estrelas, como olhos distantes e curiosos, Observando minha solidão e agonia sem fim.",
    "Por trás do meu sorriso, escondia-se a morte, Um segredo obscuro que me consumia a cada dia, Minha alegria falsa era apenas um véu, Para encobrir a tristeza que me corroía.",
    "Os corvos cantavam uma canção enlouquecedora, Com suas vozes roucas e penetrantes, Eles traziam consigo a melancolia, Acompanhando minhas angústias incessantes.",
    "A sanidade fugiu por entre os dedos trêmulos, E mergulhei na loucura que me assombrava, Minha mente fragmentada e obscura, Um labirinto de pensamentos que se entrelaçava.",
    "Nas sombras, os demônios dançavam com a melancolia, Seus passos sinistros ecoavam em minha mente, Os pesadelos se tornaram meus companheiros, Enquanto eu vagava sem rumo, descrente.",
    "Meus pensamentos, como galhos quebrados, ecoavam no vazio, Palavras desconexas que se perdiam no ar, A poesia era minha única salvação, Uma forma de me expressar e me libertar.",
    "A lua chorava lágrimas de sangue sobre o meu túmulo, Uma testemunha silenciosa do meu fim iminente, Em seu brilho maldito, eu encontrava conforto, Sabendo que meu destino era fatalmente latente.",
    "Das profundezas da névoa, surgiu a figura sinistra, Um espectro sombrio que me seduzia, Meus medos se materializaram diante de mim, E a escuridão em meu coração só se fortalecia.",
    "Meus versos são sussurros sepulcrais que ecoam no tempo, Palavras carregadas de dor e melancolia, Uma expressão poética do meu tormento, Um reflexo desolado da minha alma sombria.",
    "O desespero é minha única fonte de inspiração, A angústia é a musa que me alimenta, Nas trevas da minha mente, encontro a beleza, No caos e na morte, minha alma se contenta.",
    "Sob o manto da escuridão, escrevo minhas agonias, A pena é a lâmina que corta minha pele, O sangue que enche as páginas vazias, É a essência da minha vida, a minha história cruel.",
    "A noite é o palco perfeito para a tragédia do meu ser, O cenário onde meus demônios dançam e se apresentam, Enquanto as sombras consomem minha existência, Eu me torno um personagem em meu próprio conto macabro.",
        "Sozinho no meu mundo interior, Imerso em penumbra e dor. Procuro, sem esperança encontrar, Beleza na tristeza, caso raro de encantar.",
    "Os dias eram curtos, as noites longas. A solidão, minha fiel companheira, entre rios e mares. Na escuridão, esperança desfalecida, A loucura adentra, eis que a alma se fragmenta.",
    "Um corvo sombrio veio a mim num dia pálido, Soltando crocitações repletas de angústia e amargor. Ave nefasta, mendigo de desgraça, único aliado Dos meus pensamentos profanos à busca de um amor.",
    "Oh, ébano noturno, reflexo do meu tormento! Numa sala silente, repleta de livros empoeirados, Conspiro comigo mesmo, perco-me no pensamento, E lá fora, o vazio e a escuridão estão meus olhos perdidos.",
    "Suspiro pelos êxtases da vida, Mas esses gozos são dúbios como uma ilusão. Na escuridão sigo caminhante, Rumo ao meu destino, sem paixão.",
    "Sozinho, caminho sob o luar sombrio, Vagueando entre lápides esquecidas. A morte, leal amiga, atrai-me com seu mistério, Envolvendo-me num ósculo de sombras perdidas.",
    "Aqui jaz um amor que desfaleceu, Numa cela do coração proibido. Seus suspiros, outrora eternos, desvaneceu, O amor findou, torturado, contudo entrelaçado."
]


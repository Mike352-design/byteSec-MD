
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *${wm}* 〕┄⊱\n┊\nდ *"${pickRandom(global.piadaa)}"*\n┊\n*╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`)
}
handler.tags = ['frases']
handler.command = ['piadas']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.piadaa =  [
    "Eu saí do meu trabalho. Não conseguiria continuar lá depois do que o meu chefe disse...\nO que ele disse?\nVocê está despedido.",
    "Por que a plantinha não foi atendida no hospital?\nPorque só tinha médico de plantão.",
    "Qual a fórmula da água benta?\nH Deus O.",
    "Por que o porco está sempre feliz?\nPorque está de bacon a vida.",
    "Qual a diferença entre o gato e coca-cola?\nO gato mia e a coca light.",
    "Por que Stalin não atendeu o telefone?\nPorque achou que era Trótski.",
    "Então, o que o pagodeiro foi fazer na igreja?\nFoi cantar Pá God.",
    "Por que as plantas pequenas não falam?\nPorque elas são mudinhas.",
    "O que um cromossomo falou pro outro?\nCromossomos bonitos!",
    `Adivinha o que um funkeiro cego disse pro outro?
-Segue o braille 🧑‍🦯🎶`,
    `Qual a parte mais dura de um vegetal?
    
-A cadeira de rodas 🧑‍🦽`,
`Se o cachorro tivesse religião, qual seria? 

- Cão-domblé 🐶`
,
`Por que essa cara de enterro rapaz? – pergunta o primeiro.

Ó, rapaz! Discuti com a minha mulher e ela jurou ficar sem  conversar comigo durante um mês inteiro.

Agora eu entendo por que você está tão triste!

É que o prazo acaba hoje!`
,
`Por que um policial estava interrogando um saco de cimento?
Porque ele queria informações concretas`
,
`Sabe por que a panela procurou um terapeuta?
Porque é uma panela depressão.`
,
`Um rapaz chegou num velório e a primeira coisa que perguntou foi:

– Qual é a senha do Wi-Fi?
Um parente incomodado disse:
– Respeite o falecido!
E ele perguntou:
– É tudo junto?`,

`Por que o rádio não pode ter filhos?
Porque ele é stereo.`,
`Uma mulher sai do chuveiro, pisca para o namorado e diz: “Querido, eu me depilei lá embaixo. Sabe o que isso significa?” O namorado responde: “Sim, significa que o ralo está entupido de novo”.`
,
`Aposto que você não consegue me dizer algo que me deixe feliz e triste ao mesmo tempo”, diz um marido para sua esposa. Ela pensa por um momento e responde: “O seu pênis é maior que o do seu irmão”`,

`Um cara está sentado na sala de espera do médico. O médico entra e diz: “Tenho más notícias. Receio que você precise parar de se masturbar”. “Não entendo, doutor”, diz o paciente. “Por quê?” “Porque”, diz o médico. “Estou tentando examiná-lo.”`
,



]
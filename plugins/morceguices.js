
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* By https://github.com/DIEGO-OFC/DORRAT-BOT-MD */

let handler = async (m, { conn, text}) => {

m.reply(` ━━━━━━━━━⬣⬣━━━━━━━━

 『🕯🦇』
 
_${pickRandom(global.mundoGoticoInfo)}_ 

 ━━━━━━━━━⬣⬣━━━━━━━━`)
}
handler.tags = ['frases']
handler.command = ['morceguices']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
 global.mundoGoticoInfo = [
  "A subcultura gótica, surgida nos anos 80, é uma expressão cultural complexa que se distingue por sua influência multifacetada, incluindo a literatura gótica, o expressionismo alemão e correntes artísticas diversas.",
  "A estética gótica, manifesta na moda, destaca-se por sua singularidade. Caracterizada por roupas escuras, acessórios de prata, maquiagem dramática e penteados elaborados, a moda gótica reflete uma preferência por um estilo visual sombrio e elegante, transmitindo uma expressão única de identidade.",
  "A música desempenha um papel central no mundo gótico. Gêneros como gothic rock, darkwave e post-punk prosperam, com bandas emblemáticas como Bauhaus e Sisters of Mercy contribuindo significativamente para a riqueza musical da subcultura.",
  "A literatura gótica, seja clássica ou contemporânea, serve como uma fonte rica de inspiração para os adeptos do estilo. Explorando temas como o sobrenatural, o misterioso e o macabro, ela contribui para a construção da narrativa cultural gótica.",
  "A subcultura gótica forma uma comunidade global, com clubes noturnos, festivais de música gótica e eventos temáticos desempenhando um papel vital. A Europa Ocidental destaca-se como um epicentro significativo dessas atividades culturais.",
  "A estética gótica também permeia as artes visuais. Artistas góticos criam obras que capturam a atmosfera sombria e romântica, frequentemente retratando paisagens misteriosas e personagens fascinantes, contribuindo para a expressão artística da subcultura.",
  "Para além da música e da moda, a dança é uma forma crucial de expressão na subcultura gótica. Estilos como a dança gótica são praticados em eventos específicos, fornecendo uma dimensão física e emocional à experiência gótica.",
  "Os festivais góticos, notavelmente o Wave-Gotik-Treffen em Leipzig, Alemanha, atraem participantes de todo o mundo. Esses eventos oferecem uma experiência imersiva na cultura gótica, com performances ao vivo, desfiles de moda e oportunidades sociais.",
  "Os temas filosóficos na subcultura gótica vão além da estética. Exploram ideias como decadência, niilismo, existencialismo e romantismo sombrio, proporcionando uma abordagem intelectual e reflexiva que enriquece a experiência cultural.",
  "O termo 'gótico' possui uma história rica, desde sua origem na arquitetura medieval até sua evolução para designar uma estética e uma atitude cultural. Essa trajetória evidencia a diversidade de significados que essa palavra incorpora, conectando-se com a complexidade da subcultura gótica.",
  "A arquitetura gótica, influenciadora primordial da estética gótica, destaca-se por suas catedrais imponentes, vitrais elaborados e elementos decorativos detalhados, refletindo a atmosfera majestosa e sombria.",
  "A subcultura gótica tem um interesse marcado por temas históricos, especialmente a Idade Média. Essa fascinação se manifesta em recriações de vestimentas medievais, eventos temáticos e uma abordagem romântica à história.",
  "O cinema gótico, representado por filmes como 'Nosferatu' e 'The Cabinet of Dr. Caligari', desempenhou um papel crucial na formação da estética gótica, explorando narrativas sombrias e atmosferas macabras.",
  "A poesia gótica, com seus versos melancólicos e imagens sombrias, é uma forma de expressão artística apreciada na subcultura gótica, complementando as influências literárias e musicais.",
  "O simbolismo desempenha um papel vital na cultura gótica, com elementos como a cruz invertida, corvos, rosas negras e outros símbolos sombrios sendo frequentemente utilizados para expressar identidade e pertencimento.",
  "A subcultura gótica, apesar de suas raízes europeias, encontrou expressão global, sendo adotada e reinterpretada em diversas culturas ao redor do mundo, evidenciando sua ressonância universal.",
  "O DIY (Faça Você Mesmo) é um princípio importante na cena gótica, incentivando a criatividade individual na moda, arte e música, permitindo que os adeptos personalizem e expressem sua identidade única.",
  "A cultura gótica também abraça o ativismo, com discussões sobre questões como diversidade, igualdade e inclusão, refletindo a consciência social dentro da subcultura.",
  "A moda gótica contemporânea é influenciada pela fusão de estilos, incorporando elementos de moda vitoriana, punk, cybergoth e steampunk, resultando em uma expressão diversificada e em constante evolução.",
  "A subcultura gótica, longe de ser estática, continua a evoluir, integrando novas influências e perspectivas, mantendo-se como um espaço dinâmico para a expressão artística e cultural."
];


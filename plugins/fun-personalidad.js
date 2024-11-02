
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn,isAdmin,isOwner, command, text }) => {
	

if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)	
conn.getName(who)
  let personalidad = `
┏━━°❀❬ *PERSONALIDADE}* ❭❀°━━┓
*┃*
*┃• Nome* : ${text ? text : "@"+username}
*┃• Tipo MBTI* : ${pickRandom(['ISTJ','ESTP','INFJ','ENFP','INTP','ESFJ','ISFP','ENTJ','ISTP','INFP','ESTJ','ESFP','ENFJ','INTJ','ISFJ','ENTP'])}
*┃• Atividades Frequentes* : ${pickRandom(['Lendo Livros','Praticando Esportes','Explorando Novos Lugares','Assistindo Filmes','Desenvolvendo Habilidades Artísticas','Socializando em Festas','Jogando Videogames','Meditando','Trabalhando em Projetos Pessoais','Conversando com Amigos','Aproveitando a Natureza','Participando de Eventos Culturais','Liderando Equipes','Ajudando em Organizações Voluntárias','Inovando em Projetos Tecnológicos','Curtindo a Solidão'])}
*┃• Está Sempre* : ${pickRandom(['Planejando','Aventurando-se','Refletindo','Criando','Desafiando Normas','Cuidando dos Outros','Se Divertindo','Explorando Oportunidades','Aprendendo Constantemente','Procrastinando','Conectando-se com Pessoas','Focando em Metas','Tomando Decisões Rápidas','Expressando Criatividade','Observando ao Redor'])}
*┃• Extroversão Social* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Introversão Social* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• Tipo de Pessoa* : ${pickRandom(['Empático','Individualista','Colaborativo','Altruísta','Reservado','Comunicativo','Confrontativo','Pacífico','Adaptável','Não Binário XD','Egocêntrico'])}
*┃• Hobbies Principais* : ${pickRandom(['Praticar Esportes','Arte e Artesanato','Viajar e Explorar','Culinária','Música e Instrumentos','Leitura','Jogos e Quebra-Cabeças','Meditação e Yoga','Programação e Tecnologia','Socializar com Amigos','Natureza e Caminhadas','Filmes e Séries','Voluntariado','Gaming','Desenho e Pintura','Fotografia'])}
*┃• Metas de Vida* : ${pickRandom(['Carreira de Sucesso','Equilíbrio Vida-Trabalho','Realização Pessoal','Aventuras e Viagens','Construir Relacionamentos Duradouros','Impacto Social Positivo','Desenvolvimento Pessoal Contínuo','Independência Financeira','Contribuir para a Comunidade','Exploração de Paixões Criativas','Saúde e Bem-Estar','Inovação e Descoberta','Educação e Aprendizado Constante','Estabilidade Familiar','Liberdade e Flexibilidade'])}
*┃• Desafios Pessoais* : ${pickRandom(['Gerenciar o Tempo Eficientemente','Superar Medos e Inseguranças','Aperfeiçoar Habilidades Sociais','Encontrar Equilíbrio Emocional','Tomar Decisões Difíceis','Manter a Motivação Constante','Adaptar-se a Mudanças','Estabelecer Limites Pessoais','Lidar com o Estresse','Aceitar a Falha como Parte do Crescimento','Melhorar a Comunicação Interpessoal','Alcançar Equilíbrio Entre Trabalho e Vida','Desenvolver Resiliência','Aceitar a Mudança como uma Oportunidade','Construir Autoconfiança'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidade *<nome>*']
handler.tags = ['fun']
handler.command = ['personalidade']
handler.admin = false
handler.level=7
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import {gpt} from 'gpti'
import JSON5 from 'json5'
const handler = async (m, {conn, participants, groupMetadata,isAdmin, isOwner, text, args, usedPrefix, command, reply}) => {
  const currentTime = new Date().getTime() 
  let delayBetweenQuestions = 60000
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].jogos===false){
   m.react("❌")
   
   return !0;
 } 
  if(!global.xppergunta){
    global.xppergunta = {}
  }
  
  if(global.xppergunta[m.chat]){
    global.xppergunta[m.chat]=false
  }
  if(!global.quiz ) global.quiz  = {}
  if(!global.quizxp ) global.quizxp  = {}
  if(!global.db.data.chats[m.chat].quiz) global.db.data.chats[m.chat].quiz  = {}
  if(!global.quizxp[m.chat] ) global.quizxp[m.chat]  = {}
  
  
global.db.data.chats[m.chat].quiz = global.db.data.chats[m.chat].quiz ? global.db.data.chats[m.chat].quiz : {}
global.quizxp[m.chat] = global.quizxp[m.chat] ? global.quizxp[m.chat] : {}

global.xppergunta[m.chat]= global.xppergunta[m.chat] ? global.xppergunta[m.chat] : false
if(!global.db.data.chats[m.chat].quiz){
  global.db.data.chats[m.chat].quiz=  {
    perguntaAndamento: false,
    pergunta: {}
  }
}
if (global.db.data.chats[m.chat].quiz.perguntaAndamento === undefined) {
    global.db.data.chats[m.chat].quiz.perguntaAndamento = false;
}
if (global.db.data.chats[m.chat].quiz.loading === undefined) {
    global.db.data.chats[m.chat].quiz.loading = false;
}
if (global.db.data.chats[m.chat].quiz.modo === undefined || !global.db.data.chats[m.chat].quiz.modo) {
    global.db.data.chats[m.chat].quiz.modo = true;
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}



  const categories = [
        'Geral',
        'Historia',
        'Mitologia',
        'Arte',
        'Tecnologia',
        'Informatica',
        'Programacao',
        'Fisica',
        'Quimica',
        'Biologia',
        'Matematica',
        'Musica',
        'Filosofia',
        'Literatura',
        'Medicina',
        'Economia',
        'Politica',
        'Astronomia',
        'Psicologia',
        'Sociologia',
        'Arqueologia',
        'Criminologia',
        'Fotografia',
        'Cultura',
        'Direito'
        // Adicione mais categorias conforme necessário
    ];
    let id = m.chat;
    let currentQuestion = "";
let currentAnswer = "";




if (!text) {
    

    const categoryList = categories.map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`).join('\n');

    throw `
╭━━━『 𝐐𝐮𝐢𝐳 』━━━⬣
┃ 
┃ 🥀🦇 𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐞 𝐨 𝐧ú𝐦𝐞𝐫𝐨 𝐩𝐚𝐫𝐚 
┃ 𝐝𝐞𝐬𝐯𝐞𝐥𝐚𝐫 𝐚 𝐪𝐮𝐞𝐬𝐭ã𝐨 𝐯𝐢𝐧𝐝𝐚 
┃ 𝐝𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬,
┃ 𝐮𝐬𝐞 𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 .quiz r 𝐩𝐚𝐫𝐚
┃ 𝐭𝐫𝐚𝐳𝐞𝐫 𝐥𝐮𝐳 𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚 𝐝𝐞 𝐟𝐨𝐬𝐬𝐚 𝐢𝐠𝐧𝐨𝐫𝐚𝐧𝐜𝐢𝐚
┃
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ .quiz 8 _*(Perguntas de física)*_
┃ .quiz r _*(Revela a resposta)*_
┃━━━━━━━⬣
┃
${categoryList}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛| ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
}
else {
  
  
  
    const selectedCategoryIndex = parseInt(text) - 1;
    
     
    if (selectedCategoryIndex >= 0 && selectedCategoryIndex < categories.length) {
   
       
  
        
   // Assuming you have these variables defined somewhere in your script
if(!global.db.data.chats[m.chat].quiz.modo){
  global.db.data.chats[m.chat].quiz.modo =false
}

// Your existing code...

const selectedCategory = categories[selectedCategoryIndex];

global.db.data.chats[m.chat].quiz.categoria = selectedCategory



  const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
 
  if (!global.db.data.chats[m.chat].quiz.modo && timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
return m.reply(` ━━━━━━━━━⬣ 💀 ⬣━━━━━━━━

🕰️🕯️ 𝓐𝓰𝓾𝓪𝓻𝓭𝓪 𝓹𝓸𝓻 𝓮𝓽𝓮𝓻𝓷𝓸𝓼  ${remainingTimeInSeconds} 𝓼𝓮𝓰𝓾𝓷𝓭𝓸𝓼, 𝓪𝓷𝓽𝓮𝓼 𝓺𝓾𝓮 𝓽𝓾𝓪 𝓹𝓻𝓸𝔁𝓲𝓶𝓪 𝓹𝓮𝓻𝓰𝓾𝓷𝓽𝓪 𝓸𝓾𝓼𝓮 𝓹𝓮𝓻𝓽𝓾𝓻𝓫𝓪𝓻 𝓸 𝓻𝓮𝓹𝓸𝓾𝓼𝓸 𝓶𝓪𝓬𝓪𝓫𝓻𝓸 𝓭𝓮𝓼𝓽𝓮 𝓭𝓲𝓪𝓵𝓸𝓰𝓸.


 ━━━━━━━━━⬣ ${vs} ⬣━━━━━━━━`);
  } 
  
if (global.db.data.chats[m.chat].quiz.modo && global.db.data.chats[m.chat].quiz.perguntaAndamento) {
    return m.reply(`━━⬣ 💀 𝔔𝔲𝔦𝔷 💀 ⬣━━
 
 🪶📜    ℜ𝔢𝔰𝔭𝔬𝔫𝔡𝔞-𝔪𝔢 𝔞 𝔦𝔫𝔡𝔞𝔤𝔞𝔠𝔞𝔬 𝔞𝔫𝔱𝔢𝔯𝔦𝔬𝔯, 𝔡𝔢 𝔪𝔬𝔡𝔬 𝔞 𝔭𝔯𝔬𝔰𝔰𝔢𝔤𝔲𝔦𝔯 𝔞 𝔱𝔯𝔦𝔩𝔥𝔞 𝔫𝔢𝔰𝔱𝔢 𝔳𝔞𝔩𝔢 𝔡𝔢 𝔰𝔬𝔪𝔟𝔯𝔞𝔰 𝔡𝔬 𝔠𝔬𝔫𝔥𝔢𝔠𝔦𝔪𝔢𝔫𝔱𝔬
 
━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━
    `)
  }
  if(global.db.data.chats[m.chat].quiz.loading===true){
    return m.reply(` ━━━━⬣ 💀 ⬣━━━━

〘 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐚 𝐩𝐞𝐫𝐠𝐮𝐧𝐭𝐚 𝐬𝐞𝐫 𝐩𝐫𝐨𝐜𝐞𝐬𝐬𝐚𝐝𝐚! 〙

 ━━━━━━⬣ ${vs} ⬣━━━━━━`);
  }
     m.react("⏳")
 global.db.data.chats[m.chat].quiz.loading=true
if (!global.db.data.chats[m.chat].quiz.historico ||
global.db.data.chats[m.chat].quiz.historico.length === 0){
  global.db.data.chats[m.chat].quiz.historico  = [

    {
        "role": "system",
        "content": `Voce é uma IA assistente para gerar quiz, perguntas e vestibulares
voce deve criar objetos em JS para perguntas, con alternativas, resposta e explicação seguindo este modelo:


       { 
         Pergunta: 'Pergunta dentro do TEMA DA CATEGORIA',
    Opcoes: {
      A: 'Opcao',
      B: 'Opcao',
      C: 'Opcao',
      D: 'Opcao'
    },
    Pontos: 'Valor de acordo com a dificuldade',
     Money: 'Valor por dificuldade',
     XP: 'Valor por dificuldade',
    Resposta: 'Opcao certa A, B, C ou D',
    Motivo: 'Explicacao detalhada da resposta'
  }


Retorne UM OBJETO JSON COMO PLAIN TEXT E NADA MAIS!!!
no atributo Resposta, voce deve colocar apenas a letra certa!!
FACA AS PERGUNTAS EM PORTUGUES!!!
faca perguntas dificeis e complexas adequadas a um vestibular referente ao tema
Ajuste o valor de Pontos, Money e XP de acordo com a complexidade e tema da
, os valores minimos sao 25 pontos, 50 Money e 200xp
Evite repetir as mesmas perguntas`
    },
    ]
}
 global.db.data.chats[m.chat].quiz.historico = [
...global.db.data.chats[m.chat].quiz.historico,

    {
        "role": "user",
        "content": `Agora siga as instrucoes que te foram dada  e crie o objeto
        JSON de uma pergunta com os MESNMOS CAMPOS/PROPRIEDADES no exemplo!!!
               { 
         Pergunta: "Pergunta dentro do TEMA DA CATEGORIA",
    Opcoes: {
      A: "Opcao",
      B: "Opcao",
      C: "Opcao",
      D: "Opcao"
    },
    Pontos: "Valor de acordo com a dificuldade",
     Money: "Valor por dificuldade",
     XP: "Valor por dificuldade",
    Resposta: "Opcao certa A, B, C ou D",
    Motivo: "Explicacao detalhada da resposta"
  }
  
        Retorne APENAS UM OBJETO JSON E MAIS NADA!
        use o " nas propriedades do objeto
       
       ${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? `Unificação do Egito (História Antiga), Revolução
        Francesa (História Moderna), Descobrimento do Brasil (História do
        Brasil), Revolução Industrial (História Econômica), Primeira Guerra
        Mundial (História Contemporânea), Queda de Constantinopla (História
        Medieval), Guerra Fria (História Política), Abolição da Escravatura
        (História Social), Reforma Protestante (História Religiosa), Civilização
        Maia (História da América Latina), Revolta dos Búzios (História da
        Bahia), Independência dos Estados Unidos (História das Américas),
        Império Napoleônico (História Militar), Invasões Bárbaras (História da
        Europa), Era Meiji no Japão (História da Ásia), Independência da Índia
        (História Colonial), Guerra do Paraguai (História da América do Sul),
        Revolta de Espártaco (História da Roma Antiga), Reforma Agrária no
        Brasil (História Agrária), Revolução Russa (História do Século XX),
        Expansão Islâmica (História do Oriente Médio), Inquisição Espanhola
        (História da Religião), Primeiras Civilizações Mesopotâmicas (História
        Pré-Histórica), Conferência de Berlim (História da África), Queda do
        Muro de Berlim (História do Pós-Guerra), Guerras Médicas (História da
        Grécia Antiga), Renascimento Cultural (História da Arte), Revolução
        Haitiana (História da América Central), Tratado de Tordesilhas (História
        Diplomática), Guerra do Vietnã (História dos Conflitos). e muito mais` : ''}
  NAO MANDE PERGUNTAS SEMELHANTES AUE VOCE JA TENHA ME ENVIADO, SEJA CRIATIVO E
 CRIE perguntas complexas e didiceis, finja que isto e um vestibular da maior
 faculdade que há, o vestibular tem que ser dificil
        Categoria:
        [${global.db.data.chats[m.chat].quiz.categoria}${global.db.data.chats[m.chat].quiz.categoria
        == 'Historia' ? ' Geral - Tudo sobre historia' : ''}]`
    }
 ]
 
 console.log('begin quiz')
  await gpt.v1({
     messages: global.db.data.chats[m.chat].quiz.historico,
     
   model: "GPT-4",
    markdown: false
}, async (err, dtta) => {
    if(err != null){
        console.log(err);
        throw err
    } 
    else {
console.log(dtta)
        
        let aiReply =  dtta.gpt
        aiReply = aiReply.replace(/“/g, '"').replace(/”/g, '"');
        console.log(aiReply); // Should output "object"
        try{
          console.log('sending quiz')
          console.log(aiReply)
       aiReply = JSON5.parse(aiReply)
        }
        catch(e){
          console.log(' ')
          console.log(' --------------- ')
          console.log(' ')
          console.log(e)
          m.react("❌")
          global.db.data.chats[m.chat].quiz.loading =false
        }
        
        global.db.data.chats[m.chat].quiz.historico.push({
  "role": "user",
  "content": `PERGUNTA FEITA E ESSE TEMA NAO DEVE SER REPITIDO: ${global.db.data.chats[m.chat].quiz.Pergunta}`
});


console.log('question added')
global.db.data.chats[m.chat].quiz.pergunta = aiReply
  ; // Current time in seconds

  if(global.db.data.chats[m.chat].quiz.modo==false){
    console.log('Modo xp false')
  if(global.db.data.chats[m.chat].quiz != null) {
  console.log("Current Time: " + currentTime);
  console.log("Last Question Time: " + global.db.data.chats[m.chat].quiz.time);

    const timeDifference = currentTime - global.db.data.chats[m.chat].quiz.time;
  console.log("Time Difference: " + timeDifference);
  console.log("Delay: " + delayBetweenQuestions);
console.log('time  ' + timeDifference < delayBetweenQuestions)

console.log('porra')
  if (timeDifference < delayBetweenQuestions) {
    // If the user attempts to ask a question too soon, provide a warning
    const remainingTime = delayBetweenQuestions - timeDifference;
    
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
await m.reply(` ━━━━━━━━━⬣ 💀 ⬣━━━━━━━━

🕰️🕯️ 𝓐𝓰𝓾𝓪𝓻𝓭𝓪 𝓹𝓸𝓻 𝓮𝓽𝓮𝓻𝓷𝓸𝓼 ${remainingTimeInSeconds} 𝓼𝓮𝓰𝓾𝓷𝓭𝓸𝓼, 𝓪𝓷𝓽𝓮𝓼 𝓺𝓾𝓮 𝓽𝓾𝓪 𝓹𝓻𝓸𝔁𝓲𝓶𝓪 𝓹𝓮𝓻𝓰𝓾𝓷𝓽𝓪 𝓸𝓾𝓼𝓮 𝓹𝓮𝓻𝓽𝓾𝓻𝓫𝓪𝓻 𝓸 𝓻𝓮𝓹𝓸𝓾𝓼𝓸 𝓶𝓪𝓬𝓪𝓫𝓻𝓸 𝓭𝓮𝓼𝓽𝓮 𝓭𝓲𝓪𝓵𝓸𝓰𝓸.


 ━━━━━━━━━⬣ ${vs} ⬣━━━━━━━━`);
  } 
  else {
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    m.react('🌓')
        console.log('1 🦇')
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } =     global.db.data.chats[m.chat].quiz.pergunta
    console.log('2 🦇')
    console.log(global.db.data.chats[m.chat].quiz.pergunta)
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
      
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
 
    await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.db.data.chats[m.chat].quiz.modo== true ? "╰━━━━━━⬣⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
  }
  else {
 
    console.log('1 🦇')
    const { Pergunta, XP,Pontos, Money, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta;
    console.log('2 🦇')
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    console.log('3 🦇')

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
              ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
      "time": new Date().getTime(),
      loading: false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    // Send the question
  
    await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.db.data.chats[m.chat].quiz.modo== true ? "╰━━━━━━⬣⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}`);

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
 
  }
  else if(global.db.data.chats[m.chat].quiz.modo==true){
  console.log('modo xp trur')
  
    
    if(global.db.data.chats[m.chat].quiz!= null) {
 
 
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo } = global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    global.db.data.chats[m.chat].quiz.perguntaAndamento = true
    
    
    let qid = await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.quizxp[m.chat].modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}`);

 // Update the current question and answer
    global.db.data.chats[m.chat].quiz= {
      ...global.db.data.chats[m.chat].quiz,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
      loading:false
    };
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz)
    // Send the question
    

    // Update the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  
  }
  else {
    
    const { Pergunta, XP, Money, Pontos, Opcoes, Resposta, Motivo} = global.db.data.chats[m.chat].quiz.pergunta;
    const optionsString = Object.entries(Opcoes)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    global.xppergunta[m.chat]= true
 // Update the current question and answer
    console.log("test" + global.db.data.chats[m.chat].quiz.modo)
    // Send the question
  global.db.data.chats[m.chat].quiz.perguntaAndamento = true
  
  
   let qid = await m.reply(`
╭━━━『 ${selectedCategory} 』━━━⬣
┃
┃ ${Pergunta}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 

${optionsString}

┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 📜
${global.db.data.chats[m.chat].quiz.modo== true ? "╰━━━━━━⬣ _𝙼𝚘𝚍𝚘 𝙲𝚘𝚖𝚙𝚎𝚝𝚒𝚝𝚒𝚟𝚘_ ⬣━━━━━━" : "╰━━━━━━━━━━━━━━━━━━⬣"}
      `);

global.db.data.chats[m.chat].quiz = {
        ...global.db.data.chats[m.chat].quiz,
  "math":false,
      "cp": Pergunta,
      "ca": Resposta,
      "cm": Motivo,
            "xp": XP,
     "pontos": Pontos,
        "mony": Money,
      "id": qid.id,
      "time": new Date().getTime(),
     loading: false
    };
    
    
     if (selectedCategoryIndex == 11 || selectedCategory == 'Matematica') {
     global.db.data.chats[m.chat].quiz.math = true;
    } else {
     global.db.data.chats[m.chat].quiz.math = false;
    }
    console.log("on quiz  "+ global.db.data.chats[m.chat].quiz.id)
    // Updte the last question time after sending a new question
    
    // Additional code specific to your application logic can go here...
    // For example, you might want to handle user responses or perform other actions.
  }
   //fim estado pergunta
  } // fim elseif if competitivo
  

 
    }
})


}
    else if(text === "r"){
      
      
     if(!global.db.data.chats[m.chat].quiz.pergunta){
        await m.reply(`
╭━━━━━━━━━⬣
💀 𝔈𝔰𝔱𝔢 𝔧𝔬𝔤𝔬 𝔧á 𝔣𝔬𝔦 𝔢𝔫𝔠𝔢𝔯𝔯𝔞𝔡𝔬
╰━━━━━━━━━⬣
        `)
      }
  
     else if(global.db.data.chats[m.chat].quiz.cp)
     
      {
      await m.reply(`
╭━━━━━━━━━⬣
💀 𝐑𝐞𝐬𝐩𝐨𝐬𝐭𝐚: ${global.db.data.chats[m.chat].quiz.ca}
┗─┅──┅❖ 

${global.db.data.chats[m.chat].quiz.cm}

╰━━━━━━━━━━━━━━━━━━⬣
      `)
          global.db.data.chats[m.chat].quiz.perguntaAndamento = false
          global.db.data.chats[m.chat].quiz.pergunta = {}
      
        global.db.data.chats[m.chat].quiz= {
                  ...global.db.data.chats[m.chat].quiz,
        "math": false,
      "cp": '',
      "ca": '',
      "cm": '',
      "xp": 0,
      "id": '',
      "time": ''

    }
    
    }
    }
    else if(text=== 'apagar'){
      m.react("✅")
      delete global.db.data.chats[m.chat].quiz
    }
    
    
    
    
   else if (text.includes("placar")) {
console.log(global.db.data.chats[m.chat].jogadores)
  if (!global.db.data.chats[m.chat].jogadores) {
    global.db.data.chats[m.chat].jogadores = {};
  }
  let players = global.db.data.chats[m.chat].users
  
let sortedPlayers

console.log(m.chat)
console.log("CHAT")
console.log("teste inicio -------+")
console.log(players)
console.log("teste fim--------+")
const users = participants.map((u) => conn.decodeJid(u.id));
  
  

  console.log(players);
  console.log("acima e topjogadores")
  let formattedMessage = `
━━━━━━━━━⬣📜 𝔓𝔩𝔞𝔠𝔞𝔯 ⬣━━━━━━━━ 
`;
let mentionedId = [];

  // Extract keys, sort by xp in descending order, and limit to top 5
  const top5Users = Object.keys(players)
    .sort((a, b) => players[b].pontos - players[a].pontos)
    .slice(0, 5);

  
  top5Users.forEach((key) => {
    const { pontos, name } = players[key];
    mentionedId.push(key);

    formattedMessage += `
🪦 @${key.split('@')[0]} 
🪶 ${pontos} _Pontos_
   ─┅──┅❖ ❖─┅──┅
`;
  })

  

// Example usage

console.log('Mentioned IDs:', mentionedId);

conn.sendMessage(m.chat, { text: formattedMessage, mentions: mentionedId});

// Reset mentionedId for the next cycle
mentionedId = [];
  
  players = {}

/*
Object.entries(players).forEach(([group, players]) => {
  sortedPlayers = Object.entries(players)
    .sort(([, a], [, b]) => b.xp - a.xp) // Sort by XP level in descending order
    .slice(0, 5) // Take only the first 5 players
    .map(
      ([number, { xp, name }]) => {
        const userId = number.split('@')[0];
        mentionIds.push(number); // Add each number to the mentionIds array
        return `
🪦 @${key} | ${name}
🪶 ${xp} _Pontos_
   ─┅──┅❖ ❖─┅──┅`;
      }
    )
    .join('\n');
});

// Use mentionIds array as needed
console.log(mentionIds);

    formattedMessage += `
${sortedPlayers}
━━━━━━━━━⬣ 🌒 ${vs} ⬣━━━━━━━━ 
`;

  
  
  
    conn.sendMessage(m.chat, { text: formattedMessage, mention: mentionIds});
    
*/

  }

    
 
 
else {
  const categoryList = categories
    .map((category, index) => `┃ ${usedPrefix + command} ${index + 1} - ${category}`)
    .join('\n');

  throw `
╭━━━『𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐝𝐚𝐝𝐞𝐬』━━━⬣
┃ 
┃ 🥀🦇 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐭ó𝐩𝐢𝐜𝐨 𝐣𝐚𝐳 
┃ 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬 
┃ 𝐜𝐮𝐫𝐢𝐨𝐬𝐨𝐬
┃
${categoryList}
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛| ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
}
}
}

  
  

handler.help = ['curiosidades'];
handler.tags = ['tools'];
handler.command = ['quiz']

export default handler;

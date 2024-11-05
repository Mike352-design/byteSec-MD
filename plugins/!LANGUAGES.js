
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────





let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {


    let notAdminMg;

if (languageConfig === 'pt') {
    notAdminMg = `
> robot@bytesec: #/groups/ warning.log
> ---------------------------------------

[!] ATENÇÃO: Acesso Negado

────────────────────────────────
> Usuário não está no arquivo sudoers.
> Esta ação é estritamente proibida.
> ‎ 
> Hey, eu não sou um administrador aqui, garoto!
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
}

else if (languageConfig === 'en') {
    notAdminMg = `
> robot@bytesec: #/groups/ warning.log
> ---------------------------------------

[!] WARNING: Access Denied
────────────────────────────────
> User is not in the sudoers file.
> This action is strictly prohibited.
> ‎ 
> Hey, I'm not an administrator here, kid!
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}


global.notAdmin = notAdminMg



}
export default handler


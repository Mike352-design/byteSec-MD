
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
> robot@bytesec: #/groups/ cat warning.log
> ---------------------------------------

[!] ATENÇÃO: Acesso Negado
────────────────────────────────
> [+] 𝘶𝘴𝘦𝘳 𝘯𝘰𝘵 𝘪𝘯 𝘵𝘩𝘦 𝘴𝘶𝘥𝘰𝘦𝘳𝘴 𝘧𝘪𝘭𝘦!
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
> robot@bytesec: #/groups/ cat warning.log
> ---------------------------------------

[!] WARNING: Access Denied
────────────────────────────────
> [+] 𝘶𝘴𝘦𝘳 𝘯𝘰𝘵 𝘪𝘯 𝘵𝘩𝘦 𝘴𝘶𝘥𝘰𝘦𝘳𝘴 𝘧𝘪𝘭𝘦!
> This action is strictly prohibited.
> ‎ 
> Hey, I'm not an administrator here, kid!
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}


global.notAdmin = notAdminMg



let notOwnerMg;

if (languageConfig === 'pt') {
    notOwnerMg = `
> robot@bytesec: #/groups/ cat access_denied.log
> ---------------------------------------

[!] ERROR_ACCESS_DENIED: COMANDO BLOQUEADO
────────────────────────────────
> COMANDO ESTRITAMENTE EXCLUSIVO PARA A EQUIPE BYTESEC.
> ‎ 
> ⚠ 0x00000005: *𝒫𝑅𝒪𝐼𝐵𝐼𝒟𝒪*
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (languageConfig === 'en') {
    notOwnerMg = `
> robot@bytesec: #/groups/ cat access_denied.log
> ---------------------------------------

[!] ERROR_ACCESS_DENIED: COMMAND BLOCKED
────────────────────────────────
> Access denied: user lacks ByteSec privileges.
> Error code: 0x00AF3D
> COMMAND STRICTLY EXCLUSIVE TO BYTESEC CREW.
> ‎ 
> ⚠ 0x00000005: *𝐹𝒪𝑅𝐵𝐼𝒟𝒟𝐸𝒩*
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}

global.notOwner = notOwnerMg;



}
export default handler


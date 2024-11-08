
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯

let { downloadContentFromMessage } = (await import(global.baileys));

export async function before(m, { isAdmin, isBotAdmin }) {
 const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

 const exposedMessage = global.db.data.chats[m.chat].language === 'pt'
    ? [
        `> root@bytesec:~# extundelete /dev/sda1 -r --target=view_once
. . . . . . . . . . . . . . . . . . . . . . . . 

[+] Arquivo recuperado:
> >>> Usuário: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
|  Desculpa, garoto. Aqui, não mantemos
| segredos uns dos outros.
| 
> root@bytesec:~# _`,

        `> root@bytesec:~# photorec /dev/sda1 --filetype=jpeg --undelete
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> >>> Usuário: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
| Mensagens “visualizar uma vez”? Ah, claro...
|
> root@bytesec:~# _`,

        `> root@bytesec:~# recoverfiles /dev/sda1 -p --view-once
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> >>> Usuário: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
| Parece que alguém levou um xposed
|
> root@bytesec:~# _`,

        `> root@bytesec:~# dd if=/dev/sda1 of=/recovered.msg bs=4M
. . . . . . . . . . . . . . . . . . . . . . . .

[+] Arquivo recuperado:
> >>> Usuário: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
| Ops, era para ser segredo? 

> root@bytesec:~# _`
    ]
    : [
        `> root@bytesec:~# extundelete /dev/sda1 -r --target=view_once
. . . . . . . . . . . . . . . . . . . . . . . . 

[+] File recovered:
> >>> User: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
|  Sorry, kiddo. In here, we don’t keep 
| secrets from each other.
|
> root@bytesec:~# _`,

        `> root@bytesec:~# photorec /dev/sda1 --filetype=jpeg --undelete
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> >>> User: @${m.sender.split('@')[0]}
> ${msg[type].caption}
| 
| View only once messages? Yeah, right…
| 
> root@bytesec:~# _`,

        `> root@bytesec:~# recoverfiles /dev/sda1 -p --view-once
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> >>> User: @${m.sender.split('@')[0]}
> ${msg[type].caption} 
| Seems like someone just got xposed
|
> root@bytesec:~# _`,

        `> root@bytesec:~# dd if=/dev/sda1 of=/recovered.msg bs=4M
. . . . . . . . . . . . . . . . . . . . . . . .

[+] File recovered:
> >>> User: @${m.sender.split('@')[0]}
> ${msg[type].caption}
|
| Ops, was it supposed to be a secret?
|
> root@bytesec:~# _`
    ];


 
 
 
 
let chat = db.data.chats[m.chat] 
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiver || chat.isBanned) return
if (global.db.data.chats[m.chat].isBanned) return !1
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', exposedMessage.getRandom(), m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', exposedMessage.getRandom(), m)
}}}

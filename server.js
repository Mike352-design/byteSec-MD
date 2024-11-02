
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import express from 'express' 
import {createServer} from 'http'
import path from 'path'
import {Socket} from 'socket.io'
import {toBuffer} from 'qrcode'
import fetch from 'node-fetch'

function connect(conn, PORT) {
  const app = global.app = express()
  console.log(app)
  const server = global.server = createServer(app)
  let _qr = 'QR invalido, probablemente ya hayas escaneado el QR.'

  conn.ev.on('connection.update', function appQR({qr}) {
    if (qr) _qr = qr
  })

  app.use(async (req, res) => {
    res.setHeader('content-type', 'image/png')
    res.end(await toBuffer(_qr))
  })

  server.listen(PORT, () => {
    console.log('App listened on port', PORT)
    if (opts['keepalive']) keepAlive()
  })
}

function pipeEmit(event, event2, prefix = '') {
  const old = event.emit;
  event.emit = function(event, ...args) {
    old.emit(event, ...args)
    event2.emit(prefix + event, ...args)
  }
  return {
    unpipeEmit() {
      event.emit = old
    }}
}

function keepAlive() {
  const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`
  if (/(\/\/|\.)undefined\./.test(url)) return
  setInterval(() => {
    fetch(url).catch(console.error)
  }, 5 * 1000 * 60)
}

export default connect

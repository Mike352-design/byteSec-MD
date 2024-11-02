//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import fetch from 'node-fetch'
import { FormData, Blob } from 'formdata-node'
import { fileTypeFromBuffer } from 'file-type'

/**
 * Upload file to itzpire.com
 * Supported mimetypes:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`
 * @param {Buffer} buffer File Buffer
 * @return {Promise<string>}
 */
export default async (buffer) => {
  const { ext, mime } = await fileTypeFromBuffer(buffer)
  const form = new FormData()
  const blob = new Blob([buffer.toArrayBuffer()], { type: mime })
  
  // Use the correct file field for itzpire.com and set the file name
  form.append('file', blob, 'greetings.' + ext)

  const res = await fetch('https://itzpire.com/tools/upload', {
    method: 'POST',
    headers: {
      'accept': '*/*'
    },
    body: form
  })

  const result = await res.json()
  if (res.ok && result && result.status === 'success') {
    return result.fileInfo.url // Return the file URL
  } else {
    throw new Error('Failed to upload the file to itzpire.com')
  }
}
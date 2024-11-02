import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

const response = await fetch('https://raw.githubusercontent.com/Alcaventas/Renovacion25/master/official_accounts.json')  
const data = await response.json()
let { accounts,others } = data.info

global.tk = accounts.tiktok
global.ths = accounts.threads


global.accountsgb = [ tk, ig, yt, md, ].getRandom()

var canalesInfo = [
{ link: canal1, id: "", name: "@Alcashop" },
{ link: canal3, id: "", name: "Tips sobre Alcabots 🤩" } 
]
var indiceAleatorio = Math.floor(Math.random() * canalesInfo.length)
var channelRD = canalesInfo[indiceAleatorio]
global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: gataImg.getRandom(), thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
global.fakeChannel2 = { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, newsletterName: channelRD.name, serverMessageId: -1 }, forwardingScore: 200, externalAdReply: { title: packname, body: author, thumbnailUrl: gataMenu.getRandom(), sourceUrl: accountsgb, mediaType: 1, renderLargerThumbnail: false }}

}
export default handler

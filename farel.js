/*
  ]----------------[ INFO SCRIPT ]---------------[
  
  > Sc ori by : KurzXd OFFICIAL
  > Recode : Realz [ Farel ]
  > Chat me on wa : wa.me/6288216335309
  
  ]-----------[ GROUP WHATSAPP ]----------[
  
  > Anime Lovers
  Link :
  https://chat.whatsapp.com/GtmdKWxDi4v8RnT8OVzih3
  
  ]-------------------[ CATATAN ]------------------[

  NOTE :
  > Jangan jual sc
  > Install dulu baru recode
  > Saran gw : klo run di termux, pake pm2 aja soalnya ni sc sering terputus sendiri [ error ]
  > Tidak semua fitur work pasti ada yg error
*/

const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot.js')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, } = require("./lib/aboutuser")
const premium = require('./lib/premium')

//━━━━━━━━━━━━━━━[ STICKER WM ]━━━━━━━━━━━━━━━━━//

const Exif = require('./lib/exif')
const exif = new Exif()

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const _premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _heal = JSON.parse(fs.readFileSync('./database/energy.json'))
const _potion = JSON.parse(fs.readFileSync('./database/makanan.json'))

//━━━━━━━━━━━━━━━[ BOT BY FAREL ]━━━━━━━━━━━━━━━━━//

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "/> WhatsappBot";
autorespon = false
playmusic = false
antidelete = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
multi = true
nopref = false
limitawal = "100"
healawal = 50
limit: 'Limit kamu telah habis , Silahkan beli dengan #buylimit <nominal> atau minta gift dari user lain',
potionawal = 1

//━━━━━━━━━━━━━━━[ SETING ]━━━━━━━━━━━━━━━━━//

NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
anunya = settings.anunya

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

HunterApi = settings.HunterApi
YuzApi = 'Yuzzu'
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")

//━━━━━━━━━━━━━━━[ RUNTIME ]━━━━━━━━━━━━━━━━━//

    function kyun(seconds) {
	function pad(s) {
	return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = farel = async (farel, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        farel.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        farel.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = farel.user
		m = simple.smsg(farel, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		farel.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		runtime = process.uptime()
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./thumb.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
			    prem: 'Khusus User Premium Lord',
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const botNumber = farel.user.jid
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? farel.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? farel.user.jid : farel.contacts[mek.sender]
        const pushname = mek.key.fromMe ? farel.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await farel.chats.all()
		const groupMetadata = isGroup ? await farel.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiWame = isGroup ? antiwame.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const isPremium = isOwner ? true : premium.checkPremiumUser(sender, _premium)
		const q = args.join(' ')
		let bio_nya = await farel.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
		const nebal = (angka) => {
			return Math.floor(angka)
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = farel.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "WhatsappBot", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftex})
             farel.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = farel.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `Kurz Bot Assistan`, "footerText": "WhatsappBot", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            farel.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await farel.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./thumb.jpg')
		const sekarang = new Date().getTime();

//━━━━━━━━━━━━━━━[ WAKTU ]━━━━━━━━━━━━━━━━━//

			var ase = new Date();
                       var jamss = ase.getHours();
                       switch(jamss){
                case 0: jamss = "👋 Selamat malam"; break;
                case 1: jamss = "👋 Selamat malam"; break;
                case 2: jamss = "👋 Selamat malam"; break;
                case 3: jamss = "👋 Selamat pagi"; break;
                case 4: jamss = "👋 Selamat pagi"; break;
                case 5: jamss = "👋 Selamat pagi"; break;
                case 6: jamss = "👋 Selamat pagi"; break;
                case 7: jamss = "👋 Selamat pagi"; break;
                case 8: jamss = "👋 ️Selamat pagi"; break;
                case 9: jamss = "👋 Selamat siang️"; break;
                case 10: jamss = "👋 Selamat siang️"; break;
                case 11: jamss = "👋 Selamat siang"; break;
                case 12: jamss = "👋 Selamat siang"; break;
                case 13: jamss = "👋 Selamat sore"; break;
                case 14: jamss = "👋 Selamat sore"; break;
                case 15: jamss = "👋 Selamat sore"; break;
                case 16: jamss = "👋 Selamat sore️"; break;
                case 17: jamss = "👋 Selamat sore"; break;
                case 18: jamss = "👋 Selamat sore"; break;
                case 19: jamss = "👋 Selamat malam"; break;
                case 20: jamss = "👋 Selamat malam"; break;
                case 21: jamss = "👋 Selamat malam"; break;
                case 22: jamss = "👋 Selamat malam"; break;
                case 23: jamss = "👋 Selamat malam"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}

//━━━━━━━━━━━━━━━[ FAKE REPLY ]━━━━━━━━━━━━━━━━━//

// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `WhatsappBot`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await farel.relayWAMessage(
        farel.prepareMessageFromContent(
          target,
          farel.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
fake1 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `WhatsappBot\n ❑ RUNTIME : ${kyun(runtime)}`} } }

//━━━━━━━━━━━━━━━[ BUTTON VERIFY ]━━━━━━━━━━━━━━━━━//

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
farel.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Sebelum menggunakan bot silahkan daftar terlebih dahulu`
const daftar2 = '*NOTE :*\n• Jika button tidak terlihat silahkan ketik #verify'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `DAFTAR`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
farel.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await farel.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
farel.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await farel.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
farel.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await farel.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
farel.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//

            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer Kurz Bot Assistan\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        farel.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await farel.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        farel.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			farel.sendMessage(from, teks, text, { quoted:ftex })
		}
		const simir = (teks) => {
			farel.sendMessage(from, teks, text, { quoted:ftex })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			farel.sendMessage(hehe, teks, text, { quoted: ftex, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		
//━━━━━━━━━━━━━━━[ AUTO STICKER ]━━━━━━━━━━━━━━━━━//

		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			farel.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			farel.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			farel.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			farel.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			farel.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? farel.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : farel.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
farel.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
farel.sendMessage(from, hasil, type, options).catch(e => {
farel.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					farel.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await farel.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				farel.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return farel.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

//━━━━━━━━━━━━━━━[ AUTO ]━━━━━━━━━━━━━━━━━//

			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					farel.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					farel.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					farel.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("Admin bebas");
        reply("Virtex terdeteksi");
        farel.groupRemove(from, sender);
      }
			}
        if (budy.includes("wa.me/","https://wa.me//","https://wa.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiWame) return
				if (isGroupAdmins) return reply('Admin bebas')
				farel.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Wa.me terdeteksi Auto kick!')
			    farel.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
            }
        }

//━━━━━━━━━━━━━━━[ MUTE ]━━━━━━━━━━━━━━━━━//

        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah di unmute di grup ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Admin bebas')
				farel.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    farel.groupRemove(from, [kic]).catch((e) => { sticNotAdmin(from) })
			}
			}
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./sticker/anime/toxic.webp')
			farel.sendMessage(from, ano, sticker, { quoted: mek})
				}
if (!settings.autoread) {
farel.chatRead(from)
}
if (!settings.autocomposing) {
farel.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
farel.updatePresence(from, Presence.recording)
}

/*================================HEAL/ENERGY==============================*/

            const bayarHeal = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= amount
            fs.writeFileSync('./database/energy.json', JSON.stringify(_heal))
            }
            }
            const addHealUser = (sender, amount) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal -= 25
            fs.writeFileSync('./database/energy.json', JSON.stringify(_heal))
            }
            }
		    const healAdd = (sender) => {
            let position = false
            Object.keys(_heal).forEach((i) => {
            if (_heal[i].id == sender) {
            position = i
            }
            })
            if (position !== false) {
            _heal[position].heal += 25
            fs.writeFileSync('./database/energy.json', JSON.stringify(_heal))
            }
            }
             
/*================================POTION==============================*/

            const bayarPotion = (sender, amount) => {
        	let position = false
            Object.keys(_heal).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/makanan.json', JSON.stringify(_potion))
            }
            }
            const addPotioUser = (sender, amount) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
            if (_potion[i].id === sender) {
            position = i
            }
            })
            if (position !== false) {
            _potion[position].potion -= amount
            fs.writeFileSync('./database/makanan.json', JSON.stringify(_potion))
            }
            }
		    const potionAdd = (sender) => {
            let position = false
            Object.keys(_potion).forEach((i) => {
             if (_potion[i].id == sender) {
             position = i
            }
            })
            if (position !== false) {
            _potion[position].potion += 1
            fs.writeFileSync('./database/makanan.json', JSON.stringify(_potion))
            }
            }

//━━━━━━━━━━━━━━━[ FUNCTION MAKANAN && ENERGY ]━━━━━━━━━━━━━━━━━//

             // FUNCTION ENERGY
             const checkHeal = (sender) => {
         	 let foundh = false
             for (let heallmt of _heal) {
             if (heallmt.id === sender) {
             let healCounts = healawal - heallmt.heal
             if (healCounts <= 0) return farel.sendMessage(from,`maaf energy anda sudah habis\n\n_Note : tenang energy bisa didapatkan dengan cara ${prefix}makan_`, text,{ quoted: mek})
             farel.sendMessage(from, `Sisa energy kamu : ${healCounts}`, text, { quoted : mek})
             foundh = true
             }
             }
             if (foundh === false) {
             let obj = { id: sender, heal: 0 }
             _heal.push(obj)
             fs.writeFileSync('./database/energy.json', JSON.stringify(_heal))
             farel.sendMessage(from, `Sisa energy kamu : ${healCounts}`, text, { quoted : mek})
             }
	         }

		   // FUNCTION MAKANAN
           const isPotion = (sender) =>{ 
	       let position = false
           for (let i of _potion) {
           if (i.id === sender) {
           let potions = i.potion
           if (potions >= potionawal ) {
           position = true
           farel.sendMessage(from, `Maaf makanan anda telah habis silahkan beli dengan cara .buymakanan`, text, {quoted: mek})
           return true
           } else {
           _potion
           position = true
           return false
           }
           }
           }
           if (position === false) {
           const obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/makanan.json',JSON.stringify(_potion))
           return false
           }
           }
           const checkPotion = (sender) => {
           let foundh = false
           for (let potionlmt of _potion) {
           if (potionlmt.id === sender) {
           let potionCounts = potionawal - potionlmt.potion
           if (potionCounts <= 0) return farel.sendMessage(from,`Maaf makanan anda telah habis silahkan beli dengan cara .buymakanan`, text,{ quoted: mek})
           farel.sendMessage(from, `Sisa makanan anda : ${potionCounts}`, text, { quoted : mek})
           foundh = true
           }
           }
           if (foundh === false) {
           let obj = { id: sender, potion: 0 }
           _potion.push(obj)
           fs.writeFileSync('./database/makanan.json', JSON.stringify(_potion))
           farel.sendMessage(from, `Sisa makanan anda : ${potionCounts}`, text, { quoted : mek})
           }
	       }

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
      
//━━━━━━━━━━━━━━━[ NO PREFIX ]━━━━━━━━━━━━━━━━━//

if (budy.includes("Assalamualaikum")){
reply("Waalaikumsalam")
}

if (budy.includes("bot")){
teksnya1 = `👋 Hai WhatsappBot di sini`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'⋮☰ Menu'},type:1},
]
const sendBtn2 = {
contentText:`${teksnya1}`,
footerText:'WhatsappBot', 
buttons: gbutsan,
headerType: 1
}
farel.sendMessage(from, sendBtn2, MessageType.buttonsMessage, {quoted:mek})
}

//━━━━━━━━━━━━━━━[ RUNTIME BERJALAN ]━━━━━━━━━━━━━━━━━//

        runi = process.uptime() 
        farel.setStatus(`WhatsappBot Aktif Selama ${kyun(runi)} `).catch((_)=>_);

        settingstatus = new Date() * 1;
           
        switch (isStc) {
        case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
		}
        switch (command) {

//━━━━━━━━━━━━━━━[ MENU WITH IMG ]━━━━━━━━━━━━━━━━━//

case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fake1})
stod = `${sender}`
gambar = fs.readFileSync('./thumb.jpg');
menu = `┏━━⬣ 𝗜𝗡𝗙𝗢 𝗔𝗡𝗗𝗔
┃
┃⬡ *Status :* ${isOwner ? 'Owner' : 'User'}
┃⬡ *Nama :* ${pushname}
┃⬡ *Bio :* ${bio_user}
┃⬡ *Tag :* @${stod.split('@')[0]}
┃⬡ *Status :* ${isOwner?`Owner ⚔️`:isPremium?`Premium 🏅`:`Free User`} 
┃⬡ *Limit :* ${isOwner?`Unlimited`: isPremium? `Unlimited Premium` : getLimit(sender, limitawal, limit) +' / '+limitawal}
┃⬡ *Uang :* Rp.${getBalance(sender, balance)}
┃
┗⬣

*${tampilUcapan}*
*@${stod.split('@')[0]}*
*Berikut menu WhatsappBot 🤖*
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
╭──❒ 𝗞𝗘𝗣𝗘𝗥𝗟𝗨𝗔𝗡 💰
│${anunya} ${prefix}kerja
│${anunya} ${prefix}buymakanan
│${anunya} ${prefix}makan
╰❒

╭──❒ 𝗠𝗘𝗡𝗨 𝗢𝗪𝗡𝗘𝗥 🌟
│${anunya} ${prefix}readall
│${anunya} ${prefix}addcmd
│${anunya} ${prefix}delcmd
│${anunya} ${prefix}listcmd
│${anunya} ${prefix}addrespon
│${anunya} ${prefix}delrespon
│${anunya} ${prefix}listrespon
│${anunya} ${prefix}clearall
│${anunya} ${prefix}restart
│${anunya} ${prefix}bc
│${anunya} ${prefix}pesansiaran
│${anunya} ${prefix}tobc
│${anunya} ${prefix}premium [ add/del ]
╰❒

╭──❒ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 𝗕𝗢𝗧 ⚙️
│${anunya} ${prefix}setthumb
│${anunya} ${prefix}setpp
│${anunya} ${prefix}exif [ text|text ]
│${anunya} ${prefix}mode
│${anunya} ${prefix}autorespon
│${anunya} ${prefix}antidelete
│${anunya} ${prefix}mute
│${anunya} ${prefix}unmute
│${anunya} ${prefix}setprefix
│${anunya} ${prefix}autoread
│${anunya} ${prefix}fakengetik
│${anunya} ${prefix}fakevn
╰❒

╭──❒ 𝗠𝗘𝗡𝗨 𝗦𝗧𝗜𝗞𝗘𝗥 🗿
│${anunya} ${prefix}sticker
│${anunya} ${prefix}toimg
│${anunya} ${prefix}take
│${anunya} ${prefix}tomp4
╰❒

╭──❒ 𝗠𝗘𝗡𝗨 𝗚𝗥𝗢𝗨𝗣 👥
│${anunya} ${prefix}welcome
│${anunya} ${prefix}group
│${anunya} ${prefix}tagall [ limit ]
│${anunya} ${prefix}tutuptime
│${anunya} ${prefix}bukatime
│${anunya} ${prefix}getpp
│${anunya} ${prefix}getbio
│${anunya} ${prefix}antivirtex
│${anunya} ${prefix}antiwame
│${anunya} ${prefix}antilink
│${anunya} ${prefix}antibug
│${anunya} ${prefix}promote
│${anunya} ${prefix}demote
│${anunya} ${prefix}linkgroup
│${anunya} ${prefix}resetlinkgroup
│${anunya} ${prefix}setnamegc
│${anunya} ${prefix}setdeskgc
│${anunya} ${prefix}creategrup
│${anunya} ${prefix}groupinfo
╰❒

╭──❒ 𝗝𝗔𝗗𝗜 𝗕𝗢𝗧 🤖
│${anunya} ${prefix}jadibot [ limit ]
│${anunya} ${prefix}stopjadibot
│${anunya} ${prefix}listbot
╰❒

╭──❒ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🔍
│${anunya} ${prefix}image
│${anunya} ${prefix}kusonime
│${anunya} ${prefix}ytsearch
╰❒

╭──❒ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 ⬇️
│${anunya} ${prefix}ytmp3 [ link ]
│${anunya} ${prefix}ytmp4 [ link ]
│${anunya} ${prefix}tiktok [ link ]
│${anunya} ${prefix}instagram [ link ]
╰❒

╭──❒ 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 🌸
│${anunya} ${prefix}waifu [ limit ]
│${anunya} ${prefix}loli [ limit ]
│${anunya} ${prefix}husbu [ limit ]
╰❒

╭──❒ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🎉
│${anunya} ${prefix}jadian
│${anunya} ${prefix}wangy
│${anunya} ${prefix}ttt
│${anunya} ${prefix}delttt
│${anunya} ${prefix}join
│${anunya} ${prefix}tts [ kodebahasa teks ]
│${anunya} ${prefix}truth
│${anunya} ${prefix}dare
╰❒

╭──❒ 𝗦𝗧𝗢𝗥𝗔𝗚𝗘 📦
│${anunya} ${prefix}addsticker
│${anunya} ${prefix}delsticker
│${anunya} ${prefix}liststicker
│${anunya} ${prefix}addvn
│${anunya} ${prefix}delvn
│${anunya} ${prefix}listvn
╰❒

╭──❒ 𝗟𝗜𝗠𝗜𝗧 𝗗𝗔𝗡 𝗨𝗔𝗡𝗚 💵
│${anunya} ${prefix}toplimit
│${anunya} ${prefix}topuang
│${anunya} ${prefix}buylimit
│${anunya} ${prefix}giftlimit
│${anunya} ${prefix}cekprem
╰❒`
anu = `*CATATAN :*\n• Fitur bot masih dikit klo ada yg error chat owner\n• Jangan spam,telpon/vc bot\n• Limit akan di reset setiap hari oleh owner\n\n*© CREATOR : Anggun Farel Erlandika*\n\n*WhatsappBot*`
/*sendButLocation(from, `${menu}`, anu, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'Owner'},type:1},{buttonId:`ada`,buttonText:{displayText:'Syarat & ketentuan'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break*/
/*Sendbutdocument(from, menu, anu, fs.readFileSync('./media/Project Pemuda.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/thumbnaildokumen.jpg'), filename:`Project Pemuda.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hai‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nSemuanya aku mau Jujur Kalau aku itu Gay dan Lagi Pengen Sama Cowok berotot untuk jadi Pacarku, yang Berminat Bisa Chat aku yahh 😋'},type:1}], {quoted:fvid, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${tampilUcapan} - ${pushname}\nDownload Script`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
break*/
/*sendButImage(from, `${menu}`, anu, gambar, [
{
      buttonId: `${prefix}ada`,
      buttonText: {
        displayText: `SYARAT & KETENTUAN`,
      },
      type: 1,
    }, {
      buttonId: `${prefix}owner`,
      buttonText: {
        displayText: `OWNER`,
      },
      type: 1,
    },
  ], {quoted: ftex, thumbnail: fs.readFileSync(`./thumb.jpg`), contextInfo: { forwardingScore: 99999, isForwarded: true }});
break*/
gbutsan2 = [
{buttonId:`owner`,buttonText:{displayText:'Owner'},type:1},
]
const sendBtnmenu = {
contentText:`${menu}`,
footerText:`${anu}`, 
buttons: gbutsan2,
headerType: 1
}
farel.sendMessage(from, sendBtnmenu, MessageType.buttonsMessage, {contextInfo: { mentionedJid: [dtod,otod,stod], {quoted:fake1}})
break
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const jancok = `━━━「 𝗗𝗔𝗙𝗧𝗔𝗥 」━━━

❑ *Nama :* ${pushname}
❑ *Nomor :* @${sender.split('@')[0]}
❑ *Seri:* ${serialUser}
❑ *Pengguna:* ${_registered.length}

━━━「 𝗕𝗘𝗥𝗛𝗔𝗦𝗜𝗟 」━━━`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'⋮☰ Menu'},type:1},
]
mhan = await farel.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar', 
buttons: gbutsan,
headerType: 4
}
farel.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftex, contextInfo: { mentionedJid: [sender]}})
console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
break
case 'ada':
teksnya = `*Syarat & Ketentuan*

• Dilarang spam terhadap bot
• Dilarang Telpon/Vc bot
• WhatsappBot tidak bertanggung jawab atas fitur apapun yg anda gunakan
• Jika menemukan error/mau request fitur kalian bisa chat owner bot
• Mau add bot ke grup? izin owner dulu

*Dah itu aja*`
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: fake1})
gbutsan = [
{buttonId:`owner`,buttonText:{displayText:'Owner'},type:1},
]
const sendBtnhey = {
contentText:`${teksnya}`,
footerText:'WhatsappBot', 
buttons: gbutsan,
headerType: 1
}
farel.sendMessage(from, sendBtnhey, MessageType.buttonsMessage, {quoted:fake1})
break

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//

						case 'premium': 
									if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
									if (args[0] === 'add') {
										if (mek.message.extendedTextMessage != undefined) {
											mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
											premium.addPremiumUser(mentioned[0], args[2], _premium)
											reply(`*「 PREMIUM ADDED 」*\n\n*ID*: ${mentioned[0]}\n*Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
											} else {
												premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
												reply(`*「 PREMIUM ADDED 」*\n\n*ID*: ${args[1]}@s.whatsapp.net\n*Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
												}
												} else if (args[0] === 'del') {
													if (mek.message.extendedTextMessage != undefined) {
														mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
														_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
														fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
														reply(mess.succes)
														} else {
															_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
															fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
															reply(mess.succes)
															}
															} else {
																 reply(`Example : ${prefix + command} add/del 62887435047326 10s`)
															}
										break
			case 'cekprem': case 'cekpremium': case 'premiumcek':
				if (!isPremium) return reply(`Kamu bukan user premium\nkirim perintah ${prefix}daftarprem untuk membeli premium`)
				let cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
				let premiumnya = `*「 PREMIUM EXPIRE 」*\n\n*ID*: ${sender}\n*Expired*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`
				reply(`${isOwner?'Tidak bisa karena kamu owner':premiumnya}`)
				break
            case 'setprefix':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return sendButMessage(from, `*「 PREFIX SETTING 」*`, `Silahkan pilih salah satu`, [
                {
                buttonId: `setprefix multi`,
                buttonText: {
                displayText: `Multi Prefix`,
                },
                type: 1,
                },
                {
                buttonId: `setprefix nopref`,
                buttonText: {
                displayText: `No Prefix`,
                },
                type: 1,
                },
                {
                buttonId: `setprefix allpref`,
                buttonText: {
                displayText: `All Prefix`,
                },
                type: 1,
                },
                ], {quoted:ftex})
                if (c === 'multi'){
                multi = true
                allpref = false
                nopref = false
                reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                multi = false
                allpref = false
                nopref = true
                reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'allpref'){
                allpref = true
                nopref = false
                multi = false
                reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                multi = false
                nopref = false
                allpref = false
                prefa = `${c}`
                reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
            case 'fakengetik':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Penggunaan ${prefix}fakengetik on/off`)
                if (c === 'on'){
                autocomposing = true
                reply(`Berhasil mengaktifkan fakengetik`)
                } else if (c === 'off'){
                autocomposing = false
                reply(`Berhasil menonaktifkan fakengetik`)
                } else {
                reply(mess.error.api)
                }
                break
            case 'fakevn':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Penggunaan ${prefix}fakevn on/off`)
                if (c === 'on'){
                autorecording = true
                reply(`Berhasil mengaktifkan fakevn`)
                } else if (c === 'off'){
                autorecording = false
                reply(`Berhasil menonaktifkan fakevn`)
                } else {
                reply(mess.error.api)
                }
                break
            case 'autoread':
                if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Penggunaan ${prefix}autoread on/off`)
                if (c === 'on'){
                autoread = true
                reply(`Berhasil mengaktifkan autoread`)
                } else if (c === 'off'){
                autoread = false
                reply(`Berhasil menonaktifkan autoread`)
                } else {
                reply(mess.error.api)
                }
                break
			case 'ytmp3':
				if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [ linkYt ]*`)
				let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
				if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 30000) return reply(`File terlalu besar`)
				sendFileFromUrl(dl_link, audio, {mimetype: 'audio/mp4', duration: 999999999, quoted: mek})
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
            case 'ytmp4':
				if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [ linkYt ]*`)
				let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
				if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return reply(`File terlalu besar`)
				sendFileFromUrl(dl_link, video, {mimetype: 'video/mp4', quoted: mek})
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
			    break
            case 'makan':
		        const healperpotion = 1
		        const pot = healperpotion * 1
		        if (isPotion(sender)) return reply(`maaf makanan kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
		        potionAdd(sender, pot)
		        addHealUser(sender, 25)
		        await reply(`*「 BERHASIL 」*\n\n${pushname} berhasil memakan makanan\n\n_NOTE : 1 makanan = 25 energy_`) 
		        break
            case 'kerja':
                if (checkHeal(sender)) return reply(`maaf energy kamu telah habis`)
                eyh = Math.ceil(Math.random() * 20)
				const uang = Math.ceil(Math.random() * 2000)
				addBalance(sender, uang, balance)
				const poti = Math.ceil(Math.random() * 5)
				addPotioUser(sender, poti)
				reply(`*「 HASIL KERJA 」*\n\n❏ *MONEY : Rp.${getBalance(sender, balance)}*\n❏ *MAKANAN : ${poti}*\n\n_NOTE : terus kumpulkan uang untuk membeli limit_`)
				await healAdd(sender)
				await bayarHeal(sender, eyh)
				break
			case 'buymakanan':
				payout1 = body.slice(11)
				const koinpotionPerpotion = 50
				const totalpotion = koinpotionPerpotion * payout1
				if (getBalance(sender, balance) < totalpotion) return reply(`Uang kamu tidak mencukupi untuk pembelian ini`)
				kurangBalance(sender, totalpotion, balance)
		        addPotioUser(sender, payout1)
			    await reply(`╔════════════════════\n║╭───────────────────\n║│➫ *PEMBAYARAN BERHASIL*\n║╰───────────────────\n╠════════════════════\n║╭─────────────────\n║│➫ *Nama : ${pushname}*\n║│➫ *Nominal : ${payout1}*\n║│➫ *Harga : ${koinpotionPerpotion}/potion*\n║│➫ *Sisa Uang : Rp.${getBalance(sender, balance)}*\n║│➫ *Proses Berhasil*\n║╰───────────────────\n╚════════════════════\n`)
				break
		    case 'ytsearch':
                if (!args.length) return reply('Cari Apa?')
                try {
            	reply(mess.wait)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `
                *「 YOUTUBE SEARCH 」*
                *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                hehe += `───────────────\n
                ❑ *Judul:* ${items[i].title}
                ❑ *ID:* ${items[i].id}
                ❑ *Ditonton:* ${items[i].views}
                ❑ *Durasi:* ${items[i].duration}
                ❑ *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await farel.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}`})
                } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
                }
                break
			case 'dare':
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
				const der = dare[Math.floor(Math.random() * dare.length)]
				sendButMessage(from, `${der}`, `${tampilUcapan}`, [
				{
				buttonId: `dare`,
				buttonText: {
				displayText: `NEXT ➡️`,
				},
				type: 1,
				}]);
				break
			case 'truth':
				const trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
				const ttrth = trut[Math.floor(Math.random() * trut.length)]
				sendButMessage(from, `${ttrth}`, `${tampilUcapan}`, [
				{
				buttonId: `truth`,
				buttonText: {
				displayText: `NEXT ➡️`,
				},
				type: 1,
				}]);
				break
			case 'pesansiaran':
				if (!isOwner) return reply('Kamu siapa?')
				if (args.length < 1) return reply('...')
				anu = await farel.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, image, {caption: `*[ Broadcast ]*\n\n${body.slice(4)}`})
				}
				reply('Suksess broadcast')
				} else {
				for (let _ of anu) {
				sendMess(_.jid, `*[ Broadcast ]*\n\n${body.slice(4)}`)
				}
				reply('Suksess broadcast')
				}
				break
			case 'resetlimit':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner)
				farel.updatePresence(from, Presence.avaible)
				fs.writeFileSync('./database/limit.json', ('[]'))
				reply('Berhasil')
				await sleep(5000)
				break
			case 'giftlimit': case 'givelimit':
				if (isPremium) return reply(`User Premium Tidak Bisa Melakukan Gift Limit Lord`)
				if (!isGroup) return reply(mess.only.group)
				if (!q.includes('|')) return  reply(`Contoh ${prefix + command} _@user | Nominal_`)
				const tujuan = q.substring(0, q.indexOf('|') - 1)
				const jumblah = q.substring(q.lastIndexOf('|') + 1)
				if(isNaN(jumblah)) return await reply('Jumlah Harus Berupa Angka Lord')
				if (jumblah < 1 ) return reply(`minimal transfer 1`)
				if (getLimit(sender, limitawal, limit) < jumblah) return reply(`Limit Mu Tidak Mencukupi Untuk Melakukan Gift Limit`)
				const tujuantf = `${tujuan.replace("@","")}@s.whatsapp.net`
				hasiltf = jumblah
				giveLimit(tujuantf, hasiltf, limit)
				beliprem(sender, jumblah)
				reply(`─ 「 *SUKSES* 」 ─

                SUKSES TRANSFER LIMIT

                *Pengirim :* @${sender.split("@")[0]}
                *Penerima :* ${tujuan}
                *Jumlah Limit :* ${jumblah}

                Example : 
                ${prefix}giftlimit @user | 10
                
                *NOTE :*
                Pastikan Transfer Limit Benar`)
				break
			case 'buylimit':{
				if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp.100 uang`)
				if (q.includes('-')) return reply(`Jangan menggunakan -`)
				if (isNaN(q)) return reply(`Harus berupa angka`)
				let ane = Number(nebal(q) * 100)
				if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
				kurangBalance(sender, ane, balance)
				giveLimit(sender, nebal(q), limit)
				reply(`Pembeliaan limit sebanyak ${q} berhasil

                *Sisa Uang : ${getBalance(sender, balance)}*
                *Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
                }
				break
			case 'topuang':
				if(!isGroup)return reply(mess.only.group)
				let txot = `*── 「 TOP UANG 」 ──*\n\n`
				let mebn = [];
				for (let i of balance){
				mebn.push(i.id)
				let bl = (i.balance)
				txot += `*ID :* @${i.id.split("@")[0]}\n*Balance :* ${bl}\n\n`
				}
				mentions(txot, mebn, true)
				break
			case 'toplimit':{
				if(!isGroup)return reply(mess.only.group)
				let txot = `*── 「 TOP  LIMIT 」 ──*\n\n`
				let mebn = [];
				for (let i of limit){
				mebn.push(i.id)
				let bl = (i.limit)
				txot += `*ID :* @${i.id.split("@")[0]}\n*Limit :* ${bl}\n\n`
				}
				mentions(txot, mebn, true)
				}
				break
			case 'listprem': case 'listpremium': case 'premiumlist': case 'premlist':
				if (!isOwner && !mek.key.fromMe) return
				let txt = `*「 LIST PREMIUM 」*\n\n*Total :* ${_premium.length}\n\n`
				let men = [];
				for (let i of _premium){
				men.push(i.id)
				let cekvip = ms(i.expired - Date.now())
				txt += `*Nomor : ${i.id.split("@")[0]}*\n*User : @${i.id.split("@")[0]}*\nExpired : ${cekvip.days} Day (s), ${cekvip.hours} Hour (s), ${cekvip.minutes} Minute (s), ${cekvip.seconds} Second (s)`
				}
			    reply(`${txt}`)
			    break
            case 'ig':
            case 'igdl':
            case 'instagram':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!c) return reply('Linknya?')
                var { igDownloader } = require('./lib/igdown')
                res = await igDownloader(`${c}`).catch(e => {
                reply(mess.error.api)
                })
                console.log(res)
                sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                break
            case 'tiktok':
            case 'tiktokdl':
            case 'tiktoknowm':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!c) return reply('Linknya?')
                var { TiktokDownloader } = require('./lib/tiktokdl')
                sticWait(from)
                res = await TiktokDownloader(`${c}`).catch(e => {
                reply(mess.error.api)
                })
                console.log(res)
                sendMediaURL(from, `${res.result.nowatermark}`)
                break
            case 'tts':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
			    try{
                if (args.length > 1) {
                const gtts = require('./lib/gtts')(args[0])
                if (args.length < 2) return farel.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
                ngab = budy.slice(7)
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                ngab.length > 600
                ? reply('Textnya kebanyakan gan')
                : gtts.save(ranm, ngab, function() {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                farel.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
                })
                })
	            } else if ( args.length === 1 ){
		        ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		        const gtts = require('./lib/gtts')(args[0])
                ranm = getRandom('.mp3')
                rano = getRandom('.ogg')
                gtts.save(ranm, ngab, function() {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                farel.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
                })
                })
                }
                } catch (e){
	            reply(mess.error.api)
                }
                break 
            case 'join':
                if (!mek.key.fromMe) return reply('only premium')
                try {
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
                hen = args[0]
                if (!q) return fakestatus('Masukan link group')
                var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
                if (!codeInvite) return reply ('Pastikan link sudah benar!')
                var response = await farel.acceptInvite(codeInvite)
                reply('Berhasil')
                } catch {
                reply('Link error')
                }
                break
            case "groupinfo":
                if (!isGroup) return;
                ppUrl = await farel.getProfilePicture(from);
                buffergbl = await getBuffer(ppUrl);
                farel.sendMessage(from, buffergbl, image, {
                quoted: mek,
                caption: `*「 Group Info 」*\n*❑ Name* : ${groupName}\n*❑ Member* : ${groupMembers.length}\n*❑ Admin* : ${groupAdmins.length}\n*❑ Description* : \n${groupDesc}`,
                });   
                break
            case 'waifu':
            case 'loli':
            case 'husbu':
                if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
                let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
                let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
                fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
                buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1}]
                imageMsg = ( await farel.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
                buttonsMessage = {footerText:'WhatsappBot', imageMessage: imageMsg,
                contentText:`klik Next untuk ke gambar selanjutnya`,buttons,headerType:4}
                prep = await farel.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
                farel.relayWAMessage(prep)
                fs.unlinkSync(`./${sender}.jpeg`)
                limitAdd(sender, limit)
                break
			case 'setthumb': case 'setthum':
			    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (!isOwner && !isOwner) return reply(mess.only.prem)
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await farel.downloadMediaMessage(boij)
				fs.writeFileSync('./thumb.jpg', delb)
				matanecok = fs.readFileSync('./thumb.jpg')
				await sleep(5000)
				reply(`Sukses`)
				break    
            case 'tomp3':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				farel.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Reply Video Nya Kak')
				sticWait(from)
				encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediad = await farel.downloadAndSaveMediaMessage(encmediad)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
				fs.unlinkSync(mediad)
				if (err) return reply(mess.error.api)
				mhee = fs.readFileSync(ran)
				farel.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
				fs.unlinkSync(ran)
				})
				break
		    case 'tomp4':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isQuotedSticker) return reply('Reply stiker nya')
                sticWait(from)
                if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                owgi = await farel.downloadAndSaveMediaMessage(ger)
                webp2mp4File(owgi).then(res=>{
                sendMediaURL(from,res.result)
                })
                }else {
                reply('Reply Stickernya!')
                }
                fs.unlinkSync(owgi)
                break
			case 'creategrup':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                for (let i = 0; i < mentioned.length; i++){
				anu = []
				anu.push(mentioned[i])
                }
				farel.groupCreate(argz[0], anu)
				reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'image':
            case 'gimage':
            case 'googleimage':
                if (args.length < 1) return reply('Apa Yang Mau Dicari?')
                reply(mess.wait)
                teks = args.join(' ')
                res = await googleImage(teks, google)
                function google(error, result){
                if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
                else {
                gugIm = result
                random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
                sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
                }
                }
                break
            case 'tagall':
                if (!isGroup) return reply(mess.only.group)
                if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
                let arr = [];
                let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
                for (let i of groupMembers){
                txti += `❑ @${i.jid.split("@")[0]}\n`
                arr.push(i.jid)
                }
                mentions(txti, arr, true)
                break
            case 'kusonime':
                try {
                if (args.length < 1) return reply('Anime apa yg di cari?')	
                mmeku = body.slice(10)
                await axios.get('https://kusonime.com/?s=' + mmeku).then(async res => {
                const animenya = await cheerio.load(res.data);
                const linkanime1 = await animenya('div[class="content"] > h2 > a');
                let link1 = await linkanime1.attr('href');
                await axios.get(link1).then(async res => {
                let links360 = await [];
                let links480 = await [];
                let links720 = await [];
                let links1080 = await [];
                const animeitu = await cheerio.load(res.data);
                await animeitu('.dlbod > .smokeddl > .smokeurl > a').slice(0, 3).each(async (index, value) => {
                let link360 = await animeitu(value).attr('href');
                await links360.push({link360});
                });
                await animeitu('.dlbod > .smokeddl > .smokeurl + .smokeurl > a').slice(0, 3).each(async (index, value) => {
                let link480 = await animeitu(value).attr('href');
                await links480.push({link480});                
                });        
                await animeitu('.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl > a').slice(0, 3).each(async (index, value) => {
                let link720 = await animeitu(value).attr('href');
                await links720.push({link720});                
                });    
                await animeitu('.dlbod > .smokeddl > .smokeurl + .smokeurl + .smokeurl + .smokeurl > a').each(async (index, value) => {
                let link1080 = await animeitu(value).attr('href');
                await links1080.push({link1080});  
                });      
                let judul = await animeitu('div[class="post-thumb"] > h1[class="jdlz"]').text();
                let genre = await animeitu('div[class="info"] > p:nth-child(2)').text();
                let totaleps = await animeitu('div[class="info"] > p:nth-child(7)').text();
                let durasi = await animeitu('div[class="info"] > p:nth-child(9)').text();
                let tglrilis = await animeitu('div[class="info"] > p:nth-child(10)').text();
                let result360 = await JSON.stringify(links360).replace(/,/g, '\n').replace(/"/g, '').replace(/link360/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
                let result480 = await JSON.stringify(links480).replace(/,/g, '\n').replace(/"/g, '').replace(/link480/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
                let result720 = await JSON.stringify(links720).replace(/,/g, '\n').replace(/"/g, '').replace(/link720/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
                let result1080 = await JSON.stringify(links1080).replace(/,/g, '\n').replace(/"/g, '').replace(/link1080/g, '').replace(/{/g, '').replace(/}/g, '').replace(/\[/g, '').replace(/\]/g, '');
                return await farel.sendMessage(from, `Judul : ${judul}\n${genre}\n${totaleps}\n${durasi}\n${tglrilis}\n\nResolusi 360p : \n${result360}\n\nResolusi 480p : \n${result480}\n\nResolusi 720p : \n${result720}\n\nResolusi 1080p : \n${result1080}`, text , {quoted: mek})
                })
                })
                } catch (err) {
                reply(`Maaf ${pushname}, Anime yang kamu dari kusonime tidak ditemukan.`)
                }
                break
			case 'jadian':
				if (!isGroup) return reply(mess.only.group)
				jds = []
				const A11 = groupMembers
				const B11 = groupMembers
				const C11 = A11[Math.floor(Math.random() * A11.length)] 
				const C22 = B11[Math.floor(Math.random() * B11.length)]
				D11 = `*「 JADIAN 」*\n\n@${C11.jid.split('@')[0]} ❤ @${C22.jid.split('@')[0]}\n\nSELAMAT 🎉🎉🎉\n\n*NOTE :* Bot cuma bercanda jan di bawa serius ya`  
				jds.push(C11.jid)
				jds.push(C22.jid)
				mentions(D11, jds, true)
				break
            case 'bisakah':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				bisakah = body.slice(1)
				const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				farel.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
				break
			case 'kapankah':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				kapankah = body.slice(1)
				const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				farel.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
				break
         	case 'apakah':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				farel.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
				break
			case 'rate':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
				rate = body.slice(1)
				const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
				const te = ra[Math.floor(Math.random() * ra.length)]
				farel.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
				break
            case 'listgroup':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                const txs = farel.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${farel.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
                reply(txs)
                break
            case 'wangy':
                if (!q) return
                qq = q.toUpperCase()
                awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
                reply(awikwok)
                break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                var chats = await farel.chats.all()
                chats.map( async ({ jid }) => {
                await farel.chatRead(jid)
                })
		        var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	            await farel.sendMessage(from, teks, text, {quoted: mek})
		        console.log(chats.length)
		        break
            case 'tutuptime':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
                if (args[1]=="detik") {var timer = args[0]+"000"
                } else if (args[1]=="menit") {var timer = args[0]+"0000"
                } else if (args[1]=="jam") {var timer = args[0]+"00000"
                } else {return reply("*pilih :*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
                setTimeout( () => {
                var nomor = mek.participant
                farel.groupSettingChange (from, GroupSettingChange.messageSend, true);
                }, timer)
                break
            case 'bukatime':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
                if (args[1]=="detik") {var timer = args[0]+"000"
                } else if (args[1]=="menit") {var timer = args[0]+"0000"
                } else if (args[1]=="jam") {var timer = args[0]+"00000"
                } else {return reply("*pilih :*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
                setTimeout( () => {
                var nomor = mek.participant
                farel.groupSettingChange (from, GroupSettingChange.messageSend, false);
                }, timer)
                break
            case 'leavetime':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                if (args[1]=="detik") {var timer = args[0]+"000"
                } else if (args[1]=="menit") {var timer = args[0]+"0000"
                } else if (args[1]=="jam") {var timer = args[0]+"00000"
                } else {return reply("*pilih :*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
                setTimeout( () => {
                farel.groupLeave(from);
                }, timer)
            case 'jadibot':
                if (isLimit(sender, isPremium, isOwner, limitawal, limit)) return reply(mess.limit)
                if (isGroup) return reply('*TIDAK BISA JADIBOT DIDALAM GRUP HARAP PC NOMER SAJA*')
                if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
                jadibot(reply,farel,from)
                break
            case 'stopjadibot':
                if (!isOwner && !isOwner) return reply(mess.only.prem)
                if(mek.key.fromMe)return reply('Tidak bisa stopjadibot kecuali owner')
                stopjadibot(reply)
                break
            case 'listbot':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                let tekss = '「 *LIST JADIBOT* 」\n'
                for(let i of listjadibot) {
                tekss += `*Nomor* : ${i.jid.split('@')[0]}
                *Nama* : ${i.name}
                *Device* : ${i.phone.device_manufacturer}
                *Model* : ${i.phone.device_model}\n\n`
                }
                reply(tekss)
                break
            case 'owner':
                let ini_list = []
                for (let i of ownerNumber) {
                const vname = farel.contacts[i] != undefined ? farel.contacts[i].vname || farel.contacts[i].notify : undefined
                ini_list.push({
                "displayName": `WhatsappBot`,
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                })
                }
                farel.sendMessage(from, {
                "displayName": `WhatsappBot`,
                "contacts": ini_list 
                }, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
                break
            case 'addcmd': 
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                if (isQuotedSticker) {
                if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                addCmd(kodenya, c)
                reply("Berhasil kak")
                } else {
                reply('Tag sticker nya kak')
                }
                break
            case 'delcmd':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
                var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                scommand.splice(getCommandPosition(kodenya), 1)
                fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
                reply("Berhasil kak")
                break
            case 'listcmd':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                let teksnyee = `━━━「 *BERHASIL* 」━━━`
                let cemde = [];
                for (let i of scommand) {
                cemde.push(i.id)
                teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
                }
                reply(teksnyee)
                break
            case 'isbaileys': 
            case 'baileys':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                reply(`${mek.quoted.isBaileys}`)
                break
            case 'getcaption':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                try {
                reply(`${mek.quoted.title}`)
                } catch {
                reply(`${mek.quoted.caption}`)
                }
                break
            case 'autorespon':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                if (c === 'on'){
                autorespon = false
                reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                autorespon = true
                reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
                const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
                const btnharam = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: buttons,
                headerType: 1
                }
                await farel.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftex})
                }
                break
            case 'antidelete':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                if (c === 'on'){
                antidelete = false
                reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                antidelete = true
                reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
                const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
                const buttonMessage = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: buttons,
                headerType: 1
                }
                await farel.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftex})
                }
                break
            case 'tictactoe':
            case 'ttt':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply('Tag Lawan Anda! ')
				if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
				ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
				player1 = sender
				player2 = ment[0]
				angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
				id = from
				gilir = player2
				ky_ttt.push({player1,player2,id,angka,gilir})
				farel.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

				[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
				Ketik Y/N untuk menerima atau menolak permainan

				Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
				break
            case 'delttt':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
				naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
				ky_ttt = naa 
				reply('Sukses')
				break
            case 'getpp':
				anu = from
				if (`${anu}@s.whatsapp.net`) {
				try {
				ppimg = await farel.getProfilePicture(anu)
				} catch {
				ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await farel.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				farel.sendMessage(from, buffer, image, {quoted: mek})
				} else {
				}
				break
            case 'mode':
				buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
				const buMess = {
				contentText: "SELF/PUBLIC",
				footerText: 'WhatsappBot',
				buttons: buttonss,
				headerType: 1
				}
				await farel.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftex})
				break
            case 'public':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				publik = true
				reply('Sukses mengubah mode self ke public')
				break
            case 'self':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				publik = false
				reply('Sukses mengubah mode public ke self')
				break
            case 'dadu':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				random = Math.floor(Math.random() * 6) + 1
				damdu = fs.readFileSync(`./sticker/${random}.webp`)
				farel.sendMessage(from, damdu, sticker, {quoted: mek})
				break
            case 'sider':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				infom = await farel.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
				tagg = []
				teks = `Telah Dibaca Oleh :\n\n`
				for(let i of infom.reads){
				teks += '@' + i.jid.split('@')[0] + '\n'
				teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
				tagg.push(i.jid)
				}
				mentions(teks, tagg, true)
				break
		    case 'delete':
			    farel.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
			    break
			case 'colong':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
		        if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		        const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            const meidia = await farel.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		        exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		        if (error) return reply('error')
		        farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
				fs.unlinkSync(meidia)
				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
			case 'readmore':
			case 'more':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    const more = String.fromCharCode(8206)
			    const readmore = more.repeat(4001)
				if (!c.includes('|')) return  reply(mess.error.api)
                const text1 = c.substring(0, c.indexOf('|') - 0)
                const text2 = c.substring(c.lastIndexOf('|') + 1)
                reply( text1 + readmore + text2)
                break
            case 'delchat':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                farel.modifyChat(from, ChatModification.delete)
                break
            case 'clearall':
		        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		        anu = await farel.chats.all()
		        farel.setMaxListeners(10)
		        for (let _ of anu) {
		        farel.clearMessage(_.jid)
		        }
		        reply('Sukses membersihkan semua pesan')
		        break
            case 'mute':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		        if (!isGroup) return reply(mess.only.group)
		        if (isMuted) return reply(`udah mute`)
		        mute.push(from)
		        fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
		        reply('Bot berhasil dimute di chat ini')
		        break
            case 'restart':
		        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		        reply(`Sabar...`)
		        exec(`cd &&  node index`)
		        sleep(4000)
		        reply('Sukses')
                break
		    case "antivirtex":
        	    if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
	            if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
			    if (!isBotGroupAdmins) return sticNotAdmin(from)
				if (args[0] === 'on') {
				if (isAntivirtex) return reply('Sudah Aktif Kak')
				antilink.push(from)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan fitur antivirtex')
				farel.sendMessage(from, `ALLERT!!! Group ini sudah di pasang antivirtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
				} else if (args[0] === 'off') {
				if (!isAntivirtex) return reply('Sudah Mati Kak')
				var ini = antivirtex.indexOf(from)
				antivirtex.splice(ini, 1)
				fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antilink))
				reply('Sukses menonaktifkan fitur antivirtex')
				} else if (!c){
		        anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
		        punten = [{buttonId: 'antivirtex off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antivirtex on', buttonText: {displayText: 'ON✔️'}, type: 1}]
		        const btnasu = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: punten,
                headerType: 1
		        }
		        await farel.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftex})
				}
				break
		    case 'antiwame':
				if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
	            if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
			    if (!isBotGroupAdmins) return sticNotAdmin(from)
				if (args[0] === 'on') {
				if (isAntiWame) return reply('Sudah Aktif Kak')
				antilink.push(from)
				fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan fitur antiwame')
				farel.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti wa.me\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
				} else if (args[0] === 'off') {
				if (!isAntiWame) return reply('Sudah Mati Kak')
				var ini = antilink.indexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/antiwame.json', JSON.stringify(antilink))
				reply('Sukses menonaktifkan fitur antiwame')
				} else if (!c){
				anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
				punten = [{buttonId: 'antiwame off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antiwame on', buttonText: {displayText: 'ON✔️'}, type: 1}]
				const btnasu = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: punten,
                headerType: 1
				}
				await farel.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftex})
				}
				break
		    case 'antilink':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
	            if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
			    if (!isBotGroupAdmins) return sticNotAdmin(from)
				if (args[0] === 'on') {
				if (isAntiLink) return reply('Sudah Aktif Kak')
				antilink.push(from)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply('Sukses mengaktifkan fitur antilink')
				farel.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
				} else if (args[0] === 'off') {
				if (!isAntiLink) return reply('Sudah Mati Kak')
				var ini = antilink.indexOf(from)
				antilink.splice(ini, 1)
				fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
				reply('Sukses menonaktifkan fitur antilink')
				} else if (!c){
				anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
				punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
				const btnasu = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: punten,
                headerType: 1
				}
				await farel.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftex})
				}
				break
		    case 'antibug':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
			    if (!isBotGroupAdmins) return sticNotAdmin(from)
                if (args[0] === 'on') {
                if (bugc === true) return
                bugc = true
                reply('Berhasil menyalakan antibug')
                } else if (args[0] === 'off') {
                if (bugc === false) return
                bugc = false
                reply('Berhasil mematikan antibug')
                } else if (!c){
                anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
                punten = [{buttonId: 'antibug off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antibug on', buttonText: {displayText: 'ON✔️'}, type: 1}]
                const btasu = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: punten,
                headerType: 1
                }
                await farel.sendMessage(from, btasu, MessageType.buttonsMessage, {quoted: ftex})
				}
                break
		    case 'demote':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			    demote = mek.message.extendedTextMessage.contextInfo.participant
		        farel.groupDemoteAdmin(from, [demote])
				reply('Sukses demote admin')
				break
		    case 'promote':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply targetnya!')
			    promote = mek.message.extendedTextMessage.contextInfo.participant
		        farel.groupMakeAdmin(from, [promote])
				reply('Sukses promote member')
				break
		    case 'linkgrup':
		    case 'linkgroup':
		    case 'linkgc':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
				linkgc = await farel.groupInviteCode(from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
				farel.sendMessage(from, yeh, text, { quoted: mek })
				break
		    case 'resetlinkgc':
		    case 'resetlinkgroup':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
                json = ['action', 'inviteReset', from]
                farel.query({json, expect200: true})
                reply('Sukses Mereset Link Group')
                break
            case 'group':
                buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
                const bMess = {
                contentText: 'OPEN/CLOSE\n\nGroup',
                footerText: 'Silahkan Pilih Saah Satu',
                buttons: buttonss,
                headerType: 1
                }
                await farel.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftex})
                break
		    case 'opengc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
                reply(`Sukses membuka grup ${groupName}`)
				farel.groupSettingChange(from, GroupSettingChange.messageSend, false)
				break
		    case 'closegc':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
				reply(`Sukses menutup grup ${groupName}`)
				farel.groupSettingChange(from, GroupSettingChange.messageSend, true)
				break
		    case 'demoteall':
		        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		        if (!isGroup) return reply(mess.only.group)
		        if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		        for (let mem of groupMembers) {
	            members_id.push(mem.jid)
	  	        }
                farel.groupDemoteAdmin(from, members_id)
                break
            case 'promoteall':
		        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
		        if (!isGroup) return reply(mess.only.group)
		        if (!isBotGroupAdmins) return sticNotAdmin(from)
                members_id = []
		        for (let mem of groupMembers) {
	   	        members_id.push(mem.jid)
	  	        }
                farel.groupMakeAdmin(from, members_id)
                break
	        case 'setnamegc':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
			    farel.groupUpdateSubject(from, `${body.slice(11)}`)
				reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
				break					
	        case 'setdeskgc':
		    case 'setdescgc':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                if (!isBotGroupAdmins) return sticNotAdmin(from)
				farel.groupUpdateDescription(from, `${body.slice(10)}`)
				reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
				break
	        case 'setprofile':
		    case 'setpp':
				farel.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				mediau = await farel.downloadAndSaveMediaMessage(enmediau)
				await farel.updateProfilePicture(botNumber, mediau)
				reply('Sukses')
				break
		    case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				farel.updatePresence(from, Presence.composing)
				farel.groupLeave(from)
				break
		    case 'bc':
				farel.updatePresence(from, Presence.composing)
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
				anu = await farel.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
				}
				reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
				}
				reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
				} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
				}
				reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
				} else {
				for (let _ of anu) {
				//sendMess(_.jid, `${body.slice(4)}`)
                buttons = [{buttonId: `menu`, buttonText: {displayText: 'menu'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
                const btnbc = {
                contentText: `${body.slice(4)}`,
                footerText: 'Pesan Siaran Bot',
                buttons: buttons,
                headerType: 1
                }
                await farel.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftex})
				}
				reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
				}
				break
		    case 'tomp3':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				farel.updatePresence(from, Presence.composing)
				if (!isQuotedVideo) return reply('Reply Video Nya Kak')
				sticWait(from)
				encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				mediad = await farel.downloadAndSaveMediaMessage(encmediad)
				ran = getRandom('.mp4')
				exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
				fs.unlinkSync(mediad)
				if (err) return reply(mess.error.api)
				mhee = fs.readFileSync(ran)
				farel.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
				fs.unlinkSync(ran)
				})
				break
		    case 'kontag':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
				hideTagKontak(from, argzi[0], argzi[1])
				}
				break
		    case 'getdeskgc':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				anu = from
			    metadete = await farel.groupMetadata(anu)
				farel.sendMessage(from, metadete.desc, text, {quoted:mek})
				 break
		    case 'getbio':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
	            var yy = mek.message.extendedTextMessage.contextInfo.participant
                var p = await farel.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply(mess.error.api)
                }
                break
            case 'getname':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                var ambl = mek.message.extendedTextMessage.contextInfo.participant
                const sname = farel.contacts[ambl] != undefined ? farel.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : farel.contacts[ambl].notify || farel.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
                reply(sname)
                break
		    case 'getpict':
		    case 'getpic':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                pictt = await farel.getProfilePicture(mentioned)
                pict = await getBuffer(pictt)
                farel.sendMessage(from, pict, image, {quoted: mek})
                break
		    case 'tag':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
                var nomqm = `${body.slice(5)}@s.whatsapp.net`
				tagq = `@${nomqm.split('@')[0]}` 
				farel.sendMessage(from, tagq, text, { quoted: ftex, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			    break
		    case 'tagme':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
                var nomqm = mek.participant
				tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
				farel.sendMessage(from, tagu, text, { quoted: ftex, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
				break
		    case 'totag':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return sticAdmin(from)
                if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, sticker, options)
                fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, image, options)
                fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
                encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, audio, options)
                fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, video, options)
                fs.unlinkSync(file)
                } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
                encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, document, options)
                fs.unlinkSync(file)
                }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                file = await farel.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                value = args.join(" ")
                var group = await farel.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                ini_buffer = fs.readFileSync(file)
                farel.sendMessage(from, ini_buffer, video, options)
                fs.unlinkSync(file)
                } else{
                reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
                }
                break
		    case 'status':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				var groups = farel.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = farel.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				uptime = process.uptime();
				const timestampu = speed();
				const totalChat = await farel.chats.all()
				const latensi = speed() - timestampu
				var total = math(`${groups.length} ${privat.length}`)
				const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = farel.user.phone
				stamtus = `━━━「 *INFO BOT* 」━━━

				❑ *Private Chat :* ${privat.length}
				❑ *Group Chat :* ${groups.length}
				❑ *Total Chat :* ${totalChat.length}
				❑ *Speed :* ${latensi.toFixed(4)} second
				❑ *Runtime :* ${kyun(uptime)}
				❑ *Baterai :* ${baterai.battery}
				❑ *Charged :* ${baterai.isCharge}
				❑ *Mode :* ${publik ? 'public' : 'self'}
				❑ *Prefix :* ${multi ? 'Multi Prefix' : 'No Prefix'}
				❑ *Penggunaan Ram :* ${ram2}
				❑ *Hostname :* ${os.hostname()}
				❑ *Platform :* ${os.platform()}
				❑ *Uptime :* ${kyun(os.uptime())}
				❑ *MNC :* ${mnc}
				❑ *MCC :* ${mcc}
				❑ *Device Model:* ${farel.user.phone.device_model}
				❑ *Device Manufactur :* ${device_manufacturer}
				❑ *Wa Version:* ${farel.user.phone.wa_version}
				❑ *Os Version:* ${farel.user.phone.os_version}

				━━━「 *INFO BOT* 」━━━`
				reply(stamtus)
				break
		    case 'tobc':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				farel.updatePresence(from, Presence.composing)
				anu = await farel.chats.all()
				if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
				const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, audio, { quoted: ftex })
				}
				} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
				const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				buff = await farel.downloadMediaMessage(encmedia)
				for (let _ of anu) {
				farel.sendMessage(_.jid, buff, sticker, { quoted: ftex, contextInfo: { forwardingScore: 508, isForwarded: true}})
				}
				} else{
                reply('reply sticker/audio')
				}
				break
		    case 'hidetag':
                ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
		    case 'exif':
                if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				const exifff = `${args.join(' ')}`
				const namaPack = exifff.split('|')[0]
				const authorPack = exifff.split('|')[1]
				exif.create(namaPack, authorPack)
				await reply('Berhasil')
				break
		    case 'sticker':
		    case 'stiker':
		    case 's':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await farel.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				await ffmpeg(`${media}`)
				.input(media)
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				reply(mess.error.api)
				})
				.on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply(mess.error.api)
				farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				fs.unlinkSync(media)	
				fs.unlinkSync(`./sticker/${sender}.webp`)	
				})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await farel.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				sticWait(from)
				await ffmpeg(`${media}`)
				.inputFormat(media.split('.')[4])
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				tipe = media.endsWith('.mp4') ? 'video' : 'gif'
				reply(mess.error.api)
				})
				.on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply(mess.error.api)
				farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				fs.unlinkSync(media)
				fs.unlinkSync(`./sticker/${sender}.webp`)
				})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(`./sticker/${sender}.webp`)
				} else {
				reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
		    case 'stickerwm':
		    case 'swm':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (isMedia && !mek.message.videoMessage || isQuotedImage) {
				ppp = `${args.join(' ')}`
				const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await farel.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname1 = ppp.split('|')[0]
				const author1 = ppp.split('|')[1]
				exif.create(packname1, author1, `stickwm_${sender}`)
				await ffmpeg(`${media}`)
				.input(media)
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				reply(mess.error.api)
				})
				.on('end', function () {
				console.log('Finish')
				exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply(mess.error.api)
				farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				fs.unlinkSync(media)	
				fs.unlinkSync(`./sticker/${sender}.webp`)	
				fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
				})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(`./sticker/${sender}.webp`)
				} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
				wmsti = body.slice(11)
				if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await farel.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname1 = wmsti.split('|')[0]
				const author1 = wmsti.split('|')[1]
				exif.create(packname1, author1, `stickwm_${sender}`)
				sticWait(from)
				await ffmpeg(`${media}`)
				.inputFormat(media.split('.')[4])
				.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
				console.log(`Error : ${err}`)
				fs.unlinkSync(media)
				tipe = media.endsWith('.mp4') ? 'video' : 'gif'
				reply(mess.error.api)
				})
				.on('end', function () {
			    console.log('Finish')
				exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply(mess.error.api)
				farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				fs.unlinkSync(media)
				fs.unlinkSync(`./sticker/${sender}.webp`)
				fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
				})
				})
				.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(`./sticker/${sender}.webp`)
				} else {
				reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
				}
				break
		    case 'takestick':
		    case 'take':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
				ppp = `${args.join(' ')}`
				const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await farel.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
				const packname = ppp.split('|')[0]
				const author = ppp.split('|')[1]
				exif.create(packname, author, `takestick_${sender}`)
				exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
				if (error) return reply(mess.error.api)
				farel.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
				fs.unlinkSync(media)
				fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
		    case 'speed':
		    case 'ping':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				const timestampi = speed();
				const latensyi = speed() - timestampi
				reply(`*Speed: ${latensyi.toFixed(4)} Second*`)
				break
            case 'toimg':
		    case 'tomedia':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
				const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await farel.downloadAndSaveMediaMessage(encmedia)
				const upload = await uploadimg(media, Date.now() + '.webp')
				console.log(upload)
				reply(`${upload.result.image}`)
				const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
				console.log(rume.data)
				sendMediaURL(from, rume.data.result)
				} else {
				const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				const media = await farel.downloadAndSaveMediaMessage(encmedia)
				ran = '1000.png'
				exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) return reply(mess.error.api)
				buffer = fs.readFileSync(ran)
				farel.sendMessage(from, buffer, image, {quoted: mek})
				fs.unlinkSync(ran)
				})
				}
				break
		    case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (!isQuotedSticker) return reply('Reply stiker')
				nm = body.slice(12)
				if (!nm) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await farel.downloadMediaMessage(boij)
				setik.push(`${nm}`)
				fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
				fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
				farel.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
				break
		    case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				try {
			    nmm = body.slice(12)
				wanu = setik.indexOf(nmm)
				setik.splice(wanu, 1)
				fs.unlinkSync(`./media/sticker/${nmm}.webp`)
				reply(`Sukses menghapus sticker ${body.slice(12)}`)
				} catch (err){
				console.log(err)
				reply(mess.error.api)
				}
				break
		    case 'stickerlist':
		    case 'liststicker':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				teks = '*Sticker List :*\n\n'
				for (let awokwkwk of setik) {
				teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
				farel.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
				break
		    case 'addvn':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (!isQuotedAudio) return reply('Reply audio')
				nm = body.slice(7)
				if (!nm) return reply('Nama vn nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await farel.downloadMediaMessage(boij)
				vien.push(`${nm}`)
				fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
				fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
				farel.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
				break
		    case 'delvn':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				try {
				nmm = body.slice(7)
				wanu = vien.indexOf(nmm)
				vien.splice(wanu, 1)
				fs.unlinkSync(`./media/vn/${nmm}.mp3`)
				reply(`Sukses menghapus vn ${body.slice(7)}`)
				} catch (err){
				console.log(err)
				reply(mess.error.api)
				}
				break
		    case 'vnlist':
		    case 'listvn':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				teks = '*VN List :*\n\n'
				for (let awokwkwk of vien) {
				teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
				farel.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
				break
		    case 'addimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (!isQuotedImage) return reply('Reply image')
				nm = body.slice(10)
				if (!nm) return reply('Nama image nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await farel.downloadMediaMessage(boij)
				imagi.push(`${nm}`)
				fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
				fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
				farel.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
				break
		    case 'delimage':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				try {
				nmm = body.slice(10)
				wanu = imagi.indexOf(nmm)
				imagi.splice(wanu, 1)
				fs.unlinkSync(`./media/image/${nmm}.jpg`)
				reply(`Sukses menghapus image ${body.slice(10)}`)
				} catch (err){
				console.log(err)
				reply(mess.error.api)
				}
				break
		    case 'imagelist':
		    case 'listimage':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				teks = '*Image List :*\n\n'
				for (let awokwkwk of imagi) {
				teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
				farel.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
				break
		    case 'sticktag':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await farel.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				farel.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
		    case 'setbio':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
				iyek = body.slice(8)
				farel.setStatus(`${iyek}`)
				reply(`Sukses mengganti bio ke ${body.slice(8)}`)
				break
		    case 'setname':
				if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                farel.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
            case 'creategroup':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
			    if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                for (let i = 0; i < mentioned.length; i++){
				anu = []
				anu.push(mentioned[i])
                }
				farel.groupCreate(argz[0], anu)
				reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
	            if (!isGroup) return reply(mess.only.group)
			    if (!isOwner && !isGroupAdmins) return sticAdmin(from)
				if (args[0] === 'on') {
				if (isWelkom) return reply('Sudah Aktif Kak')
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('Sukses mengaktifkan fitur welcome')
				} else if (args[0] === 'off') {
				if (!isWelkom) return reply('Sudah Mati Kak')
				var ini = welkom.indexOf(from)
				welkom.splice(ini, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('Sukses menonaktifkan fitur welcome')
				} else if (!c){
				anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
				punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
				const btngrass = {
                contentText: `${anu}`,
                footerText: 'WhatsappBot',
                buttons: punten,
                headerType: 1
				}
				await farel.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftex})
				}
				break
            case 'addrespon':
			    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
		    case 'delrespon':
			    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
		    case 'listrespon':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftex})
				teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
				for (let i = 0; i < commandsDB.length; i ++){
				teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
				teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
				teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
				}
				reply(teks)
				break
				
//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//

		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  farel.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
farel.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan angka dg benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Cari yg lain')
if (main[0].gilir.includes(sender)) return reply('Tunggu giliran anda')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
farel.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 farel.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan angka dg benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Cari yg lain')
if (main[0].gilir.includes(sender)) return reply('Tunggu giliran anda')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
farel.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 farel.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     farel.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "WhatsappBot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./thumb.jpg'),sourceUrl:"https://wa.me/p/6349482305092740/6281220670449"}}})
	}
    }
    }
    }
    }
    }
    }

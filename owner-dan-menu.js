const fs = require('fs')

global.namabot = "RilzBotzV1"
global.namaowner = "Rilzz.JK"
global.footer_text = "© " + namabot
global.pp_bot = fs.readFileSync("./image/foto.jpg")
global.qris = fs.readFileSync("./image/qris.jpg")
global.owner = ['6281216134754']
global.sessionName = 'session'
global.prefa = ['-_-']
global.caption_pay = `DANA : 085213007441 a/n HENDRI
Gopay : 085973787095 a/n Yogi pratama
BCA : 7295251794 a/n YOGI PRATAMA
Qris AllPay : Pending
`
module.exports.helpMenu = (pushname) =>{
  return `Halo ${pushname}

*「 FITUR BOT 」*

\`\`\`• !owner
• !pay
• !list
\`\`\`

📝 *NOTE*: 
Menyediakan TopUp All Game, Suntik Follower IG Dan TikTok, juga menyediakan langganan apps premium seperti " Netflix,Youtbe Premium,Video Prime Premium Dll, langsung oreder dengan mengetil List atau hubungi admin groub :D
`
}
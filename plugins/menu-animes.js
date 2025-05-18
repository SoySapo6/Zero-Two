import fetch from 'node-fetch';

const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    const videoURL = 'https://files.catbox.moe/m7nd3i.mp4'; // URL del video del menú

    const d = new Date(new Date() + 3600000);
    const locale = 'es';
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    const str = `┏━━━━━━━━━━━━━━━━━━━━┓
૮₍ ˶•⤙•˶ ₎ა ׅ  ¡𝙃ᴏʟᴀ! ¿𝘾ᴏᴍᴏ 𝙀𝙨ᴛᴀ́𝙨? ׄ 
ㅤ💙${𝙩𝙖𝙜𝙪𝙨𝙚𝙧}
ㅤㅤ❤ ּ ${𝙨𝙖𝙡𝙪𝙙𝙤} ׄ 💙
┃ ◉— 𝙕𝙚𝙧𝙤 𝙩𝙬𝙤—◉
┣⟣☯ 𝙾𝚆𝙽𝙴𝚁: Yosue
┣⟣☯ 𝙽𝚄𝙼𝙴𝚁𝙾:+58 4242773183
┣⟣☯ 𝙵𝙴𝙲𝙷𝙰: ${date}
┣⟣☯ 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
┣⟣☯ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
┗━━━━━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ 🌹𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔🍷
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣⟣❥👻  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙡𝙤𝙡𝙞𝙫𝙞𝙙_
┣⟣❥🥺  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙡𝙤𝙡𝙞_
┣⟣❥😘  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙥𝙥𝙘𝙤𝙪𝙥𝙡𝙚_
┣⟣❥🧐 _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙣𝙚𝙠𝙤_
┣⟣❥🙁  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙬𝙖𝙞𝙛𝙪_
┣⟣❥😝  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙖𝙠𝙞𝙧𝙖_
┣⟣❥😈 _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙖𝙠𝙞𝙮𝙖𝙢𝙖_
┣⟣❥🌹  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙖𝙣𝙣𝙖_
┣⟣❥❤️  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙖𝙨𝙪𝙣𝙖_
┣⟣❥🍷 _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙖𝙮𝙪𝙯𝙖𝙬𝙖_
┣⟣❥🫂  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙗𝙤𝙧𝙪𝙩𝙤_
┣⟣❥🥰  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙘𝙝𝙞𝙝𝙤_
┣⟣❥😍  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙘𝙝𝙞𝙩𝙤𝙜𝙚_
┣⟣❥💔  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙙𝙚𝙞𝙙𝙖𝙧𝙖_
┣⟣❥😎  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙚𝙧𝙯𝙖_
┣⟣❥😋  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙚𝙡𝙖𝙞𝙣𝙖_
┣⟣❥🤩  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙚𝙗𝙖_
┣⟣❥🤤  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙚𝙢𝙞𝙡𝙞𝙖_
┣⟣❥🥴  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙝𝙚𝙨𝙩𝙞𝙖_
┣⟣❥🥱  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙝𝙞𝙣𝙖𝙩𝙖_
┣⟣❥🤭  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙞𝙣𝙤𝙧𝙞_
┣⟣❥🤯  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙞𝙨𝙪𝙯𝙪_
┣⟣❥😳  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙞𝙩𝙖𝙘𝙝𝙞_
┣⟣❥😲  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙞𝙩𝙤𝙧𝙞_
┣⟣❥😵  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙖𝙜𝙖_
┣⟣❥🤠  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙖𝙜𝙪𝙧𝙖_
┣⟣❥☠️  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙖𝙤𝙧𝙞_
┣⟣❥💀  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙚𝙣𝙚𝙠𝙞_
┣⟣❥🤑  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙤𝙩𝙤𝙧𝙞_
┣⟣❥👾  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙠𝙪𝙧𝙪𝙢𝙞_
┣⟣❥🥸  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙢𝙖𝙙𝙖𝙧𝙖_
┣⟣❥😓  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙢𝙞𝙠𝙖𝙨𝙖_
┣⟣❥😥  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙢𝙞𝙠𝙪_
┣⟣❥😢  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙢𝙞𝙣𝙖𝙩𝙤
┣⟣❥😶  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙣𝙖𝙧𝙪𝙩𝙤_
┣⟣❥🙃  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙣𝙚𝙯𝙪𝙠𝙤_
┣⟣❥😘  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙨𝙖𝙜𝙞𝙧𝙞_
┣⟣❥🥰  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙨𝙖𝙨𝙪𝙠𝙚_
┣⟣❥😁  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙨𝙖𝙠𝙪𝙧𝙖_
┣⟣❥🥰  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭} *zero two*
┣⟣❥😁  _${𝙪𝙨𝙚𝙙𝙋𝙧𝙚𝙛𝙞𝙭}𝙘𝙤𝙨𝙥𝙡𝙖𝙮_

> Hola este menú 𝙩𝙚𝙣𝙙𝙧𝙖 más waifus estén atentos a las actualizaciones creadores soymaycol y yosue y nagi ૮₍ ˶•⤙•˶ ₎ა
┗━━━━━━━━━━━━━━━━┛`;
    const fkontak2 = {
      'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'},
      'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nFN:Yosue\nEND:VCARD`}},
      'participant': '0@s.whatsapp.net'
};

    await conn.sendMessage(m.chat, {image: pp, caption: str.trim()}, {quoted: fkontak2});
    await conn.sendMessage(m.chat, {video: {url: videoURL}, caption: '🌸 *Aquí tienes tu menú Waifu junto con el video*'}, {quoted: fkontak2});

} catch (err) {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] Hubo un error al enviar el menú, verifica la conexión o la URL del video.*', m);
}
};

handler.command = /^(menuanime)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
      }

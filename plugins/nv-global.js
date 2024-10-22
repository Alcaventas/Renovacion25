// Aquien sabe que tan eficiente sea agregar tantos... El que encuentre una manera de mejorarlo bienvenido. Buscar la palabra en el directorio creeria es aun peor.

const handler = (m) => m;

handler.all = async function(m, {conn}) {

  if (!chat.isBanned && m.text.match(/(bye|chau)/gi)) { 
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './src/assets/audio/bye.mp4'; 
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {video: {url: vn}, fileName: 'bye.mp4', mimetype: 'video/mp4', ptv: true}, {quoted: m});
  }

  if (!chat.isBanned && m.text.match(/(hola)/gi)) { 
    if (!db.data.chats[m.chat].audios) return;
    if (!db.data.settings[this.user.jid].audios_bot && !m.isGroup) return;
    const vn = './src/assets/audio/hola.mp4'; 
    mconn.conn.sendPresenceUpdate('recording', m.chat);
    mconn.conn.sendMessage(m.chat, {video: {url: vn}, fileName: 'hola.mp4', mimetype: 'video/mp4', ptv: true}, {quoted: m});
  }


  return !0;
};
export default handler;

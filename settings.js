const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nIhg2DAD#uV9Xx-y8yQzDZul9NRSC8JiljWFsQV8mlMBkFNYZses", // Add your session id
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "private",  //public | private | inbox | group
OWNER_NUMBER: process.env.OWNER_NUMBER || "94704206946",
DEV: process.env.DEV || "94704206946",
LANG: process.env.LANG || "EN", // EN | SI
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ᴊᴜꜱᴛ ɴᴏᴡ ꜱᴇᴇɴ ʙʏ ʟᴀʀᴀ ᴍᴅ`_* 💃🏻",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",    
AUTO_REACT: process.env.AUTO_REACT || "false",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💐,💖,💗,🔥,🪬,🍂,🏕️,🍃,🗿,💀,🪷,🪴,🤍",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",   
ANTI_BOT: process.env.ANTI_BOT || "false",
ANTI_CALL: process.env.ANTI_CALL || "false",
BAD_NUMBER_BLOCKER: process.env.BAD_NUMBER_BLOCKER || "false",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
READ_CMD: process.env.READ_CMD || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
ANTI_VV: process.env.ANTI_VV || "false",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",  // inbox | same
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

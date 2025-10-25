const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "dYUkyTxQ#rj8hXLiIfOUW_xNV-oGmS6klA3yQyBQm2Ag47CWOJyE",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/senuff1234/Senuwa-bot/blob/main/images/Senuwa-md.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SENUWA-MD Is Alive Now😍*",
BOT_OWNER: '94704206946',  // Replace with the owner's phone number



};

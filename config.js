const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "4Vs0wa4b#pl3z8O-x0TrVhPjIm5LMAkmTrQPBf5Ci-o1IMgt_mbE",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/senuff1234/Senuwa-bot/blob/main/images/Senuwa%20md.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 SENUWA-MD Is Alive Now😍*",
BOT_OWNER: '94704206946',  // Replace with the owner's phone number



};

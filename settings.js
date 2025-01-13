//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝐗𝐖𝐑𝐋𝐃-𝐕𝟏-𝐌𝐃  𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//                                                                                                      //
//               ██╗  ██╗██╗    ██╗██████╗ ██╗     ██████╗       ██╗   ██╗ ██╗                      //              
//               ╚██╗██╔╝██║    ██║██╔══██╗██║     ██╔══██╗      ██║   ██║███║                      //
//                ╚███╔╝ ██║ █╗ ██║██████╔╝██║     ██║  ██║█████╗██║   ██║╚██║                      // 
//                ██╔██╗ ██║███╗██║██╔══██╗██║     ██║  ██║╚════╝╚██╗ ██╔╝██║                      //
//               ██╔╝ ██╗╚███╔███╔╝██║  ██║███████╗██████╔╝       ╚████╔╝  ██║                      //
//                ╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚══════╝╚═════╝         ╚═══╝   ╚═╝                      // 
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : XWRLD-V1-MD
//  * @author : Immanuel999-felix
//  * @youtube : https://www.youtube.com/@immanuelfelix999
//  * @description : XWRLD-V1 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: immanuel.999
//Telegram: https://t.me/Imma_nuelbots999
//GitHub: @immanuel999-felix
//WhatsApp: +2349126807818
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2025 XWRLD-V1-MD.
// ⛥┌┤
// */

//~~~~~~~~~~~~~~~< SETTINGS >~~~~~~~~~~~~~~~\\
const fs = require('fs');
const chalk = require('chalk');


//~~~~~~~~< Owner Information>~~~~~~~~~~~~~~\\
global.ytname = process.env.YT_NAME || "YT: Immanuel Felix YT";

global.socialm = process.env.GITHUB_USERNAME || "GitHub: immanuel999-felix";

global.location = process.env.LOCATION || "Nigeria, Rivers, Porthacourt";


//~~~~~~~~<Session and Bot Details>~~~~~~~~~~~~~\\
global.SESSION_ID = process.env.SESSION_ID || '';

global.botname = process.env.BOT_NAME || 'XWRLD-V1-MD';

global.ownernumber = [process.env.OWNER_NUMBER || '2349126807818'];

global.ownername = process.env.OWNER_NAME || '𝙄𝙈𝙈𝘼𝙉𝙐𝙀𝙇 𝙁𝙀𝙇𝙄𝙓';


//~~~~~~<Website and Social Links>~~~~~~~~~~\\
global.websitex = process.env.WEBSITE_URL || "https://youtube.com/@immanuelfelix999";

global.wagc = process.env.WHATSAPP_CHANNEL || "https://whatsapp.com/channel/0029VaioNMmADTOAj0T6Yw2s";


//~~~~~~~~<Theme and Miscellaneous>~~~~~~~~~~\\
global.themeemoji = process.env.THEME_EMOJI || '⛩';

global.wm = process.env.WATERMARK || "Xwrld Bot Inc.";

global.botscript = process.env.SCRIPT_LINK || 'https://github.com/Immanuel999-felix/XWRLD-V1-MD';

global.packname = process.env.PACK_NAME || "𝙓 𝙒𝙍𝙇𝘿";

global.author = process.env.AUTHOR_NAME || "MΛDΣ BY 𝙄𝙈𝙈𝘼𝙉𝙐𝙀𝙇 𝙁𝙀𝙇𝙄𝙓";

global.creator = process.env.CREATOR_NUMBER || "2349126807818@s.whatsapp.net";


//~~~~~~~~~~~~~<Bot Settings>~~~~~~~~~~~~~~~\\
global.xprefix = process.env.PREFIX || '.';

global.premium = [process.env.PREMIUM_NUMBER || '2349126807818'];

global.typemenu = process.env.MENU_TYPE || 'v2';

global.typereply = process.env.REPLY_TYPE || 'v4';

global.autoblocknumber = process.env.AUTOBLOCK_COUNTRYCODE || '212';

global.antiforeignnumber = process.env.ANTIFOREIGN_COUNTRYCODE || '91';

global.antidelete = process.env.ANTI_DELETE === 'true';


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];


global.tempatDB = process.env.DB_FILE || 'database.json';


global.limit = {
  free: parseInt(process.env.FREE_LIMIT || 100),
  premium: parseInt(process.env.PREMIUM_LIMIT || 999),
  vip: process.env.VIP_LIMIT || 'VIP'
};


global.uang = {
  free: parseInt(process.env.FREE_UANG || 10000),
  premium: parseInt(process.env.PREMIUM_UANG || 1000000),
  vip: parseInt(process.env.VIP_UANG || 10000000)
};


global.mess = {
  error: process.env.ERROR_MESSAGE || 'Error!',
  nsfw: process.env.NSFW_MESSAGE || 'Nsfw is disabled in this group, Please tell the admin to enable',
  done: process.env.DONE_MESSAGE || 'Done'
};


global.bot = {
  limit: 0,
  uang: 0
};


global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {},
};


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
// Watch for file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});

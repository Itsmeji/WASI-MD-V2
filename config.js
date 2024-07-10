//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/BGp5Z4aDCc43DVVqmlBQb4";
global.website = process.env.GURL || "https://chat.whatsapp.com/BGp5Z4aDCc43DVVqmlBQb4";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f44ffa62b6f875dfed72f.jpg";
global.devs = "22896870256";
global.sudo = process.env.SUDO || "22896870256";
global.owner = process.env.OWNER_NUMBER || "22896870256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/f44ffa62b6f875dfed72f.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUZWUE9GS2Z5MFNKcmhrSUtMNGFQam4rQzJYZnlNd01DdThoN29rQVdWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXZwSmNDWklRcFQ0cEtRb0FsM1VINU9aOXN4eFBib25zMjlCcjJJeTlEdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwT01CRWs2TWxYWm8vcFpBNTBNNmlkNmZ1ZFdHUDZ5Vlc3d2w5dmNsdzFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOG9VQ1F6MGxPa1A5bmxHVUR5RXhpT29BSXllVkw5RFROajJBL0o1L2lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBNjlsRzFDM01MNjZwamZQcHlodGo4ZG5LS2VNNng2RzNiVWhETWV1VUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVIdDBzTUE4aUc3djdpditFWThUTklCTC9Fem5tZllvcW9sVjJwV3ZXMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NIR01TNFp3bERNYXdwTTllSWg2TDNYcE41WGhNYXFKcUd5K3pPOTkzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoick1aZ0lpODF1U0pMRk5YQkhEOHVpclk2VXJHRzV5TUlSYzg1czVrbWhIUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJoL0lWK2NOT2Z2MGVQWFBlV2hONWVvMktTV1FvQmxBeFZzK1M4NHZMRWVRaHdiT0tNY2lhRnNtcnBhNW0ySnBaQVZRMlM4eXhGalZLRXlqd1oxekF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6InNoYm9wUzdkTjk4UkRKMnFVLy9CTjNHOTJCOWJXTmpCc0NYeG9OaGp2b2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjJLR1RvSGhBU20ycnU2RDBCeVp1V2ciLCJwaG9uZUlkIjoiMDA1ZjZkNjgtYjg0OS00MDlmLTkwZWEtYWQwODYwYTY3YWVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJPbXlRVFJSMnZJa1F4Nk1IZEpZVS9DMW9MTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvbHYyM3N5azdWSFpoNnFMcXdUeWg0WCt0OUk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSzcxTVg0MzQiLCJtZSI6eyJpZCI6IjIyODk5ODY5NjAxOjUzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMcmN1SndERUtmb3U3UUdHQTBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrWEFZNWlYcmN4M3gyMjU1aCt5UHd4SDAvalplcGZCNTJxK21wbXlmUENnPSIsImFjY291bnRTaWduYXR1cmUiOiJ2aTRmZDlvU1B3SkJBbHhUUWxqZUZBWDRDTWpiVzJmdTNyQmQ3Wnd4dm42THhOZFAxWU1JYmJKTkE5OWVBVTJ5RFBIM2FlRnJmZk1acU1jQkNTcE5BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiblRvZmZjWkZjMW9haENVUmJJbkxIakd4Zk9hSHQ5WUxZeFdqLzVRdFhZcFYxSmxYZG9tMjJmZlAzTmREVURkbVJwUTdEeTF6TFFORnRYNnFhMEdBQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5OTg2OTYwMTo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaRndHT1lsNjNNZDhkdHVlWWZzajhNUjlQNDJYcVh3ZWRxdnBxWnNuendvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjQ0NjU5fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "KUROSAKI•ISRAFEL",
  author: process.env.PACK_AUTHER || "Kurosaki",
  packname: process.env.PACK_NAME || "Israfel",
  botname: process.env.BOT_NAME || "SCP foundation bot",
  ownername: process.env.OWNER_NAME || "Israfel Kurosaki",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

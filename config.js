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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "22896870256";
global.owner = process.env.OWNER_NUMBER || "22896870256";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0pQTmdQVUIzTWVSdDcxTVZaZy9RRjgybTNpdzBSU1Z4TnQ3azNzcUJFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVJhVWdpclRjR0dGYkhuRjQwWnM2NWNvWEFLQkl2RTErbVB5YlJxMThudz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RFFRZkNjeVFtNVUwNDJwUVhkRWlsMGk4Kyt4cGhvcDdNd2hiUE1nUEZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRlVqT21qZHp4MEVZVS9IN1AydUFVZnMyVitHQjB4eXZKWm1FTjhQUzE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBQ0loaStDVUVqZFlIclFGOWgrK3d3ZXJUYjRtamFvdzlWa1dneGs4bjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJCa3ZhcTFqcWJTNDhLbjVtOFJtS290VHkzZE13MlFFdzJ0cnpFemFvRDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkJiUUlaT2hjZnUrSWJsc3RiL2RQbEk2bU5CQjhUdS9IWElmUjRMV0tsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUt5RkFjc2tGdHdDb1ZMOGoxMi9GaGVzMzlVTGVWZEhBejVUUkl2dDFGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjM2UHY1clQwbVh1TTJPaSs4VWthc0s3MEtjaGpiTlJpTlBqdWwyVldkNFdDUlpQVnJKa1RaRk1XRmRVREdqRU05ZmJGcFdocXM1Qmp3VGVLb21vWmlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJQOFVHWG0vRE1pTlVTUmNzLzY5a2o1YkF5VGYxa2ZWUTUybVZwRnE5VUJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0S0M3b1AxOVJsbTZ2NkZCN2dVcklnIiwicGhvbmVJZCI6ImE4NDY1YjRjLWI3MjEtNDNkYy04YTViLWNiYTQ1Yjk0MjM1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTG1TV0Y5NXNMRzFRNzB0YmV6NTV5aXAvTTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzc5MElqNTU1d3FpQ0RydHVrOVhCd1N6Zk9RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijg2TDc0R0dZIiwibWUiOnsiaWQiOiIyMjg5OTg2OTYwMTo0OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHJjdUp3REVLNlQvYk1HR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoia1hBWTVpWHJjeDN4MjI1NWgreVB3eEgwL2paZXBmQjUycSttcG15ZlBDZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRjRzcEFDd3FmdW8waE9UMW81ckZUd0QxUnZvTSthTitTdUsrUFhkWmVHazFReW9oSElZNkNEU09PNlE5aVZEMTZBRUVmZ2JVZUdaRjc5N1ZIREtxRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlJnakY0c3BUZ2JHTHJSVjgzbDlNRFNvVVZaL1lEeFJVYzBJdWRNdzMyRDQ0d3VoSjZXREhUWjB2NlFXZkl1eEFmMVpyVG4rQW13dHhLcjBhZVloZ2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTk4Njk2MDE6NDhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkZ3R09ZbDYzTWQ4ZHR1ZVlmc2o4TVI5UDQyWHFYd2VkcXZwcVpzbnp3byJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxOTYxNzk4MH0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𓆩☀️『🪶❦𝐊𝐮𝐫𝐨𝐬𝐚𝐤𝐢✘🪽』🌙𓆪",
  author: process.env.PACK_AUTHER || "Kurosaki",
  packname: process.env.PACK_NAME || "Israfel",
  botname: process.env.BOT_NAME || "𓆩❦𝕾𝕮𝕻ꕥ𓆪『🪶𝕭Ω𝕿🪽』",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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

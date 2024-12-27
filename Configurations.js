require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "263781526148";   // You can replace this number with yours //
}


global.owner = gg.split("27781242411");
global.mongodb = process.env.MONGODB || "027ee19b-5157-41d3-99ed-cc233cccfb57";
global.sessionId = process.env.SESSION_ID || "woo";
global.prefa = process.env.PREFIX || "®";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas Bot`;
global.author = process.env.AUTHOR || "by: Mr-Jones";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split("27781242411");

module.exports = {
  mongodb: global.mongodb,
};

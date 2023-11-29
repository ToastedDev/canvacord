const Canvacord = require("./src/Canvacord");

// load default fonts
try {
  Canvacord.registerFonts();
} catch (e) {}

/**
 * @param {stirng} moduleName module name
 */
function load(moduleName) {
  try {
    return require(moduleName);
  } catch (e) {
    return null;
  }
}

const { author, version } = require("./package.json");

module.exports.Canvas = Canvacord;
module.exports.Canvacord = Canvacord;
module.exports.ConvolutionMatrix = Canvacord.CONVOLUTION_MATRIX;
module.exports.Rank = require("./src/Rank");
module.exports.Spotify = require("./src/Spotify");
module.exports.Welcomer = require("./src/Welcomer");
module.exports.Leaver = require("./src/Leaver");
module.exports.Greeting = require("./src/base/GreetingsCard");
module.exports.CaptchaGen = load("captcha-canvas")
  ? load("captcha-canvas").CaptchaGenerator
  : null;
module.exports.ForniteShop = load("discord-canvas")
  ? load("discord-canvas").FortniteShop
  : null;
module.exports.FortniteStats = load("discord-canvas")
  ? load("discord-canvas").FortniteStats
  : null;
module.exports.Plugins = require("./src/Plugins");
module.exports.util = require("./src/Util");
module.exports.Assets = require("./src/Assets");
module.exports.MSX = {};
module.exports.MSX.Brightness = require("./libs/Brightness");
module.exports.MSX.Convolute = require("./libs/Convolute");
module.exports.MSX.Darkness = require("./libs/Darkness");
module.exports.MSX.Greyscale = require("./libs/Greyscale.js");
module.exports.MSX.Invert = require("./libs/Invert");
module.exports.MSX.Sepia = require("./libs/Sepia");
module.exports.MSX.Threshold = require("./libs/Threshold");
module.exports.MSX.Trigger = require("./libs/Trigger");
module.exports.write = Canvacord.write;
module.exports.author = author;
module.exports.version = version;

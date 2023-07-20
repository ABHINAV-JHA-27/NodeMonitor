const constant = require("../lib/constant");

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[node-monitor] ${message}`);
};

module.exports = logger;

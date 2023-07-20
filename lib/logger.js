const constant = require("../lib/constant");

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[devkeeper] ${message}`);
};

module.exports = logger;

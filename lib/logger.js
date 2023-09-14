const constant = require("../lib/constant");

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[node-peeker] ${message}`);
};

module.exports = logger;

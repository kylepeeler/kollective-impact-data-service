'use strict';

var timers = require("./lib/timers");

module.exports = {
	idGenerator: require("./lib/idgenerator").idGenerator,
    later: timers.later,
    async: timers.async,
    isNode: require("./lib/isnode")
};
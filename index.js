/**
 * log5js
 * @author "0LEG0 <a.i.s@gmx.com>"
 * @version 1.0.0
 * @license Apache-2.0
 */
"use strict";

const LOG = {
    set level(lvl) {
        if (typeof lvl === "number") {
            LOG._level = lvl;
            return;
        }
        if (typeof lvl === "string") {
            switch(lvl.toUpperCase()) {
                case "ERROR": LOG._level = 0; break;
                case "WARN": LOG._level = 1; break;
                case "NOTE": LOG._level = 2; break;
                case "INFO": LOG._level = 3; break;
                case "DEBUG": LOG._level = 4; break;
                default:
            }
        }
    },
    get level() {
        return LOG._level;
    },
    _level: 3,
    /* 0 - error, 1 - warn, 2 - note, 3 - info, 4 - debug */
    error: function(...args) {LOG.log("ERROR", ...args)}, // 0
    warn: function(...args) {
        if (LOG._level > 0) LOG.log("WARN ", ...args)
    },
    note: function(...args) {
        if (LOG._level > 1) LOG.log("NOTE ", ...args)
    },
    info: function(...args) {
        if (LOG._level > 2) LOG.log("INFO ", ...args)
    },
    debug: function(...args) {
        if (LOG._level > 3) LOG.log("DEBUG", ...args)
    },
    log: function(flag, ...args) {
        console.log(`${new Date().toISOString()} [${flag}]`, ...args);
    }
}

module.exports = LOG;
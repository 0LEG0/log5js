module.exports = {
    set level(lvl) {
        if (typeof lvl === "number") {
            this._level = lvl;
            return;
        }
        if (typeof lvl === "string") {
            switch(lvl.toUpperCase()) {
                case "ERROR": this._level = 0; break;
                case "WARN": this._level = 1; break;
                case "NOTE": this._level = 2; break;
                case "INFO": this._level = 3; break;
                case "DEBUG": this._level = 4; break;
                default:
            }
        }
    },
    get level() {
        return this._level;
    },
    _level: 3,
    /* 0 - error, 1 - warn, 2 - note, 3 - info, 4 - debug */
    error: function(...args) {this.log("ERROR", ...args)}, // 0
    warn: function(...args) {
        if (this._level > 0) this.log("WARN ", ...args)
    },
    note: function(...args) {
        if (this._level > 1) this.log("NOTE ", ...args)
    },
    info: function(...args) {
        if (this._level > 2) this.log("INFO ", ...args)
    },
    debug: function(...args) {
        if (this._level > 3) this.log("DEBUG", ...args)
    },
    log: function(flag, ...args) {
        console.log(`${new Date().toISOString()} [${flag}]`, ...args);
    }
}
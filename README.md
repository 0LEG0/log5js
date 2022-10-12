# The simplest 5-level logger

Usage
```javascript
// CommonJS
const LOG = require("log5js");

// ECMAScript
import LOG from "log5js";

/* 0 - error, 1 - warn, 2 - note, 3 - info, 4 - debug */
LOG.level = 4

// Usage
LOG.debug("Message will be printed if level > 3");
LOG.info("Message will be printed if level > 2");
LOG.note("Message will be printed if level > 1");
LOG.warn("Message will be printed if level > 0");
LOG.error("Message will be printed if level = 0");
LOG.log("CUSTOM", "Custom message ignores level");
```
Outputs
```
2022-10-12T10:42:05.014Z [DEBUG] Message will be printed if level > 3
2022-10-12T10:42:05.014Z [INFO ] Message will be printed if level > 2
2022-10-12T10:42:05.014Z [NOTE ] Message will be printed if level > 1
2022-10-12T10:42:05.014Z [WARN ] Message will be printed if level > 0
2022-10-12T10:42:05.014Z [ERROR] Message will be printed if level = 0
2022-10-12T10:42:05.014Z [CUSTOM] Custom message ignores level
```

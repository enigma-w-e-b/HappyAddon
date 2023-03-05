export default class Log {
    static debug(name) {
        console.warn(name);
    }
    static debugAssert(condition, text) {
        if (!condition) {
            let errorText = "Assertion failed";
            if (text) {
                errorText += ": " + text;
            }
            Log.debug(errorText);
        }
    }
}

//# sourceMappingURL=../../../../_HappyDebug/main/tools/debug-log.js.map

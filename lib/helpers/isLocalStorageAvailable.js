"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLocalStorageAvailable() {
    var test = "test";
    if (typeof localStorage === "undefined") {
        return false;
    }
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.default = isLocalStorageAvailable;
//# sourceMappingURL=isLocalStorageAvailable.js.map
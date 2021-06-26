"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCrsfToken = exports.getCsrfToken = void 0;
var isLocalStorageAvailable_1 = __importDefault(require("./helpers/isLocalStorageAvailable"));
function getCsrfToken() {
    if (typeof window === "undefined") {
        return undefined;
    }
    if (isLocalStorageAvailable_1.default()) {
        return localStorage.getItem("x-csrf-token");
    }
    // @ts-ignore
    return window.xCrsfToken;
}
exports.getCsrfToken = getCsrfToken;
function setCrsfToken(crsfToken) {
    if (typeof window !== "undefined") {
        if (isLocalStorageAvailable_1.default()) {
            localStorage.setItem("x-csrf-token", crsfToken);
        }
        else {
            // @ts-ignore
            window.xCrsfToken = crsfToken;
        }
    }
}
exports.setCrsfToken = setCrsfToken;
//# sourceMappingURL=csrf.js.map
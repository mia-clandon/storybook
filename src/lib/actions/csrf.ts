import isLocalStorageAvailable from "./helpers/isLocalStorageAvailable";

export function getCsrfToken() {
    if (typeof window === "undefined") {
        return undefined;
    }

    if (isLocalStorageAvailable()) {
        return localStorage.getItem("x-csrf-token");
    }

    return window.xCrsfToken;
}

export function setCrsfToken(crsfToken: string) {
    if (typeof !== "undefined") {
        if(isLocalStorageAvailable()){
            localStorage.setItem("x-csrf-token", crsfToken);
        } else {
            window.xCrsfToken = crsfToken;
        }
    }
}

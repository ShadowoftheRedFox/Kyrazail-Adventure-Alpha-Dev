/// <reference path="../../ts/type.d.ts"/>

function Translate() {
    throw new Error("This is a static class.");
}

Translate.main = function (messageCode, ...args) {
    if (!messageCode) throw new ReferenceError("messagecode is not defined.");

    switch (ConfigConst.LANGUAGE.toLocaleLowerCase()) {
        case "fr":
            return Translate.toFR(messageCode, args);
        default:
            return Translate.toEN(messageCode, args);
    }
};

Translate.toEN = function (m, a) {
    switch (m) {
        case "WindowManagerFatalError":
            return "Fatal Error";
        default:
            return "Unknown message code";
    }
};

Translate.toFR = function (m, a) {
    switch (m) {
        case "WindowManagerFatalError":
            return "Erreur Fatale";
        default:
            return "Code de message inconnu";
    }
};
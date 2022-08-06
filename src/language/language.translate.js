/// <reference path="../../ts/type.d.ts"/>
function GameTranslate(messageCode, ...args) {
    if (!messageCode) throw new ReferenceError("messagecode is not defined.");

    switch (ConfigConst.LANGUAGE.toLocaleLowerCase()) {
        case "fr":
            return GameTranslate.toFR(messageCode, args);
        default:
            return GameTranslate.toEN(messageCode, args);
    }
}

GameTranslate.toEN = function (m, a) {
    switch (m) {
        case "WindowManagerFatalError": return "Fatal Error";
        case "WindowManagerLongLog": return "Long crash log found. Check console for a full report.";
        case "EventBeforeUnload": return "Are you sure you want to leave this page? Progression might not be saved.";
        default: return "Unknown message code";
    }
};

GameTranslate.toFR = function (m, a) {
    switch (m) {
        case "WindowManagerFatalError": return "Erreur Fatale";
        case "WindowManagerLongLog": return "Log de crash long trouvé. Regardez la console pour un rapport complet.";
        case "EventBeforeUnload": return "Êtes vous sur de vouloir quitter la page? La progression n'est peut être pas sauvegardé.";
        default: return "Code de message inconnu";
    }
};
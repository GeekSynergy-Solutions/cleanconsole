import cleanConsoleClass from "./package/clean_console_class";

var _cleanConsole = new cleanConsoleClass.CleanConsoleClass();

var protectedLogData = (protectedData, showProtectedData = false) => _cleanConsole.logData(protectedData, showProtectedData);
var protectedWarningData = (protectedData, showProtectedData = false) => _cleanConsole.warningData(protectedData, showProtectedData);
var protectedInfoData = (protectedData, showProtectedData = false) => _cleanConsole.infoData(protectedData, showProtectedData);
var protectedDebugData = (protectedData, showProtectedData = false) => _cleanConsole.debugData(protectedData, showProtectedData);

export default { protectedLogData, protectedWarningData, protectedInfoData, protectedDebugData }

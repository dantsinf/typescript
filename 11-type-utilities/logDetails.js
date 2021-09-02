"use strict";
function logDetails(uid, item) {
    //function logDetails(uid: Uid, item: string){
    console.log("Um produto com " + uid + " tem um titulo igual " + item + ".");
}
function logInfo(uid, item) {
    console.log("Um user com " + uid + " tem um nome igual " + item + ".");
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform('ios');
logDetails(123, "sapato");
logDetails("123", "sapato");
logInfo(123, "Willian");
logInfo("123", "Willian");

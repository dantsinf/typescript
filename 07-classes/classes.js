"use strict";
//classes e definiu propriedades 
var UserAccount = /** @class */ (function () {
    //os tipos de valores que vai receber
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var will = new UserAccount("Willian", 30);
console.log(will);

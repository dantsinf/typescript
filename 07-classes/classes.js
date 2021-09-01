"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes e definiu propriedades 
//propriedades: public, privated e readonly
//classes abstratas não permitem que nada seja criado após elas 
var UserAccount = /** @class */ (function () {
    //os tipos de valores que vai receber
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("O jogador " + this.name + " tem " + this.age + " anos");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = 
        //peguei as proproedades de vou estender
        _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        // get e set para  pegar valores das classes
        //GET é uma função e não prop
        get: function () {
            console.log("-----GET-----");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("O jogador " + this.name + " tem " + this.age + " e tem o char " + this.nickname + " no nivel " + this.level);
    };
    return CharAccount;
}(UserAccount));
/*const will = new UserAccount("Willian", 30);
console.log(will);
//chamou logDetails():void
will.logDetails();*/
//atraves de uma classe consguimos "mudar" os valores
var john = new CharAccount("John", 45, "johmaster", 80);
//console.log(john);
//john.nickname = "willjusten";
console.log(john);
//john.level = 799, não funciona pois só pode ser lida
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.setLevel = 499;
console.log(john.getLevel);
/*
- classes são criadas com Class
- Comecamos os nomes das classes em maiúsculo
- acessos são os gets e sets, vão retornar ou definir valor
- abstratec classes não podemos criar objetos apoós essas classes

*/

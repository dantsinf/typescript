"use strict";
//####################### ALIAS VS INTERFACE #################################           
//implements
var CreateGameT = /** @class */ (function () {
    function CreateGameT() {
    }
    return CreateGameT;
}());
//isso da erro pois acima foi declarado 2x o number
//[1,2,3] as TupleT;
[1, 2];
//implements
var CreateGame = /** @class */ (function () {
    function CreateGame() {
    }
    return CreateGame;
}());
[1, 2, 3, 4, "sass"];
var $ = {
    a: "bla",
    b: "foo",
};
//vantagegem: quando tiver criando libs, prefira Interface, porque são mais extensíveis
//cirnado objeto/classes (POO)

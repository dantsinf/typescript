"use strict";
//Readonly
//Partial
//Pick
//Omit
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};
//todo.completed = true;
//partial deixa todas as propriedades em T opcional
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: "Fechart Ghost of Tsushima",
    completed: false
};
var todo4 = {
    title: "Fechart Ghost of Tsushima",
    completed: false
};
//quando usar o pick e o omit?
//pensar:
//eu quero anular mais ou pegar?

"use strict";
var Character = (function () {
    function Character(name, short, titles, salutation) {
        if (titles === void 0) { titles = []; }
        this.name = name;
        this.short = short;
        this.titles = titles;
        this.salutation = salutation;
    }
    Character.prototype.iAm = function () {
        return 'I am ' + this.name;
    };
    Character.prototype.myNameIs = function () {
        return 'My name is ' + this.name;
    };
    Character.prototype.prefix = function () {
        return this.short.substr(0, 1).toUpperCase() + this.short.substr(1).toLowerCase() + ': ';
    };
    Character.prototype.listTitles = function () {
        return this.titles.toString();
    };
    return Character;
}());
exports.Character = Character;

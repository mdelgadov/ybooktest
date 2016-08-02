/// <reference path="./character.ts" />
"use strict";
var character_1 = require("./character");
window.onload = function () {
    var el = document.getElementById('content');
    var char = new character_1.Character('Inigo Montoya', 'Inigo', ['swordsman', 'pepetone'], 'You killed my father, prepare to die');
    el.innerHTML += char.short;
};

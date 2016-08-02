"use strict";
var character_1 = require('./character');
describe('Character', function () {
    var char;
    beforeEach(function () {
        char = new character_1.Character();
    });
    it('should have no titles', function () {
        expect(char.titles.length).toEqual(0);
    });
    describe('when a character is created', function () {
        var char;
        beforeEach(function () {
            char = new character_1.Character('Inigo Montoya', 'Inigo', ['swordsman', 'pepetone'], 'You killed my father, prepare to die');
        });
        it('should hail the reader', function () {
            expect(char.iAm()).toContain(char.name);
        });
        it('should say their name', function () {
            expect(char.myNameIs()).toContain(char.name);
        });
        it('should prefix with short', function () {
            expect(char.prefix()).toContain(char.short);
        });
        it('should return titles', function () {
            expect(char.listTitles()).toContain(char.titles[char.titles.length - 1]);
        });
    });
});

"use strict";
describe('Book', function () {
    var book;
    var title = 'Alice in Wonderland';
    var id = 44;
    var author = 'Lewis Carroll';
    beforeEach(function () {
        book = { id: id, title: title, author: author };
    });
    it('should have a title', function () {
        expect(book.title).toEqual(title);
    });
    it('should have an id number', function () {
        expect(book.id).toEqual(id);
    });
    it('should have an author', function () {
        expect(book.author).toEqual(author);
    });
});

"use strict";
var cart_1 = require('./cart');
describe('shopping cart', function () {
    var cart;
    beforeEach(function () {
        cart = new cart_1.Cart();
    });
    it('should have no books', function () {
        expect(cart.items.length).toEqual(0);
    });
    describe('when a book is added', function () {
        var book;
        beforeEach(function () {
            book = { id: 1, title: 'book', author: 'writer' };
            cart.addBook(book);
        });
        it('should add the book', function () {
            expect(cart.items.length).toEqual(1);
        });
    });
});

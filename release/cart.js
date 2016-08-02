"use strict";
var Cart = (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.addBook = function (book) {
        this.items.push(book);
    };
    return Cart;
}());
exports.Cart = Cart;

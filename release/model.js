"use strict";
var Order = (function () {

  function Order(symbol, qty) {
    var shares = [
    { symbol: 'msft', name: 'Microsoft', price: '100' },
    { symbol: 'ibm', name: 'IBM', price: '200' },
    { symbol: 'c', name: 'Citi', price: '300' },
    { symbol: 'ybook', name: 'Yielbook', price: '400' }
    ];

    var share = shares.filter(function (share) {
      return share.symbol === symbol;
    });

    this.name = share[0].name;
    this.symbol = symbol;
    this.price = share[0].price;
    this.qty = qty;
  }
  Order.prototype.amount = function () {
    return this.qty * this.price;
  };
  return Order;
}());


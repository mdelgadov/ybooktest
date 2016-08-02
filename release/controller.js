"use strict";

var Controller = (function () {

  function Controller() {
  }

  Controller.prototype.insertOrder = function (name, quantity, index) {
    if (localStorage) {
      var ordersJson = localStorage.getItem('orders');
      var orders = ordersJson ? JSON.parse(ordersJson) : [];

      var order = new Order(name, quantity);

      //did you know that !index can give false evaluation? if index = 0, then !0 = true...
      if (index === "") {
        orders.push(order);
      } else {
        orders[index] = order;
      }

      localStorage.setItem('orders', JSON.stringify(orders));
    }

  }

  Controller.prototype.delOrder = function (index) {
    if (!localStorage) return false;

    var ordersJson = localStorage.getItem('orders');
    var orders = ordersJson ? JSON.parse(ordersJson) : [];

    orders.splice(index, 1);

    localStorage.setItem('orders', JSON.stringify(orders));
  }

  Controller.prototype.getOrder = function (index) {
    if (!localStorage) return false;

    var ordersJson = localStorage.getItem('orders');
    var orders = ordersJson ? JSON.parse(ordersJson) : [];

    return orders[index];
  }

  Controller.prototype.getOrders = function () {
    if (!localStorage) return false;

    var ordersJson = localStorage.getItem('orders');
    var orders = ordersJson ? JSON.parse(ordersJson) : [];

    return orders;
  }

  Controller.prototype.total = function () {
    if (!localStorage) return 'old browser, please update...'

    var ordersJson = localStorage.getItem('orders');
    var orders = ordersJson ? JSON.parse(ordersJson) : [];

    return orders.reduce(function (tot, order) {
      return tot + order.amount();
    });

  }

  return Controller;
}())

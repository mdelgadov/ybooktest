"use strict";
var model_1 = require('./model');
var ticker_1 = require('./controller');


describe('Controller', function() {
  var store = {};
  var controller;
  var ls = function() {
    return JSON.parse(store.storage);
  };

  beforeEach(function() {

    // LocalStorage mock.
    spyOn(localStorage, 'getItem').andCallFake(function (key) {
      return store[key];
    });

    Object.defineProperty(sessionStorage, "setItem", { writable: true });
    spyOn(localStorage, 'setItem').andCallFake(function(key, value) {
      store[key] = value;
    });

    controller = new ticker_1.Controller();
  });

  afterEach(function () {
    store = {};
  });

  it('should have no orders', function () {
    expect(controller.getOrders().length).toEqual(0);
  });

});

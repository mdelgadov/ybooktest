"use strict";

$(document).ready(function () {
  var controller = new Controller();

  // first check the orders already bought
  getOrders();

  // calculateTotal on keyup or on change of ticker/date/orders
  $("#ticker_name, #order_quantity").keyup(calculateTotal);
  $("#ticker_name, #order_quantity").change(calculateTotal);

  // on form submit
  $("#buy_orders").submit(function (event) {

    // prevent on submit page refresh
    event.preventDefault();

    // check locally stored data
    controller.insertOrder($("#ticker_name").val(), $("#order_quantity").val(), $("#index").val())

    //// clear the form
    //$('#buy_orders').each(function () {
    //  this.reset();
    //});

    // reset (enter data first) message
    $("#index").val(undefined);
    $("#ticker_name").val(null);
    $("#order_quantity").val(undefined);
    $("#price").html("(enter data first)");
    $("#total_price").html("(enter data first)");


    getOrders();
  });
});

function calculateTotal() {
  if ($("#order_quantity").val() != "" && $("#ticker_name").val() != "") {

    var order = new Order($("#ticker_name").val(), $("#order_quantity").val());

    $("#price").html(order.price);
    $("#total_price").html(order.amount());
  }
}

// fetch details of orders bought
function getOrders() {
  $("#orders_list").html("<td id='none'>(none)</span>");

  var controller = new Controller();
  var result = controller.getOrders();

  if (result) {
    $("#none").remove();
    var idx = 0;
    var tot = 0;

    $.each(result, function (key, value) {

      var subtot = (value.qty * value.price);
      tot += subtot;
      $("#orders_list").append("<tr><td><button onclick='edit(" + (++idx - 1) + ")'>edit</button></td><td><button onclick='del(" + (idx - 1) + ")'>del</button></td><td>" + idx + ". </td><td>" + value.name + "</td><td>" + value.price + "</td><td>" + value.qty + "</td><td>" + subtot + "</td></tr>");
    });

    $("#total").html('<span>' + tot + '</span>' )
  }

}

function edit(index) {
  var controller = new Controller();
  var order = controller.getOrder(index);

  $("#index").val(index);
  $("#ticker_name").val(order.symbol);
  $("#order_quantity").val(order.qty);
  $("#price").html(order.price);
  $("#total_price").html((order.price * order.qty));
}
function del(index) {

  var controller = new Controller();
  var order = controller.getOrder(index);

  var answer = confirm("Are you sure to delete order " + (index+1) + ", " + order.qty + " shares of " + order.name);

  if (answer) {
    controller.delOrder(index);

    getOrders();
  }

}
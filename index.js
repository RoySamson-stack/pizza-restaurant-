function Order(sizes, top, crust) {
  this.sizes = sizes;
  this.top = top;
  this.crust = crust;
}
// function Sizes(size, price){
//   this.size = size;
//   this.price = price;
// }
// function top(toppings, price){
// this.toppings = toppings;
// this.price = price
// }
Order.prototype.fullOrder = function () {
  return this.sizes + " " + this.top + " " + this.crust;
}

function Location(street, house, number) {
  this.street = street;
  this.house = house;
  this.number = number;
}

Location.prototype.fullAddress = function () {
  return this.street + " " + this.house;
}

$(document).ready(function () {
  $("#order_btn").click(function () {
    $("#order_form").show();
  });
  $("#cancel_order").click(function () {
    $("#order_form").hide();
  })
  //  $("#place_order").click(function () {
  //    $("#delivery_form").toggle();
  // });
  // $("#cancel_btn").click(function () {
  //   $("#delivery_form").hide();
  // });

  $("#deliver").click(function(){
    $(".locate_del").toggle();
  });
  $("#nt_deliver").click(function(){
    $(".locate_del").hide();
  });
  $("#add_order").on('click', '#order_form', function () {
    $("#order_form").append(
      '<form class="" id="order_form">' +
      ' <div class="">' +
      " <h3>Pizza size</h3>" +
      '<select class="custom-select" id="size">' +
      '<option value="">small -- 250</option>' +
      '<option value="">medium -- 500</option>' +
      '<option value="">large -- 1000</option>' +
      '<option value="">extra large --1250</option>' +
      "</select>" +
      " </div>" +
      " <div class=''>" +
      "<h3>Pizza crust</h3>" +
      '<select class="custom-select" id="crust">' +
      " <option value=''>crispy</option>" +
      " <option value=''>stuffed </option>" +
      "<option value=''>gluten free </option>" +
      " <option value=''>chicago-style deep dish </option>" +
      "  </select>" +
      " </div>" +
      "  <div class=''>" +
      "<h3>pizza toppings</h3>" +
      '<select class="custom-select" id="toppings">' +
      "<option value=''>vegan -- 220</option>" +
      " <option value=''>pepperoni -- 150</option>" +
      " <option value=''>mushroom -- 120</option>" +
      "  <option value=''>pineapple -- 80</option>" +
      '</select' +
      "  </div>" +
      "  <div class=''>" +
      "<label>Amount</label>" +
      '<input type="text" id="pizza_amnt" placeholder="">' +
      " </div>" +
      '   <input type="submit" value="Place order" id="place_order" class="btn btn-primary">' +
      "</form>"
    )
  });
  $("#order_form").submit(function (event) {
 

    var size = document.querySelector(`[id="size"]`);
    var crust = document.querySelector(`[id="crust"]`);
    var toppings = document.querySelector(`[id="toppings"]`);
    var amount = document.getElementById('pizza_amnt').value;

    size.addEventListener(`change`, (e) => {
      const select = e.target;
      const value = select.value;
      const desc = select.selectedOptions[0].text;
      console.log(desc);
    });
    crust.addEventListener(`change`, (e) => {
      const select = e.target;
      const value = select.value;
      const desc = select.selectedOptions[0].text;
      console.log(desc);
    });
    toppings.addEventListener(`change`, (e) => {
      const select = e.target;
      const value = select.value;
      const desc = select.selectedOptions[0].text;
      console.log(desc);
    });

  
  var newOrder = new Order(size, crust, amount, toppings);

  $("#full_order").append("<li><span class=''>" + newOrder.fullOrder() + "</span></li>");
  $("#place_order").last().click(function(){
    $("#show_order").show();
    $(".size").text(newOrder.size);
    $(".toppings").text(newOrder.toppings);
    $(".crust").text(newOrder.crust);

  })

})

});

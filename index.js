$(document).ready(function () {
  $("#order_btn").click(function () {
    $("#order_form").show();
  })
  $("#deliver").click(function () {
    $(".locate_del").show()
  });
  $("#nt_deliver").click(function () {
    $(".locate_del").hide()
  });
  $("#place_order").click(function () {
    $("#show_order").show();
  });
  $("#cancel_order").click(function () {
    $("#show_order").hide();
    $("#order_form").hide();
  });

})
const showOrder = $('#show_order');
// const showLocation = $("#delivery");

$("form#order_form").submit(function (event) {
  event.preventDefault();
  const ord = new FormData(this);
  const price = {
    small: 250,
    medium: 500,
    large: 1000,
    crispy: 220,
    stuffed: 150,
    glutten: 120,
    deep: 80,
  }
  const order = {
    size: ord.get("size"),
    crust: ord.get("crust"),
    top: ord.get("toppings"),
    amount: ord.get("amount"),
    cost: parseInt(price[ord.get("size")]) * [ord.get("amount")] + parseInt(price[ord.get("crust")]),
    place: [],
  }
  // const location = {
  //   area: ord.get("area"),
  //   street: ord.get("street"),
  //   house: ord.get("house_no"),
  //   delivery: 200,
  //   total: (order.cost) + 200,
  // };
  
  showOrder.append(`
    <ul id="full_order">
      <li class="size"> Your order is a ${order.size}</li>
      <li class="toppings">${order.crust}</li>
      <li class="crust">${order.top} pizza.</li>
      <li class="amount">amount is ${order.amount}</li>
      <li class="cost">cost is ${order.cost}</li>
      <li class=""><h3>Your delivery is to</h3></li>
      <li class="place">${location.area}</li>
      <li class="toppings">${location.street}</li>
      <li class="crust">${location.house}</li>
      <li class="amount">your total is  ${location.total}</li> 
      <li>200 is for delivery</li>
    </ul>
  </div>
  `)



})
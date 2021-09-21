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
const showLocation = $("#delivery");
const price = {
  small: 500,
  meduim: 700,
  large: 1250,
}
$("form#order_form").submit(function (event) {
  event.preventDefault();
  const ord = new FormData(this);
  const order = {
    size: ord.get("size"),
    crust: ord.get("crust"),
    top: ord.get("toppings"),
    amount: ord.get("amount"),
     cost: parseInt(price[ord.get("size")]) * ([ord.get("amount")]),
place:[],
  }
  console.log(order);
  const location = {
    area: ord.get("area"),
    street: ord.get("street"),
    house: ord.get("house_no"),
    delivery: 200,
  };
  console.log(location)
      order.place.push(location)
  showOrder.append(`
    <ul id="full_order">
      <li class="size"> Your order is a ${order.size}</li>
      <li class="toppings">${order.crust}</li>
      <li class="crust">${order.top} pizza.</li>
      <li class="amount">amount is ${order.amount}</li>
      <li class="cost">cost is ${order.cost}</li>
      <li class="place">${order.place}</li>
    </ul>
  </div>
  `)
 
  
})
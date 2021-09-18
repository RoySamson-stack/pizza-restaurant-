$(document).ready(function () {
  $("#order_btn").click(function () {
    $("#order_form").toggle();
  });
  $("#place_order").click(function () {
    $("#delivery_form").toggle();

  });
  $("#cancel_btn").click(function () {
    $("#delivery_form").hide();
  })
});

function pizza(sizes, top, crust) {
  this.sizes= [];
  this.top = [];
  this.crust = [];
}
function sizes(size, price){
  this.size = size;
  this.price = price;
}
function top(toppings, price){
this.toppings = toppings;
this.price = price
}

const size = document.querySelector(`[id="size"]`);
const crust = document.querySelector(`[id="crust"]`);
const toppings = document.querySelector(`[id="toppings"]`);
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
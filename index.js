
function Pizza(sizes, top, crust) {
  this.sizes= sizes;
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
Pizza.prototype.fullPizza = function(){
  return this.sizes + " " + this.top + " " + this.crust;
}
function Location(street, house, number){
this.street = street;
this.house = house;
this.number = number;
}

Location.prototype.fullAddress = function(){
return this.street + " " + this.house + " " + this.number + " ";
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
$(document).ready(function () {
  $("#order_btn").click(function () {
    $("#order_form").show();
  });
  // $("#place_order").click(function () {
  //   $("#delivery_form").toggle();
  // });
  // $("#cancel_btn").click(function () {
  //   $("#delivery_form").hide();
  // });
  $('').click(function() {
    $('#').append()
  })
})
function reset(){
  
}

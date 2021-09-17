
$(document).ready(function(){
  $("#order_btn").click(function(){
    $("#order_form").toggle();
  })
});

const size = document.querySelector(`[id="size"]`);
const crust = document.querySelector(`[id="crust"]`);
const toppings = document.querySelector(`[id="toppings"]`);
var amount = document.getElementById('pizza_amnt').value;


size.addEventListener(`change`, (e) => {
  // log(`e.target`, e.target);
  const select = e.target;
  const value = select.value;
  const desc = select.selectedOptions[0].text;
  console.log( desc);
});
crust.addEventListener(`change`, (e) => {
  // log(`e.target`, e.target);
  const select = e.target;
  const value = select.value;
  const desc = select.selectedOptions[0].text;
  console.log( desc);
});
toppings.addEventListener(`change`, (e) => {
  // log(`e.target`, e.target);
  const select = e.target;
  const value = select.value;
  const desc = select.selectedOptions[0].text;
  console.log( desc);
});
// blue ======================== item 1
document.getElementById("plusBtn").addEventListener("click", function () {
  updateCount(true, "countValue", "blueShirtPrice", true);
});
document.getElementById("minusBtn").addEventListener("click", function () {
  updateCount(false, "countValue", "blueShirtPrice", true);
});
// red ======================== item 2
document.getElementById("plusBtnTwo").addEventListener("click", function () {
  updateCount(true, "countValueTwo", "redShirtPrice", false);
});
document.getElementById("minusBtnTwo").addEventListener("click", function () {
  updateCount(false, "countValueTwo", "redShirtPrice", false);
});
// update countValue and itemPrice======================================== count and item update called 
function updateCount(
  increaseDecreaseId,
  countValue,
  ShirtPrice,
  itemOneItemTwo
) {
  const count = document.getElementById(countValue);
  const countNumber = parseInt(count.value);
  //   const newCount = countNumber + 1;
  let newCount = countNumber;
  if (increaseDecreaseId == true) {
    newCount = countNumber + 1;
  }
  if (increaseDecreaseId == false && newCount > 0) {
    newCount = countNumber - 1;
  }
  count.value = newCount;

  let total = newCount;

  if (itemOneItemTwo == true) {
    total = newCount * 17.99;
  } else if (itemOneItemTwo == false) {
    total = newCount * 35.99;
  }
  document.getElementById(ShirtPrice).innerText = "$" + total.toFixed(2);
  totalAmount();
}

// total amount function===========================================================item one + item two = total amount
function totalAmount() {
  const count = document.getElementById("countValue");
  const countNumber = parseInt(count.value);

  const countTwo = document.getElementById("countValueTwo");
  const countNumberTwo = parseInt(countTwo.value);

  const totalAmountPrice = countNumber * 17.99 + countNumberTwo * 35.99;
  document.getElementById("totalAmount").innerText = "$"+ totalAmountPrice.toFixed(
    2
  );
}

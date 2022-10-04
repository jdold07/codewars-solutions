// 6 kyu - New Cashier Does Not Know About Space or Shift   [ ID: 5d23d89906f92a00267bb83d  (new-cashier-does-not-know-about-space-or-shift) ]
// URL: https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
function getOrder(input) {
  const menu = ["burger", "fries", "chicken", "pizza", "sandwich", "onionrings", "milkshake", "coke"]
  return input
    .match(new RegExp(menu.join("|"), "g"))
    .sort((a, b) => menu.indexOf(a) - menu.indexOf(b))
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ")
}
// *****************************************************************************
// *****************************************************************************
function getOrder(input) {
  const MENU = {
    burger: "Burger",
    fries: "Fries",
    chicken: "Chicken",
    pizza: "Pizza",
    sandwich: "Sandwich",
    onionrings: "Onionrings",
    milkshake: "Milkshake",
    coke: "Coke"
  }
  let kitchenOrder = []
  for (const key in MENU) {
    const re = new RegExp(key, "g")
    kitchenOrder = kitchenOrder.concat(input.match(re) || [])
  }
  return kitchenOrder.map((el) => MENU[el]).join(" ")
}

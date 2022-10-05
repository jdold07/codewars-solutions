// 6 kyu - New Cashier Does Not Know About Space or Shift   [ ID: 5d23d89906f92a00267bb83d  (new-cashier-does-not-know-about-space-or-shift) ]
// URL: https://www.codewars.com/kata/5d23d89906f92a00267bb83d
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Solution", function () {
  it("Fixed Tests", function () {
    Test.assertEquals(
      getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"),
      "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"
    )
    Test.assertEquals(
      getOrder("pizzachickenfriesburgercokemilkshakefriessandwich"),
      "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke"
    )
    Test.assertEquals(
      getOrder("burgerfriesfriesfriesfriesfriespizzasandwichcokefriesburger"),
      "Burger Burger Fries Fries Fries Fries Fries Fries Pizza Sandwich Coke"
    )
  })
  it("Random Tests", function () {
    const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"]

    const generateRandomInput = (n) =>
      Array(n)
        .fill()
        .map((_) => menu[(Math.random() * menu.length) | 0])
        .join("")
        .toLowerCase()

    const solution = (input) => {
      const order = []

      menu.forEach((food) => {
        const f = food.toLowerCase()
        for (let i = 0; (i = input.indexOf(f, i)) >= 0; i += f.length) order.push(food)
      })

      return order.join(" ")
    }

    let sizes = [10, 20, 30, 50, 100, 1000, 10000]

    for (let i = 0; i < 100; i++) {
      let input = generateRandomInput(sizes[Math.floor(Math.random() * sizes.length)])
      Test.assertEquals(getOrder(input), solution(input))
    }
  })
})

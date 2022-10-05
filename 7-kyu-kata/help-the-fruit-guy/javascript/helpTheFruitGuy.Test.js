// 7 kyu - Help the Fruit Guy  [ ID: 557af4c6169ac832300000ba  (help-the-fruit-guy) ]
// URL: https://www.codewars.com/kata/557af4c6169ac832300000ba
// Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
const sol=bagOfFruits=> (bagOfFruits || []).map(fruit=> fruit.replace("rotten","").toLowerCase() )

Test.assertDeepEquals(removeRotten(["apple","banana","kiwi","melon","orange"]), ["apple","banana","kiwi","melon","orange"])
Test.assertDeepEquals(removeRotten(["rottenApple","rottenBanana","rottenApple","rottenPineapple","rottenKiwi"]), ["apple","banana","apple","pineapple","kiwi"])
Test.assertDeepEquals(removeRotten([]), [],"empty array returns empty array")
Test.assertDeepEquals(removeRotten(null), [],"null returns empty array")
Test.assertDeepEquals(removeRotten(), [])
Test.assertDeepEquals(removeRotten(["apple","rottenBanana","rottenApple","pineapple","kiwi"]), ["apple","banana","apple","pineapple","kiwi"])

const fruit = ["apple", "tomato", "mango", "kiwi","banana", "strawberry", "melon", "blueberry", 
"rottenBlueberry", "rottenMelon", "rottenApple", "rottenTomato", "rottenMango", "rottenKiwi", "rottenBanana", "rottenStrawberry"]

for (let i = 0; i < 100; i++) {
  const fruitArr = [];
  for (let j = 0; j < ~~(Math.random()*100); j++) {
    fruitArr.push(fruit[~~(Math.random() * 12)])
  }
  const answer = sol(fruitArr);
  
  Test.assertDeepEquals(removeRotten(fruitArr), answer)
}
  });
});


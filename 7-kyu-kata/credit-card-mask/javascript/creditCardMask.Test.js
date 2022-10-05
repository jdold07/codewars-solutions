// 7 kyu - Credit Card Mask  [ ID: 5412509bd436bd33920011bc  (credit-card-mask) ]
// URL: https://www.codewars.com/kata/5412509bd436bd33920011bc
// Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
// *****************************************************************************
describe("maskify", function () {
  it("should work for some examples", function () {
    Test.assertEquals(maskify("4556364607935616"), "############5616")
    Test.assertEquals(maskify("1"), "1")
    Test.assertEquals(maskify("11111"), "#1111")
  })
  it("should work for random examples", function () {
    var i,
      t,
      solution = function (cc) {
        return cc
          .split("")
          .reduce(function (p, c, i) {
            return p.push(i < cc.length - 4 ? "#" : c), p
          }, [])
          .join("")
      }
    for (i = 0; i < 100; ++i) {
      t = Test.randomToken() + Test.randomToken() + Test.randomToken() + Test.randomToken()
      t = t.substr(0, 1 + (Test.randomNumber() % t.length))
      Test.assertEquals(maskify(t), solution(t))
    }
  })
})

// [object Object] - Gauß needs help! (Sums  of a lot of numbers).  [ ID: 54df2067ecaa226eca000229  (gauss-needs-help-sums-of-a-lot-of-numbers) ]
// URL: https://www.codewars.com/kata/54df2067ecaa226eca000229
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | PERFORMANCE
// *****************************************************************************
describe("Kata", () => {
  it("Basic tests", () => {
    assert.strictEqual(f(100), 5050);
    assert.strictEqual(f(300), 45150);
    assert.strictEqual(f(50000), 1250025000);
    assert.strictEqual(f('n'), false, "n must be a number");
    assert.strictEqual(f(), false, "n must be a value");
    assert.strictEqual(f(3.14), false, "n must be an integer");
    assert.strictEqual(f(0), false, "a value of n greater than 0 is required");
    assert.strictEqual(f(-10), false, "a positive value of n is required");
  });
  it("Random tests", () => {
    const sol = n => typeof n !== 'number' || n % 1 !== 0 || n < 1 ? false : (n / 2) * (n + 1);
    for (let i = 0; i < 100; i++) {
      const n = Math.random() * 49901 + 100;
      assert.strictEqual(f(n), sol(n));
    }
  });
});

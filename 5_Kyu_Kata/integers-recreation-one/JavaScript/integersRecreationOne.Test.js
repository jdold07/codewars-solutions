// [object Object] - Integers: Recreation One  [ ID: 55aa075506463dac6600010d  (integers-recreation-one) ]
// URL: https://www.codewars.com/kata/55aa075506463dac6600010d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
const {assert,config} = require('chai')
config.truncateThreshold = 0

describe('Testing...', function(){
  it("Basic tests",function() {
    assert.deepEqual(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(42, 250), [[42, 2500], [246, 84100]])
    assert.deepEqual(listSquared(250, 500), [[287, 84100]])
    assert.deepEqual(listSquared(300, 600), [])
    assert.deepEqual(listSquared(600, 1500), [[728, 722500], [1434, 2856100]])
    assert.deepEqual(listSquared(1500, 1800), [[1673, 2856100]])
    assert.deepEqual(listSquared(1800, 2000), [[1880, 4884100]])
    assert.deepEqual(listSquared(2000, 2200), [])
    assert.deepEqual(listSquared(2200, 5000), [[4264, 24304900]])
    assert.deepEqual(listSquared(5000, 10000), [[6237, 45024100], [9799, 96079204], [9855, 113635600]])
  })

  it("Random tests",function(){
      function randint(a,b) {
          return Math.floor(Math.random() * (b - a + 1) + a);
      }

      function solAux130412(n) {
          let s = 0;
          let nf = 0;
          let res = [];
          for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
              if (n % i === 0) {
                  s += i * i;
                  nf = n / i;
                  if (nf !== i)
                      s += nf * nf;
          }
          if (Math.pow(~~Math.sqrt(s), 2) === s) {
              res.push(n);
              res.push(s);
              return res;
          } else return null;
      }

      function solution130412(m, n) {
          let res = [];
          for (let i = m; i <= n; i++) {
              let r = solAux130412(i);
              if (r !== null) {
                  res.push(r);
              }
          }
          return res;
      }

      for (let i = 0; i < 50; i++){
          let m = randint(200, 1000);
          let n = randint(1100, 8000);
          let exp = solution130412(m, n)
          assert.deepEqual(listSquared(m, n), exp)
      }
  })
})

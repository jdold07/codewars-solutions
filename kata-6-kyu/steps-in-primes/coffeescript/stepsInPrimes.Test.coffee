#+ =====================================================================================================================
#+
#+ 6 kyu - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055 ] (steps-in-primes)
#+ URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
#+ Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
#+
#+ =====================================================================================================================

{ assert } = require "vitest"
{ step } = require "./stepsInPrimes"

describe "Step", ->
  it "Basic tests", ->
    assert.deepEqual step(2, 100, 110), [101, 103]
    assert.deepEqual step(4, 100, 110), [103, 107]
    assert.deepEqual step(6, 100, 110), [101, 107]
    assert.deepEqual step(8, 300, 400), [359, 367]
    assert.deepEqual step(10, 300, 400), [307, 317]
    assert.deepEqual step(4, 30000, 100000), [30109, 30113]
    assert.deepEqual step(6, 30000, 100000), [30091, 30097]
    assert.deepEqual step(8, 30000, 100000), [30089, 30097]
    assert.deepEqual step(11, 30000, 100000), null
    assert.deepEqual step(2, 10000000, 11000000), [10000139, 10000141]
    assert.deepEqual step(52, 1300, 15000), [1321, 1373]
    assert.deepEqual step(10, 4900, 5000), [4909, 4919]
    assert.deepEqual step(30, 4900, 5000), [4903, 4933]
    assert.deepEqual step(2, 4900, 5000), [4931, 4933]
    assert.deepEqual step(2, 104000, 105000), [104087, 104089]
    assert.deepEqual step(2, 4900, 4919), null
    assert.deepEqual step(7, 4900, 4919), null
    assert.deepEqual step(4, 30115, 100000), [30133, 30137]
    assert.deepEqual step(4, 30140, 100000), [30319, 30323]
    assert.deepEqual step(4, 30000, 30325), [30109, 30113]
    return
  return

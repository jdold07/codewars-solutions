# [object Object] - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055  (steps-in-primes) ]
# URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
# Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
# ******************************************************************************
Test.describe 'Step', ->
  Test.it 'Basic tests', ->
    Test.assertSimilar step(2, 100, 110), [
      101
      103
    ]
    Test.assertSimilar step(4, 100, 110), [
      103
      107
    ]
    Test.assertSimilar step(6, 100, 110), [
      101
      107
    ]
    Test.assertSimilar step(8, 300, 400), [
      359
      367
    ]
    Test.assertSimilar step(10, 300, 400), [
      307
      317
    ]
    Test.assertSimilar step(4, 30000, 100000), [
      30109
      30113
    ]
    Test.assertSimilar step(6, 30000, 100000), [
      30091
      30097
    ]
    Test.assertSimilar step(8, 30000, 100000), [
      30089
      30097
    ]
    Test.assertSimilar step(11, 30000, 100000), null
    Test.assertSimilar step(2, 10000000, 11000000), [
      10000139
      10000141
    ]
    Test.assertSimilar step(52, 1300, 15000), [
      1321
      1373
    ]
    Test.assertSimilar step(10, 4900, 5000), [
      4909
      4919
    ]
    Test.assertSimilar step(30, 4900, 5000), [
      4903
      4933
    ]
    Test.assertSimilar step(2, 4900, 5000), [
      4931
      4933
    ]
    Test.assertSimilar step(2, 104000, 105000), [
      104087
      104089
    ]
    Test.assertSimilar step(2, 4900, 4919), null
    Test.assertSimilar step(7, 4900, 4919), null
    Test.assertSimilar step(4, 30115, 100000), [
      30133
      30137
    ]
    Test.assertSimilar step(4, 30140, 100000), [
      30319
      30323
    ]
    Test.assertSimilar step(4, 30000, 30325), [
      30109
      30113
    ]
    return
  return



// [object Object] - Steps in Primes  [ ID: 5613d06cee1e7da6d5000055  (steps-in-primes) ]
// URL: https://www.codewars.com/kata/5613d06cee1e7da6d5000055
// Category: REFERENCE  |  Tags: MATHEMATICS | NUMBER THEORY
// *****************************************************************************
const assert=require('chai').assert

describe("Step",function() {
it("Basic tests",function() {    
    assert.deepEqual(step(2,100,110), [101, 103])
    assert.deepEqual(step(4,100,110), [103, 107])
    assert.deepEqual(step(6,100,110), [101, 107])
    assert.deepEqual(step(8,300,400), [359, 367])
    assert.deepEqual(step(10,300,400), [307, 317])
    assert.deepEqual(step(2,100,103), [101, 103])

    assert.deepEqual(step(4,30000,100000), [30109, 30113])
    assert.deepEqual(step(6,30000,100000), [30091, 30097])
    assert.deepEqual(step(8,30000,100000), [30089, 30097])
    assert.deepEqual(step(11,30000,100000), null)
    assert.deepEqual(step(2,10000000,11000000), [10000139, 10000141])

    assert.deepEqual(step(52,1300,15000), [1321, 1373])
    assert.deepEqual(step(10,4900,5000), [4909, 4919])
    assert.deepEqual(step(30,4900,5000), [4903, 4933])
    assert.deepEqual(step(2,4900,5000), [4931, 4933])
    assert.deepEqual(step(2,104000,105000), [104087, 104089])

    assert.deepEqual(step(2,4900,4919), null)
    assert.deepEqual(step(7,4900,4919), null)
    assert.deepEqual(step(4, 30115,100000), [30133, 30137])
    assert.deepEqual(step(4, 30140,100000), [30319, 30323])
    assert.deepEqual(step(4, 30000,30325), [30109, 30113])
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
    //................
    function primeSol(n) {
        if (n === 2) {
            return true;
        } else if ((n < 2) || (n % 2 === 0)) {
            return false;
        } else {
            for (let i = 3; i <= Math.sqrt(n); i += 2) {
                if (n % i === 0)
                    return false;
            }
            return true;
        }
    }    

    function stepSol(g, m, n) {
        let res = [];
        let i = m;
        while (i <= n - g) {
            if (primeSol(i) && primeSol(i + g)) {
                res.push(i);
                res.push(i + g);
                return res
            }
            i++;
        }
        return null;
    }
    //................

    for (let i = 0; i < 50; i++) {
        let n = randint(1000, 1000000);
        it("Testing Step: ", function() {
            assert.deepEqual(step(2, n, n + 100000), stepSol(2, n, n + 100000));
            assert.deepEqual(step(4, n, n + 100000), stepSol(4, n, n + 100000));
            assert.deepEqual(step(6, n, n + 100000), stepSol(6, n, n + 100000));
            assert.deepEqual(step(8, n, n + 100000), stepSol(8, n, n + 100000));
            let k = randint(0, 2); 
            if (k % 2 === 0) 
                assert.deepEqual(step(2, n + 1000, n + 10000), stepSol(2, n + 1000, n + 10000)); 
            else
                assert.deepEqual(step(4, n + 1000, n + 10000), stepSol(4, n + 1000, n + 10000));
        }
    )}
})

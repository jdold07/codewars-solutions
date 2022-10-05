// 7 kyu - Growth of a Population  [ ID: 563b662a59afc2b5120000c6  (growth-of-a-population) ]
// URL: https://www.codewars.com/kata/563b662a59afc2b5120000c6
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("nbYear",function() {
it("Basic tests",function() {    
    Test.assertEquals(nbYear(1500, 5, 100, 5000), 15);
    Test.assertEquals(nbYear(1500000, 2.5, 10000, 2000000), 10);
    Test.assertEquals(nbYear(1500000, 0.25, 1000, 2000000), 94);
    Test.assertEquals(nbYear(1500000, 0.25, -1000, 2000000), 151);
    Test.assertEquals(nbYear(1500000, 0.25, 1, 2000000), 116);
    Test.assertEquals(nbYear(1500000, 0.0, 10000, 2000000), 50);
    Test.assertEquals(nbYear(1000, 2.0, 50, 1214), 4);
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
    //................
    function nbYear3443(p0, percent, aug, p) {
        let i = 1;
        let mult = 1 + percent / 100.0;
        let prev = p0;
        while (prev < p) {
            let ne = Math.floor(prev * mult + aug);
            prev = ne
            i++;
        }
        return (i - 1);
    }
    //................
    
    for (let i = 0; i < 100; i++) {
        let p0 = randint(10000, 15000000);
        let percent = randint(50, 1000) / 100.0;
        let aug = ~~(p0 / 200.0);
        let k = randint(5, 100);
        let p = p0 + k * aug;
        it("Testing nbYear ", function() {
            Test.assertEquals(nbYear(p0, percent, aug, p), nbYear3443(p0, percent, aug, p));
        }
    )}
})


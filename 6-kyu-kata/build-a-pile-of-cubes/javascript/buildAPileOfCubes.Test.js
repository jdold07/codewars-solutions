// 6 kyu - Build a pile of Cubes  [ ID: 5592e3bd57b64d00f3000047  (build-a-pile-of-cubes) ]
// URL: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
// Category: REFERENCE  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
describe("Basic tests",function() {

Test.assertEquals(findNb(4183059834009), 2022)
Test.assertEquals(findNb(24723578342962), -1)
Test.assertEquals(findNb(135440716410000), 4824)
Test.assertEquals(findNb(40539911473216), 3568)
Test.assertEquals(findNb(26825883955641), 3218)
Test.assertEquals(findNb(41364076483082), -1)

Test.assertEquals(findNb(9541025211025), 2485)
Test.assertEquals(findNb(112668204662785), -1)
Test.assertEquals(findNb(79172108332642), -1)
Test.assertEquals(findNb(1788719004901), -1)

Test.assertEquals(findNb(20864367469009), 3022)
Test.assertEquals(findNb(20864367469010), -1)

Test.assertEquals(findNb(16), -1)
Test.assertEquals(findNb(4), -1)
})

describe("Random tests",function(){
    function randint(a,b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    function solution(m) {
        var limit = ~~(Math.sqrt(2) * Math.pow(m, 0.25) + 1);
        for (var i = 0; i <= limit; i++) {
            if (i * i * (i + 1) * (i + 1) == 4 * m)
                return i;
        }
        return (-1);
    }
    for (var i = 0; i < 50; i++){
        var p = randint(1, 5500);
        var k = p * p * (p + 1) * (p + 1) / 4 + randint(0, 1);
        console.log("Number: " + +k);
        it("Testing for : " + k,
            function(){
                Test.assertEquals(findNb(k),solution(k),"It should work with random inputs")
            }
        )
        var k = randint(1, 1000);
        it("Testing for : " + k,
            function(){
                Test.assertEquals(findNb(k),solution(k),"It should work with random inputs")
            }
        )
    }
})


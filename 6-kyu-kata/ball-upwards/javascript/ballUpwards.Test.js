// 6 kyu - Ball Upwards  [ ID: 566be96bb3174e155300001b  (ball-upwards) ]
// URL: https://www.codewars.com/kata/566be96bb3174e155300001b
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("maxBall",function() {
it("Basic tests",function() {    
    Test.assertEquals(maxBall(37), 10)
    Test.assertEquals(maxBall(45), 13)
    Test.assertEquals(maxBall(99), 28)
    Test.assertEquals(maxBall(85), 24)
    Test.assertEquals(maxBall(136), 39)
    Test.assertEquals(maxBall(52), 15)
    Test.assertEquals(maxBall(16), 5)
    Test.assertEquals(maxBall(127), 36)
    Test.assertEquals(maxBall(137), 39)
    Test.assertEquals(maxBall(14), 4)
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
    //................
    function maxBallSol1209(v0) {
        let g = 9.81, mx = -1, t = 0, t1 = 0, v = v0 * 1000 / 3600.0;
        while (true) {
            let h = v*t - 0.5*g*t*t;
            if (h > mx) {
                mx = h;
                t1 = t;
            } else
                break;
            t += 0.1;
        }
        return Math.round(t1*10);
        // function could have directly returned : round(v0 / 3.5316)
    }    
    //................

    for (let i = 0; i < 100; i++) {
        let n = randint(2, 250);
        it("Testing maxBall: ", function() {
            Test.assertEquals(maxBall(n), maxBallSol1209(n));
        }
    )}
})

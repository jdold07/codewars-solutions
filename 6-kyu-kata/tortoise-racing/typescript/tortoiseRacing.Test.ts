// 6 kyu - Tortoise racing  [ ID: 55e2adece53b4cdcb900006c  (tortoise-racing) ]
// URL: https://www.codewars.com/kata/55e2adece53b4cdcb900006c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS | ALGORITHMS
// *****************************************************************************
import {race} from './solution'
import {assert} from "chai";

function testing(v1:number, v2:number, g:number, expected:number[]|null) {
  const act = race(v1, v2, g)  
  assert.deepEqual(act, expected);
}

describe("Fixed Tests", function() {
    it("Basic tests race", function() {
        testing(720, 850, 70, [0, 32, 18]);
        testing(80, 91, 37, [3, 21, 49]);
        testing(80, 100, 40, [2, 0, 0]);
        testing(720, 850, 37, [0, 17, 4]);
        testing(720, 850, 370, [2, 50, 46]);
        testing(120, 850, 37, [0, 3, 2]);
        testing(820, 850, 550, [18, 20, 0]);
        testing(820, 81, 550, null);
    });
});

function randint(a:number, b:number) { 
    return Math.floor(Math.random() * (b - a + 1) + a); 
}
//...............
function raceTPK(v1:number, v2:number, g:number){
    var d = v2 - v1;
    if (d <= 0) return null;
    var h = ~~(g / d);
    var r = g % d;
    var mn = ~~(r * 60 / d);
    var s = ~~((r * 60 % d) * 60 / d);
    return [h, mn, s]
}
//...............

describe("Random Tests", function() {
    it("Random tests", function() {
        for (var i = 0; i < 100; i++) {
            var v1 = randint(50, 750);
            var v2 = randint(v1 + 20, 850);
            var g = randint(60, 150);
            var u = raceTPK(v1, v2, g);
            //console.log(u);
            testing(v1, v2, g, u);
        }
    });
});

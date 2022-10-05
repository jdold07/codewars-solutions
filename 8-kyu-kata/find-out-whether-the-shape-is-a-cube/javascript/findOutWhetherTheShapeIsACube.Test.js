// 8 kyu - Find out whether the shape is a cube  [ ID: 58d248c7012397a81800005c  (find-out-whether-the-shape-is-a-cube) ]
// URL: https://www.codewars.com/kata/58d248c7012397a81800005c
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Sample tests", () =>{
  Test.assertEquals(cubeChecker(12, 2), false);
  Test.assertEquals(cubeChecker(8, 3), false);
  Test.assertEquals(cubeChecker(8, 2), true);
  Test.assertEquals(cubeChecker(-8,-2), false);
  Test.assertEquals(cubeChecker(0, 0), false);
  Test.assertEquals(cubeChecker(27, 3), true);
  Test.assertEquals(cubeChecker(1, 5),  false);
  Test.assertEquals(cubeChecker(125, 5), true);
  Test.assertEquals(cubeChecker(125,-5), false);
  Test.assertEquals(cubeChecker(0, 12), false);
  Test.assertEquals(cubeChecker(12, -1), false);
  Test.assertEquals(cubeChecker(1, 1), true);
});

describe("Random tests", () =>{
  let rnd = (a,b) => a+~~(Math.random()*(b-a)), ok = _ => rnd(1,100)>50;
  
  for(let i = 0; i < 50; i++){
    let side = rnd(1,100), exp = ok(),
        volume = exp ? side*side*side : side*side*( side + ( ok() ? rnd(1,side) : ok() ? rnd(-side,-1) : -(side+2) ) );
    if( !exp && rnd(1,100) > 80 ) [side,volume] = [-Math.abs(side), -Math.abs(side*side*side)]
    it( `Should say this cuboid (volume=${volume}, side=${side}) ${exp?"IS":"is NOT"} a cube.`, () =>{
      Test.assertEquals(cubeChecker(volume, side), exp);
    } );
  }
  
});

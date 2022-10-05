// 7 kyu - Fun with ES6 Classes #3 - Cuboids, Cubes and Getters  [ ID: 56fbdda707cff41b68000de2  (fun-with-es6-classes-number-3-cuboids-cubes-and-getters) ]
// URL: https://www.codewars.com/kata/56fbdda707cff41b68000de2
// Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
describe("class Cuboid", () => {
  it("should initialize properly and have working getters", () => {
    var cuboid = new Cuboid(1, 2, 3);
    Test.assertEquals(cuboid.length, 1);
    Test.assertEquals(cuboid.width, 2);
    Test.assertEquals(cuboid.height, 3);
    Test.assertEquals(cuboid.volume, 6);
    Test.assertEquals(cuboid.surfaceArea, 22);
    cuboid.length = 4;
    Test.assertEquals(cuboid.volume, 24);
    Test.assertEquals(cuboid.surfaceArea, 52);
    cuboid.width = 5;
    Test.assertEquals(cuboid.volume, 60);
    Test.assertEquals(cuboid.surfaceArea, 94);
    cuboid.height = 6;
    Test.assertEquals(cuboid.volume, 120);
    Test.assertEquals(cuboid.surfaceArea, 148);
    [cuboid.length, cuboid.width, cuboid.height] = [7, 8, 9];
    Test.assertEquals(cuboid.volume, 504);
    Test.assertEquals(cuboid.surfaceArea, 382);
  });
  it("should work for random tests", () => {
    var length, width, height, cuboid;
    for (let i = 0; i < 6; i++) {
      length = Test.randomNumber();
      width = Test.randomNumber();
      height = Test.randomNumber();
      cuboid = new Cuboid(length, width, height);
      Test.assertEquals(cuboid.length, length);
      Test.assertEquals(cuboid.width, width);
      Test.assertEquals(cuboid.height, height);
      Test.assertEquals(cuboid.volume, length * width * height);
      Test.assertEquals(cuboid.surfaceArea, 2 * (length * width + width * height + height * length));
      cuboid.length = Test.randomNumber();
      cuboid.width = Test.randomNumber();
      cuboid.height = Test.randomNumber();
      Test.assertEquals(cuboid.volume, cuboid.length * cuboid.width * cuboid.height);
      Test.assertEquals(cuboid.surfaceArea, 2 * (cuboid.length * cuboid.width + cuboid.width * cuboid.height + cuboid.height * cuboid.length));
    }
  });
});

describe("class Cube extends Cuboid", () => {
  it("should initialize properly and have the same getters as the parent class", () => {
    var cube = new Cube(1);
    Test.assertEquals(cube.length, 1);
    Test.assertEquals(cube.width, 1);
    Test.assertEquals(cube.height, 1);
    Test.assertEquals(cube.volume, 1);
    Test.assertEquals(cube.surfaceArea, 6);
    cube.length = cube.width = cube.height = 2;
    Test.assertEquals(cube.volume, 8);
    Test.assertEquals(cube.surfaceArea, 24);
    cube.length = cube.width = cube.height = 3;
    Test.assertEquals(cube.volume, 27);
    Test.assertEquals(cube.surfaceArea, 54);
    cube.length = cube.width = cube.height = 5;
    Test.assertEquals(cube.volume, 125);
    Test.assertEquals(cube.surfaceArea, 150);
    cube.length = cube.width = cube.height = 10;
    Test.assertEquals(cube.volume, 1000);
    Test.assertEquals(cube.surfaceArea, 600);
  });
  it("should work for random tests", () => {
    var length, cube;
    for (let i = 0; i < 6; i++) {
      length = Test.randomNumber();
      cube = new Cube(length);
      Test.assertEquals(cube.length, length);
      Test.assertEquals(cube.width, length);
      Test.assertEquals(cube.height, length);
      Test.assertEquals(cube.volume, length ** 3);
      Test.assertEquals(cube.surfaceArea, 6 * length ** 2);
      cube.length = cube.width = cube.height = Test.randomNumber();
      Test.assertEquals(cube.volume, cube.length ** 3);
      Test.assertEquals(cube.surfaceArea, 6 * cube.length ** 2);
    }
  });
});

// [object Object] - Playing with cubes II  [ ID: 55c0ac142326fdf18d0000af  (playing-with-cubes-ii) ]
// URL: https://www.codewars.com/kata/55c0ac142326fdf18d0000af
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const expect = require('chai').expect

describe('Cube', () => {
  
  it('constructs a cube with side 0 if no s argument is passed', () => {
    let cube = new Cube();
    expect(cube.getSide()).to.equal(0);
    cube.setSide(42);
    expect(cube.getSide()).to.equal(42);
  });

  it('constructs a cube with side s if positive s is passed', () => {
    let cube = new Cube(12);
    expect(cube.getSide()).to.equal(12);
    cube.setSide(42);
    expect(cube.getSide()).to.equal(42);
  });

  it('constructs a cube with side |s| if negative s is passed', () => {
    let cube = new Cube(-12);
    expect(cube.getSide()).to.equal(12);
    cube.setSide(-42);
    expect(cube.getSide()).to.equal(42);
  });

});

// 5 kyu - Vector class  [ ID: 526dad7f8c0eb5c4640000a4  (vector-class) ]
// URL: https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4
// Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS | LINEAR ALGEBRA
// *****************************************************************************
var a = new Vector([1,2,3]);
var b = new Vector([3,4,5]);
var c = new Vector([5,6,7,8]);

describe('Testing arithmetic', function () {
  it('Addition', function () {
    Test.expect(a.add(b).equals(new Vector([4,6,8])));
    Test.expectError("Adding vectors with different lengths should throw an error.", function () {c.add(a); a.add(c)});
  });
  it('Subtraction', function () {
    Test.expect(a.subtract(b).equals(new Vector([-2,-2,-2])));
    Test.expectError("Subtracting vectors with different lengths should throw an error.", function () {c.subtract(a); a.subtract(c)});
  });
  it('Dot Product', function () {
    Test.assertEquals(a.dot(b), 26);
    Test.assertEquals(b.dot(a), a.dot(b));
    Test.expectError("Dotting vectors with different lengths should throw an error.", function () {c.dot(a); a.dot(c)});
  });
  it('Norms', function () {
    Test.expect(a.norm() - Math.sqrt(14) < 0.1);
    Test.expect(b.norm() - Math.sqrt(50) < 0.1);
    Test.expect(c.norm() - Math.sqrt(174) < 0.1);
  });
});

describe("Auxiliary function", function () {
  it("Equality", function () {
    Test.expect(a.equals(new Vector([1,2,3])));
    Test.expect(b.equals(new Vector([3,4,5])));
    Test.expect(!a.equals(b));
    Test.expect(!b.equals(c));
    Test.expect(!a.equals(c));
  });
  it("Strings", function () {
    Test.assertEquals(a.toString(), '(1,2,3)');
    Test.assertEquals(b.toString(), '(3,4,5)');
    Test.assertEquals(c.toString(), '(5,6,7,8)');
  });
});

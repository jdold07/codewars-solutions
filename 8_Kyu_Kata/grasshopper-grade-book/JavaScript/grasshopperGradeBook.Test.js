// [object Object] - Grasshopper - Grade book  [ ID: 55cbd4ba903825f7970000f5  (grasshopper-grade-book) ]
// URL: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe('grade book', function () {
  it('should return an A', function () {
    Test.assertEquals(getGrade(95,90,93), 'A')
    Test.assertEquals(getGrade(100,85,96), 'A')
    Test.assertEquals(getGrade(92,93,94), 'A')
    Test.assertEquals(getGrade(100,100,100), 'A')
  })
  it('should return a B', function () {
    Test.assertEquals(getGrade(70,70,100), 'B')
    Test.assertEquals(getGrade(82,85,87), 'B')
    Test.assertEquals(getGrade(84,79,85), 'B')
  })
  it('should return a C', function () {
    Test.assertEquals(getGrade(70,70,70), 'C')
    Test.assertEquals(getGrade(75,70,79), 'C')
    Test.assertEquals(getGrade(60,82,76), 'C')
  })
  it('should return a D', function () {
    Test.assertEquals(getGrade(65,70,59), 'D')
    Test.assertEquals(getGrade(66,62,68), 'D')
    Test.assertEquals(getGrade(58,62,70), 'D')
  })
  it('should return an F', function () {
    Test.assertEquals(getGrade(44,55,52), 'F')
    Test.assertEquals(getGrade(48,55,52), 'F')
    Test.assertEquals(getGrade(58,59,60), 'F')
    Test.assertEquals(getGrade(0,0,0), 'F')
  })
  it('should work for random numbers', function () {
    for (let i = 0; i < 100; i++) {
      let rand1 = Test.randomNumber();
      let rand2 = Test.randomNumber();
      let rand3 = Test.randomNumber();
      Test.assertEquals(getGrade(rand1, rand2, rand3), solution(rand1, rand2, rand3))
    }
  })
  
})

function solution (s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3;
  if (average >= 90)
    return 'A'
  else if (average >= 80)
    return 'B'
  else if (average >= 70)
    return 'C'
  else if (average >= 60)
    return 'D'
  else return 'F'
}

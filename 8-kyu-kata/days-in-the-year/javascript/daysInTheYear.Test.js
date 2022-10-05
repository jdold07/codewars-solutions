// 8 kyu - Days in the year  [ ID: 56d6c333c9ae3fc32800070f  (days-in-the-year) ]
// URL: https://www.codewars.com/kata/56d6c333c9ae3fc32800070f
// Category: REFERENCE  |  Tags: DATE TIME | FUNDAMENTALS
// *****************************************************************************
describe("Sample Tests", function()
  {

    Test.assertEquals(yearDays(0), '0 has 366 days');
    Test.assertEquals(yearDays(-64), '-64 has 366 days');
    Test.assertEquals(yearDays(2016), '2016 has 366 days');
    Test.assertEquals(yearDays(1974), '1974 has 365 days');
    Test.assertEquals(yearDays(-10), '-10 has 365 days');
    Test.assertEquals(yearDays(666), '666 has 365 days');
    Test.assertEquals(yearDays(1857), '1857 has 365 days');

  });
  
  describe("Random Tests", function()
  {
      function testSolution(year)
      {
          if((0==year%4)
            && (0!=year%100)
              ||(0==year%400))
          {
            return (year+" has 366 days");
          }
          else
          {
            return (year+" has 365 days");
          }
      }
      
      for(let i =0; i< 25; i++)
      {
        let y = Math.floor(Math.random()*4001)-2000;
        if (Math.random()>0.5) y=~~(y/100)*100;
        Test.assertEquals(yearDays(y), testSolution(y), 'Should work for random years');
      }
      
  });


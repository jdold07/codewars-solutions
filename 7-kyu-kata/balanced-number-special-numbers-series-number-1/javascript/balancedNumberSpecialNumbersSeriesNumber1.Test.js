// 7 kyu - Balanced Number (Special Numbers Series #1 )   [ ID: 5a4e3782880385ba68000018  (balanced-number-special-numbers-series-number-1) ]
// URL: https://www.codewars.com/kata/5a4e3782880385ba68000018
// Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
// *****************************************************************************
describe("Check less than thousand", function()
{
    it("Check balanced number", function()
    {
        Test.assertEquals(balancedNum(7), "Balanced")
        Test.assertEquals(balancedNum(959), "Balanced")
        Test.assertEquals(balancedNum(13), "Balanced")
        Test.assertEquals(balancedNum(432), "Not Balanced")
        Test.assertEquals(balancedNum(424), "Balanced")
    })
    it("Check Larger number", function()
    {
        Test.assertEquals(balancedNum(1024), "Not Balanced")
        Test.assertEquals(balancedNum(66545), "Not Balanced")
        Test.assertEquals(balancedNum(295591), "Not Balanced")
        Test.assertEquals(balancedNum(1230987), "Not Balanced")
        Test.assertEquals(balancedNum(56239814), "Balanced")
    })
    it("Random tests", function()
    {
        var solution = number =>
        {
            var s = (number+"").split("").map(c=>c.charCodeAt(0)-"0".charCodeAt(0))
            var len = ~~(s.length / 2) - (s.length % 2 ? 0 : 1)
            return s.slice(0,len).reduce((v,t)=>t+v,0) == s.slice(s.length-len).reduce((v,t)=>t+v,0) ? "Balanced" : "Not Balanced"
        }
        for (let i = 0; i < 100; i++)
        {
            n = ~~(Math.random() * 99999999 + 1)
            Test.assertEquals(balancedNum(n), solution(n))
        }
    })
})

// 8 kyu - Grasshopper - Messi Goals  [ ID: 55ca77fa094a2af31f00002a  (grasshopper-messi-goals) ]
// URL: https://www.codewars.com/kata/55ca77fa094a2af31f00002a
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("total goals", function(){
    it ('should have the correct value', function () {
      Test.assertEquals(laLigaGoals, 43)
      Test.assertEquals(championsLeagueGoals, 10)
      Test.assertEquals(copaDelReyGoals, 5)
    })
    it ("should equal the total", function () {
      Test.assertEquals(totalGoals, 58)
    })
})

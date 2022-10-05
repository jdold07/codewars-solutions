// [object Object] - Get Planet Name By ID  [ ID: 515e188a311df01cba000003  (get-planet-name-by-id) ]
// URL: https://www.codewars.com/kata/515e188a311df01cba000003
// Category: BUG_FIXES  |  Tags: DEBUGGING
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(getPlanetName(2), 'Venus');
Test.assertEquals(getPlanetName(5), 'Jupiter');
Test.assertEquals(getPlanetName(3), 'Earth');
Test.assertEquals(getPlanetName(4), 'Mars');
Test.assertEquals(getPlanetName(8), 'Neptune');
Test.assertEquals(getPlanetName(1), 'Mercury');
  });
});


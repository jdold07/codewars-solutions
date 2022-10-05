// [object Object] - Fuel Calculator   [ ID: 57b58827d2a31c57720012e8  (fuel-calculator) ]
// URL: https://www.codewars.com/kata/57b58827d2a31c57720012e8
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(fuelPrice(5, 1.23), 5.65);
Test.assertEquals(fuelPrice(8, 2.5), 18.40);
Test.assertEquals(fuelPrice(5, 5.6), 27.50);

function roundPlus(x, n) { //x - number, n - amount of decimal places

  if(isNaN(x) || isNaN(n)) return false;

  let m = Math.pow(10,n);

  return Math.round(x*m)/m;

}

function tests(litres, pricePerLiter) {
  
  let discountPerLiter = Math.floor(litres / 2);
  
  let totalDiscount = 0.05 * discountPerLiter;
  
  if (totalDiscount > 0.25) {totalDiscount = 0.25};
  
  let priceAfterDiscount = pricePerLiter - totalDiscount;
  
  let totalPricePerLitre = litres * priceAfterDiscount;
  
  return roundPlus(totalPricePerLitre, 2);
}

function randomFloatBetween(minValue, maxValue, precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
}

for (let i = 0; i < 97; i++) {
  amount = Math.floor((Math.random() * 200) + 1);
  price = randomFloatBetween(0.5, 35.9, 2);
  Test.assertEquals(fuelPrice(amount, price), tests(amount, price));
}
  });
});


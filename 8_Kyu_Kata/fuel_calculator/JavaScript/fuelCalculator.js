// 8 kyu - Fuel Calculator   [ ID: 57b58827d2a31c57720012e8  (fuel-calculator) ]
// URL: https://www.codewars.com/kata/57b58827d2a31c57720012e8
// Category: undefined  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************
const fuelPrice = (litres, pricePerLitre) => 
    Math.round(litres * (pricePerLitre - Math.min(0.25, (Math.floor(litres / 2) * 0.05))) * 100) / 100

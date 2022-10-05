// 8 kyu - Calculate Price Excluding VAT  [ ID: 5890d8bc9f0f422cf200006b  (calculate-price-excluding-vat) ]
// URL: https://www.codewars.com/kata/5890d8bc9f0f422cf200006b
// Category: REFERENCE  |  Tags: MATHEMATICS | FUNDAMENTALS
// *****************************************************************************

describe('Fixed Tests', () => {
  it("Test", () => {
    Test.assertSimilar(excludingVatPrice(230), 200.00);
    Test.assertSimilar(excludingVatPrice(123), 106.96);
    Test.assertSimilar(excludingVatPrice(777), 675.65);
    Test.assertSimilar(excludingVatPrice(460), 400.00);
    Test.assertSimilar(excludingVatPrice(null), -1);
    Test.assertSimilar(excludingVatPrice(123), 106.96);
    Test.assertSimilar(excludingVatPrice(124), 107.83);
    Test.assertSimilar(excludingVatPrice(125), 108.7);
    Test.assertSimilar(excludingVatPrice(126), 109.57);
    Test.assertSimilar(excludingVatPrice(127), 110.43);
    Test.assertSimilar(excludingVatPrice(128), 111.3);
    Test.assertSimilar(excludingVatPrice(129), 112.17);
    Test.assertSimilar(excludingVatPrice(130), 113.04);
    Test.assertSimilar(excludingVatPrice(131), 113.91);
    Test.assertSimilar(excludingVatPrice(132), 114.78);
    Test.assertSimilar(excludingVatPrice(133), 115.65);
    Test.assertSimilar(excludingVatPrice(134), 116.52);
    Test.assertSimilar(excludingVatPrice(135), 117.39);
    Test.assertSimilar(excludingVatPrice(136), 118.26);
    Test.assertSimilar(excludingVatPrice(137), 119.13);
    Test.assertSimilar(excludingVatPrice(138), 120);
    Test.assertSimilar(excludingVatPrice(139), 120.87);
    Test.assertSimilar(excludingVatPrice(140), 121.74);
    Test.assertSimilar(excludingVatPrice(141), 122.61);
    Test.assertSimilar(excludingVatPrice(142), 123.48);
    Test.assertSimilar(excludingVatPrice(143), 124.35);
    Test.assertSimilar(excludingVatPrice(144), 125.22);
    Test.assertSimilar(excludingVatPrice(145), 126.09);
    Test.assertSimilar(excludingVatPrice(146), 126.96);
    Test.assertSimilar(excludingVatPrice(147), 127.83);
    Test.assertSimilar(excludingVatPrice(148), 128.7);
    Test.assertSimilar(excludingVatPrice(149), 129.57);
    Test.assertSimilar(excludingVatPrice(150), 130.43);
    Test.assertSimilar(excludingVatPrice(151), 131.3);
    Test.assertSimilar(excludingVatPrice(152), 132.17);
    Test.assertSimilar(excludingVatPrice(153), 133.04);
    Test.assertSimilar(excludingVatPrice(154), 133.91);
    Test.assertSimilar(excludingVatPrice(155), 134.78);
    Test.assertSimilar(excludingVatPrice(156), 135.65);
    Test.assertSimilar(excludingVatPrice(157), 136.52);
    Test.assertSimilar(excludingVatPrice(158), 137.39);
    Test.assertSimilar(excludingVatPrice(159), 138.26);
    Test.assertSimilar(excludingVatPrice(160), 139.13);
    Test.assertSimilar(excludingVatPrice(161), 140);
    Test.assertSimilar(excludingVatPrice(162), 140.87);
    Test.assertSimilar(excludingVatPrice(163), 141.74);
    Test.assertSimilar(excludingVatPrice(164), 142.61);
    Test.assertSimilar(excludingVatPrice(165), 143.48);
    Test.assertSimilar(excludingVatPrice(166), 144.35);
    Test.assertSimilar(excludingVatPrice(167), 145.22);
    Test.assertSimilar(excludingVatPrice(168), 146.09);
    Test.assertSimilar(excludingVatPrice(169), 146.96);
    Test.assertSimilar(excludingVatPrice(170), 147.83);
    Test.assertSimilar(excludingVatPrice(171), 148.7);
    Test.assertSimilar(excludingVatPrice(172), 149.57);
    Test.assertSimilar(excludingVatPrice(173), 150.43);
    Test.assertSimilar(excludingVatPrice(174), 151.3);
    Test.assertSimilar(excludingVatPrice(175), 152.17);
    Test.assertSimilar(excludingVatPrice(176), 153.04);
    Test.assertSimilar(excludingVatPrice(177), 153.91);
    Test.assertSimilar(excludingVatPrice(178), 154.78);
    Test.assertSimilar(excludingVatPrice(179), 155.65);
    Test.assertSimilar(excludingVatPrice(180), 156.52);
    Test.assertSimilar(excludingVatPrice(181), 157.39);
    Test.assertSimilar(excludingVatPrice(182), 158.26);
    Test.assertSimilar(excludingVatPrice(183), 159.13);
    Test.assertSimilar(excludingVatPrice(184), 160);
    Test.assertSimilar(excludingVatPrice(185), 160.87);
    Test.assertSimilar(excludingVatPrice(186), 161.74);
    Test.assertSimilar(excludingVatPrice(187), 162.61);
    Test.assertSimilar(excludingVatPrice(188), 163.48);
    Test.assertSimilar(excludingVatPrice(189), 164.35);
    Test.assertSimilar(excludingVatPrice(190), 165.22);
    Test.assertSimilar(excludingVatPrice(191), 166.09);
    Test.assertSimilar(excludingVatPrice(192), 166.96);
    Test.assertSimilar(excludingVatPrice(193), 167.83);
    Test.assertSimilar(excludingVatPrice(194), 168.7);
    Test.assertSimilar(excludingVatPrice(195), 169.57);
    Test.assertSimilar(excludingVatPrice(196), 170.43);
    Test.assertSimilar(excludingVatPrice(197), 171.3);
    Test.assertSimilar(excludingVatPrice(198), 172.17);
    Test.assertSimilar(excludingVatPrice(199), 173.04);
    Test.assertSimilar(excludingVatPrice(200), 173.91);
    Test.assertSimilar(excludingVatPrice(201), 174.78);
    Test.assertSimilar(excludingVatPrice(202), 175.65);
    Test.assertSimilar(excludingVatPrice(203), 176.52);
    Test.assertSimilar(excludingVatPrice(204), 177.39);
    Test.assertSimilar(excludingVatPrice(205), 178.26);
    Test.assertSimilar(excludingVatPrice(206), 179.13);
    Test.assertSimilar(excludingVatPrice(207), 180);
    Test.assertSimilar(excludingVatPrice(208), 180.87);
    Test.assertSimilar(excludingVatPrice(209), 181.74);
    Test.assertSimilar(excludingVatPrice(210), 182.61);
    Test.assertSimilar(excludingVatPrice(211), 183.48);
    Test.assertSimilar(excludingVatPrice(212), 184.35);
    Test.assertSimilar(excludingVatPrice(213), 185.22);
    Test.assertSimilar(excludingVatPrice(214), 186.09);
    Test.assertSimilar(excludingVatPrice(215), 186.96);
    Test.assertSimilar(excludingVatPrice(216), 187.83);
    Test.assertSimilar(excludingVatPrice(217), 188.7);
    Test.assertSimilar(excludingVatPrice(218), 189.57);
    Test.assertSimilar(excludingVatPrice(219), 190.43);
    Test.assertSimilar(excludingVatPrice(220), 191.3);
    Test.assertSimilar(excludingVatPrice(221), 192.17);
    Test.assertSimilar(excludingVatPrice(222), 193.04);
    Test.assertSimilar(excludingVatPrice(223), 193.91);
    Test.assertSimilar(excludingVatPrice(224), 194.78);
    Test.assertSimilar(excludingVatPrice(225), 195.65);
    Test.assertSimilar(excludingVatPrice(226), 196.52);
    Test.assertSimilar(excludingVatPrice(227), 197.39);
    Test.assertSimilar(excludingVatPrice(228), 198.26);
    Test.assertSimilar(excludingVatPrice(229), 199.13);
    Test.assertSimilar(excludingVatPrice(230), 200);

    
  });
  it("Edge Case", () => {
    Test.assertSimilar(excludingVatPrice(0), 0);
  });
});


describe('Random Tests', () => {
  it("Test", () => {
function solve(price){
  return (price !=null) ? parseFloat((price/1.15).toFixed(2)):-1;
}
    for (let f = 100;f--;)
    {
      let target = Math.random() < .2 ? null : (0 | 100000 * Math.random());
      Test.assertSimilar(excludingVatPrice(target), solve(target));
    }
  });
});


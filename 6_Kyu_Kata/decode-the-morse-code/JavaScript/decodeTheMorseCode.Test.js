// [object Object] - Decode the Morse code   [ ID: 54b724efac3d5402db00065e  (decode-the-morse-code) ]
// URL: https://www.codewars.com/kata/54b724efac3d5402db00065e
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
function testAndPrint(got, expected) {
    if (got === expected) {
        Test.expect(true);
    }
    else {
        Test.expect(false, "Got '" + got + "', expected '" + expected + "'");
    }
}

describe("Example from description", function(){
  testAndPrint(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
});

describe("Basic Morse decoding", function(){
  testAndPrint(decodeMorse('.-'), 'A')
  testAndPrint(decodeMorse('.'), 'E')
  testAndPrint(decodeMorse('..'), 'I')
  testAndPrint(decodeMorse('. .'), 'EE')
  testAndPrint(decodeMorse('.   .'), 'E E')
  testAndPrint(decodeMorse('...---...'), 'SOS')
  testAndPrint(decodeMorse('... --- ...'), 'SOS')
  testAndPrint(decodeMorse('...   ---   ...'), 'S O S')
});

describe("More complex tests", function(){
  testAndPrint(decodeMorse(' . '), 'E')
  testAndPrint(decodeMorse('   .   . '), 'E E')
  testAndPrint(decodeMorse('      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  '), 'SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
});

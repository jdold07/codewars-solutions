// 6 kyu - Decipher this!   [ ID: 581e014b55f2c52bb00000f8  (decipher-this) ]
// URL: https://www.codewars.com/kata/581e014b55f2c52bb00000f8
// Category: REFERENCE  |  Tags: STRINGS | ARRAYS | CIPHERS | FUNDAMENTALS
// *****************************************************************************
Test.assertEquals(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'), 'A wise old owl lived in an oak');

Test.assertEquals(decipherThis('84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'), 'The more he saw the less he spoke'); 

Test.assertEquals(decipherThis('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'), 'The less he spoke the more he heard');

Test.assertEquals(decipherThis('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'), 'Why can we not all be like that wise old bird'); 

Test.assertEquals(decipherThis('84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'), 'Thank you Piotr for all your help'); 

describe("Random Tests", function() { 
function makestring() {
   let array = [];
   let possible = "abcdefghijklmnopqrstuvwxyz";
   for( let i=0; i < 6; i++ ) {
       array.push(possible[(Math.floor(Math.random() * possible.length))]);
   }
   return array.join("");
}

function makeASCIIfirst() {
   let array = [];
   let possible = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90];
   for( let i=0; i < 1; i++ ) {
       array.push(possible[(Math.floor(Math.random() * possible.length))]);
   }
   return array.join("");
}

function makeASCIIsecond() {
   let array = [];
   let possible = [97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
   for( let i=0; i < 1; i++ ) {
       array.push(possible[(Math.floor(Math.random() * possible.length))]);
   }
   return array.join("");
}

function firstWord() {
    return makeASCIIfirst() + makestring(); 
    }

function restofWord() {
    return makeASCIIsecond() + makestring(); 
}

function randomString() {
    return firstWord() + " " + restofWord() + " " + restofWord() + " " + restofWord() + " " + restofWord();
}


// =============================================================================
// Working solution that will be compared against user's submission
	function decipherThisSolution(str) {
  // Paste your working solution here
  return str.split (' ').map(decipherWordSolution).join(' ');
}

function decipherWordSolution(word) {

    let match = word.match ( /(\d+)|([^0-9])+/g ); 

    let character = String.fromCharCode(Number(match[0]));

    if (!match[1]) {
        return character;
    } 

    if (match[1].length === 1) {
        return character + match[1];
    }

    return character + match[1].slice(-1) + match[1].slice(1,-1) + match[1].slice(0,1);
}
// ===============================================================================


// Run 100 random tests:
for (let i = 0; i < 100; i++) {
  // Generate random cipher
  let randomCipher = randomString();

  // Compare user's solution with yours
  Test.assertEquals(decipherThis(randomCipher), decipherThisSolution(randomCipher)); 
}

});

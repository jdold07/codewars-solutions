// [object Object] - Build a square  [ ID: 59a96d71dbe3b06c0200009c  (build-a-square) ]
// URL: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ASCII ART
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
function checkSolution(num) {
    let string = '';

    for (let i = 0; i < num * num; i++) {
        if (i % num === 0 && i !== 0) {
            string += '\n';
        }
        string += '+';
    }

    return string;
}

for(let i = 0; i < 25; i ++){
  let num = Math.floor(Math.random() * 50) + 0;
  Test.assertEquals( generateShape(num) , checkSolution(num) );
}



  });
});
//

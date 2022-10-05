// 7 kyu - Ones and Zeros  [ ID: 578553c3a1b8d5c40300037c  (ones-and-zeros) ]
// URL: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
// *****************************************************************************
describe("One's and Zero's", () => {
  const rand = () => Math.round(Math.random());
  const solution = arr => parseInt(arr.join(''), 2);

  it("Works with random tests", () => {
    let tests = [];

    for(let i = 0; i < 50; i++) {
      let temp = [];
      
      for(let i = 0; i < Math.floor(Math.random() * 5) + 4; i ++) {
        temp.push(rand());
      }
      
      tests.push(temp);
    }
    
    tests.map(test => {
      console.log("Tests " + test + " ==> " + solution(test));
      Test.assertEquals(binaryArrayToNumber([...test]), solution(test));
    });
  }); 

});

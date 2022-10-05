// 7 kyu - Palindrome chain length  [ ID: 525f039017c7cd0e1a000a26  (palindrome-chain-length) ]
// URL: https://www.codewars.com/kata/525f039017c7cd0e1a000a26
// Category: ALGORITHMS  |  Tags: ALGORITHMS
// *****************************************************************************
const chai = require('chai');
const assert = chai.assert;

describe('Fixed tests', () => {
  it('Palindromes', () => {
    assert.equal(palindromeChainLength(1),  0);
    assert.equal(palindromeChainLength(88), 0);    
  });  
  it('Not palindromes', () => {
    assert.equal(palindromeChainLength(87), 4);
    assert.equal(palindromeChainLength(89), 24);
    assert.equal(palindromeChainLength(10), 1);
  });  
});

describe('Random tests', () => {
  
  //these numbers do not converge to palindrome smaller than MAX_SAFE_INT,
  //so they are not a valid input for this kata
  const lyrchels = new Set(
    [196, 295, 394, 493, 592, 689, 691, 788, 790, 879, 887, 978, 986, 
    1495, 1497, 1585, 1587, 1675, 1677, 1765, 1767, 1855, 1857, 1945, 1947, 1997, 
    2494, 2496, 2584, 2586, 2674, 2676, 2764, 2766, 2854, 2856, 2944, 2946, 2996, 
    3493, 3495, 3583, 3585, 3673, 3675, 3763, 3765, 3853, 3855, 3943, 3945, 3995, 
    4079, 4169, 4259, 4349, 4439, 4492, 4494, 4529, 4582, 4584, 4619, 4672, 4674, 
    4709, 4762, 4764, 4799, 4852, 4854, 4889, 4942, 4944, 4979, 
    5078, 5168, 5258, 5348, 5438, 5491, 5493, 5528, 5581, 5583, 5618, 5671, 5673, 
    5708, 5761, 5763, 5798, 5851, 5853, 5888, 5941, 5943, 5978, 5993, 
    6077, 6167, 6257, 6347, 6437, 6490, 6492, 6527, 6580, 6582, 6617, 6670, 6672, 
    6707, 6760, 6762, 6797, 6850, 6852, 6887, 6940, 6942, 6977, 6992, 
    7059, 7076, 7149, 7166, 7239, 7256, 7329, 7346, 7419, 7436, 7491, 7509, 7526, 
    7581, 7599, 7616, 7671, 7689, 7706, 7761, 7779, 7796, 7851, 7869, 7886, 7941, 
    7959, 7976, 7991, 
    8058, 8075, 8079, 8089, 8148, 8165, 8169, 8179, 8238, 8255, 8259, 8269, 8328, 
    8345, 8349, 8359, 8418, 8435, 8439, 8449, 8490, 8508, 8525, 8529, 8539, 8580, 
    8598, 8615, 8619, 8629, 8670, 8688, 8705, 8709, 8719, 8760, 8795, 8799, 8809, 
    8850, 8868, 8885, 8889, 8899, 8940, 8958, 8975, 8979, 8989, 8990, 
    9057, 9074, 9078, 9088, 9147, 9164, 9168, 9178, 9237, 9254, 9258, 9268, 9327, 
    9344, 9348, 9358, 9417, 9434, 9438, 9448, 9507, 9524, 9528, 9538, 9597, 9614, 
    9618, 9628, 9687, 9704, 9708, 9718, 9777, 9794, 9798, 9808, 9867, 9884, 9888, 
    9898, 9957, 9974, 9978, 9988]
  );
  
  const isPalindrome = n => {
    n = n.split('');
    if(n.length < 2) return true;
    return n.pop() == n.shift() && isPalindrome(n.join(''));
  };
  
  const reverse = n => {
    return +(''+n).split('').reverse().join('');
  };
  
  const chainLengthReference = n => {
    
    let steps = 0;
    while(!isPalindrome(''+n)) {
      steps += 1;
      n += reverse(n);
    }
    return steps;
  }
  
  const shuffle = arr => arr.map(n => ({n:n, k:Math.random()})).sort((a,b)=> a.k - b.k).map(e => e.n);
  
  let palindromes = [];
  let validInputs = [];
  for(let n=1; n<=10000; ++n) {
    if(isPalindrome(''+n))
      palindromes.push(n);
    else if(!lyrchels.has(n))
      validInputs.push(n);
  }
  
  palindromes = shuffle(palindromes).slice(0,20);
  validInputs = shuffle(validInputs).slice(0,80);
  
  let inputs = shuffle([...palindromes, ...validInputs]);
  
  for(let input of inputs) {
    
    it(`n = ${input}`, () => {
      let expected = chainLengthReference(input);
      let actual = palindromeChainLength(input);
      assert.equal(actual, expected, `Invalid answer for n=${input}`);
    });
  }
});

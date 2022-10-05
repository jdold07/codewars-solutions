// 7 kyu - Counting Array Elements  [ ID: 5569b10074fe4a6715000054  (counting-array-elements) ]
// URL: https://www.codewars.com/kata/5569b10074fe4a6715000054
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Basic tests",function(){
it("Returns an empty hash when the array is empty",function(){
Test.assertSimilar(count([]),{})
})
  
it("Counts a single elements in the array",function(){
Test.assertSimilar(count(['a']),{ 'a': 1 })
})
  
it("Counts a more complex array",function(){
Test.assertSimilar(count(['a', 'a', 'b', 'b', 'b']), { 'a': 2, 'b': 3 })
Test.assertSimilar(count(['a', 'b', 'b', 'b', 'a']), { 'a': 2, 'b': 3 })
})
  
it("Counts any elements",function(){
Test.assertSimilar(count(["", 'a', true, 15, "b", "b"]),  {"15":1,"":1,"a":1,"true":1,"b":2})
})
})

describe("Random tests",function(){
base=["Ryoma Nagare","Hayato Jin","Musashi Tomoe","Benkei Kurama","Saotome-agase","Michiru Saotome"];

function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a)}

function solcount(array){
  res={};
  for (let i=0;i<array.length;i++){
    res[array[i]]=(res[array[i]]||0)+1;
  }
  return res;
}
for (let _=0;_<40;_++){
  let arr=[], arrlen=randint(0,25);
  for (let j=0;j<arrlen;j++){
    arr.push(base[randint(0,base.length-1)]);
  }
  it("Testing for ["+arr.join(", ")+"]",function(){
  Test.assertSimilar(count([].concat(arr)),solcount(arr),"It should work for random inputs too")
  })
}
})

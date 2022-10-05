// 8 kyu - Training JS #4:  Basic data types--Array  [ ID: 571effabb625ed9b0600107a  (training-js-number-4-basic-data-types-array) ]
// URL: https://www.codewars.com/kata/571effabb625ed9b0600107a
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
function getLength(arr){
    return arr.length
  }
  function getFirst(arr){
    return arr[0]
  }
  function getLast(arr){
    return arr[arr.length-1]
  }
  function pushElement(arr){
    var el=1;
    arr.push(el)
    return arr
  }
  function popElement(arr){
    return arr.slice(0,-1)
  }

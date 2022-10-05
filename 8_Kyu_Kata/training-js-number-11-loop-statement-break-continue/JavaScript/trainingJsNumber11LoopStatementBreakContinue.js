// [object Object] - Training JS #11: loop statement --break,continue  [ ID: 5721c189cdd71194c1000b9b  (training-js-number-11-loop-statement-break-continue) ]
// URL: https://www.codewars.com/kata/5721c189cdd71194c1000b9b
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
function grabDoll(dolls){
    const bag=[];
    for (i = 0; i < dolls.length && bag.length < 3 /* break */; i++){
      if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") bag.push(dolls[i]) // continue
    }
    return bag;
  }
